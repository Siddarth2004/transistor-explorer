/**
 * Timeline events for Transistor Explorer.
 * IDs 1–15, in chronological order.
 * Descriptions are 2–3 punchy sentences for non-expert readers.
 * Citations map to the References section.
 */

export const timelineEvents = [
  {
    id: 1,
    year: 1947,
    date: "December 23, 1947",
    title: "The Point-Contact Transistor",
    subtitle: "John Bardeen & Walter Brattain — Bell Labs, Murray Hill, NJ",
    description:
      "Two gold-foil contacts, just 50 micrometers apart, pressed against a germanium crystal. A small signal went in — and a larger one came out. Bardeen and Brattain had demonstrated solid-state amplification for the first time, replacing fragile vacuum tubes with something the size of a fingertip.",
    impact:
      "The first transistor — proving that solid-state devices could amplify, not just detect.",
    refs: [1, 2],
    color: "#6366f1",
  },
  {
    id: 2,
    year: 1948,
    date: "January 23, 1948",
    title: "The Bipolar Junction Transistor",
    subtitle: "William Shockley — Bell Labs, Murray Hill, NJ",
    description:
      "Shockley led the Bell Labs research group and shared the 1956 Nobel Prize with Bardeen and Brattain, but the specific point-contact transistor was their experimental work. Soon after that result, he worked out the bipolar junction transistor concept while staying in a hotel room during a period of intense competition inside the group. The three-layer design was more reliable, easier to mass-produce, and became the dominant transistor of the 1950s and 60s.",
    impact:
      "All three — Bardeen, Brattain, and Shockley — shared the 1956 Nobel Prize in Physics for their transistor research.",
    refs: [3],
    color: "#8b5cf6",
  },
  {
    id: 3,
    year: 1954,
    date: "May 10, 1954",
    title: "The Silicon Transistor",
    subtitle: "Gordon Teal — Texas Instruments, Dallas, TX",
    description:
      "Germanium transistors failed above 75°C — useless for most real-world environments. At a conference, Teal dunked a germanium radio into hot oil — it went silent — then played the same music through his silicon transistor in the same boiling oil. It kept playing. Silicon's higher operating temperature and abundance made germanium obsolete overnight.",
    impact:
      "Silicon replaced germanium as the semiconductor material of choice and has held that position for 70 years.",
    refs: [4],
    color: "#06b6d4",
  },
  {
    id: 4,
    year: 1958,
    date: "September 12, 1958",
    title: "The Integrated Circuit",
    subtitle: "Jack Kilby (TI) & Robert Noyce (Fairchild) — independently",
    description:
      "What if an entire circuit — transistors, resistors, capacitors — could be built on a single piece of silicon, without any connecting wires? Kilby proved it at TI in September 1958; Noyce independently invented a cleaner, fully planar version at Fairchild. The IC collapsed the cost of electronics by orders of magnitude.",
    impact:
      "The integrated circuit is arguably the most economically significant invention of the 20th century.",
    refs: [5, 6],
    color: "#10b981",
  },
  {
    id: 5,
    year: 1959,
    date: "1959",
    title: "The MOSFET",
    subtitle: "Mohamed Atalla & Dawon Kahng — Bell Labs, Murray Hill, NJ",
    description:
      "Instead of a current controlling a current (the BJT approach), Atalla and Kahng's metal-oxide-semiconductor field-effect transistor uses a voltage applied through an insulating oxide to switch electron flow. It draws near-zero power when idle, scales to smaller sizes more easily, and can be packed far more densely than any prior design.",
    impact:
      "The MOSFET is the fundamental unit of all modern digital logic. Your phone contains roughly 15 billion of them.",
    refs: [7],
    color: "#f59e0b",
  },
  {
    id: 6,
    year: 1962,
    date: "1962",
    title: "The First Visible-Light LED",
    subtitle: "Nick Holonyak Jr. — General Electric, Syracuse, NY",
    description:
      "LEDs existed before 1962, but only emitting invisible infrared light. Holonyak's gallium arsenide phosphide junction emitted visible red light — the first LED you could actually see. At the time, he publicly predicted LEDs would one day replace incandescent bulbs entirely.",
    impact:
      "He was right — it took 50 years. LEDs now light our homes, backlight every screen, and enable all fiber-optic communication.",
    refs: [8],
    color: "#ef4444",
  },
  {
    id: 7,
    year: 1963,
    date: "1963",
    title: "CMOS — The Low-Power Switch",
    subtitle: "Frank Wanlass — Fairchild Semiconductor",
    description:
      "Every switching transistor wastes power. Wanlass found that pairing an N-channel and P-channel MOSFET — so one turns on only when the other turns off — draws near-zero current when idle. He called it Complementary MOS (CMOS) and demonstrated it dissipated roughly 1/1000th the power of existing logic families.",
    impact:
      "Without CMOS, every chip in your phone would generate enough heat to destroy itself. It is the reason portable electronics exist.",
    refs: [9],
    color: "#0ea5e9",
  },
  {
    id: 8,
    year: 1966,
    date: "1966",
    title: "DRAM",
    subtitle: "Robert H. Dennard — IBM T.J. Watson Research Center",
    description:
      "One transistor plus one capacitor equals one bit of data. The capacitor holds charge (1) or doesn't (0); the transistor lets you access it. Dennard's one-transistor cell was so compact that billions could be packed on a single chip, replacing the large and expensive magnetic-core memory of the era.",
    impact:
      "DRAM remains the dominant technology for computer main memory worldwide — unchanged in fundamental principle after nearly 60 years.",
    refs: [10],
    color: "#a78bfa",
  },
  {
    id: 9,
    year: 1971,
    date: "November 15, 1971",
    title: "The First Microprocessor",
    subtitle: "Faggin, Hoff & Mazor — Intel, Santa Clara, CA",
    description:
      "The Intel 4004 put an entire CPU — arithmetic unit, registers, and control logic — onto a single chip. 2,300 transistors. 4-bit. 740 kHz. Designed for a Japanese calculator, its creators quickly saw they had built a general-purpose computing engine that anyone could program.",
    impact:
      "The microprocessor made personal computing possible. The 4004 ran at 740 kHz; today's chips run at 5 GHz with 50 billion transistors — in the same footprint.",
    refs: [11],
    color: "#6366f1",
  },
  {
    id: 10,
    year: 1984,
    date: "1984",
    title: "Flash Memory",
    subtitle: "Fujio Masuoka — Toshiba Corporation, Japan",
    description:
      "Masuoka invented a transistor with two gates: a normal control gate on top and a 'floating' gate surrounded by oxide on all sides. Push electrons into the floating gate and they stay there without any power — storing data indefinitely. Erasing all cells at once was nearly instantaneous, like a camera flash. Toshiba's management initially dismissed the idea.",
    impact:
      "Every SSD, USB drive, and smartphone storage chip is built on Masuoka's floating-gate principle. Flash memory changed how the world stores information.",
    refs: [12],
    color: "#f97316",
  },
  {
    id: 11,
    year: 1993,
    date: "March 22, 1993",
    title: "The Pentium Processor",
    subtitle: "Intel — Santa Clara, CA",
    description:
      "3.1 million transistors. Dual integer pipelines. A dedicated floating-point unit. The Pentium ran at 60–66 MHz — fast enough for real-time audio, early 3D graphics, and the first wave of web browsers. 'Intel Inside' became the most recognizable ingredient brand in history, and the x86 architecture the Pentium ran would dominate for the next 30 years.",
    impact:
      "The Pentium generation brought workstation-class performance to the home, triggering the 1990s PC revolution.",
    refs: [12],
    color: "#6366f1",
  },
  {
    id: 12,
    year: 1998,
    date: "1998",
    title: "Copper Interconnects",
    subtitle: "IBM — East Fishkill, NY",
    description:
      "Since the 1960s, chips had used aluminum to wire transistors together. IBM replaced it with copper — twice as conductive — allowing narrower traces with less resistance and less heat. The transition required an entirely new manufacturing process, since copper can't be etched the way aluminum can. But the gains unlocked another decade of scaling.",
    impact:
      "Every high-performance chip made since 1998 uses copper wiring. A quiet materials change that enabled the internet age.",
    refs: [12],
    color: "#b87333",
  },
  {
    id: 13,
    year: 2007,
    date: "2007",
    title: "High-κ / Metal Gate",
    subtitle: "Intel — 45 nm process node",
    description:
      "Intel's 45nm generation replaced the SiO₂ gate dielectric — essentially unchanged since 1959 — with hafnium oxide (HfO₂, κ ≈ 25 vs. SiO₂'s 3.9). A thicker HfO₂ layer delivers the same gate capacitance as a 1nm SiO₂ layer, but with 10× less quantum-tunneling leakage. The metal gate replaced polysilicon at the same time, eliminating a related performance loss.",
    impact:
      "The largest material change in transistors in 50 years, enabling further scaling when the prior approach had hit a physical wall.",
    refs: [13, 18],
    color: "#8b5cf6",
  },
  {
    id: 14,
    year: 2011,
    date: "April 2011",
    title: "FinFET — Transistors Go 3D",
    subtitle: "Intel — 22 nm Tri-Gate process",
    description:
      "Planar transistors were leaking current they shouldn't — the flat gate had too little control over a short, shallow channel. Intel's solution: stand the silicon channel upright into a thin fin and wrap the gate around three sides. The result was 50% lower active power at equivalent performance, or 37% higher performance at equivalent power.",
    impact:
      "FinFETs broke through the planar transistor wall and dominated high-performance chips from 2012 through roughly 2022.",
    refs: [13],
    color: "#06b6d4",
  },
  {
    id: 15,
    year: 2022,
    date: "2022 – Present",
    title: "Gate-All-Around (GAA)",
    subtitle: "Samsung (3 nm), TSMC & Intel (2 nm)",
    description:
      "FinFETs have reached their own scaling limit. GAA transistors replace the vertical fin with horizontal silicon nanosheets stacked on top of each other, with gate material wrapping all four sides of every sheet. Samsung shipped their version (MBCFET) at 3nm in 2022; TSMC and Intel are following at 2nm.",
    impact:
      "At 2nm, chips pack ~100 million transistors per mm². GAA is the current frontier — powering the AI accelerators reshaping computing today.",
    refs: [14],
    color: "#10b981",
  },
];
