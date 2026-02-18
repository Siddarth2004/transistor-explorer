import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    /* ── Renderer ─────────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const W = () => canvas.clientWidth
    const H = () => canvas.clientHeight
    renderer.setSize(W(), H(), false)

    /* ── Scene / Camera ───────────────────────────────────────────── */
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, W() / H(), 0.1, 100)
    camera.position.set(0, 0, 12)

    /* ── Particles ────────────────────────────────────────────────── */
    const COUNT       = 220
    const HALF        = 9        // bounding box half-size
    const CONNECT     = 2.6      // connection threshold
    const MAX_SEGS    = 3500     // max line segments

    const pPos = new Float32Array(COUNT * 3)
    const pVel = new Float32Array(COUNT * 3)

    for (let i = 0; i < COUNT; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * HALF * 2
      pPos[i * 3 + 1] = (Math.random() - 0.5) * HALF * 2
      pPos[i * 3 + 2] = (Math.random() - 0.5) * HALF * 2
      pVel[i * 3]     = (Math.random() - 0.5) * 0.007
      pVel[i * 3 + 1] = (Math.random() - 0.5) * 0.007
      pVel[i * 3 + 2] = (Math.random() - 0.5) * 0.005
    }

    const ptGeo = new THREE.BufferGeometry()
    ptGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))

    const ptMat = new THREE.PointsMaterial({
      color: 0x1d4ed8,
      size: 0.075,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    })
    scene.add(new THREE.Points(ptGeo, ptMat))

    /* ── Connection Lines ─────────────────────────────────────────── */
    const linePos = new Float32Array(MAX_SEGS * 6)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3))

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0369a1,
      transparent: true,
      opacity: 0.25,
    })
    const lineSegs = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lineSegs)

    /* ── Mouse ────────────────────────────────────────────────────── */
    const onMouse = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    /* ── Resize ───────────────────────────────────────────────────── */
    const onResize = () => {
      renderer.setSize(W(), H(), false)
      camera.aspect = W() / H()
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    /* ── Animation ────────────────────────────────────────────────── */
    let rafId
    const DIST2 = CONNECT * CONNECT

    const animate = () => {
      rafId = requestAnimationFrame(animate)

      /* move particles */
      for (let i = 0; i < COUNT; i++) {
        pPos[i * 3]     += pVel[i * 3]
        pPos[i * 3 + 1] += pVel[i * 3 + 1]
        pPos[i * 3 + 2] += pVel[i * 3 + 2]
        if (Math.abs(pPos[i * 3])     > HALF) pVel[i * 3]     *= -1
        if (Math.abs(pPos[i * 3 + 1]) > HALF) pVel[i * 3 + 1] *= -1
        if (Math.abs(pPos[i * 3 + 2]) > HALF) pVel[i * 3 + 2] *= -1
      }
      ptGeo.attributes.position.needsUpdate = true

      /* update connections */
      let li = 0
      loop:
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = pPos[i*3]   - pPos[j*3]
          const dy = pPos[i*3+1] - pPos[j*3+1]
          const dz = pPos[i*3+2] - pPos[j*3+2]
          if (dx*dx + dy*dy + dz*dz < DIST2) {
            linePos[li++] = pPos[i*3];   linePos[li++] = pPos[i*3+1]; linePos[li++] = pPos[i*3+2]
            linePos[li++] = pPos[j*3];   linePos[li++] = pPos[j*3+1]; linePos[li++] = pPos[j*3+2]
            if (li >= MAX_SEGS * 6) break loop
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true
      lineGeo.setDrawRange(0, li / 3)

      /* camera parallax */
      camera.position.x += (mouseRef.current.x * 1.8 - camera.position.x) * 0.025
      camera.position.y += (-mouseRef.current.y * 1.8 - camera.position.y) * 0.025
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    /* ── Cleanup ──────────────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      ptGeo.dispose()
      lineGeo.dispose()
      ptMat.dispose()
      lineMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      {/* radial gradient vignette on top of canvas */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 74% 64% at 50% 50%, rgba(210,227,252,0) 24%, rgba(241,248,255,1) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="hero-content">
        <p className="hero-kicker">The transistor</p>
        <h1 className="hero-title">
          The invention that{' '}
          <span className="hero-accent">changes everything</span>
          <br />
          <span className="hero-dayline">every single day</span>
        </h1>
      </div>

      <div className="hero-scroll" aria-hidden="true">scroll to explore ↓</div>
    </section>
  )
}
