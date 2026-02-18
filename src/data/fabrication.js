/**
 * Fabrication steps for the Planar Transistor Process.
 *
 * Each step defines:
 *  - title, subtitle, description (non-expert language)
 *  - techNote (optional deeper detail)
 *  - layers: array describing the SVG cross-section at this step
 *  - animations: optional animation hints for the canvas
 *  - refs: citation indices
 *
 * SVG coordinate system:
 *   viewBox="0 0 520 200"
 *   Substrate sits at y=110–170, x=30–490
 *   Layers stack upward (decreasing y).
 *
 * Layer schema:
 *   { id, x, y, w, h, fill, opacity?, label?, labelX?, labelY?, rx? }
 */

// ─── Layer color palette ───────────────────────────────────────────────────────
export const COLORS = {
  substrate:    "#475569",   // slate — p-type silicon
  sio2:         "#a78bfa",   // violet — thermal oxide / field oxide
  photoresist:  "#4ade80",   // green — photoresist
  ndope:        "#fb923c",   // orange — n+ implanted regions
  gateOxide:    "#c4b5fd",   // light violet — thin gate dielectric
  poly:         "#94a3b8",   // light slate — polysilicon or metal gate
  metal:        "#e2e8f0",   // near-white — aluminum/copper contacts
  uvRay:        "#bfdbfe",   // light blue — UV exposure rays
  ion:          "#fbbf24",   // amber — ion beam
  bg:           "#0e0e1f",   // page background (for "air" region)
};

// ─── Shared base layers ────────────────────────────────────────────────────────
const SUBSTRATE = { id: "substrate", x: 30, y: 110, w: 460, h: 60, fill: COLORS.substrate, label: "p-Si", labelX: 240, labelY: 144 };

// ─── Step definitions ──────────────────────────────────────────────────────────
export const fabricationSteps = [
  {
    id: 0,
    title: "Silicon Wafer Preparation",
    subtitle: "Starting material",
    description:
      "Everything starts with silicon — the second-most abundant element in Earth's crust, right after oxygen. Raw silicon is purified to an astonishing 99.9999999% purity using the Czochralski process: a seed crystal is dipped into molten silicon and slowly pulled upward while rotating, growing a cylindrical ingot of perfectly ordered crystal. The ingot is sliced into thin wafers (~775 μm thick) and mirror-polished.",
    techNote:
      "The substrate here is doped p-type by adding trace amounts of boron during crystal growth. This creates a slight deficit of electrons ('holes') throughout the material — the starting condition for an n-channel MOSFET.",
    animation: "spin",
    refs: [15, 16],
    layers: [SUBSTRATE],
  },
  {
    id: 1,
    title: "Thermal Oxidation",
    subtitle: "Grow the insulating oxide",
    description:
      "The wafer is loaded into a furnace heated to around 1000 °C and exposed to steam or oxygen. The silicon atoms at the surface react with oxygen to form silicon dioxide (SiO₂) — ordinary glass. This ~100 nm layer of oxide is not just any insulator; it is one of the most perfect insulator-semiconductor interfaces known to science, and it is why silicon (not germanium, not gallium arsenide) became the material of choice.",
    techNote:
      "This is 'thermal oxidation' — the oxide grows by consuming the silicon surface, not by depositing material on top. Approximately 44% of the grown oxide thickness actually extends below the original silicon surface.",
    animation: "oxidize",
    refs: [15, 16],
    layers: [
      SUBSTRATE,
      { id: "sio2_full", x: 30, y: 95, w: 460, h: 15, fill: COLORS.sio2, label: "SiO₂", labelX: 240, labelY: 105 },
    ],
  },
  {
    id: 2,
    title: "Photoresist Coating",
    subtitle: "Apply the light-sensitive layer",
    description:
      "A liquid plastic called photoresist is poured onto the spinning wafer (typically 2,000–4,000 RPM). The centrifugal force spreads it into a uniform layer just 1–2 μm thick — thinner than a human hair. The wafer is then briefly heated ('soft-baked') to evaporate the solvent, leaving a solid, light-sensitive film. Think of it like spreading a very thin coat of light-sensitive sunscreen on the wafer.",
    techNote:
      "We use positive photoresist here. UV light breaks chemical bonds in the exposed regions, making them soluble in developer solution. Negative photoresist does the opposite — UV light crosslinks and hardens the resist.",
    animation: "spin",
    refs: [15, 17],
    layers: [
      SUBSTRATE,
      { id: "sio2_full", x: 30, y: 95, w: 460, h: 15, fill: COLORS.sio2 },
      { id: "pr_full", x: 30, y: 75, w: 460, h: 20, fill: COLORS.photoresist, label: "Photoresist", labelX: 240, labelY: 88 },
    ],
  },
  {
    id: 3,
    title: "Photolithography — UV Exposure",
    subtitle: "Print the pattern with light",
    description:
      "A photomask — a glass plate printed with the circuit pattern in chrome — is placed above the wafer. Ultraviolet light shines through the transparent parts of the mask and strikes the photoresist below, chemically altering it. The areas under the chrome pattern are shielded and remain unchanged. This is essentially photography at the nanometer scale.",
    techNote:
      "Modern fabs use extreme ultraviolet (EUV) light at 13.5 nm wavelength, enabling features below 5 nm. For the planar process shown here, a UV wavelength of 365 nm (i-line) was typical. The mask is typically 4× larger than the final pattern, then optically reduced by the stepper lens.",
    animation: "uvExpose",
    refs: [15, 17],
    layers: [
      SUBSTRATE,
      { id: "sio2_full", x: 30, y: 95, w: 460, h: 15, fill: COLORS.sio2 },
      // Shielded (unexposed) resist — left & right
      { id: "pr_left",  x: 30,  y: 75, w: 155, h: 20, fill: COLORS.photoresist },
      { id: "pr_right", x: 335, y: 75, w: 155, h: 20, fill: COLORS.photoresist },
      // UV-exposed resist — center (slightly lighter, translucent)
      { id: "pr_exposed", x: 185, y: 75, w: 150, h: 20, fill: "#86efac", opacity: 0.45, label: "UV-exposed", labelX: 260, labelY: 72 },
      // UV rays
      { id: "uv_label", x: 185, y: 40, w: 150, h: 0, fill: "none", label: "UV Light ↓", labelX: 260, labelY: 55, labelFill: COLORS.uvRay },
    ],
  },
  {
    id: 4,
    title: "Photoresist Development",
    subtitle: "Wash away the exposed resist",
    description:
      "The wafer is immersed in a developer solution — a mild alkaline liquid. The UV-exposed regions of the photoresist dissolve away, leaving windows in the photoresist film that expose the oxide layer beneath. The unexposed regions remain firmly in place, acting as a stencil for the next etch step.",
    techNote:
      "The developer is typically tetramethylammonium hydroxide (TMAH) solution. Development is followed by a rinse in deionized water and a 'hard bake' at ~120 °C to harden the remaining resist.",
    animation: "develop",
    refs: [15, 17],
    layers: [
      SUBSTRATE,
      { id: "sio2_full", x: 30, y: 95, w: 460, h: 15, fill: COLORS.sio2 },
      { id: "pr_left",  x: 30,  y: 75, w: 155, h: 20, fill: COLORS.photoresist },
      { id: "pr_right", x: 335, y: 75, w: 155, h: 20, fill: COLORS.photoresist, label: "Photoresist", labelX: 400, labelY: 88 },
      // window in center — SiO2 now visible
      { id: "pr_window_label", x: 185, y: 75, w: 150, h: 20, fill: "none", label: "window", labelX: 260, labelY: 88, labelFill: "#94a3b8" },
    ],
  },
  {
    id: 5,
    title: "Oxide Etch (HF)",
    subtitle: "Open windows to the silicon",
    description:
      "Hydrofluoric acid (HF) is used to dissolve the silicon dioxide exposed in the resist windows. HF attacks SiO₂ rapidly but leaves silicon and photoresist essentially untouched — an impressive chemical selectivity. The result: two openings in the oxide layer where the source and drain of the transistor will be formed. This step is sometimes called 'wet etching.'",
    techNote:
      "HF etches SiO₂ isotropically (equally in all directions), which can undercut the oxide slightly beneath the resist edge. Modern fabs often use dry (plasma) etching instead for better dimensional control, but wet HF is still used for oxide cleaning.",
    animation: "etch",
    refs: [15, 16],
    layers: [
      SUBSTRATE,
      // SiO2 only under resist (field oxide remains)
      { id: "sio2_left",  x: 30,  y: 95, w: 155, h: 15, fill: COLORS.sio2 },
      { id: "sio2_right", x: 335, y: 95, w: 155, h: 15, fill: COLORS.sio2, label: "SiO₂", labelX: 400, labelY: 105 },
      { id: "pr_left",  x: 30,  y: 75, w: 155, h: 20, fill: COLORS.photoresist },
      { id: "pr_right", x: 335, y: 75, w: 155, h: 20, fill: COLORS.photoresist, label: "Photoresist", labelX: 400, labelY: 88 },
      // Windows visible
      { id: "etch_label", x: 185, y: 95, w: 150, h: 15, fill: "none", label: "etched window", labelX: 260, labelY: 88, labelFill: "#f87171" },
    ],
  },
  {
    id: 6,
    title: "Photoresist Strip",
    subtitle: "Remove the resist mask",
    description:
      "The photoresist has done its job. Now it has to go — it's an organic material and cannot survive the high temperatures of the next steps. It is stripped away using either oxygen plasma (which 'ashes' the resist) or a hot chemical solvent. What remains is the silicon wafer with a patterned oxide mask: the oxide sits over the field regions, and bare silicon is exposed where the source and drain will go.",
    techNote:
      "Oxygen plasma ashing converts the photoresist into CO₂ and H₂O gas that is pumped away. It is preferred over wet stripping in modern fabs because it leaves no residue and avoids liquid waste handling.",
    animation: "strip",
    refs: [15, 16],
    layers: [
      SUBSTRATE,
      { id: "sio2_left",  x: 30,  y: 95, w: 155, h: 15, fill: COLORS.sio2 },
      { id: "sio2_right", x: 335, y: 95, w: 155, h: 15, fill: COLORS.sio2, label: "SiO₂ mask", labelX: 400, labelY: 105 },
    ],
  },
  {
    id: 7,
    title: "Ion Implantation",
    subtitle: "Dope the source and drain",
    description:
      "To make the transistor switch, we need to create electrically different regions of silicon. A beam of phosphorus or arsenic ions is accelerated to high energies (10–200 keV) and slammed into the exposed silicon. The ions embed themselves in the crystal lattice, donating extra electrons (making those regions n-type). These become the source and drain of the transistor. The oxide acts as a mask, shielding the channel region beneath it.",
    techNote:
      "After implantation, the wafer is annealed at 900–1000 °C in nitrogen to 'heal' the crystal damage caused by the ion bombardment and to electrically activate the implanted dopants (move them onto crystal lattice sites).",
    animation: "implant",
    refs: [15, 16, 17],
    layers: [
      SUBSTRATE,
      // n+ regions within silicon at left and right
      { id: "ndope_left",  x: 30,  y: 110, w: 155, h: 25, fill: COLORS.ndope },
      { id: "ndope_right", x: 335, y: 110, w: 155, h: 25, fill: COLORS.ndope, label: "n⁺ drain", labelX: 400, labelY: 126 },
      { id: "ndope_left_label", x: 30, y: 110, w: 155, h: 25, fill: "none", label: "n⁺ source", labelX: 107, labelY: 126 },
      { id: "sio2_left",  x: 30,  y: 95, w: 155, h: 15, fill: COLORS.sio2 },
      { id: "sio2_right", x: 335, y: 95, w: 155, h: 15, fill: COLORS.sio2, label: "SiO₂ mask", labelX: 400, labelY: 105 },
    ],
  },
  {
    id: 8,
    title: "Gate Oxide Growth",
    subtitle: "Grow the critical thin dielectric",
    description:
      "The heart of the MOSFET is an ultra-thin layer of silicon dioxide — the gate dielectric. It is grown by re-oxidizing the exposed channel region at high temperature. This layer is only 5–10 nm thick (in older processes; modern high-κ dielectrics can be as thin as 1 nm). Its job is to electrically isolate the metal gate from the silicon channel while still allowing the gate's electric field to reach through and control the flow of electrons.",
    techNote:
      "The 1998 Nobel laureate Horst Störmer noted that the SiO₂/Si interface is the most important interface in the world. For modern nodes below 45 nm, SiO₂ has been replaced by high-κ dielectrics such as hafnium oxide (HfO₂) to reduce quantum tunneling leakage.",
    animation: "gateOxide",
    refs: [15, 16, 18],
    layers: [
      SUBSTRATE,
      { id: "ndope_left",  x: 30,  y: 110, w: 155, h: 25, fill: COLORS.ndope, label: "n⁺", labelX: 107, labelY: 126 },
      { id: "ndope_right", x: 335, y: 110, w: 155, h: 25, fill: COLORS.ndope, label: "n⁺", labelX: 412, labelY: 126 },
      { id: "sio2_left",  x: 30,  y: 95, w: 155, h: 15, fill: COLORS.sio2 },
      { id: "sio2_right", x: 335, y: 95, w: 155, h: 15, fill: COLORS.sio2, label: "Field SiO₂", labelX: 412, labelY: 105 },
      // Gate oxide — thin, lighter violet
      { id: "gate_ox", x: 185, y: 100, w: 150, h: 10, fill: COLORS.gateOxide, label: "Gate SiO₂", labelX: 260, labelY: 95 },
    ],
  },
  {
    id: 9,
    title: "Gate Electrode & Metal Contacts",
    subtitle: "Complete the transistor",
    description:
      "A layer of polysilicon (or metal, in modern processes) is deposited over the gate oxide to form the gate electrode. Then, contact windows are opened through the oxide over the source and drain, and metal (aluminum or copper) is deposited and patterned. Three metal contacts now sit atop the three terminals — Source, Gate, and Drain. Apply a voltage to the gate contact and electrons flow through the channel from source to drain. The transistor is complete.",
    techNote:
      "This simplified view shows a planar NMOSFET. A real CMOS circuit would pair this with a PMOSFET in a p-well. Modern metallization uses copper with barrier layers of tantalum nitride, deposited by electroplating and planarized by chemical-mechanical planarization (CMP).",
    animation: "metal",
    refs: [15, 16, 17],
    layers: [
      SUBSTRATE,
      { id: "ndope_left",  x: 30,  y: 110, w: 155, h: 25, fill: COLORS.ndope },
      { id: "ndope_right", x: 335, y: 110, w: 155, h: 25, fill: COLORS.ndope },
      { id: "sio2_left",  x: 30,  y: 95, w: 155, h: 15, fill: COLORS.sio2 },
      { id: "sio2_right", x: 335, y: 95, w: 155, h: 15, fill: COLORS.sio2 },
      { id: "gate_ox", x: 185, y: 100, w: 150, h: 10, fill: COLORS.gateOxide, label: "Gate SiO₂", labelX: 260, labelY: 97 },
      // Gate
      { id: "gate", x: 185, y: 75, w: 150, h: 25, fill: COLORS.poly, label: "Gate", labelX: 260, labelY: 91 },
      // Metal contacts
      { id: "metal_s", x: 65,  y: 55, w: 70, h: 40, fill: COLORS.metal, label: "S", labelX: 100, labelY: 80, rx: 2 },
      { id: "metal_g", x: 225, y: 40, w: 70, h: 35, fill: COLORS.metal, label: "G", labelX: 260, labelY: 62, rx: 2 },
      { id: "metal_d", x: 365, y: 55, w: 70, h: 40, fill: COLORS.metal, label: "D", labelX: 400, labelY: 80, rx: 2 },
    ],
  },
];
