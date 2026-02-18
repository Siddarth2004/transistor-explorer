import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label="Transistor Explorer home">
          {/* Inline transistor icon */}
          <svg className="nav-logo-icon" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="5" fill="none" />
            <line x1="8"  y1="14" x2="14" y2="14" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="7"  x2="14" y2="21" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="9"  x2="21" y2="6"  stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="14" y1="19" x2="21" y2="22" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" />
            <polygon points="21,22 17.5,20 19,23.5" fill="#a78bfa" />
          </svg>
          Transistor Explorer
        </a>
        <ul className="nav-links">
          <li><a href="#timeline">History</a></li>
          <li><a href="#fabrication">Fabrication</a></li>
          <li><a href="#references">References</a></li>
        </ul>
      </div>
    </nav>
  )
}
