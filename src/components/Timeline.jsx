import { useState, useEffect, useRef, useCallback } from 'react'
import { timelineEvents } from '../data/timeline.js'

const AUTO_MS = 7500

/* ─────────────────────────────────────────────────────────────────────────────
   Device Renderings
   Technical cross-sections / schematics for each milestone.
   All share viewBox="0 0 240 170", consistent color palette.
───────────────────────────────────────────────────────────────────────────── */
const BG   = '#0d0d20'
const SI   = '#475569'   // silicon / germanium body
const NDOP = '#fb923c'   // n-type doped region
const PDOP = '#60a5fa'   // p-type doped region
const OX   = '#c4b5fd'   // SiO2 oxide
const MET  = '#cbd5e1'   // metal contacts/gate
const COP  = '#b87333'   // copper
const FLT  = '#fbbf24'   // floating gate / trapped charge
const TXT  = '#f8fafc'   // label text
const DIM  = '#64748b'   // dimmed / secondary

function Label({ x, y, children, anchor = 'middle', size = 9, fill = TXT, ...rest }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fill={fill}
      fontFamily="monospace" fontWeight="600" {...rest}>
      {children}
    </text>
  )
}

function DeviceRendering({ id }) {
  const W = 240, H = 170
  const wrap = (inner) => (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', width: '100%', maxHeight: 170 }}>
      <rect width={W} height={H} fill={BG} rx="10" />
      {inner}
    </svg>
  )

  switch (id) {

    /* ── 1. Point-contact transistor ────────────────────────────────── */
    case 1: return wrap(<>
      {/* Germanium block */}
      <rect x="40" y="90" width="160" height="55" rx="4" fill={SI} />
      <Label x="120" y="123" fill={TXT}>Germanium crystal</Label>
      {/* Base contact bottom */}
      <rect x="95" y="145" width="50" height="8" rx="2" fill={MET} />
      <line x1="120" y1="153" x2="120" y2="165" stroke={MET} strokeWidth="2"/>
      <Label x="120" y="165" fill={DIM} size={8}>Base</Label>
      {/* Wire 1 — angled left */}
      <line x1="90" y1="90" x2="76" y2="40" stroke={MET} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="90" cy="90" r="5" fill={NDOP} />
      <line x1="76" y1="20" x2="76" y2="40" stroke={MET} strokeWidth="2"/>
      <Label x="54" y="28" fill={DIM} size={8}>Contact 1</Label>
      {/* Wire 2 — angled right */}
      <line x1="150" y1="90" x2="164" y2="40" stroke={MET} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="150" cy="90" r="5" fill={NDOP} />
      <line x1="164" y1="20" x2="164" y2="40" stroke={MET} strokeWidth="2"/>
      <Label x="192" y="28" fill={DIM} size={8}>Contact 2</Label>
      {/* 50μm callout */}
      <line x1="90" y1="80" x2="150" y2="80" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 2"/>
      <Label x="120" y="76" fill="#6366f1" size={7}>50 μm</Label>
      <Label x="120" y="12" fill={DIM} size={8}>POINT-CONTACT TRANSISTOR  ·  1947</Label>
    </>)

    /* ── 2. Bipolar Junction Transistor ──────────────────────────────── */
    case 2: return wrap(<>
      {/* N collector */}
      <rect x="50" y="20" width="140" height="38" rx="3" fill={NDOP} fillOpacity=".85" />
      <Label x="120" y="44" fill="#fff">N  —  Collector</Label>
      {/* P base */}
      <rect x="50" y="60" width="140" height="24" rx="0" fill={PDOP} fillOpacity=".7" />
      <Label x="120" y="76" fill="#fff">P  —  Base</Label>
      {/* N emitter */}
      <rect x="50" y="86" width="140" height="38" rx="3" fill={NDOP} fillOpacity=".85" />
      <Label x="120" y="110" fill="#fff">N  —  Emitter</Label>
      {/* Terminals */}
      <line x1="120" y1="20" x2="120" y2="8"  stroke={MET} strokeWidth="2.5" />
      <Label x="120" y="6" fill={MET} size={8}>C</Label>
      <line x1="20"  y1="72" x2="50" y2="72" stroke={MET} strokeWidth="2.5" />
      <Label x="12" y="76" fill={MET} size={8}>B</Label>
      <line x1="120" y1="124" x2="120" y2="140" stroke={MET} strokeWidth="2.5" />
      <Label x="120" y="152" fill={MET} size={8}>E</Label>
      {/* NPN label */}
      <Label x="205" y="56" fill={NDOP} size={8} anchor="end">N·P·N</Label>
      <Label x="120" y="165" fill={DIM} size={8}>BIPOLAR JUNCTION TRANSISTOR  ·  1948</Label>
    </>)

    /* ── 3. Silicon transistor ───────────────────────────────────────── */
    case 3: return wrap(<>
      {/* NPN like #2 but silicon colored + crystal lattice dots */}
      <rect x="50" y="20" width="140" height="38" rx="3" fill="#0f766e" fillOpacity=".8" />
      <rect x="50" y="60" width="140" height="24" rx="0" fill={PDOP} fillOpacity=".6" />
      <rect x="50" y="86" width="140" height="38" rx="3" fill="#0f766e" fillOpacity=".8" />
      {/* Lattice dots inside */}
      {[0,1,2,3].map(i => [0,1,2].map(j => (
        <circle key={`${i}${j}`} cx={65+i*30} cy={33+j*43} r="2" fill="#14b8a6" fillOpacity=".5" />
      )))}
      <Label x="120" y="44"  fill="#fff">N  (Silicon)</Label>
      <Label x="120" y="76"  fill="#fff">P  (Silicon)</Label>
      <Label x="120" y="110" fill="#fff">N  (Silicon)</Label>
      {/* Terminals */}
      <line x1="120" y1="20"  x2="120" y2="8"   stroke={MET} strokeWidth="2.5" />
      <line x1="20"  y1="72"  x2="50"  y2="72"  stroke={MET} strokeWidth="2.5" />
      <line x1="120" y1="124" x2="120" y2="140" stroke={MET} strokeWidth="2.5" />
      <Label x="120" y="6"   fill={MET} size={8}>C</Label>
      <Label x="12"  y="76"  fill={MET} size={8}>B</Label>
      <Label x="120" y="152" fill={MET} size={8}>E</Label>
      {/* Temp comparison */}
      <rect x="160" y="130" width="66" height="28" rx="4" fill="#082f2f" />
      <Label x="193" y="142" fill="#2dd4bf" size={8}>Ge: fails &gt;75°C</Label>
      <Label x="193" y="153" fill="#5eead4" size={8}>Si: works &gt;150°C</Label>
      <Label x="120" y="168" fill={DIM} size={8}>SILICON TRANSISTOR  ·  1954</Label>
    </>)

    /* ── 4. Integrated circuit ───────────────────────────────────────── */
    case 4: return wrap(<>
      {/* Chip boundary */}
      <rect x="25" y="18" width="190" height="130" rx="4" fill="#0a1628" stroke="#10b981" strokeWidth="1.5" />
      {/* Bond pads */}
      {[0,1,2].map(i => <rect key={`t${i}`} x={55+i*50} y="18" width="16" height="8" rx="1" fill={MET} />)}
      {[0,1,2].map(i => <rect key={`b${i}`} x={55+i*50} y="140" width="16" height="8" rx="1" fill={MET} />)}
      {[0,1].map(i => <rect key={`l${i}`} x="25" y={50+i*50} width="8" height="16" rx="1" fill={MET} />)}
      {[0,1].map(i => <rect key={`r${i}`} x="207" y={50+i*50} width="8" height="16" rx="1" fill={MET} />)}
      {/* Transistors (simple blocks) */}
      {[[45,45],[95,45],[45,95],[95,95],[145,70]].map(([x,y],i) => (
        <g key={i}>
          <rect x={x} y={y} width="32" height="32" rx="2" fill="#1e3a2e" stroke="#10b981" strokeWidth="1" />
          <text x={x+16} y={y+20} textAnchor="middle" fontSize="9" fill="#10b981" fontFamily="monospace">T{i+1}</text>
        </g>
      ))}
      {/* Metal traces */}
      <polyline points="61,77 82,77 82,61" stroke="#10b981" strokeWidth="1" fill="none" strokeOpacity=".7"/>
      <polyline points="111,77 127,77 127,86" stroke="#10b981" strokeWidth="1" fill="none" strokeOpacity=".7"/>
      <polyline points="61,127 82,127 82,111" stroke="#10b981" strokeWidth="1" fill="none" strokeOpacity=".7"/>
      <polyline points="111,127 145,127 145,102" stroke="#10b981" strokeWidth="1" fill="none" strokeOpacity=".7"/>
      <Label x="120" y="12" fill="#10b981" size={8}>INTEGRATED CIRCUIT  ·  1958</Label>
      <Label x="120" y="163" fill={DIM} size={8}>5 transistors · single Si die · no external wires</Label>
    </>)

    /* ── 5. MOSFET cross-section ─────────────────────────────────────── */
    case 5: return wrap(<>
      {/* p-Si substrate */}
      <rect x="20" y="110" width="200" height="45" rx="3" fill={SI} />
      <Label x="120" y="138" fill={TXT}>p-type Silicon</Label>
      {/* n+ source & drain */}
      <rect x="20"  y="90" width="65" height="20" rx="2" fill={NDOP} />
      <rect x="155" y="90" width="65" height="20" rx="2" fill={NDOP} />
      <Label x="52"  y="103" fill="#fff" size={8}>n⁺ Source</Label>
      <Label x="187" y="103" fill="#fff" size={8}>n⁺ Drain</Label>
      {/* Gate oxide */}
      <rect x="85" y="84" width="70" height="8" rx="1" fill={OX} />
      <Label x="120" y="82" fill={OX} size={7}>SiO₂  gate oxide</Label>
      {/* Gate */}
      <rect x="80" y="64" width="80" height="20" rx="2" fill={MET} />
      <Label x="120" y="78" fill="#0f0f20" size={9}>Gate</Label>
      {/* Terminals */}
      <line x1="52"  y1="90" x2="52"  y2="52" stroke={MET} strokeWidth="2"/>
      <line x1="120" y1="64" x2="120" y2="40" stroke={MET} strokeWidth="2"/>
      <line x1="187" y1="90" x2="187" y2="52" stroke={MET} strokeWidth="2"/>
      <Label x="52"  y="46" fill={MET} size={9}>S</Label>
      <Label x="120" y="34" fill={MET} size={9}>G</Label>
      <Label x="187" y="46" fill={MET} size={9}>D</Label>
      {/* Channel arrow */}
      <path d="M 85 100 Q 120 106 155 100" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="3 2"/>
      <Label x="120" y="118" fill="#f59e0b" size={7}>channel</Label>
      <Label x="120" y="165" fill={DIM} size={8}>MOSFET CROSS-SECTION  ·  1959</Label>
    </>)

    /* ── 6. LED — P-N junction with photon emission ───────────────────── */
    case 6: return wrap(<>
      {/* P region */}
      <rect x="20" y="30" width="90" height="110" rx="4" fill={PDOP} fillOpacity=".5" />
      <Label x="65" y="90" fill={TXT}>P-type</Label>
      <Label x="65" y="103" fill={TXT} size={8}>GaAsP</Label>
      {/* N region */}
      <rect x="110" y="30" width="90" height="110" rx="4" fill={NDOP} fillOpacity=".5" />
      <Label x="155" y="90" fill={TXT}>N-type</Label>
      <Label x="155" y="103" fill={TXT} size={8}>GaAsP</Label>
      {/* Junction line */}
      <line x1="110" y1="30" x2="110" y2="140" stroke="#ef4444" strokeWidth="2" />
      {/* Photons emitting from junction */}
      {[0,1,2,3,4].map(i => {
        const angle = -60 + i * 30
        const rad = angle * Math.PI / 180
        const len = 28
        return (
          <g key={i}>
            <line
              x1={110} y1={55 + i * 18}
              x2={110 + Math.cos(rad) * len} y2={55 + i * 18 + Math.sin(rad) * len}
              stroke="#fde68a" strokeWidth="2" strokeLinecap="round"
            />
            <circle cx={110 + Math.cos(rad) * (len+4)} cy={55 + i * 18 + Math.sin(rad) * (len+4)} r="2.5" fill="#fde68a" />
          </g>
        )
      })}
      {/* Terminals */}
      <rect x="20"  y="22" width="90" height="8" rx="2" fill={MET} />
      <rect x="110" y="22" width="90" height="8" rx="2" fill={MET} />
      <rect x="20"  y="140" width="90" height="8" rx="2" fill={MET} />
      <rect x="110" y="140" width="90" height="8" rx="2" fill={MET} />
      <Label x="120" y="162" fill="#fde68a" size={8}>hν  photon emission  ·  visible red  λ≈620nm</Label>
      <Label x="120" y="12" fill={DIM} size={8}>LED CROSS-SECTION  ·  1962</Label>
    </>)

    /* ── 7. CMOS — paired NMOS + PMOS ───────────────────────────────── */
    case 7: return wrap(<>
      {/* VDD rail */}
      <line x1="20" y1="20" x2="220" y2="20" stroke="#ef4444" strokeWidth="2"/>
      <Label x="12" y="24" fill="#ef4444" size={8}>V+</Label>
      {/* GND rail */}
      <line x1="20" y1="155" x2="220" y2="155" stroke="#60a5fa" strokeWidth="2"/>
      <Label x="12" y="159" fill="#60a5fa" size={8}>0V</Label>
      {/* PMOS (top) — p-channel in n-well */}
      <rect x="60" y="28" width="120" height="50" rx="3" fill="#1e1e3f" stroke="#a78bfa" strokeWidth="1"/>
      <rect x="75"  y="38" width="30" height="30" rx="2" fill={PDOP} fillOpacity=".7"/>
      <rect x="155" y="38" width="30" height="30" rx="2" fill={PDOP} fillOpacity=".7"/>
      <rect x="110" y="35" width="30" height="10" rx="1" fill={MET} fillOpacity=".6"/>
      <Label x="120" y="27" fill="#a78bfa" size={8}>PMOS  (p-channel, n-well)</Label>
      <line x1="90"  y1="28" x2="90"  y2="20" stroke={MET} strokeWidth="1.5"/>
      <line x1="170" y1="28" x2="170" y2="20" stroke={MET} strokeWidth="1.5"/>
      {/* NMOS (bottom) */}
      <rect x="60" y="97" width="120" height="50" rx="3" fill="#1e1e3f" stroke="#0ea5e9" strokeWidth="1"/>
      <rect x="75"  y="107" width="30" height="30" rx="2" fill={NDOP} fillOpacity=".7"/>
      <rect x="155" y="107" width="30" height="30" rx="2" fill={NDOP} fillOpacity=".7"/>
      <rect x="110" y="104" width="30" height="10" rx="1" fill={MET} fillOpacity=".6"/>
      <Label x="120" y="160" fill="#0ea5e9" size={8}>NMOS  (n-channel, p-sub)</Label>
      <line x1="90"  y1="147" x2="90"  y2="155" stroke={MET} strokeWidth="1.5"/>
      <line x1="170" y1="147" x2="170" y2="155" stroke={MET} strokeWidth="1.5"/>
      {/* Shared gate and output */}
      <line x1="120" y1="45"  x2="120" y2="104" stroke={MET} strokeWidth="2"/>
      <line x1="40"  y1="45"  x2="120" y2="45"  stroke={MET} strokeWidth="1.5"/>
      <line x1="40"  y1="104" x2="120" y2="104" stroke={MET} strokeWidth="1.5"/>
      <line x1="40"  y1="45"  x2="40"  y2="104" stroke={MET} strokeWidth="1.5"/>
      <Label x="32" y="80" fill={MET} size={8} anchor="end">In</Label>
      <line x1="170" y1="78"  x2="170" y2="107" stroke={MET} strokeWidth="2"/>
      <line x1="170" y1="78"  x2="215" y2="78"  stroke={MET} strokeWidth="2"/>
      <Label x="218" y="82" fill={MET} size={8} anchor="start">Out</Label>
      <Label x="120" y="10" fill={DIM} size={8}>CMOS INVERTER  ·  1963</Label>
    </>)

    /* ── 8. DRAM cell ────────────────────────────────────────────────── */
    case 8: return wrap(<>
      {/* Word line */}
      <line x1="10" y1="55" x2="230" y2="55" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4 3"/>
      <Label x="8" y="50" fill="#a78bfa" size={8} anchor="start">Word line →</Label>
      {/* Bit line */}
      <line x1="100" y1="10" x2="100" y2="160" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 3"/>
      <Label x="100" y="8" fill="#60a5fa" size={8}>↓ Bit line</Label>
      {/* Access transistor */}
      <rect x="65" y="40" width="70" height="50" rx="3" fill="#1a1a38" stroke="#a78bfa" strokeWidth="1.3"/>
      <Label x="100" y="70" fill={TXT}>MOSFET</Label>
      <Label x="100" y="82" size={7} fill={DIM}>access transistor</Label>
      {/* Capacitor */}
      <line x1="100" y1="100" x2="100" y2="115" stroke={MET} strokeWidth="2"/>
      <line x1="68"  y1="115" x2="132" y2="115" stroke="#a78bfa" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="68"  y1="128" x2="132" y2="128" stroke="#a78bfa" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="100" y1="128" x2="100" y2="145" stroke={MET} strokeWidth="2"/>
      <line x1="70"  y1="145" x2="130" y2="145" stroke={MET} strokeWidth="2"/>
      <Label x="145" y="122" fill="#a78bfa" size={8} anchor="start">C</Label>
      <Label x="145" y="132" size={7} fill={DIM} anchor="start">stores 1 bit</Label>
      {/* 1 cell callout */}
      <rect x="52" y="32" width="130" height="128" rx="6" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="5 3" strokeOpacity=".5"/>
      <Label x="185" y="28" fill="#a78bfa" size={8}>1 cell = 1 bit</Label>
      <Label x="120" y="167" fill={DIM} size={8}>DRAM CELL  ·  1966  ·  1T-1C architecture</Label>
    </>)

    /* ── 9. Intel 4004 die map ───────────────────────────────────────── */
    case 9: return wrap(<>
      <rect x="18" y="12" width="204" height="144" rx="4" fill="#0a0a1a" stroke="#6366f1" strokeWidth="1.5"/>
      {/* Functional blocks */}
      {[
        { x:22, y:16, w:80, h:56, color:'#1e1b4b', label:'ALU', sub:'arithmetic' },
        { x:106,y:16, w:112,h:30, color:'#1e3a4b', label:'Instruction Decoder', sub:'' },
        { x:106,y:50, w:54, h:42, color:'#1b2e1b', label:'Control', sub:'logic' },
        { x:164,y:50, w:54, h:42, color:'#2d1b1b', label:'PC &', sub:'Stack' },
        { x:22, y:76, w:196,h:28, color:'#1f1a0e', label:'Register File  (4-bit × 16)', sub:'' },
        { x:22, y:108,w:196,h:44, color:'#1a1a2e', label:'ROM / I/O Interface', sub:'' },
      ].map(({ x, y, w, h, color, label, sub }, i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="2" fill={color} stroke="#6366f1" strokeWidth=".7" strokeOpacity=".6"/>
          <text x={x+w/2} y={y+h/2+4} textAnchor="middle" fontSize="8" fill="#818cf8" fontFamily="monospace" fontWeight="700">{label}</text>
          {sub && <text x={x+w/2} y={y+h/2+14} textAnchor="middle" fontSize="7" fill="#4f4680" fontFamily="monospace">{sub}</text>}
        </g>
      ))}
      <Label x="120" y="165" fill={DIM} size={8}>INTEL 4004  ·  1971  ·  2,300 transistors  ·  10 μm</Label>
    </>)

    /* ── 10. Flash memory — floating gate cross-section ─────────────── */
    case 10: return wrap(<>
      {/* p-Si substrate */}
      <rect x="20" y="118" width="200" height="38" rx="3" fill={SI} />
      <Label x="120" y="141" fill={TXT}>p-type Silicon</Label>
      {/* n+ source & drain */}
      <rect x="20"  y="98" width="55" height="20" rx="2" fill={NDOP} />
      <rect x="165" y="98" width="55" height="20" rx="2" fill={NDOP} />
      <Label x="47"  y="111" fill="#fff" size={8}>n⁺ S</Label>
      <Label x="192" y="111" fill="#fff" size={8}>n⁺ D</Label>
      {/* Tunnel oxide */}
      <rect x="75" y="92" width="90" height="7" rx="1" fill={OX} fillOpacity=".6"/>
      <Label x="167" y="97" fill={OX} size={7} anchor="start">Tunnel SiO₂</Label>
      {/* FLOATING GATE — the key innovation */}
      <rect x="75" y="70" width="90" height="22" rx="2" fill={FLT} fillOpacity=".85"/>
      <Label x="120" y="85" fill="#0f0f00" size={9}>Floating Gate</Label>
      {/* Electrons trapped */}
      {[85,100,115,130,145,160].map((x,i) => (
        <text key={i} x={x} y={80} fontSize="7" fill="#7c2d12" textAnchor="middle" fontFamily="monospace">e⁻</text>
      ))}
      {/* Interpoly dielectric */}
      <rect x="75" y="56" width="90" height="14" rx="1" fill={OX} fillOpacity=".4"/>
      <Label x="167" y="65" fill={OX} size={7} anchor="start">Interpoly SiO₂</Label>
      {/* Control gate */}
      <rect x="70" y="36" width="100" height="20" rx="2" fill={MET} />
      <Label x="120" y="50" fill="#0f0f20" size={9}>Control Gate</Label>
      {/* Terminals */}
      <line x1="47"  y1="98" x2="47"  y2="56" stroke={MET} strokeWidth="2"/>
      <line x1="120" y1="36" x2="120" y2="20" stroke={MET} strokeWidth="2"/>
      <line x1="192" y1="98" x2="192" y2="56" stroke={MET} strokeWidth="2"/>
      <Label x="120" y="14" fill={MET} size={9}>Control Gate (CG)</Label>
      <Label x="120" y="162" fill={DIM} size={8}>FLOATING GATE TRANSISTOR  ·  1984  ·  Masuoka/Toshiba</Label>
    </>)

    /* ── 11. Pentium die map ─────────────────────────────────────────── */
    case 11: return wrap(<>
      <rect x="15" y="10" width="210" height="148" rx="5" fill="#080818" stroke="#6366f1" strokeWidth="1.5"/>
      {[
        { x:18, y:13, w:100,h:60, color:'#1a1840', label:'Integer Pipeline 1', sub:'execute unit' },
        { x:122,y:13, w:100,h:60, color:'#1a1840', label:'Integer Pipeline 2', sub:'execute unit' },
        { x:18, y:77, w:100,h:50, color:'#1b2810', label:'FPU', sub:'floating-point' },
        { x:122,y:77, w:100,h:50, color:'#1e1a10', label:'Cache Control', sub:'8 KB L1 data' },
        { x:18, y:131,w:204,h:24, color:'#16161e', label:'Bus Interface  ·  Decode  ·  Branch Prediction', sub:'' },
      ].map(({ x, y, w, h, color, label, sub }, i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="2" fill={color} stroke="#6366f1" strokeWidth=".6" strokeOpacity=".5"/>
          <text x={x+w/2} y={y+h/2+3} textAnchor="middle" fontSize="8" fill="#818cf8" fontFamily="monospace" fontWeight="700">{label}</text>
          {sub && <text x={x+w/2} y={y+h/2+14} textAnchor="middle" fontSize="7" fill="#4f4680" fontFamily="monospace">{sub}</text>}
        </g>
      ))}
      <Label x="120" y="167" fill={DIM} size={8}>INTEL PENTIUM  ·  1993  ·  3.1M transistors  ·  0.8 μm</Label>
    </>)

    /* ── 12. Copper interconnects — layer stack ──────────────────────── */
    case 12: return wrap(<>
      {/* Layer stack cross-section */}
      <Label x="20" y="15" fill={DIM} size={8} anchor="start">BEFORE (Al)</Label>
      <Label x="220" y="15" fill={DIM} size={8} anchor="end">AFTER (Cu)</Label>
      {/* Aluminum stack (left side) */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="18" y={25+i*37} width="80" height="18" rx="1" fill="#94a3b8" fillOpacity=".7"/>
          <Label x="58" y={25+i*37+13} size={8} fill="#0f172a">Al  M{i+1}</Label>
          <rect x="18" y={43+i*37} width="80" height="19" rx="0" fill="#1e293b"/>
          <Label x="58" y={43+i*37+13} size={7} fill="#475569">ILD (SiO₂)</Label>
        </g>
      ))}
      {/* Copper stack (right side) */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="142" y={25+i*37} width="80" height="18" rx="1" fill={COP} fillOpacity=".85"/>
          <Label x="182" y={25+i*37+13} size={8} fill="#fff">Cu  M{i+1}</Label>
          <rect x="142" y={43+i*37} width="80" height="19" rx="0" fill="#1a1a2e"/>
          <Label x="182" y={43+i*37+13} size={7} fill="#475569">Low-κ dielectric</Label>
        </g>
      ))}
      {/* Divider */}
      <line x1="120" y1="20" x2="120" y2="140" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
      {/* Benefit callout */}
      <rect x="80" y="135" width="80" height="18" rx="3" fill="#1c1008"/>
      <Label x="120" y="147" fill={COP} size={8}>2× lower resistivity</Label>
      {/* Silicon substrate */}
      <rect x="18" y="140" width="204" height="14" rx="2" fill={SI} />
      <Label x="120" y="151" fill={TXT} size={8}>Silicon substrate</Label>
      <Label x="120" y="167" fill={DIM} size={8}>COPPER INTERCONNECTS  ·  IBM  ·  1998</Label>
    </>)

    /* ── 13. High-κ / Metal Gate MOSFET ─────────────────────────────── */
    case 13: return wrap(<>
      {/* p-Si substrate */}
      <rect x="20" y="115" width="200" height="40" rx="3" fill={SI} />
      <Label x="120" y="140" fill={TXT}>p-type Silicon</Label>
      {/* n+ S/D */}
      <rect x="20"  y="95" width="58" height="20" rx="2" fill={NDOP} />
      <rect x="162" y="95" width="58" height="20" rx="2" fill={NDOP} />
      <Label x="49"  y="108" fill="#fff" size={8}>n⁺ S</Label>
      <Label x="191" y="108" fill="#fff" size={8}>n⁺ D</Label>
      {/* High-κ dielectric — deliberately thick to show physical thickness */}
      <rect x="78" y="81" width="84" height="15" rx="1" fill="#7c3aed" fillOpacity=".85"/>
      <Label x="120" y="92" fill="#fff" size={8}>HfO₂  κ≈25</Label>
      {/* Compare arrow */}
      <line x1="165" y1="88" x2="210" y2="75" stroke="#7c3aed" strokeWidth="1"/>
      <Label x="213" y="73" fill="#7c3aed" size={7} anchor="start">was: 1nm SiO₂</Label>
      <Label x="213" y="82" fill="#7c3aed" size={7} anchor="start">10× less leakage</Label>
      {/* Metal gate (TiN) */}
      <rect x="73" y="56" width="94" height="25" rx="2" fill="#64748b" />
      <Label x="120" y="73" fill="#fff" size={9}>TiN Metal Gate</Label>
      {/* Old poly label removed */}
      <line x1="49"  y1="95" x2="49"  y2="50" stroke={MET} strokeWidth="2"/>
      <line x1="120" y1="56" x2="120" y2="36" stroke={MET} strokeWidth="2"/>
      <line x1="191" y1="95" x2="191" y2="50" stroke={MET} strokeWidth="2"/>
      <Label x="49"  y="44" fill={MET} size={9}>S</Label>
      <Label x="120" y="30" fill={MET} size={9}>G  (metal)</Label>
      <Label x="191" y="44" fill={MET} size={9}>D</Label>
      <Label x="120" y="165" fill={DIM} size={8}>HIGH-κ / METAL GATE  ·  INTEL 45nm  ·  2007</Label>
    </>)

    /* ── 14. FinFET — cross-section view (front cut through fin) ──────── */
    case 14: return wrap(<>
      {/* STI / field oxide */}
      <rect x="20" y="100" width="200" height="56" rx="3" fill="#1e1b3a" />
      <Label x="120" y="135" fill="#475569">Shallow Trench Isolation</Label>
      {/* Silicon fin */}
      <rect x="100" y="32" width="40" height="95" rx="2" fill={SI} />
      <Label x="120" y="92" fill={TXT} size={8}>Si fin</Label>
      {/* Gate oxide wrapping 3 sides */}
      <rect x="93"  y="25" width="54" height="9"  rx="1" fill={OX} fillOpacity=".8"/>   {/* top */}
      <rect x="93"  y="34" width="9"  height="65" rx="1" fill={OX} fillOpacity=".8"/>   {/* left */}
      <rect x="138" y="34" width="9"  height="65" rx="1" fill={OX} fillOpacity=".8"/>   {/* right */}
      {/* Gate wrapping 3 sides — wider, overtop */}
      <rect x="62"  y="14" width="116" height="14" rx="2" fill={MET} />   {/* top gate */}
      <rect x="62"  y="28" width="35"  height="74" rx="2" fill={MET} />   {/* left gate */}
      <rect x="143" y="28" width="35"  height="74" rx="2" fill={MET} />   {/* right gate */}
      <Label x="120" y="23" fill="#0f0f20" size={9}>Gate (wraps 3 sides)</Label>
      {/* Source & drain label (not visible in this cut) */}
      <Label x="120" y="8" fill={DIM} size={8}>FinFET CROSS-SECTION  ·  INTEL  ·  2011</Label>
      {/* Callout arrows */}
      <line x1="27" y1="70" x2="62"  y2="70" stroke="#06b6d4" strokeWidth="1"/>
      <Label x="25" y="68" fill="#06b6d4" size={7} anchor="end">Gate</Label>
      <line x1="27" y1="52" x2="93"  y2="52" stroke={OX} strokeWidth="1"/>
      <Label x="25" y="50" fill={OX} size={7} anchor="end">Oxide</Label>
      <Label x="120" y="165" fill={DIM} size={8}>Gate wraps 3 sides of vertical fin — 10× less leakage</Label>
    </>)

    /* ── 15. GAA — nanosheet stack ───────────────────────────────────── */
    case 15: return wrap(<>
      {/* Source contact */}
      <rect x="18" y="38" width="36" height="96" rx="3" fill={NDOP} />
      <Label x="36" y="90" fill="#fff" size={8}>S</Label>
      {/* Drain contact */}
      <rect x="186" y="38" width="36" height="96" rx="3" fill={NDOP} />
      <Label x="204" y="90" fill="#fff" size={8}>D</Label>
      {/* Gate surrounds (outer) */}
      <rect x="54"  y="28" width="132" height="116" rx="8" fill={MET} />
      <Label x="120" y="20" fill={MET} size={9}>Gate metal (all 4 sides)</Label>
      {/* Inner gate oxide */}
      <rect x="64"  y="38" width="112" height="96" rx="5" fill={OX} fillOpacity=".5"/>
      {/* Three nanosheets */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="74" y={50+i*28} width="92" height="16" rx="3" fill={SI} />
          <Label x="120" y={50+i*28+11} fill={TXT} size={8}>Nanosheet {i+1}  (Si)</Label>
        </g>
      ))}
      {/* Gate oxide between sheets */}
      <Label x="175" y="67"  fill={OX} size={7} anchor="start">SiO₂/HfO₂</Label>
      <Label x="175" y="95"  fill={OX} size={7} anchor="start">dielectric</Label>
      <Label x="120" y="155" fill={DIM} size={8}>GAA  ·  3 nm node  ·  2022  ·  4-sided gate control</Label>
      <Label x="120" y="167" fill={DIM} size={7}>~100M transistors / mm²  at  2 nm</Label>
    </>)

    default: return null
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   Timeline Section
───────────────────────────────────────────────────────────────────────────── */
export default function Timeline() {
  const [active, setActive]   = useState(0)
  const [paused, setPaused]   = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const intervalRef = useRef(null)
  const dotsRef     = useRef(null)
  const total = timelineEvents.length

  const goTo = useCallback((raw) => {
    const idx = ((raw % total) + total) % total
    setActive(idx)
    setAnimKey(k => k + 1)
    if (dotsRef.current) {
      dotsRef.current.children[idx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [total])

  useEffect(() => {
    if (paused) { clearInterval(intervalRef.current); return }
    intervalRef.current = setInterval(() => goTo(active + 1), AUTO_MS)
    return () => clearInterval(intervalRef.current)
  }, [active, paused, goTo])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') { setPaused(true); goTo(active + 1) }
      if (e.key === 'ArrowLeft')  { setPaused(true); goTo(active - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, goTo])

  const event = timelineEvents[active]

  return (
    <section
      className="tl-section"
      id="timeline"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">

        <div className="tl-header">
          <span className="tl-label">History</span>
          <h2 className="tl-heading">76 years that changed everything</h2>
        </div>

        {/* ── Three-column stage ── */}
        <div className="tl-stage" key={animKey}>

          {/* Col 1 — Year */}
          <div className="tl-left">
            <div className="tl-year-num" style={{ color: event.color }}>{event.year}</div>
            <div className="tl-year-date">{event.date}</div>
            <div className="tl-counter">{active + 1} / {total}</div>
          </div>

          {/* Col 2 — Text */}
          <div className="tl-text">
            <h3 className="tl-title">{event.title}</h3>
            <div className="tl-subtitle">{event.subtitle}</div>
            <p className="tl-desc">{event.description}</p>
            <blockquote className="tl-impact" style={{ borderColor: event.color }}>
              {event.impact}
            </blockquote>
            <div className="tl-refs">
              {event.refs.map(r => <sup key={r} style={{ marginRight: 4 }}>[{r}]</sup>)}
            </div>
            <div className="tl-nav-btns">
              <button className="tl-arrow" onClick={() => { setPaused(true); goTo(active - 1) }} disabled={active === 0}>←</button>
              <button className="tl-arrow" onClick={() => { setPaused(true); goTo(active + 1) }} disabled={active === total - 1}>→</button>
            </div>
          </div>

          {/* Col 3 — Device rendering */}
          <div className="tl-rendering">
            <DeviceRendering id={event.id} />
            <div className="tl-rendering-label">Cross-section / schematic</div>
          </div>

        </div>

        {/* ── Dot navigation ── */}
        <div className="tl-dots-wrap">
          <div className="tl-dots" ref={dotsRef} role="tablist">
            {timelineEvents.map((e, i) => (
              <button
                key={e.id}
                role="tab"
                aria-selected={i === active}
                className={`tl-dot ${i === active ? 'active' : ''} ${i < active ? 'past' : ''}`}
                onClick={() => { setPaused(true); goTo(i) }}
                title={`${e.year} — ${e.title}`}
                style={{ '--dc': e.color }}
              >
                <span className="tl-dot-pip" />
                <span className="tl-dot-yr">{e.year}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Progress bar ── */}
        <div className="tl-prog-track">
          <div
            className={`tl-prog-fill ${paused ? 'paused' : ''}`}
            key={animKey}
            style={{ animationDuration: `${AUTO_MS}ms`, background: event.color }}
          />
        </div>

      </div>
    </section>
  )
}
