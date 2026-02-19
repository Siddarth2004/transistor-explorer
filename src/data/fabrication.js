export const fabricationFamilies = [
  {
    id: 'planar',
    label: 'Planar',
    era: '1959 to 2010s',
    status: 'active',
    blurb: 'The original flat MOS process that built the IC industry.'
  },
  {
    id: 'finfet',
    label: 'FinFET',
    era: '2011 to present',
    status: 'coming-soon',
    blurb: '3D fins improved electrostatic control as planar nodes reached limits.'
  },
  {
    id: 'gaa',
    label: 'GAA',
    era: '2022 to present',
    status: 'coming-soon',
    blurb: 'Gate-all-around nanosheets are the current scaling frontier.'
  }
]
// fab comm
export const planarIntro = {
  title: 'What This Section Shows',
  text:
    'Planar processing was the first MOS manufacturing method that scaled to mass production in the late 1950s and 1960s. Engineers built every transistor as a flat structure on the silicon surface, using repeated cycles of oxidation, lithography, doping, and metal patterning. By modern standards it is primitive because electrostatic control is weaker than 3D devices, but it was robust enough to power the integrated circuit era for decades. Leading-edge logic shifted away from planar around the 2010s as nodes shrank, yet planar flows are still common in analog, power, sensors, and mature embedded nodes today. This walkthrough shows a simplified planar NMOS flow so non-specialists can see how each mask step changes the wafer.',
  refs: [7, 13, 14, 15, 16]
}

export const planarSteps = [
  {
    id: 'wafer',
    title: 'Prepare silicon wafer and background doping',
    summary: 'Start with ultra-pure silicon and set the base p-type substrate.',
    detail:
      'A polished single-crystal silicon wafer is lightly doped so the transistor has a controlled starting point. Think of this as preparing clean, level ground before building a city. Every later layer depends on this material quality.',
    visual: 'wafer',
    refs: [15, 16],
    holdMs: 7000
  },
  {
    id: 'oxidation',
    title: 'Grow thermal oxide',
    summary: 'Bake the wafer in oxygen to form a glass-like SiO2 surface.',
    detail:
      'The wafer is heated in oxygen or steam so silicon at the surface turns into silicon dioxide. This oxide acts like an electrical insulator and process mask. It is one reason silicon technology became so reliable.',
    visual: 'oxidation',
    refs: [15, 16],
    holdMs: 6600
  },
  {
    id: 'resist',
    title: 'Spin on photoresist',
    summary: 'Coat a light-sensitive film across the wafer at high speed.',
    detail:
      'Liquid photoresist is dropped on the wafer and spun to make an even thin coat. After a short bake, it behaves like a photographic layer that can be patterned by light. This is how tiny geometry gets transferred to silicon.',
    visual: 'spin',
    refs: [15, 17],
    holdMs: 6200
  },
  {
    id: 'mask',
    title: 'Align source and drain mask, then expose',
    summary: 'Project the mask pattern with UV lithography.',
    detail:
      'A mask is aligned over the wafer and UV exposure changes resist chemistry in selected regions. In advanced fabs, optics and wavelength vary by node; e-beam can also write patterns directly for special use cases. The core idea is selective pattern transfer.',
    visual: 'uv',
    refs: [15, 17],
    holdMs: 6200
  },
  {
    id: 'develop',
    title: 'Develop the resist pattern',
    summary: 'Wash away exposed resist to open patterned windows.',
    detail:
      'Developer solution dissolves the parts of resist that were exposed, leaving openings where material should be removed next. The remaining resist protects everything else. At this point, the wafer has a temporary stencil.',
    visual: 'develop',
    refs: [15, 17],
    holdMs: 6200
  },
  {
    id: 'etch',
    title: 'Etch oxide windows (HF step)',
    summary: 'Use oxide-selective etch chemistry to open access to silicon.',
    detail:
      'Hydrofluoric-acid-based chemistry removes exposed oxide while masked regions stay covered. Now silicon is open only where source and drain regions are needed. This selective removal is a core fabrication move.',
    visual: 'etch',
    refs: [15, 16],
    holdMs: 6200
  },
  {
    id: 'implant',
    title: 'Implant source and drain dopants',
    summary: 'Drive ions into the opened silicon regions.',
    detail:
      'An ion beam places dopants into the opened regions to form source and drain. The rest of the wafer is shielded by existing layers. After this step, the transistor starts to have distinct electrical terminals.',
    visual: 'implant',
    refs: [15, 16, 17],
    holdMs: 6400
  },
  {
    id: 'anneal-field',
    title: 'Strip resist, anneal, and grow isolation oxide',
    summary: 'Remove temporary resist and stabilize the implanted structure.',
    detail:
      'The resist is stripped, then a heat cycle activates dopants and repairs implant damage in the crystal. Isolation oxide is grown where needed so nearby devices do not electrically interfere. The wafer is now cleaner and more stable for gate formation.',
    visual: 'anneal',
    refs: [15, 16],
    holdMs: 6400
  },
  {
    id: 'gate-oxide',
    title: 'Open gate region and grow thin gate oxide',
    summary: 'Create the ultra-thin dielectric that lets the gate control current.',
    detail:
      'A very thin, high-quality oxide is formed in the channel region. This dielectric separates the gate from silicon while still letting electric fields modulate conduction. In short: no direct gate current, but strong control of the channel.',
    visual: 'gate-oxide',
    refs: [15, 16, 18],
    holdMs: 6200
  },
  {
    id: 'gate',
    title: 'Deposit and pattern gate electrode',
    summary: 'Build the gate stack above the channel region.',
    detail:
      'A conductive layer is deposited and patterned to form the gate. This gate becomes the switch handle: voltage here turns channel conduction on or off. Geometry at this step strongly affects performance and leakage.',
    visual: 'gate',
    refs: [15, 16],
    holdMs: 6200
  },
  {
    id: 'metal',
    title: 'Open contacts and define metal interconnect',
    summary: 'Connect source, gate, and drain to the outside world.',
    detail:
      'Contact windows are opened, metal is deposited, and unwanted metal is etched away with a mask. Interconnect lines now route signals and power between devices. This is where isolated transistors become a useful circuit.',
    visual: 'metal',
    refs: [15, 16, 17],
    holdMs: 7000
  }
]
