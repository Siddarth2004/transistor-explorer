import { useState, useEffect, useRef, useCallback } from 'react'
import { fabricationSteps, COLORS } from '../data/fabrication.js'

/* ─────────────────────────────────────────────────────────────────────────────
   WaferCrossSection
   Renders an animated SVG cross-section for the current fabrication step.
   Each layer fades in/out with CSS transitions so changes feel smooth.
───────────────────────────────────────────────────────────────────────────── */
function WaferCrossSection({ step }) {
  /* Build a map of all layers ever used, keyed by id.
     We always render every possible layer and control visibility via opacity,
     so CSS transitions animate gracefully between steps. */
  const allLayerIds = new Set()
  fabricationSteps.forEach(s => s.layers.forEach(l => allLayerIds.add(l.id)))

  // Map current step layers by id for O(1) lookup
  const currentMap = {}
  step.layers.forEach(l => { currentMap[l.id] = l })

  // Gather every layer definition (takes first occurrence as canonical geometry)
  const allLayers = {}
  fabricationSteps.forEach(s =>
    s.layers.forEach(l => { if (!allLayers[l.id]) allLayers[l.id] = l })
  )

  /* UV ray animation overlay for the exposure step */
  const showUV = step.animation === 'uvExpose'
  /* Ion implantation particles */
  const showIon = step.animation === 'implant'

  return (
    <svg
      viewBox="0 0 520 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Cross-section diagram: ${step.title}`}
      style={{ display: 'block', width: '100%' }}
    >
      {/* Background */}
      <rect width="520" height="200" fill={COLORS.bg} rx="10" />

      {/* Diagram label */}
      <text x="260" y="18" textAnchor="middle" fontSize="9" fill="#475569" fontFamily="monospace" letterSpacing="1">
        CROSS-SECTION VIEW — not to scale
      </text>

      {/* ── Render all known layers, animated via opacity ── */}
      {Object.values(allLayers).map(layer => {
        const active = !!currentMap[layer.id]
        // Use the active step's version if available (may override positions)
        const l = active ? currentMap[layer.id] : layer
        return (
          <g key={layer.id} style={{ transition: 'opacity 0.45s ease' }} opacity={active ? 1 : 0}>
            <rect
              x={l.x}
              y={l.y}
              width={l.w}
              height={l.h}
              fill={l.fill}
              rx={l.rx ?? 1}
              fillOpacity={l.opacity ?? 1}
            />
          </g>
        )
      })}

      {/* ── Labels for visible layers ── */}
      {step.layers.map(l => l.label && (
        <text
          key={`lbl-${l.id}`}
          x={l.labelX ?? l.x + l.w / 2}
          y={l.labelY ?? l.y + l.h / 2 + 4}
          textAnchor="middle"
          fontSize="9"
          fill={l.labelFill ?? '#f1f5f9'}
          fontFamily="monospace"
          fontWeight="600"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {l.label}
        </text>
      ))}

      {/* ── Dimension annotation: wafer width ── */}
      <line x1="30" y1="185" x2="490" y2="185" stroke="#1e1e40" strokeWidth="1" />
      <text x="260" y="197" textAnchor="middle" fontSize="8" fill="#334155" fontFamily="monospace">
        ← silicon wafer (not to scale) →
      </text>

      {/* ── UV exposure animation overlay ── */}
      {showUV && (
        <g>
          {/* Mask representation */}
          <rect x="185" y="28" width="150" height="8" fill="#1e293b" rx="2" opacity="0.9" />
          <rect x="30"  y="28" width="155" height="8" fill="#334155" rx="0" opacity="0.7" />
          <rect x="335" y="28" width="155" height="8" fill="#334155" rx="0" opacity="0.7" />
          <text x="260" y="23" textAnchor="middle" fontSize="8" fill={COLORS.uvRay} fontFamily="monospace">photomask</text>

          {/* UV rays — only through open window */}
          {[195,210,225,240,255,270,285,300,315,325].map((rx, i) => (
            <g key={i}>
              <line
                x1={rx} y1="36" x2={rx} y2="75"
                stroke={COLORS.uvRay}
                strokeWidth="1"
                opacity="0.6"
                strokeDasharray="3 3"
              >
                <animate attributeName="y1" values="32;36;32" dur="1.2s" repeatCount="indefinite" />
              </line>
            </g>
          ))}
          <text x="260" y="58" textAnchor="middle" fontSize="8" fill={COLORS.uvRay} fontFamily="monospace" opacity="0.8">UV →</text>
        </g>
      )}

      {/* ── Ion implantation animation overlay ── */}
      {showIon && (
        <g>
          {/* Ion beam arrows into windows */}
          {[60, 75, 90, 105, 120, 135, 350, 365, 380, 395, 410, 425].map((ix, i) => (
            <g key={i}>
              <line x1={ix} y1="45" x2={ix} y2="108" stroke={COLORS.ion} strokeWidth="1.2" opacity="0.7">
                <animate attributeName="y1" values="35;55;35" dur={`${0.8 + (i % 3) * 0.2}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${0.8 + (i % 3) * 0.2}s`} repeatCount="indefinite" />
              </line>
              <polygon
                points={`${ix},108 ${ix-3},98 ${ix+3},98`}
                fill={COLORS.ion}
                opacity="0.8"
              />
            </g>
          ))}
          <text x="85"  y="40" textAnchor="middle" fontSize="8" fill={COLORS.ion} fontFamily="monospace">P⁺ ions</text>
          <text x="390" y="40" textAnchor="middle" fontSize="8" fill={COLORS.ion} fontFamily="monospace">P⁺ ions</text>
        </g>
      )}

      {/* ── Spin animation hint for photoresist step ── */}
      {step.animation === 'spin' && step.id === 2 && (
        <g>
          <text x="480" y="72" textAnchor="end" fontSize="8" fill={COLORS.photoresist} fontFamily="monospace" opacity="0.7">
            ↻ spinning
          </text>
          <text x="480" y="82" textAnchor="end" fontSize="8" fill={COLORS.photoresist} fontFamily="monospace" opacity="0.5">
            ~3000 RPM
          </text>
        </g>
      )}

      {/* ── Etch bubble animation for HF step ── */}
      {step.animation === 'etch' && (
        <g>
          {[200, 220, 240, 260, 280, 300, 320].map((bx, i) => (
            <circle key={i} cx={bx} cy={100} r="3" fill="none" stroke="#f87171" strokeWidth="1" opacity="0.6">
              <animate attributeName="cy" values={`${100};${85};${100}`} dur={`${1 + i * 0.15}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.1;0.7;0.1" dur={`${1 + i * 0.15}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <text x="260" y="70" textAnchor="middle" fontSize="8" fill="#f87171" fontFamily="monospace">HF etch ↑</text>
        </g>
      )}

      {/* ── Oxidation flame/glow ── */}
      {step.animation === 'oxidize' && (
        <g opacity="0.5">
          <text x="40" y="88" fontSize="8" fill="#a78bfa" fontFamily="monospace">900–1100 °C O₂</text>
          <line x1="30" y1="93" x2="490" y2="93" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
        </g>
      )}
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Fabrication Section
───────────────────────────────────────────────────────────────────────────── */
export default function Fabrication() {
  const [activeStep, setActiveStep] = useState(0)
  const detailRef = useRef(null)
  const headRef   = useRef(null)

  const step = fabricationSteps[activeStep]
  const total = fabricationSteps.length

  const goTo = useCallback((idx) => {
    setActiveStep(Math.max(0, Math.min(total - 1, idx)))
    // On mobile, scroll detail into view
    if (window.innerWidth < 900 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [total])

  /* scroll-reveal on section head */
  useEffect(() => {
    const el = headRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  /* keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(activeStep + 1)
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(activeStep - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeStep, goTo])

  return (
    <section className="section section-alt" id="fabrication">
      <div className="container">

        {/* Section header */}
        <div className="section-head reveal" ref={headRef}>
          <div className="section-label">Fabrication</div>
          <h2>How a transistor is made</h2>
          <p>
            The planar process — the same fundamental approach used from the 1960s through today's
            multi-billion-dollar fabs. Each step builds on the last, nanometer by nanometer.
            Use the steps on the left (or arrow keys) to walk through the process.
          </p>
        </div>

        <div className="fab-shell">

          {/* ── Left: step navigator ── */}
          <nav className="fab-steps-nav" aria-label="Fabrication steps">
            <ul className="fab-steps-list">
              {fabricationSteps.map((s, i) => (
                <li key={s.id}>
                  <button
                    className={`fab-step-btn ${i === activeStep ? 'active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-current={i === activeStep ? 'step' : undefined}
                  >
                    <span className="fab-step-num">{i + 1}</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Right: detail panel ── */}
          <div className="fab-detail" ref={detailRef}>

            {/* Progress bar */}
            <div className="fab-progress" aria-hidden="true">
              {fabricationSteps.map((_, i) => (
                <div
                  key={i}
                  className={`fab-progress-dot ${i < activeStep ? 'done' : i === activeStep ? 'active' : ''}`}
                />
              ))}
            </div>

            {/* SVG visualisation */}
            <div className="fab-visual">
              <WaferCrossSection step={step} />
            </div>

            {/* Text */}
            <div className="fab-detail-subtitle">Step {activeStep + 1} of {total}</div>
            <h3 className="fab-detail-title">{step.title}</h3>

            <p className="fab-detail-desc">{step.description}</p>

            <div className="fab-tech-note">
              <strong>Technical note — </strong>{step.techNote}
              {step.refs.map(r => <sup key={r}>[{r}]</sup>)}
            </div>

            {/* Navigation buttons */}
            <div className="fab-nav-btns">
              <button
                className="fab-btn"
                onClick={() => goTo(activeStep - 1)}
                disabled={activeStep === 0}
                aria-label="Previous step"
              >
                ← Previous
              </button>
              <button
                className="fab-btn primary"
                onClick={() => goTo(activeStep + 1)}
                disabled={activeStep === total - 1}
                aria-label="Next step"
              >
                Next step →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
