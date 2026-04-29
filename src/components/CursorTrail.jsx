import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const ring = ringRef.current
    const dot = dotRef.current
    const container = containerRef.current
    if (!ring || !dot || !container) return

    let particles = []
    let idCounter = 0
    let lastEmit = 0
    let rafId = null
    let mouseX = -200
    let mouseY = -200

    // ── Move cursor elements directly via style (no React state) ──
    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      ring.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`
      dot.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`

      const now = Date.now()
      if (now - lastEmit > 40) {
        lastEmit = now
        for (let i = 0; i < 2; i++) {
          const size = Math.random() * 6 + 2
          const color = Math.random() > 0.5 ? '#00FFFF' : '#FF007F'
          const dx = (Math.random() - 0.5) * 40
          const dy = (Math.random() - 0.5) * 40
          const x = mouseX + (Math.random() - 0.5) * 10
          const y = mouseY + (Math.random() - 0.5) * 10

          const el = document.createElement('div')
          el.style.cssText = `
            position: fixed;
            left: 0; top: 0;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: ${color};
            box-shadow: 0 0 ${size * 2}px ${color};
            pointer-events: none;
            z-index: 99998;
            transform: translate(${x - size / 2}px, ${y - size / 2}px);
            will-change: transform, opacity;
          `
          container.appendChild(el)

          const id = idCounter++
          const born = Date.now()
          particles.push({ el, x, y, dx, dy, size, born, id })
        }
      }
    }

    // ── rAF loop: update particle positions & fade out ──
    const tick = () => {
      const now = Date.now()
      particles = particles.filter(p => {
        const age = now - p.born
        if (age > 1200) {
          p.el.remove()
          return false
        }
        const t = age / 1200
        const opacity = 1 - t
        const scale = 1 - t
        const nx = p.x + p.dx * t
        const ny = p.y + p.dy * t
        p.el.style.opacity = opacity
        p.el.style.transform = `translate(${nx - p.size / 2}px, ${ny - p.size / 2}px) scale(${scale})`
        return true
      })
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      // Clean up any lingering particle elements
      particles.forEach(p => p.el.remove())
    }
  }, [])

  return (
    <>
      {/* Particle container – plain div, never re-renders */}
      <div ref={containerRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99998 }} />

      {/* Cursor ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: 'transparent',
          border: '2px solid #00FFFF',
          boxShadow: '0 0 8px #00FFFF',
          zIndex: 99999,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          willChange: 'transform',
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: '#00FFFF',
          boxShadow: '0 0 6px #00FFFF',
          zIndex: 99999,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />
    </>
  )
}
