# Transistor Explorer

Educational single-page web app about the history and fabrication of the transistor.

## Tech Stack

- React 18 + Vite 5 (JavaScript/JSX, no TypeScript)
- Three.js for 3D hero animation
- Leaflet for interactive map (loaded via CDN, not bundled)
- Deployed on Vercel at transistor-explorer.com

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx        # 3D particle network animation (Three.js)
│   ├── Nav.jsx         # Fixed frosted-glass navigation bar
│   ├── Timeline.jsx    # Interactive map timeline with playback
│   ├── Fabrication.jsx # Step-by-step MOSFET fabrication SVGs
│   └── References.jsx  # Academic citations grid
├── data/
│   ├── timeline.js     # 15 historical events (1947–2026)
│   └── fabrication.js  # 10 fabrication steps with SVG layer defs
├── App.jsx             # Main layout shell
├── main.jsx            # React entry point
└── index.css           # Global styles and design system
```

## Commands

- `npm run dev` — Start dev server (localhost:5173)
- `npm run build` — Production build to /dist
- `npm run preview` — Preview production build

## Architecture

- **No router** — single page with anchor hash navigation
- **No state library** — pure React hooks (useState, useEffect, useRef, useCallback)
- **Data-driven** — all content lives in `src/data/`, not hardcoded in components
- **SVG animations** — fabrication visuals are hand-coded SVG with CSS transitions
- **CDN loading** — Leaflet loaded dynamically to reduce bundle size

## Design System

- Dark blue backgrounds (#0e0e1f → #191948), gold accents (#c49a3c)
- Fonts: Sora (headings), Manrope (body) via Google Fonts
- Responsive breakpoints: 640px, 900px, 1024px

## Conventions

- Pure JavaScript/JSX — no TypeScript
- CSS custom properties for theming (all in index.css)
- Component state kept local — no context providers or global stores
- Every historical claim must have a citation in References
- Leaflet map instance stored in ref with cleanup via `map.__cleanup`
- Three.js uses pre-allocated Float32Array buffers for performance
