import { useCallback, useEffect, useRef, useState } from 'react'

const START_YEAR = 1947
const MONTHLY_UNTIL_YEAR = 1979
const END_YEAR = 2026
const PLAYBACK_STEP_MS = 350
const NOTE_VISIBLE_MS = 6000
const NOTE_WIDTH = 236
const NOTE_HEIGHT = 44
const ACCENT_COLOR = '#2f6fbf'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const LEAFLET_CSS_ID = 'leaflet-cdn-css'
const LEAFLET_JS_ID = 'leaflet-cdn-js'
const LEAFLET_CSS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
const LEAFLET_JS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
const LEAFLET_CSS_INTEGRITY = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
const LEAFLET_JS_INTEGRITY = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='

const MAP_BASE_TILE = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
const MAP_ATTRIBUTION = '&copy; OpenStreetMap contributors &copy; CARTO'

const EVENTS = [
  {
    id: 'bell',
    title: 'Bell Labs, 1947',
    shortNote: 'The first transistor is invented at Bell Labs.',
    lat: 40.6843,
    lon: -74.4019,
    zoom: 6,
    trigger: { year: 1947, month: 10 },
    popupHtml: `
      <div style="width:232px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color: #0f172a; line-height: 1.38;">
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Bardeen_Shockley_Brattain_1948.JPG"
          alt="Bardeen, Shockley, and Brattain at Bell Labs"
          style="display:block; width:100%; height:150px; object-fit:cover; border-radius:8px 8px 0 0;"
        />
        <div style="padding:8px 10px 10px;">
          <div style="font-size: 12.2px; font-weight: 700; margin-bottom: 4px;">Bell Labs, 1947</div>
          <div style="font-size: 11.8px;">
            Shockley, Bardeen, and Brattain drove the early transistor breakthrough era that launched modern electronics.
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'shockley-hotel',
    title: 'Chicago Hotel Scene, 1948',
    shortNote: 'Shockley sketches the junction-transistor concept during his Chicago hotel stay.',
    lat: 41.8781,
    lon: -87.6298,
    zoom: 6,
    trigger: { year: 1948, month: 5 },
    popupHtml: `
      <div style="width:232px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color: #0f172a; line-height: 1.38;">
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/US2569347-drawings-page-1.png"
          alt="Shockley junction-transistor patent figures"
          style="display:block; width:100%; height:150px; object-fit:cover; border-radius:8px 8px 0 0;"
        />
        <div style="padding:8px 10px 10px;">
          <div style="font-size: 12.2px; font-weight: 700; margin-bottom: 4px;">Chicago, 1948</div>
          <div style="font-size: 11.8px;">
            William Shockley develops the junction-transistor concept that made transistor manufacturing more practical at scale.
          </div>
        </div>
      </div>
    `,
  },
]

function buildTimePoints() {
  const points = []

  for (let year = START_YEAR; year <= MONTHLY_UNTIL_YEAR; year += 1) {
    for (let month = 0; month < 12; month += 1) {
      points.push({ year, month, label: `${MONTHS[month]} ${year}` })
    }
  }

  for (let year = MONTHLY_UNTIL_YEAR + 1; year <= END_YEAR; year += 1) {
    points.push({ year, month: null, label: String(year) })
  }

  return points
}

const TIME_POINTS = buildTimePoints()
const LAST_POINT_INDEX = TIME_POINTS.length - 1

function findPointIndex(year, month) {
  return TIME_POINTS.findIndex((point) => point.year === year && point.month === month)
}

const BELL_POINT_INDEX = findPointIndex(EVENTS[0].trigger.year, EVENTS[0].trigger.month)
const SHOCKLEY_POINT_INDEX = findPointIndex(EVENTS[1].trigger.year, EVENTS[1].trigger.month)

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function curvePath(start, end) {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const dist = Math.hypot(dx, dy) || 1
  const nx = -dy / dist
  const ny = dx / dist
  const lift = clamp(dist * 0.2, 36, 90)

  const c1x = start.x + dx * 0.33 + nx * lift
  const c1y = start.y + dy * 0.33 + ny * lift
  const c2x = start.x + dx * 0.66 + nx * lift
  const c2y = start.y + dy * 0.66 + ny * lift

  return `M ${start.x} ${start.y} C ${c1x} ${c1y} ${c2x} ${c2y} ${end.x} ${end.y}`
}

const MARKER_VISIBLE = { radius: 8, color: ACCENT_COLOR, weight: 2, fillColor: ACCENT_COLOR, fillOpacity: 0.95, opacity: 1 }
const MARKER_HIDDEN  = { radius: 0.1, color: ACCENT_COLOR, weight: 0, fillColor: ACCENT_COLOR, fillOpacity: 0, opacity: 0 }

function markerStyle(eventId, firstVisible, secondVisible) {
  if (eventId === 'bell') return firstVisible ? MARKER_VISIBLE : MARKER_HIDDEN
  return secondVisible ? MARKER_VISIBLE : MARKER_HIDDEN
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
  const [pointIndex, setPointIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [mapError, setMapError] = useState('')
  const [mapReady, setMapReady] = useState(false)
  const [routePathD, setRoutePathD] = useState('')
  const [curveVisible, setCurveVisible] = useState(false)
  const [noteState, setNoteState] = useState({
    visible: false,
    text: '',
    eventId: '',
    noteX: 0,
    noteY: 0,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  })

  const mapHostRef = useRef(null)
  const mapRef = useRef(null)
  const markersRef = useRef({})
  const hideNoteTimerRef = useRef(null)
  const curveTimerRef = useRef(null)
  const prevActiveEventRef = useRef(null)
  const prevRouteActiveRef = useRef(false)
  const hasZoomedOutRef = useRef(false)

  const currentPoint = TIME_POINTS[pointIndex]
  const activeEventIndex = pointIndex >= SHOCKLEY_POINT_INDEX ? 1 : 0
  const activeEvent = EVENTS[activeEventIndex]
  // Driven purely by event trigger indices — no hardcoded thresholds
  const firstDotVisible  = pointIndex >= BELL_POINT_INDEX
  const routeActive      = pointIndex > BELL_POINT_INDEX
  const secondDotVisible = pointIndex >= SHOCKLEY_POINT_INDEX

  const computeNoteGeometry = useCallback((event) => {
    const map = mapRef.current
    const mapEl = mapHostRef.current
    if (!map || !mapEl) return null

    const dot = map.latLngToContainerPoint([event.lat, event.lon])
    const mapW = mapEl.clientWidth
    const mapH = mapEl.clientHeight
    const gap = 16

    let noteX = dot.x + gap
    let noteY = dot.y - NOTE_HEIGHT * 0.62

    if (noteX + NOTE_WIDTH > mapW - 10) noteX = dot.x - NOTE_WIDTH - gap
    noteX = Math.max(10, Math.min(noteX, mapW - NOTE_WIDTH - 10))
    noteY = Math.max(10, Math.min(noteY, mapH - NOTE_HEIGHT - 10))

    const noteOnRight = noteX > dot.x
    const lineEndX = noteOnRight ? noteX : noteX + NOTE_WIDTH
    const lineEndY = noteY + NOTE_HEIGHT * 0.52

    return {
      noteX,
      noteY,
      x1: dot.x,
      y1: dot.y,
      x2: lineEndX,
      y2: lineEndY,
    }
  }, [])

  const showTransientNote = useCallback((event) => {
    const geometry = computeNoteGeometry(event)
    if (!geometry) return

    setNoteState({
      visible: true,
      text: event.shortNote,
      eventId: event.id,
      ...geometry,
    })

    if (hideNoteTimerRef.current) window.clearTimeout(hideNoteTimerRef.current)
    hideNoteTimerRef.current = window.setTimeout(() => {
      setNoteState((prev) => ({ ...prev, visible: false }))
    }, NOTE_VISIBLE_MS)
  }, [computeNoteGeometry])

  const hideTransientNote = useCallback(() => {
    if (hideNoteTimerRef.current) window.clearTimeout(hideNoteTimerRef.current)
    setNoteState((prev) => ({ ...prev, visible: false }))
  }, [])

  const updateRouteGeometry = useCallback(() => {
    const map = mapRef.current
    if (!map) return

    const start = map.latLngToContainerPoint([EVENTS[0].lat, EVENTS[0].lon])
    const end = map.latLngToContainerPoint([EVENTS[1].lat, EVENTS[1].lon])
    setRoutePathD(curvePath(start, end))

    setNoteState((prev) => {
      if (!prev.visible || !prev.eventId) return prev
      const event = EVENTS.find((item) => item.id === prev.eventId)
      if (!event) return prev
      const geometry = computeNoteGeometry(event)
      if (!geometry) return prev
      return { ...prev, ...geometry }
    })
  }, [computeNoteGeometry])

  useEffect(() => {
    let cancelled = false

    ensureLeafletLoaded()
      .then((L) => {
        if (cancelled || !mapHostRef.current) return

        const map = L.map(mapHostRef.current, {
          zoomControl: false,
          attributionControl: true,
          worldCopyJump: true,
          minZoom: 2,
          maxZoom: 8,
        }).setView([EVENTS[0].lat, EVENTS[0].lon], EVENTS[0].zoom)

        L.tileLayer(MAP_BASE_TILE, {
          attribution: MAP_ATTRIBUTION,
          maxZoom: 16,
          subdomains: 'abcd',
        }).addTo(map)

        const markers = {}

        EVENTS.forEach((event) => {
          const marker = L.circleMarker([event.lat, event.lon], markerStyle(event.id, firstDotVisible, secondDotVisible))
            .addTo(map)
            .bindPopup(event.popupHtml, {
              minWidth: 232,
              maxWidth: 232,
              autoClose: true,
              closeButton: true,
              className: 'journey-popup',
            })
            .on('click', () => {
              hideTransientNote()
            })

          markers[event.id] = marker
        })

        mapRef.current = map
        markersRef.current = markers

        const onResize = () => map.invalidateSize()
        const onMapMove = () => updateRouteGeometry()

        // Include moveend + zoomend so path recalculates after animations settle
        map.on('move zoom resize moveend zoomend', onMapMove)
        window.addEventListener('resize', onResize)
        window.addEventListener('resize', onMapMove)
        window.setTimeout(() => {
          map.invalidateSize()
          updateRouteGeometry()
        }, 160)

        map.__cleanup = () => {
          map.off('move zoom resize moveend zoomend', onMapMove)
          window.removeEventListener('resize', onResize)
          window.removeEventListener('resize', onMapMove)
        }

        setMapReady(true)
      })
      .catch(() => {
        if (cancelled) return
        setMapError('Map failed to load. Refresh after reconnecting.')
      })

    return () => {
      cancelled = true
      const map = mapRef.current
      if (map) {
        if (map.__cleanup) map.__cleanup()
        map.remove()
      }
      if (hideNoteTimerRef.current) window.clearTimeout(hideNoteTimerRef.current)
      if (curveTimerRef.current) window.clearTimeout(curveTimerRef.current)
      mapRef.current = null
      markersRef.current = {}
      setMapReady(false)
    }
  }, [])

  useEffect(() => {
    if (!mapReady) return

    const map = mapRef.current
    if (!map) return

    // Only act on boolean transitions — never spam flyTo/fitBounds every tick
    const wasActive = prevRouteActiveRef.current
    prevRouteActiveRef.current = routeActive

    if (!routeActive && wasActive) {
      // Scrubbed back — hide curve, cancel pending timer, fly back
      if (curveTimerRef.current) window.clearTimeout(curveTimerRef.current)
      setCurveVisible(false)
      hasZoomedOutRef.current = false
      map.flyTo([EVENTS[0].lat, EVENTS[0].lon], EVENTS[0].zoom, {
        duration: 0.9,
        easeLinearity: 0.25,
        animate: true,
      })
    } else if (routeActive && !wasActive && !hasZoomedOutRef.current) {
      // Route just activated — zoom out, then draw curve only after map settles
      hasZoomedOutRef.current = true
      map.fitBounds(
        [
          [EVENTS[0].lat, EVENTS[0].lon],
          [EVENTS[1].lat, EVENTS[1].lon],
        ],
        { padding: [80, 120], maxZoom: 5.5, animate: true, duration: 1.1 }
      )
      // Wait for fitBounds to finish (~1.2 s), then force a fresh geometry
      // calculation before making the curve visible — guarantees the path
      // endpoints are at the settled zoomed-out positions, not the old ones.
      if (curveTimerRef.current) window.clearTimeout(curveTimerRef.current)
      curveTimerRef.current = window.setTimeout(() => {
        updateRouteGeometry()
        setCurveVisible(true)
      }, 1250)
    }

    if (prevActiveEventRef.current !== activeEvent.id) {
      prevActiveEventRef.current = activeEvent.id
      showTransientNote(activeEvent)
    }
  }, [activeEvent, mapReady, routeActive, showTransientNote, updateRouteGeometry])

  useEffect(() => {
    const bellMarker = markersRef.current.bell
    const shockleyMarker = markersRef.current['shockley-hotel']

    if (bellMarker) {
      bellMarker.setStyle(markerStyle('bell', firstDotVisible, secondDotVisible))
    }

    if (shockleyMarker) {
      shockleyMarker.setStyle(markerStyle('shockley-hotel', firstDotVisible, secondDotVisible))
    }
  }, [activeEvent.id, firstDotVisible, secondDotVisible])

  useEffect(() => {
    if (!isPlaying) return undefined

    if (pointIndex >= LAST_POINT_INDEX) {
      setIsPlaying(false)
      return undefined
    }

    const timer = window.setTimeout(() => {
      setPointIndex((value) => Math.min(LAST_POINT_INDEX, value + 1))
    }, PLAYBACK_STEP_MS)

    return () => window.clearTimeout(timer)
  }, [isPlaying, pointIndex])

  return (
    <section className="journey-section" id="timeline">
      <div className="container">
        <div className="journey-step-layout">
          <div className="journey-step-left">
            <h2 className="journey-step-title">How One Device Scaled Into The Digital World</h2>
          </div>

          <div className="journey-divider" aria-hidden="true">|</div>

          <div className="journey-step-right">
            <div className="journey-map-stage">
              <div className="journey-map-year">{currentPoint.label}</div>

              <svg className="journey-map-overlay" aria-hidden="true">
                {routePathD && curveVisible && (
                  <path
                    d={routePathD}
                    fill="none"
                    className="journey-route-progress"
                    pathLength="1"
                  />
                )}
              </svg>

              {noteState.visible && (
                <div
                  className="journey-map-note"
                  style={{
                    left: `${noteState.noteX}px`,
                    top: `${noteState.noteY}px`,
                  }}
                >
                  {noteState.text}
                </div>
              )}

              <div
                ref={mapHostRef}
                className="journey-map-canvas"
                role="region"
                aria-label="World map timeline"
              />
            </div>

            <div className="journey-slider-wrap">
              <button
                type="button"
                className={`journey-play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={() => {
                  if (pointIndex >= LAST_POINT_INDEX) {
                    setPointIndex(0)
                    setIsPlaying(true)
                    return
                  }
                  setIsPlaying((value) => !value)
                }}
                aria-label={isPlaying ? 'Pause timeline playback' : 'Play timeline playback'}
              >
                {isPlaying ? '▮▮' : '▶'}
              </button>

              <input
                type="range"
                className="journey-year-slider"
                min="0"
                max={LAST_POINT_INDEX}
                step="1"
                value={pointIndex}
                onChange={(event) => {
                  setPointIndex(Number(event.target.value))
                }}
                aria-label="Timeline progress from 1947 to 2026"
              />
            </div>

            {mapError && <div className="journey-map-error">{mapError}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
