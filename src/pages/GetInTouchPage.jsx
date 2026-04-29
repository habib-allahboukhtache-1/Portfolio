import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import KHBLogo from '../components/KHBLogo'
import myPhoto from '../assets/me.png'
import SocialIcons from '../components/SocialIcons'

function PulsingHeadshot() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 260, height: 260 }}>
      {/* Outer pulse rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 220 + i * 20,
            height: 220 + i * 20,
            borderRadius: '50%',
            border: `1px solid rgba(${i === 1 ? '0,255,255' : i === 2 ? '150,0,255' : '255,0,127'}, 0.3)`,
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main circle */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(0,255,255,0.4), 0 0 40px rgba(150,0,255,0.2)',
            '0 0 35px rgba(0,255,255,0.7), 0 0 70px rgba(150,0,255,0.4)',
            '0 0 20px rgba(0,255,255,0.4), 0 0 40px rgba(150,0,255,0.2)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(30,10,50,0.9) 0%, rgba(10,5,25,0.95) 70%)',
          border: '2px solid transparent',
          backgroundClip: 'padding-box',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5,
        }}
      >
        {/* Gradient border via pseudo - using box approach */}
        <div style={{
          position: 'absolute',
          inset: -2,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00FFFF, #9900FF, #FF007F)',
          zIndex: -1,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(30,10,50,0.95), rgba(10,5,25,0.98))',
          zIndex: 0,
        }} />
        <img
          src={myPhoto}
          alt="Habib Headshot"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </motion.div>
    </div>
  )
}

function CircuitFormFrame({ children }) {
  return (
    <div className="relative p-5">
      {/* Corner decorations */}
      {['tl', 'tr', 'bl', 'br'].map(pos => (
        <svg
          key={pos}
          width="30"
          height="30"
          style={{
            position: 'absolute',
            ...(pos.includes('t') ? { top: 0 } : { bottom: 0 }),
            ...(pos.includes('l') ? { left: 0 } : { right: 0 }),
            transform: `scale(${pos.includes('r') ? -1 : 1}, ${pos.includes('b') ? -1 : 1})`,
          }}
          viewBox="0 0 30 30"
        >
          <path d="M3,3 L15,3 L15,5 L5,5 L5,15 L3,15 Z" fill="#00FFFF" opacity="0.6" />
        </svg>
      ))}

      <div
        style={{
          border: '1px solid rgba(0,255,255,0.25)',
          borderRadius: 12,
          padding: '24px',
          background: 'rgba(5,5,20,0.6)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 30px rgba(0,255,255,0.1)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function GetInTouchPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', inquiry: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email) {
      setSubmitted(true)
      setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', inquiry: '' }) }, 3000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Header */}
      <div className="flex items-center px-8 pt-6 pb-2 gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
          style={{ cursor: 'none' }}
        >
          <KHBLogo size={70} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-baseline gap-3 flex-wrap"
        >
          <span
            className="font-orbitron font-black"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              background: 'linear-gradient(90deg, #9900FF, #FF007F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 10px rgba(150,0,255,0.6))',
            }}
          >
            I'm Habib
          </span>
          <span
            className="font-orbitron font-black"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              color: '#00FFFF',
              textShadow: '0 0 15px #00FFFF, 0 0 30px rgba(0,255,255,0.5)',
            }}
          >
            let's get in touch!
          </span>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center px-8 py-4 gap-10">
        {/* Left: headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <PulsingHeadshot />
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 max-w-xl"
        >
          <p className="font-poppins text-gray-300 text-sm leading-relaxed mb-6">
            I'm always excited to explore new full-stack engineering, AI development, and creative problem-solving opportunities.
            Whether you have a complex challenge, an innovative idea, or simply want to connect to discuss the future of tech, I'd love to hear from you.
          </p>

          <CircuitFormFrame>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="cyber-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="cyber-input"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <textarea
                  name="inquiry"
                  value={form.inquiry}
                  onChange={handleChange}
                  placeholder="Describe Your Project or Inquiry"
                  rows={4}
                  className="cyber-input resize-none"
                />
                {/* Subtle grid texture overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,255,0.02) 0px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(0,255,255,0.02) 0px, transparent 1px, transparent 20px)',
                  borderRadius: 8,
                  pointerEvents: 'none',
                }} />
              </div>
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(150,0,255,0.6)' }}
                  whileTap={{ scale: 0.97 }}
                  className="font-poppins font-semibold text-sm px-8 py-3 rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, #5500AA, #9900FF)',
                    color: 'white',
                    cursor: 'none',
                    boxShadow: '0 0 15px rgba(150,0,255,0.4)',
                    border: '1px solid rgba(150,0,255,0.5)',
                  }}
                >
                  {submitted ? '✓ Sent Successfully!' : 'Submit Inquiry'}
                </motion.button>
              </div>
            </form>
          </CircuitFormFrame>
        </motion.div>
      </div>

      {/* Social footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col items-center gap-4 py-6"
      >
        <SocialIcons size={22} gap={8} showLabels />
        <p className="font-poppins text-xs text-gray-500">
          Built by me, made with love ❤️
        </p>
      </motion.footer>

      {/* Sparkle */}
      <div className="absolute bottom-6 right-8">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: 'white', fontSize: 28, filter: 'drop-shadow(0 0 8px white)' }}
        >✦</motion.div>
      </div>
    </motion.div>
  )
}
