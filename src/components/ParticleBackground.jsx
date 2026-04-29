import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create stars
    const starCount = 180
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      alpha: Math.random() * 0.8 + 0.2,
      twinkle: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    }))

    // Nebula blobs — gradients cached at init, not recreated per frame
    const nebulaBlobs = [
      { x: canvas.width * 0.15, y: canvas.height * 0.3, r: 300, color: '0, 80, 180' },
      { x: canvas.width * 0.85, y: canvas.height * 0.6, r: 250, color: '180, 0, 100' },
      { x: canvas.width * 0.5, y: canvas.height * 0.1, r: 200, color: '60, 0, 120' },
      { x: canvas.width * 0.7, y: canvas.height * 0.85, r: 180, color: '0, 120, 80' },
    ]
    const nebulaGrads = nebulaBlobs.map(blob => {
      const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r)
      grad.addColorStop(0, `rgba(${blob.color}, 0.12)`)
      grad.addColorStop(0.5, `rgba(${blob.color}, 0.05)`)
      grad.addColorStop(1, `rgba(${blob.color}, 0)`)
      return grad
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Deep space bg
      ctx.fillStyle = '#03030F'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Nebula — use pre-built gradients
      nebulaGrads.forEach(grad => {
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      // Stars
      stars.forEach(s => {
        s.alpha += s.twinkle * s.twinkleDir
        if (s.alpha > 1 || s.alpha < 0.1) s.twinkleDir *= -1
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`
        ctx.fill()
      })

      // Waveform lines (cyan)
      ctx.save()
      ctx.globalAlpha = 0.15
      const time = Date.now() * 0.0005
      ctx.beginPath()
      for (let x = 0; x < canvas.width; x += 4) {
        const y = canvas.height * 0.65 + Math.sin(x * 0.008 + time) * 40 + Math.sin(x * 0.02 + time * 1.5) * 20
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = '#00FFFF'
      ctx.lineWidth = 1
      ctx.stroke()

      // Waveform lines (purple)
      ctx.beginPath()
      for (let x = 0; x < canvas.width; x += 4) {
        const y = canvas.height * 0.72 + Math.sin(x * 0.01 + time * 0.8 + 1) * 35 + Math.sin(x * 0.025 + time) * 15
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = '#9900FF'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.restore()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
