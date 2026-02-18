import { useEffect, useRef } from 'react'

/*
 * All references used throughout the site, indexed 1–18.
 * The ref numbers used inline (e.g. <sup>[3]</sup>) correspond to these.
 *
 * Format:
 *   num    — citation number
 *   tag    — short category label
 *   cite   — formatted citation string (plain text)
 *   doi    — DOI or URL (optional)
 *   open   — true if freely accessible
 */
const REFERENCES = [
  {
    num: 1,
    tag: 'Primary Source',
    cite: 'Bardeen, J. & Brattain, W. H. (1948). "The transistor, a semi-conductor triode." Physical Review, 74(2), 230–231.',
    doi: 'https://doi.org/10.1103/PhysRev.74.230',
    open: false,
  },
  {
    num: 2,
    tag: 'Primary Source',
    cite: 'Brattain, W. H. & Bardeen, J. (1948). "Nature of the forward current in germanium point contacts." Physical Review, 74(2), 231–232.',
    doi: 'https://doi.org/10.1103/PhysRev.74.231',
    open: false,
  },
  {
    num: 3,
    tag: 'Primary Source',
    cite: 'Shockley, W. (1949). "The theory of p-n junctions in semiconductors and p-n junction transistors." Bell System Technical Journal, 28(3), 435–489.',
    doi: 'https://doi.org/10.1002/j.1538-7305.1949.tb03645.x',
    open: false,
  },
  {
    num: 4,
    tag: 'Historical Account',
    cite: 'Teal, G. K. (1976). "Single crystals of germanium and silicon — basic to the transistor and integrated circuit." IEEE Transactions on Electron Devices, 23(7), 621–639.',
    doi: 'https://doi.org/10.1109/T-ED.1976.18464',
    open: false,
  },
  {
    num: 5,
    tag: 'Primary Source',
    cite: 'Kilby, J. S. (1976). "Invention of the integrated circuit." IEEE Transactions on Electron Devices, 23(7), 648–654.',
    doi: 'https://doi.org/10.1109/T-ED.1976.18467',
    open: false,
  },
  {
    num: 6,
    tag: 'Nobel Lecture',
    cite: 'Kilby, J. S. (2000). "Turning potential into reality: the invention of the integrated circuit." Nobel Lecture, December 8, 2000. Nobel Prize in Physics.',
    doi: 'https://www.nobelprize.org/prizes/physics/2000/kilby/lecture/',
    open: true,
  },
  {
    num: 7,
    tag: 'Primary Source',
    cite: 'Kahng, D. & Atalla, M. M. (1960). "Silicon-silicon dioxide field induced surface devices." IRE-AIEE Solid-State Device Research Conference, Pittsburgh, PA.',
    doi: null,
    note: 'Unpublished conference paper; described in: Kahng, D. (1976). IEEE Trans. Electron Devices, 23(7), 655–657.',
    open: false,
  },
  {
    num: 8,
    tag: 'Primary Source',
    cite: 'Holonyak, N. Jr. & Bevacqua, S. F. (1962). "Coherent (visible) light emission from Ga(As₁₋ₓPₓ) junctions." Applied Physics Letters, 1(4), 82–83.',
    doi: 'https://doi.org/10.1063/1.1753706',
    open: false,
  },
  {
    num: 9,
    tag: 'Primary Source',
    cite: 'Wanlass, F. M. & Sah, C. T. (1963). "Nanowatt logic using field-effect metal-oxide-semiconductor triodes." 1963 IEEE International Solid-State Circuits Conference, vol. VI, pp. 32–33.',
    doi: 'https://doi.org/10.1109/ISSCC.1963.1157450',
    open: false,
  },
  {
    num: 10,
    tag: 'Patent',
    cite: 'Dennard, R. H. (1968). "Field-effect transistor memory." U.S. Patent 3,387,286. Filed: August 14, 1967; Issued: June 4, 1968. IBM Corporation.',
    doi: 'https://patents.google.com/patent/US3387286A',
    open: true,
  },
  {
    num: 11,
    tag: 'Historical Account',
    cite: 'Faggin, F., Hoff, M. E., Mazor, S. & Shima, M. (1996). "The history of the 4004." IEEE Micro, 16(6), 10–20.',
    doi: 'https://doi.org/10.1109/40.546561',
    open: false,
  },
  {
    num: 12,
    tag: 'Primary Source',
    cite: 'Moore, G. E. (1965). "Cramming more components onto integrated circuits." Electronics, 38(8), 114–117. Reprinted in Proc. IEEE, 86(1), 82–85 (1998).',
    doi: 'https://doi.org/10.1109/JPROC.1998.658762',
    open: false,
  },
  {
    num: 13,
    tag: 'Engineering Paper',
    cite: 'Natarajan, S. et al. (2012). "A 22nm high performance and low-power CMOS technology featuring fully-depleted tri-gate transistors, self-aligned contacts and high density MIM capacitors." IEEE Symposium on VLSI Technology, pp. 165–166.',
    doi: 'https://doi.org/10.1109/VLSIT.2012.6242496',
    open: false,
  },
  {
    num: 14,
    tag: 'Engineering Paper',
    cite: 'Barraud, S. et al. (2020). "FDSOI and nanowire/nanosheet: how far can they go? A perspective." IEEE Transactions on Electron Devices, 67(4), 1425–1432.',
    doi: 'https://doi.org/10.1109/TED.2020.2968259',
    open: false,
  },
  /* Fabrication references */
  {
    num: 15,
    tag: 'Textbook',
    cite: 'Plummer, J. D., Deal, M. D. & Griffin, P. B. (2000). Silicon VLSI Technology: Fundamentals, Practice and Modeling. Prentice Hall. ISBN 978-0-13-085461-0.',
    doi: null,
    open: false,
  },
  {
    num: 16,
    tag: 'Textbook',
    cite: 'Jaeger, R. C. (2002). Introduction to Microelectronic Fabrication (Vol. 5, 2nd ed.). Prentice Hall. ISBN 978-0-201-44494-2.',
    doi: null,
    open: false,
  },
  {
    num: 17,
    tag: 'Textbook',
    cite: 'Madou, M. J. (2011). Fundamentals of Microfabrication and Nanotechnology (3rd ed.). CRC Press. ISBN 978-0-8493-8205-4.',
    doi: null,
    open: false,
  },
  {
    num: 18,
    tag: 'Review Article',
    cite: 'Wilk, G. D., Wallace, R. M. & Anthony, J. M. (2001). "High-κ gate dielectrics: current status and materials properties considerations." Journal of Applied Physics, 89(10), 5243–5275.',
    doi: 'https://doi.org/10.1063/1.1361065',
    open: false,
  },
]

function RefItem({ r }) {
  return (
    <div className="ref-item">
      <div className="ref-num">[{r.num}]</div>
      <div className="ref-body">
        <div className="ref-tag">{r.tag}</div>
        <div>
          <strong>{r.cite.split('.')[0]}.</strong>
          {r.cite.slice(r.cite.indexOf('.') + 1)}
        </div>
        {r.doi && (
          <div style={{ marginTop: 4 }}>
            <a href={r.doi} target="_blank" rel="noopener noreferrer">
              {r.open ? '↗ Open Access' : '↗ ' + r.doi}
            </a>
          </div>
        )}
        {r.note && <div style={{ marginTop: 4, opacity: 0.7, fontStyle: 'italic' }}>{r.note}</div>}
      </div>
    </div>
  )
}

export default function References() {
  const headRef = useRef(null)
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

  return (
    <section className="section" id="references">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <div className="section-label">References</div>
          <h2>Sources &amp; further reading</h2>
          <p>
            Every claim on this site is grounded in peer-reviewed literature, patents, or
            Nobel Prize lectures. Primary sources are preferred wherever possible.
          </p>
        </div>
        <div className="refs-grid">
          {REFERENCES.map(r => <RefItem key={r.num} r={r} />)}
        </div>
      </div>
    </section>
  )
}
