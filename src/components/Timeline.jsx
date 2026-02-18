import { useCallback, useEffect, useRef, useState } from 'react'
import { timelineEvents } from '../data/timeline.js'

const AUTO_MS = 9000

const EVENT_META = {
  1: { badge: 'Birth of the transistor' },
  2: { badge: 'Manufacturing breakthrough' },
  3: { badge: 'Material transition' },
  4: { badge: 'Integration era begins' },
  5: { badge: 'Modern switch is born' },
  6: { badge: 'Semiconductor light' },
  7: { badge: 'Low-power logic' },
  8: { badge: 'Memory at scale' },
  9: { badge: 'CPU on a chip' },
  10: { badge: 'Non-volatile storage' },
  11: { badge: 'Personal-computing boom' },
  12: { badge: 'Interconnect upgrade' },
  13: { badge: 'Leakage wall solved' },
  14: { badge: '3D transistor era' },
  15: { badge: 'Current frontier' },
}

const PLAIN_LANGUAGE = {
  1: 'The first transistor proved a tiny solid-state device could boost a weak signal.',
  2: 'A cleaner transistor design made mass production possible and accelerated adoption.',
  3: 'Switching from germanium to silicon made transistors rugged enough for daily products.',
  4: 'Multiple components were combined onto one chip, collapsing size and cost.',
  5: 'MOSFETs enabled dense, low-power digital logic and became the dominant transistor type.',
  6: 'The first visible LED turned semiconductor physics into practical light you could see.',
  7: 'CMOS drastically reduced idle power, which made modern portable electronics practical.',
  8: 'A one-transistor, one-capacitor memory cell made high-density RAM possible.',
  9: 'An entire CPU on one chip started the general-purpose microprocessor era.',
  10: 'Floating-gate transistors stored data without power, enabling flash memory.',
  11: 'Desktop chips reached performance levels that drove mainstream consumer computing.',
  12: 'Copper wiring reduced resistance, helping chips keep scaling without overheating.',
  13: 'High-k dielectrics and metal gates reduced leakage when old gate stacks hit limits.',
  14: 'FinFET moved channels into 3D fins for better control at smaller sizes.',
  15: 'Gate-all-around wraps the channel fully, extending scaling beyond FinFET.',
}

function compactTitle(title) {
  return title.replace(/^The\s+/, '').replace(/\s+/g, ' ').trim()
}

function firstSentence(text) {
  const sentence = text.match(/^[^.]+\./)
  return sentence ? sentence[0] : text
}

function SymbolLayer({ eventId, accent }) {
  switch (eventId) {
    case 1:
      return (
        <g>
          <ellipse cx="180" cy="198" rx="84" ry="14" fill="#020617" fillOpacity="0.45" />
          <rect x="104" y="130" width="152" height="48" rx="10" fill="#1e293b" stroke="#475569" />
          <line x1="124" y1="74" x2="154" y2="130" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
          <line x1="236" y1="130" x2="266" y2="74" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
          <circle cx="154" cy="130" r="6" fill={accent} />
          <circle cx="236" cy="130" r="6" fill={accent} />
          <line x1="176" y1="178" x2="176" y2="214" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="204" y1="178" x2="204" y2="214" stroke="#cbd5e1" strokeWidth="2.5" />
          <text x="180" y="60" textAnchor="middle" fill="#93c5fd" fontSize="13">Point-contact transistor</text>
        </g>
      )
    case 2:
      return (
        <g>
          <ellipse cx="180" cy="198" rx="88" ry="12" fill="#020617" fillOpacity="0.4" />
          <rect x="110" y="74" width="140" height="32" rx="8" fill="#1d4ed8" />
          <rect x="110" y="108" width="140" height="24" rx="6" fill="#93c5fd" />
          <rect x="110" y="134" width="140" height="32" rx="8" fill="#1d4ed8" />
          <text x="180" y="95" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="700">N</text>
          <text x="180" y="124" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="700">P</text>
          <text x="180" y="156" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="700">N</text>
          <line x1="78" y1="120" x2="110" y2="120" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="180" y1="52" x2="180" y2="74" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="180" y1="166" x2="180" y2="198" stroke="#cbd5e1" strokeWidth="2.5" />
          <text x="180" y="44" textAnchor="middle" fill="#bfdbfe" fontSize="13">Bipolar transistor</text>
        </g>
      )
    case 3:
      return (
        <g>
          <ellipse cx="180" cy="198" rx="88" ry="12" fill="#020617" fillOpacity="0.45" />
          <ellipse cx="180" cy="134" rx="86" ry="44" fill="#334155" stroke="#94a3b8" strokeWidth="2.2" />
          <ellipse cx="180" cy="128" rx="78" ry="38" fill="#475569" />
          <ellipse cx="160" cy="116" rx="20" ry="10" fill="#cbd5e1" fillOpacity="0.36" />
          <ellipse cx="180" cy="134" rx="56" ry="26" fill="none" stroke="#e2e8f0" strokeOpacity="0.35" />
          <text x="180" y="62" textAnchor="middle" fill="#cbd5e1" fontSize="13">Silicon wafer</text>
        </g>
      )
    case 4:
      return (
        <g>
          <rect x="108" y="68" width="144" height="112" rx="18" fill="#0b1324" stroke={accent} strokeWidth="2.2" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={`lt${i}`} x="96" y={82 + i * 15} width="10" height="7" rx="2" fill="#e2e8f0" />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={`rt${i}`} x="252" y={82 + i * 15} width="10" height="7" rx="2" fill="#e2e8f0" />
          ))}
          <rect x="128" y="88" width="104" height="72" rx="10" fill="#111827" />
          {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
            <rect key={`${r}${c}`} x={138 + r * 30} y={98 + c * 20} width="16" height="14" rx="3" fill="#1e3a5f" stroke="#7dd3fc" strokeOpacity="0.5" />
          )))}
          <text x="180" y="52" textAnchor="middle" fill="#bfdbfe" fontSize="13">Integrated circuit</text>
        </g>
      )
    case 5:
      return (
        <g>
          <ellipse cx="180" cy="202" rx="90" ry="12" fill="#020617" fillOpacity="0.42" />
          <rect x="92" y="154" width="176" height="30" rx="8" fill="#334155" />
          <rect x="92" y="126" width="44" height="28" rx="6" fill="#f59e0b" />
          <rect x="224" y="126" width="44" height="28" rx="6" fill="#f59e0b" />
          <rect x="144" y="114" width="72" height="10" rx="4" fill="#c4b5fd" />
          <rect x="138" y="84" width="84" height="30" rx="8" fill="#e2e8f0" />
          <path d="M 140 150 Q 180 161 220 150" stroke={accent} strokeWidth="3" fill="none" />
          <text x="180" y="64" textAnchor="middle" fill="#cbd5e1" fontSize="13">MOSFET gate control</text>
        </g>
      )
    case 6:
      return (
        <g>
          <ellipse cx="182" cy="201" rx="82" ry="14" fill="#020617" fillOpacity="0.48" />
          <rect x="146" y="62" width="72" height="100" rx="34" fill="#fef2f2" fillOpacity="0.86" stroke="#fecaca" strokeWidth="2.5" />
          <rect x="158" y="78" width="48" height="62" rx="22" fill="#fb7185" fillOpacity="0.9" />
          <rect x="156" y="140" width="52" height="15" rx="6" fill="#e2e8f0" />
          <line x1="168" y1="155" x2="168" y2="212" stroke="#cbd5e1" strokeWidth="3.2" />
          <line x1="196" y1="155" x2="196" y2="204" stroke="#94a3b8" strokeWidth="2.7" />
          <line x1="196" y1="204" x2="182" y2="204" stroke="#94a3b8" strokeWidth="2.7" />
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1={214 + i * 10}
              y1={96 - i * 18}
              x2={244 + i * 10}
              y2={72 - i * 18}
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
          <text x="182" y="48" textAnchor="middle" fill="#fda4af" fontSize="13">Visible-light LED</text>
        </g>
      )
    case 7:
      return (
        <g>
          <rect x="104" y="76" width="152" height="92" rx="14" fill="#0f172a" stroke="#94a3b8" />
          <rect x="120" y="92" width="120" height="24" rx="8" fill="#a78bfa" fillOpacity="0.85" />
          <rect x="120" y="128" width="120" height="24" rx="8" fill="#22d3ee" fillOpacity="0.85" />
          <line x1="136" y1="54" x2="136" y2="188" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="224" y1="54" x2="224" y2="188" stroke="#cbd5e1" strokeWidth="2.5" />
          <text x="180" y="47" textAnchor="middle" fill="#c4b5fd" fontSize="13">CMOS low-power logic</text>
          <text x="180" y="108" textAnchor="middle" fill="#111827" fontSize="11">PMOS</text>
          <text x="180" y="144" textAnchor="middle" fill="#083344" fontSize="11">NMOS</text>
        </g>
      )
    case 8:
      return (
        <g>
          <rect x="74" y="88" width="216" height="92" rx="14" fill="#1e293b" stroke="#60a5fa" strokeWidth="2" />
          <rect x="88" y="104" width="188" height="44" rx="8" fill="#0f172a" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={98 + i * 30} y="112" width="22" height="28" rx="4" fill="#1e3a5f" stroke="#93c5fd" strokeOpacity="0.5" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <rect key={`pin${i}`} x={86 + i * 19} y="180" width="12" height="8" rx="2" fill="#cbd5e1" />
          ))}
          <text x="182" y="74" textAnchor="middle" fill="#bfdbfe" fontSize="13">DRAM memory module</text>
          <text x="182" y="160" textAnchor="middle" fill="#e2e8f0" fontSize="12">Billions of tiny memory cells</text>
        </g>
      )
    case 9:
      return (
        <g>
          <rect x="108" y="66" width="144" height="112" rx="18" fill="#0f172a" stroke={accent} strokeWidth="2.3" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={`lp${i}`} x="95" y={78 + i * 14} width="12" height="8" rx="2" fill="#e2e8f0" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={`rp${i}`} x="252" y={78 + i * 14} width="12" height="8" rx="2" fill="#e2e8f0" />
          ))}
          <rect x="126" y="88" width="108" height="68" rx="10" fill="#111827" />
          <text x="180" y="120" textAnchor="middle" fill="#f8fafc" fontSize="24" fontWeight="700">4004</text>
          <text x="180" y="144" textAnchor="middle" fill="#7dd3fc" fontSize="12">First microprocessor</text>
        </g>
      )
    case 10:
      return (
        <g>
          <rect x="84" y="84" width="206" height="96" rx="14" fill="#111827" stroke="#fbbf24" strokeWidth="2.2" />
          <rect x="96" y="98" width="132" height="68" rx="10" fill="#1f2937" stroke="#c4b5fd" strokeOpacity="0.5" />
          <text x="162" y="134" textAnchor="middle" fill="#f8fafc" fontSize="18" fontWeight="700">FLASH</text>
          <rect x="228" y="114" width="50" height="36" rx="6" fill="#d1d5db" />
          <rect x="278" y="120" width="16" height="24" rx="2" fill="#e5e7eb" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={295 + i * 6} y={122 + i * 6} width="4" height="10" rx="1" fill="#9ca3af" />
          ))}
          <text x="188" y="70" textAnchor="middle" fill="#fde68a" fontSize="13">Flash storage</text>
        </g>
      )
    case 11:
      return (
        <g>
          <rect x="96" y="72" width="140" height="90" rx="12" fill="#0f172a" stroke="#94a3b8" />
          <rect x="108" y="84" width="116" height="62" rx="8" fill="#1e293b" />
          <rect x="128" y="162" width="76" height="8" rx="3" fill="#cbd5e1" />
          <rect x="248" y="88" width="30" height="88" rx="6" fill="#334155" />
          <circle cx="263" cy="102" r="4" fill="#7dd3fc" />
          <circle cx="263" cy="116" r="4" fill="#a5b4fc" />
          <text x="180" y="52" textAnchor="middle" fill="#bfdbfe" fontSize="13">Personal-computing era</text>
        </g>
      )
    case 12:
      return (
        <g>
          <rect x="80" y="68" width="204" height="128" rx="14" fill="#0f172a" stroke="#334155" />
          <path d="M 104 92 H 260" stroke="#b87333" strokeWidth="6" strokeLinecap="round" />
          <path d="M 104 130 H 192 V 170 H 260" stroke="#b87333" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M 104 160 H 176 V 106 H 232" stroke="#b87333" strokeWidth="6" fill="none" strokeLinecap="round" />
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx={112 + i * 36} cy={92} r="4" fill="#fdba74" />
          ))}
          <text x="182" y="56" textAnchor="middle" fill="#fdba74" fontSize="13">Copper interconnect wiring</text>
        </g>
      )
    case 13:
      return (
        <g>
          <ellipse cx="180" cy="198" rx="88" ry="12" fill="#020617" fillOpacity="0.45" />
          <rect x="94" y="156" width="172" height="26" rx="8" fill="#374151" />
          <rect x="108" y="136" width="144" height="12" rx="4" fill="#f59e0b" />
          <rect x="108" y="112" width="144" height="22" rx="8" fill="#7c3aed" />
          <rect x="102" y="82" width="156" height="28" rx="8" fill="#cbd5e1" />
          <circle cx="292" cy="116" r="16" fill="#ef4444" fillOpacity="0.92" />
          <line x1="292" y1="106" x2="292" y2="126" stroke="#fee2e2" strokeWidth="3" />
          <line x1="282" y1="116" x2="302" y2="116" stroke="#fee2e2" strokeWidth="3" />
          <text x="180" y="64" textAnchor="middle" fill="#c4b5fd" fontSize="13">High-k + metal gate</text>
        </g>
      )
    case 14:
      return (
        <g>
          <ellipse cx="180" cy="198" rx="88" ry="12" fill="#020617" fillOpacity="0.45" />
          <rect x="96" y="156" width="168" height="30" rx="8" fill="#312e81" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={132 + i * 34} y="92" width="18" height="92" rx="6" fill="#64748b" />
          ))}
          <rect x="118" y="78" width="108" height="14" rx="6" fill="#cbd5e1" />
          <rect x="118" y="92" width="12" height="58" rx="6" fill="#cbd5e1" />
          <rect x="214" y="92" width="12" height="58" rx="6" fill="#cbd5e1" />
          <text x="180" y="58" textAnchor="middle" fill="#7dd3fc" fontSize="13">FinFET 3D fins</text>
        </g>
      )
    case 15:
      return (
        <g>
          <ellipse cx="180" cy="198" rx="90" ry="12" fill="#020617" fillOpacity="0.45" />
          <rect x="102" y="78" width="156" height="108" rx="16" fill="#cbd5e1" fillOpacity="0.25" stroke="#cbd5e1" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x="124" y={100 + i * 25} width="112" height="14" rx="7" fill="#64748b" />
          ))}
          <rect x="90" y="90" width="20" height="82" rx="7" fill="#f59e0b" />
          <rect x="250" y="90" width="20" height="82" rx="7" fill="#f59e0b" />
          <text x="180" y="60" textAnchor="middle" fill="#93c5fd" fontSize="13">Gate-all-around</text>
        </g>
      )
    default:
      return null
  }
}

function TimelineGlyph({ event }) {
  const accent = event.color || '#22d3ee'
  const gradientId = `tlx-gradient-${event.id}`
  const gridId = `tlx-grid-${event.id}`

  return (
    <svg viewBox="0 0 360 240" className="tlx-glyph" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#071429" />
          <stop offset="56%" stopColor="#0d1e39" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.45" />
        </linearGradient>
        <pattern id={gridId} width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#7dd3fc" strokeOpacity="0.08" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="2" y="2" width="356" height="236" rx="24" fill={`url(#${gradientId})`} />
      <rect x="2" y="2" width="356" height="236" rx="24" fill={`url(#${gridId})`} />
      <rect x="28" y="20" width="304" height="200" rx="22" fill="#031022" fillOpacity="0.52" stroke={accent} strokeOpacity="0.55" />
      <SymbolLayer eventId={event.id} accent={accent} />
    </svg>
  )
}

export default function Timeline() {
  const [active, setActive] = useState(0)
  const [hoverPaused, setHoverPaused] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const trackRef = useRef(null)
  const intervalRef = useRef(null)

  const total = timelineEvents.length
  const paused = hoverPaused

  const goTo = useCallback((rawIndex) => {
    const next = ((rawIndex % total) + total) % total
    setActive(next)
    setAnimKey((k) => k + 1)

    const markerTarget = trackRef.current?.querySelector(`[data-index="${next}"]`)
    markerTarget?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [total])

  const scrollTrack = useCallback((direction) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({
      left: direction * 320,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current)
      return undefined
    }

    intervalRef.current = setInterval(() => goTo(active + 1), AUTO_MS)
    return () => clearInterval(intervalRef.current)
  }, [active, paused, goTo])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowRight') {
        goTo(active + 1)
      }
      if (event.key === 'ArrowLeft') {
        goTo(active - 1)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, goTo])

  const event = timelineEvents[active]
  const plainLanguage = PLAIN_LANGUAGE[event.id] || firstSentence(event.description)
  const meta = EVENT_META[event.id] || { badge: 'Milestone' }

  return (
    <section
      className="tlx-section"
      id="timeline"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div className="container">
        <header className="tlx-header">
          <span className="tlx-label">Timeline</span>
          <h2 className="tlx-heading">How One Device Scaled Into The Digital World</h2>
          <p className="tlx-subhead">
            Start at Bell Labs in 1947, then move through the breakthroughs that enabled modern
            computers, phones, AI hardware, and data centers.
          </p>
        </header>

        <div className="tlx-track-shell">
          <button
            className="tlx-track-arrow"
            type="button"
            aria-label="Scroll timeline left"
            onClick={() => scrollTrack(-1)}
          >
            ←
          </button>
          <div className="tlx-track" ref={trackRef} aria-label="Timeline milestones">
            {timelineEvents.map((item, index) => (
              <button
                key={item.id}
                data-index={index}
                className={`tlx-marker ${active === index ? 'active' : ''}`}
                style={{ '--item-color': item.color }}
                onClick={() => goTo(index)}
                aria-current={active === index ? 'step' : undefined}
              >
                <span className="tlx-marker-dot" />
                <span className="tlx-marker-year">{item.year}</span>
                <span className="tlx-marker-label">{compactTitle(item.title)}</span>
              </button>
            ))}
          </div>
          <button
            className="tlx-track-arrow"
            type="button"
            aria-label="Scroll timeline right"
            onClick={() => scrollTrack(1)}
          >
            →
          </button>
        </div>

        <article className="tlx-stage" key={animKey} style={{ '--accent': event.color }}>
          <div className="tlx-stage-top">
            <span className="tlx-badge tlx-badge-main">{meta.badge}</span>
          </div>

          <div className="tlx-stage-body">
            <div className="tlx-visual-pane">
              <TimelineGlyph event={event} />
            </div>

            <div className="tlx-copy-pane">
              <p className="tlx-date-inline">{event.date}</p>
              <h3 className="tlx-title">{event.title}</h3>
              <p className="tlx-source">{event.subtitle}</p>
              <p className="tlx-plain"><strong>In plain English:</strong> {plainLanguage}</p>
              <p className="tlx-detail">{event.description}</p>
              <blockquote className="tlx-impact">
                <strong>Why this mattered:</strong> {event.impact}
              </blockquote>
              <div className="tlx-refs">
                Sources:
                {event.refs.map((refNum) => (
                  <a key={refNum} href="#references">[{refNum}]</a>
                ))}
              </div>
            </div>
          </div>

          <div className="tlx-progress-track">
            <div
              className={`tlx-progress-fill ${paused ? 'paused' : ''}`}
              key={animKey}
              style={{ background: event.color, animationDuration: `${AUTO_MS}ms` }}
            />
          </div>
        </article>
      </div>
    </section>
  )
}
