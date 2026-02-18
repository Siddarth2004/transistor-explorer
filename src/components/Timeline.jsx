import { useEffect, useRef, useState } from 'react'

const YEAR_MIN = 1950
const YEAR_MAX = 2026
const PLAYBACK_STEP_MS = 220

const LEAFLET_CSS_ID = 'leaflet-cdn-css'
const LEAFLET_JS_ID = 'leaflet-cdn-js'
const LEAFLET_CSS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
const LEAFLET_JS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
const LEAFLET_CSS_INTEGRITY = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
const LEAFLET_JS_INTEGRITY = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='

const MAP_BASE_TILE = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
const MAP_ATTRIBUTION = '&copy; OpenStreetMap contributors &copy; CARTO'

const KEYFRAMES = [
  { year: 1950, lat: 39.5, lon: -98.35, zoom: 4.2 },
  { year: 1968, lat: 37.4, lon: -122.1, zoom: 5.8 },
  { year: 1985, lat: 38.0, lon: -96.0, zoom: 3.7 },
  { year: 2005, lat: 31.0, lon: 20.0, zoom: 2.6 },
  { year: 2026, lat: 27.0, lon: 35.0, zoom: 2.3 },
]

function interpolateView(year) {
  if (year <= KEYFRAMES[0].year) return KEYFRAMES[0]
  if (year >= KEYFRAMES[KEYFRAMES.length - 1].year) return KEYFRAMES[KEYFRAMES.length - 1]

  for (let i = 0; i < KEYFRAMES.length - 1; i += 1) {
    const a = KEYFRAMES[i]
    const b = KEYFRAMES[i + 1]
    if (year >= a.year && year <= b.year) {
      const t = (year - a.year) / (b.year - a.year)
      return {
        year,
        lat: a.lat + (b.lat - a.lat) * t,
        lon: a.lon + (b.lon - a.lon) * t,
        zoom: a.zoom + (b.zoom - a.zoom) * t,
      }
    }
  }

  return KEYFRAMES[0]
}

function ensureLeafletLoaded() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Leaflet is only available in browser context'))
      return
    }

    if (window.L) {
      resolve(window.L)
      return
    }

    if (!document.getElementById(LEAFLET_CSS_ID)) {
      const link = document.createElement('link')
      link.id = LEAFLET_CSS_ID
      link.rel = 'stylesheet'
      link.href = LEAFLET_CSS_URL
      link.integrity = LEAFLET_CSS_INTEGRITY
      link.crossOrigin = ''
      document.head.appendChild(link)
    }

    const existingScript = document.getElementById(LEAFLET_JS_ID)
    if (existingScript) {
      existingScript.addEventListener(
        'load',
        () => {
          if (window.L) resolve(window.L)
          else reject(new Error('Leaflet loaded but unavailable on window'))
        },
        { once: true }
      )
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Leaflet')), {
        once: true,
      })
      return
    }

    const script = document.createElement('script')
    script.id = LEAFLET_JS_ID
    script.src = LEAFLET_JS_URL
    script.integrity = LEAFLET_JS_INTEGRITY
    script.crossOrigin = ''
    script.async = true
    script.onload = () => {
      if (window.L) resolve(window.L)
      else reject(new Error('Leaflet loaded but unavailable on window'))
    }
    script.onerror = () => reject(new Error('Failed to load Leaflet'))
    document.body.appendChild(script)
  })
}

export default function Timeline() {
  const [year, setYear] = useState(YEAR_MIN)
  const [isPlaying, setIsPlaying] = useState(false)
  const [mapError, setMapError] = useState('')
  const mapHostRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    ensureLeafletLoaded()
      .then((L) => {
        if (cancelled || !mapHostRef.current) return

        const start = interpolateView(YEAR_MIN)

        const map = L.map(mapHostRef.current, {
          zoomControl: false,
          attributionControl: true,
          worldCopyJump: true,
          minZoom: 2,
          maxZoom: 8,
        }).setView([start.lat, start.lon], start.zoom)

        L.tileLayer(MAP_BASE_TILE, {
          attribution: MAP_ATTRIBUTION,
          maxZoom: 16,
          subdomains: 'abcd',
        }).addTo(map)

        mapRef.current = map

        const onResize = () => map.invalidateSize()
        window.addEventListener('resize', onResize)
        window.setTimeout(() => map.invalidateSize(), 120)

        mapRef.current.__onResize = onResize
      })
      .catch(() => {
        if (cancelled) return
        setMapError('Map failed to load. Refresh after reconnecting.')
      })

    return () => {
      cancelled = true
      const map = mapRef.current
      if (map) {
        if (map.__onResize) window.removeEventListener('resize', map.__onResize)
        map.remove()
      }
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    const next = interpolateView(year)
    map.flyTo([next.lat, next.lon], next.zoom, {
      duration: isPlaying ? 0.24 : 0.55,
      easeLinearity: 0.2,
      animate: true,
    })
  }, [year, isPlaying])

  useEffect(() => {
    if (!isPlaying) return undefined

    if (year >= YEAR_MAX) {
      setIsPlaying(false)
      return undefined
    }

    const timer = window.setTimeout(() => {
      setYear((value) => Math.min(YEAR_MAX, value + 1))
    }, PLAYBACK_STEP_MS)

    return () => window.clearTimeout(timer)
  }, [isPlaying, year])

  return (
    <section className="journey-section" id="timeline">
      <div className="container">
        <div className="journey-step-layout">
          <div className="journey-step-left">
            <h2 className="journey-step-title">How One Device Scaled Into The Digital World</h2>
          </div>

          <div className="journey-divider" aria-hidden="true">|</div>

          <div className="journey-step-right">
            <div className="journey-map-year">{year}</div>

            <div
              ref={mapHostRef}
              className="journey-map-canvas"
              role="region"
              aria-label="World map timeline"
            />

            <div className="journey-slider-wrap">
              <button
                type="button"
                className={`journey-play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={() => {
                  if (year >= YEAR_MAX) setYear(YEAR_MIN)
                  setIsPlaying((value) => !value)
                }}
                aria-label={isPlaying ? 'Pause timeline playback' : 'Play timeline playback'}
              >
                {isPlaying ? '▮▮' : '▶'}
              </button>

              <input
                type="range"
                className="journey-year-slider"
                min={YEAR_MIN}
                max={YEAR_MAX}
                step="1"
                value={year}
                onChange={(event) => {
                  setIsPlaying(false)
                  setYear(Number(event.target.value))
                }}
                aria-label="Year slider from 1950 to 2026"
              />
            </div>

            {mapError && <div className="journey-map-error">{mapError}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
