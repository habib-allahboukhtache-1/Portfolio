import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SocialIcons from './SocialIcons'

const faqs = [
  { q: 'What is your area of technical specialization?', x: 8, y: 12, w: 200 },
  { q: 'What tech stack are you most experienced with?', x: 52, y: 8, w: 210 },
  { q: 'How can I see more in-depth project details?', x: 24, y: 34, w: 215 },
  { q: 'How do I initiate a conversation for collaboration?', x: 60, y: 32, w: 220 },
  { q: 'Can you contrast your experience with Data Science and Algorithm Optimization?', x: 36, y: 54, w: 250 },
  { q: 'What is your location and remote availability?', x: 72, y: 52, w: 215 },
  { q: 'Are you open to freelance or full-time roles?', x: 10, y: 68, w: 210 },
  { q: 'What are your future technical goals?', x: 52, y: 74, w: 195 },
]

function CloudBubble({ faq, delay, onClick, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      animate={{ y: [0, -6, 0] }}
      style={{
        position: 'absolute',
        left: `${faq.x}%`,
        top: `${faq.y}%`,
        width: faq.w,
        cursor: 'none',
        zIndex: isActive ? 20 : 2,
      }}
    >
      {/* Cloud SVG + content */}
      <div
        onClick={() => onClick(faq.q)}
        className="relative px-5 py-4 rounded-3xl text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(80,60,180,0.35) 0%, rgba(60,40,140,0.28) 50%, rgba(100,60,200,0.35) 100%)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(160, 100, 255, 0.5)',
          boxShadow: isActive
            ? '0 0 30px rgba(120,80,255,0.6), 0 0 60px rgba(0,255,255,0.2), inset 0 0 20px rgba(100,150,255,0.1)'
            : '0 0 20px rgba(120,80,200,0.3), inset 0 0 15px rgba(100,150,255,0.05)',
          borderRadius: '50% 50% 48% 52% / 55% 55% 45% 45%',
        }}
      >
        {/* Inner gem highlight */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '20%',
            width: '60%',
            height: '30%',
            background: 'linear-gradient(135deg, rgba(200,180,255,0.15), transparent)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <p
          className="font-poppins text-xs font-medium leading-snug relative z-10"
          style={{ color: 'rgba(220,210,255,0.95)', textShadow: '0 0 8px rgba(180,130,255,0.6)' }}
        >
          {faq.q}
        </p>
      </div>

      {/* Small bumps for cloud shape */}
      <div
        style={{
          position: 'absolute',
          top: -10,
          left: '20%',
          width: 30,
          height: 24,
          borderRadius: '50%',
          background: 'rgba(80,60,180,0.3)',
          border: '1px solid rgba(160,100,255,0.3)',
          backdropFilter: 'blur(14px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -16,
          left: '40%',
          width: 40,
          height: 30,
          borderRadius: '50%',
          background: 'rgba(80,60,180,0.3)',
          border: '1px solid rgba(160,100,255,0.3)',
          backdropFilter: 'blur(14px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -10,
          right: '20%',
          width: 28,
          height: 22,
          borderRadius: '50%',
          background: 'rgba(80,60,180,0.3)',
          border: '1px solid rgba(160,100,255,0.3)',
          backdropFilter: 'blur(14px)',
        }}
      />
    </motion.div>
  )
}

export default function FAQSection() {
  const [activeQ, setActiveQ] = useState(null)
  const [question, setQuestion] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (question.trim()) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setQuestion('')
    }
  }

  return (
    <section id="faq" className="relative py-20" style={{ zIndex: 1, minHeight: '90vh' }}>
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <h2
            className="font-orbitron font-black"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              background: 'linear-gradient(135deg, #00FFFF, #9900FF, #FF007F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 15px rgba(0,255,255,0.4))',
            }}
          >
            FAQ (Frequently Asked Questions)
          </h2>
        </motion.div>

        {/* Cloud field */}
        <div className="relative" style={{ height: 480 }}>
          {faqs.map((faq, i) => (
            <CloudBubble
              key={i}
              faq={faq}
              delay={0.1 + i * 0.09}
              onClick={setActiveQ}
              isActive={activeQ === faq.q}
            />
          ))}

          {/* Active answer panel */}
          <AnimatePresence>
            {activeQ && (
              <motion.div
                key={activeQ}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 340,
                  padding: '16px 20px',
                  background: 'rgba(10,5,30,0.92)',
                  border: '1px solid rgba(0,255,255,0.4)',
                  borderRadius: 12,
                  boxShadow: '0 0 20px rgba(0,255,255,0.3)',
                  zIndex: 30,
                  backdropFilter: 'blur(20px)',
                }}
              >
                <p className="font-poppins text-xs text-gray-300 mb-2">{activeQ}</p>
                <p className="font-poppins text-xs text-cyan-300">
                  Feel free to reach out via the Get in Touch page for a detailed answer!
                </p>
                <button
                  onClick={() => setActiveQ(null)}
                  style={{ position: 'absolute', top: 8, right: 12, color: '#666', background: 'none', border: 'none', cursor: 'none', fontSize: 16 }}
                >×</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question input */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-6"
        >
          <div
            className="flex items-center overflow-hidden"
            style={{
              background: 'rgba(5,5,20,0.85)',
              border: '1px solid rgba(150,100,255,0.4)',
              borderRadius: 50,
              boxShadow: '0 0 20px rgba(120,80,200,0.2)',
              backdropFilter: 'blur(10px)',
              maxWidth: 480,
              width: '100%',
            }}
          >
            <input
              type="text"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Your Question..."
              className="flex-1 bg-transparent text-white text-sm font-poppins px-6 py-3 outline-none"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              className="font-poppins font-semibold text-sm px-6 py-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #0066FF, #9900FF)',
                color: 'white',
                margin: 4,
                cursor: 'none',
                boxShadow: '0 0 15px rgba(0,100,255,0.4)',
              }}
            >
              {submitted ? '✓ Sent!' : 'Submit'}
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mt-8"
        >
          <SocialIcons size={22} gap={6} />
        </motion.div>

        {/* Sparkle */}
        <div className="flex justify-end">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: 'white', fontSize: 28, filter: 'drop-shadow(0 0 8px white)' }}
          >
            ✦
          </motion.div>
        </div>
      </div>
    </section>
  )
}
