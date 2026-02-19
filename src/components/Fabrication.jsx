import { useEffect, useRef, useState } from 'react'
import { fabricationFamilies, planarIntro, planarSteps } from '../data/fabrication.js'

const DEFAULT_ROTATION = { x: 24, y: -18 }

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

function WaferModel({ visual }) {
  const hasOxide = ['oxidation', 'spin', 'uv', 'develop', 'etch', 'implant', 'anneal', 'gate-oxide', 'gate', 'metal'].includes(visual)
  const resistFull = visual === 'spin' || visual === 'uv'
  const resistPattern = visual === 'develop' || visual === 'etch'
  const etchedWindows = ['etch', 'implant', 'anneal', 'gate-oxide', 'gate', 'metal'].includes(visual)
  const sourceDrain = ['implant', 'anneal', 'gate-oxide', 'gate', 'metal'].includes(visual)
  const fieldOxide = ['anneal', 'gate-oxide', 'gate', 'metal'].includes(visual)
  const gateOxide = ['gate-oxide', 'gate', 'metal'].includes(visual)
  const gate = ['gate', 'metal'].includes(visual)
  const metal = visual === 'metal'

  return (
    <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" className="fab-wafer-svg" aria-hidden="true">
      <defs>
        <radialGradient id="silicon-core" cx="38%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#f7fbff" />
          <stop offset="45%" stopColor="#d2dde9" />
          <stop offset="100%" stopColor="#a8b8c9" />
        </radialGradient>

        <radialGradient id="doping-field" cx="52%" cy="64%" r="72%">
          <stop offset="0%" stopColor="#93a8bf" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#4b5d74" stopOpacity="0.06" />
        </radialGradient>

        <linearGradient id="oxide-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dee6ff" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#b3c4ff" stopOpacity="0.72" />
        </linearGradient>

        <linearGradient id="implant-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f6ad73" />
          <stop offset="100%" stopColor="#e9782f" />
        </linearGradient>

        <filter id="wafer-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#20324a" floodOpacity="0.22" />
        </filter>

        <clipPath id="wafer-clip">
          <circle cx="180" cy="180" r="132" />
        </clipPath>

        <mask id="resist-openings">
          <rect width="360" height="360" fill="black" />
          <circle cx="180" cy="180" r="132" fill="white" />
          <circle cx="126" cy="184" r="25" fill="black" />
          <circle cx="234" cy="184" r="25" fill="black" />
        </mask>
      </defs>

      <ellipse cx="180" cy="280" rx="126" ry="16" fill="#2a4360" opacity="0.16" />

      <g filter="url(#wafer-shadow)">
        <circle cx="180" cy="180" r="132" fill="url(#silicon-core)" />
      </g>

      <g clipPath="url(#wafer-clip)">
        <circle cx="180" cy="180" r="132" fill="url(#doping-field)" />

        {hasOxide && (
          <circle cx="180" cy="180" r="130" fill="url(#oxide-glow)" opacity="0.3" />
        )}

        {fieldOxide && (
          <>
            <ellipse cx="121" cy="176" rx="40" ry="24" fill="#c3cbff" opacity="0.82" />
            <ellipse cx="239" cy="176" rx="40" ry="24" fill="#c3cbff" opacity="0.82" />
          </>
        )}

        {resistFull && (
          <circle cx="180" cy="180" r="132" fill="#55d8a7" opacity="0.32" />
        )}

        {resistPattern && (
          <circle cx="180" cy="180" r="132" fill="#55d8a7" opacity="0.36" mask="url(#resist-openings)" />
        )}

        {etchedWindows && (
          <>
            <circle cx="126" cy="184" r="20" fill="#8ea3b7" opacity="0.68" />
            <circle cx="234" cy="184" r="20" fill="#8ea3b7" opacity="0.68" />
          </>
        )}

        {sourceDrain && (
          <>
            <ellipse cx="126" cy="208" rx="33" ry="18" fill="url(#implant-grad)" opacity="0.9" />
            <ellipse cx="234" cy="208" rx="33" ry="18" fill="url(#implant-grad)" opacity="0.9" />
          </>
        )}

        {gateOxide && (
          <rect x="142" y="165" width="76" height="17" rx="8" fill="#e4e9ff" opacity="0.96" />
        )}

        {gate && (
          <rect x="140" y="148" width="80" height="18" rx="7" fill="#7a8796" opacity="0.98" />
        )}

        {metal && (
          <>
            <rect x="106" y="125" width="40" height="22" rx="8" fill="#e8eef8" />
            <rect x="160" y="112" width="40" height="24" rx="8" fill="#e8eef8" />
            <rect x="214" y="125" width="40" height="22" rx="8" fill="#e8eef8" />
            <path d="M126 147 L126 173" stroke="#f6fbff" strokeWidth="8" strokeLinecap="round" />
            <path d="M180 136 L180 160" stroke="#f6fbff" strokeWidth="8" strokeLinecap="round" />
            <path d="M234 147 L234 173" stroke="#f6fbff" strokeWidth="8" strokeLinecap="round" />
          </>
        )}
      </g>

      {hasOxide && (
        <circle cx="180" cy="180" r="128" fill="none" stroke="#b7cbef" strokeWidth="3" opacity="0.66" />
      )}

      <circle cx="180" cy="180" r="132" fill="none" stroke="#f4f8ff" strokeWidth="2" opacity="0.9" />
      <path d="M173 49 L187 49" stroke="#f4f8ff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />

      {visual === 'spin' && (
        <g className="fab-tool-spin">
          <circle cx="180" cy="180" r="150" fill="none" stroke="#6fd8b2" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M280 82 L294 88 L286 72" fill="#6fd8b2" opacity="0.88" />
          <path d="M80 278 L66 272 L74 288" fill="#6fd8b2" opacity="0.88" />
        </g>
      )}

      {visual === 'uv' && (
        <g className="fab-tool-rays">
          <rect x="84" y="52" width="192" height="18" rx="8" fill="#2f4965" opacity="0.9" />
          {[104, 126, 148, 170, 192, 214, 236, 258].map(x => (
            <line key={x} x1={x} y1="72" x2={x} y2="122" stroke="#89bfff" strokeWidth="2" strokeLinecap="round" />
          ))}
        </g>
      )}

      {visual === 'etch' && (
        <g className="fab-tool-etch">
          {[114, 126, 138, 222, 234, 246].map((x, index) => (
            <circle key={x} cx={x} cy={156 + (index % 2) * 12} r="5" fill="none" stroke="#f18e8e" strokeWidth="1.4" />
          ))}
        </g>
      )}

      {visual === 'implant' && (
        <g className="fab-tool-implant">
          {[114, 126, 138, 222, 234, 246].map(x => (
            <g key={x}>
              <line x1={x} y1="70" x2={x} y2="145" stroke="#ffc369" strokeWidth="2" strokeLinecap="round" />
              <path d={`M ${x - 4} 145 L ${x + 4} 145 L ${x} 154 Z`} fill="#ffc369" />
            </g>
          ))}
        </g>
      )}

      {visual === 'anneal' && (
        <g className="fab-tool-anneal">
          <path d="M120 106 C130 95 142 95 152 106 C162 117 174 117 184 106" fill="none" stroke="#ffba88" strokeWidth="3" strokeLinecap="round" />
          <path d="M176 96 C186 85 198 85 208 96 C218 107 230 107 240 96" fill="none" stroke="#ffba88" strokeWidth="3" strokeLinecap="round" />
          <path d="M142 126 C152 115 164 115 174 126 C184 137 196 137 206 126" fill="none" stroke="#ffba88" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {visual === 'metal' && (
        <g className="fab-tool-spark">
          <path d="M95 94 L101 106 L113 112 L101 118 L95 130 L89 118 L77 112 L89 106 Z" fill="#f6e3a2" opacity="0.9" />
          <path d="M252 96 L257 106 L267 111 L257 116 L252 126 L247 116 L237 111 L247 106 Z" fill="#f6e3a2" opacity="0.9" />
        </g>
      )}
    </svg>
  )
}

export default function Fabrication() {
  const [activeFamily, setActiveFamily] = useState('planar')
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [rotation, setRotation] = useState(DEFAULT_ROTATION)
  const [isDragging, setIsDragging] = useState(false)

  const headRef = useRef(null)
  const detailRef = useRef(null)
  const dragRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    baseX: DEFAULT_ROTATION.x,
    baseY: DEFAULT_ROTATION.y
  })

  const totalSteps = planarSteps.length
  const step = planarSteps[activeStep]
  const activeFamilyMeta = fabricationFamilies.find(family => family.id === activeFamily)

  useEffect(() => {
    const el = headRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (activeFamily !== 'planar' || !isPlaying) return undefined

    const timeout = window.setTimeout(() => {
      setActiveStep(prev => (prev + 1) % totalSteps)
    }, step.holdMs)

    return () => window.clearTimeout(timeout)
  }, [activeFamily, isPlaying, activeStep, totalSteps, step.holdMs])

  useEffect(() => {
    const onKey = event => {
      const target = event.target
      if (
        target instanceof HTMLElement &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      ) {
        return
      }

      if (activeFamily !== 'planar') return

      if (event.code === 'Space') {
        event.preventDefault()
        setIsPlaying(prev => !prev)
        return
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        setActiveStep(prev => (prev + 1) % totalSteps)
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        setActiveStep(prev => (prev - 1 + totalSteps) % totalSteps)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeFamily, totalSteps])

  const goToStep = nextStep => {
    setActiveStep(clamp(nextStep, 0, totalSteps - 1))

    if (window.innerWidth < 1024 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleFamilySelect = family => {
    setActiveFamily(family.id)

    if (family.id === 'planar') {
      setIsPlaying(true)
      return
    }

    setIsPlaying(false)
  }

  const handlePointerDown = event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      baseX: rotation.x,
      baseY: rotation.y
    }

    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = event => {
    if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) return

    const dx = event.clientX - dragRef.current.startX
    const dy = event.clientY - dragRef.current.startY

    setRotation({
      x: clamp(dragRef.current.baseX - dy * 0.16, -42, 42),
      y: clamp(dragRef.current.baseY + dx * 0.18, -70, 70)
    })
  }

  const endPointerDrag = event => {
    if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) return

    dragRef.current.active = false
    dragRef.current.pointerId = null
    setIsDragging(false)

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const resetRotation = () => {
    setRotation(DEFAULT_ROTATION)
  }

  const rotationStyle = {
    '--wafer-rot-x': `${rotation.x}deg`,
    '--wafer-rot-y': `${rotation.y}deg`
  }

  return (
    <section className="section fabrication-section" id="fabrication">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <div className="section-label">Fabrication</div>
          <h2>From Planar To FinFET To GAA</h2>
          <p>
            This block is now split into three fabrication families. We start with Planar,
            then expand to FinFET and GAA in the same viewer style.
          </p>
        </div>

        <div className="fab-family-switch" role="tablist" aria-label="Fabrication family selector">
          {fabricationFamilies.map(family => (
            <button
              key={family.id}
              type="button"
              role="tab"
              aria-selected={activeFamily === family.id}
              className={`fab-family-btn ${activeFamily === family.id ? 'active' : ''}`}
              onClick={() => handleFamilySelect(family)}
            >
              <span className="fab-family-label">{family.label}</span>
              <span className="fab-family-era">{family.era}</span>
            </button>
          ))}
        </div>

        {activeFamily !== 'planar' ? (
          <div className="fab-coming-card">
            <h3>{activeFamilyMeta?.label} Visualization Draft Is Next</h3>
            <p>
              The section framework is ready. We can now build the full step-by-step {activeFamilyMeta?.label}{' '}
              wafer animation in the same style as Planar.
            </p>
            <p className="fab-coming-blurb">{activeFamilyMeta?.blurb}</p>
          </div>
        ) : (
          <>
            <article className="fab-intro-card" aria-label="Planar process introduction">
              <div className="fab-intro-tag">Before the walkthrough</div>
              <h3>{planarIntro.title}</h3>
              <p>
                {planarIntro.text}
                {planarIntro.refs.map(ref => (
                  <sup key={`intro-${ref}`}>[{ref}]</sup>
                ))}
              </p>
            </article>

            <div className="fab-experience">
              <aside className="fab-step-rail" aria-label="Planar process steps">
                <ol className="fab-step-list">
                  {planarSteps.map((item, index) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`fab-step-item ${index === activeStep ? 'active' : ''}`}
                        onClick={() => goToStep(index)}
                        aria-current={index === activeStep ? 'step' : undefined}
                      >
                        <span className="fab-step-index">{String(index + 1).padStart(2, '0')}</span>
                        <span className="fab-step-copy">
                          <span className="fab-step-name">{item.title}</span>
                          <span className="fab-step-summary">{item.summary}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ol>
              </aside>

              <div className="fab-stage-column">
                <div
                  className={`fab-stage ${isDragging ? 'dragging' : ''}`}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={endPointerDrag}
                  onPointerCancel={endPointerDrag}
                  onDoubleClick={resetRotation}
                  aria-label={`Wafer view for ${step.title}`}
                >
                  <div className="fab-stage-top">
                    <span className="fab-stage-kicker">Planar MOSFET Build</span>
                    <span className="fab-stage-counter">Step {activeStep + 1} / {totalSteps}</span>
                  </div>

                  <div className="fab-wafer-world">
                    <div className="fab-wafer-orbit" style={rotationStyle}>
                      <div className={`fab-wafer-float ${isDragging ? 'is-dragging' : ''}`}>
                        <WaferModel visual={step.visual} />
                      </div>
                    </div>
                  </div>

                  <div className="fab-stage-bottom">
                    <span>{step.summary}</span>
                    <span className="fab-stage-hint">Drag to rotate | Double-click to reset</span>
                  </div>
                </div>

                <div className="fab-playbar" aria-label="Playback controls">
                  <button
                    type="button"
                    className={`fab-play-toggle ${isPlaying ? 'playing' : ''}`}
                    onClick={() => setIsPlaying(prev => !prev)}
                    aria-label={isPlaying ? 'Pause walkthrough' : 'Play walkthrough'}
                  >
                    {isPlaying ? '||' : '>'}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max={totalSteps - 1}
                    step="1"
                    value={activeStep}
                    onChange={event => goToStep(Number(event.target.value))}
                    className="fab-play-slider"
                    aria-label="Fabrication step progress"
                  />
                </div>
              </div>

              <article className="fab-detail-card" ref={detailRef}>
                <div className="fab-detail-chip">Current step</div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                <div className="fab-detail-refs" aria-label="References for this step">
                  {step.refs.map(ref => (
                    <sup key={`${step.id}-${ref}`}>[{ref}]</sup>
                  ))}
                </div>
              </article>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
