import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import SocialIcons from './SocialIcons'

// ── Brand SVG icons ──────────────────────────────────────────────
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <path d="M11.9 2c-3.2 0-5 1.4-5 3.7V8h5v.8H5.1C3.3 8.8 2 10.5 2 12.8s1.3 3.7 3.1 3.7h1.7v-2c0-2 1.5-3.1 4.8-3.1h4.8c2 0 3.8-1.5 3.8-3.8V5.7C20.2 3.4 18.4 2 11.9 2zm-2.3 2.3a.7.7 0 110 1.4.7.7 0 010-1.4z" fill="#3776AB"/>
    <path d="M12.1 22c3.2 0 5-1.4 5-3.7V16h-5v-.8h6.8c1.8 0 3.1-1.7 3.1-4s-1.3-3.7-3.1-3.7h-1.7v2c0 2-1.5 3.1-4.8 3.1H7.6c-2 0-3.8 1.5-3.8 3.8v2.6C3.8 21.3 5.6 22 12.1 22zm2.3-2.3a.7.7 0 110-1.4.7.7 0 010 1.4z" fill="#FFD43B"/>
  </svg>
)

const CppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <rect width="24" height="24" rx="3" fill="#00599C"/>
    <path d="M6.2 15.6c-.6-.3-1.1-.8-1.4-1.4-.3-.6-.5-1.4-.5-2.2s.2-1.6.5-2.2c.3-.6.8-1.1 1.4-1.4.6-.3 1.3-.5 2.1-.5.6 0 1.2.1 1.7.3.5.2.9.5 1.2.9l-1 1c-.4-.5-.9-.8-1.7-.8-.5 0-.9.1-1.3.3-.4.2-.6.5-.8.9-.2.4-.3.9-.3 1.5s.1 1.1.3 1.5c.2.4.5.7.8.9.4.2.8.3 1.3.3.8 0 1.3-.3 1.7-.8l1 1c-.3.4-.7.7-1.2.9-.5.2-1.1.3-1.7.3-.8 0-1.5-.2-2.1-.5zM13 13.5V12h-1.5v-1.5H13V9h1.5v1.5H16V12h-1.5v1.5H13zm4 0V12h-1.5v-1.5H17V9h1.5v1.5H20V12h-1.5v1.5H17z" fill="white"/>
  </svg>
)

const JSIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <rect width="24" height="24" fill="#F7DF1E"/>
    <path d="M7.5 18.2c.4.8 1 1.4 2.2 1.4 1.2 0 2-.7 2-1.8V12H10v5.7c0 .5-.3.7-.6.7-.4 0-.6-.2-.8-.6l-1 .4zm5.8-.2c.5.9 1.4 1.5 2.8 1.5 1.5 0 2.5-.8 2.5-2 0-1.1-.6-1.7-1.9-2.2l-.6-.3c-.6-.3-.9-.5-.9-.9 0-.3.3-.6.7-.6s.7.2 1 .7l1.2-.8c-.5-.9-1.2-1.3-2.2-1.3-1.4 0-2.4.8-2.4 2 0 1.1.7 1.7 1.8 2.2l.6.3c.7.3 1 .5 1 1 0 .5-.4.8-.9.8-.7 0-1.1-.4-1.4-.9L13.3 18z" fill="#323232"/>
  </svg>
)

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 6c-2.7 0-4.4 1.4-5 4.1 1-1.4 2.1-1.9 3.3-1.6.7.2 1.2.8 1.8 1.5.9 1 2 2.1 4.2 2.1 2.7 0 4.4-1.4 5-4.1-1 1.4-2.1 1.9-3.3 1.6-.7-.2-1.2-.8-1.8-1.5C15.3 7.1 14.2 6 12 6zM7 12c-2.7 0-4.4 1.4-5 4.1 1-1.4 2.1-1.9 3.3-1.6.7.2 1.2.8 1.8 1.5.9 1 2 2.1 4.2 2.1 2.7 0 4.4-1.4 5-4.1-1 1.4-2.1 1.9-3.3 1.6-.7-.2-1.2-.8-1.8-1.5C10.3 13.1 9.2 12 7 12z" fill="#06B6D4"/>
  </svg>
)

const CSSIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M1.5 0l1.9 21.5L12 24l8.6-2.5L22.5 0z" fill="#264DE4"/>
    <path d="M12 22.1l6.9-1.9 1.6-18.2H12z" fill="#2965F1"/>
    <path d="M12 10.5H8l.2 2.2 3.8.9v3.3l-3.8-1-.2-2.5H5.8l.4 4.9L12 19.6v-3.3l-3.6-.9-.1-1.6H12v-3.3zm0-6.4H4L4.3 7H12V4.1z" fill="#fff"/>
    <path d="M12 10.5v3.3h3.5l-.3 3.5L12 18.3v3.3l5.8-1.7.1-.1 1-11.3H12z" fill="#EBEBEB"/>
  </svg>
)

const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M1.5 0l1.9 21.5L12 24l8.6-2.5L22.5 0z" fill="#E34F26"/>
    <path d="M12 22.1l6.9-1.9 1.6-18.2H12z" fill="#EF652A"/>
    <path d="M12 10.5H7.7l-.3-3.2H12V4.1H3.9l.9 9.6H12v-3.2zm0 7.4l-.1.1-3.7-1-.2-2.6H4.8l.4 5L12 21v-3.1z" fill="#fff"/>
    <path d="M12 10.5v3.2h4l-.4 4.1-3.6 1v3.1l6.6-1.8.1-.1 1.1-12.3H12V10.5z" fill="#EBEBEB"/>
  </svg>
)

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
  </svg>
)

const APIIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <circle cx="5" cy="12" r="3" stroke="#888" strokeWidth="1.5"/>
    <circle cx="19" cy="6" r="3" stroke="#AA44FF" strokeWidth="1.5"/>
    <circle cx="19" cy="18" r="3" stroke="#AA44FF" strokeWidth="1.5"/>
    <path d="M8 11l8-4M8 13l8 4" stroke="#888" strokeWidth="1.2"/>
  </svg>
)

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <ellipse cx="12" cy="8" rx="5.5" ry="6.5" fill="#FCC624"/>
    <ellipse cx="12" cy="8" rx="4" ry="5" fill="#FCC624"/>
    <circle cx="10" cy="7.5" r="1.2" fill="#1a1a1a"/>
    <circle cx="14" cy="7.5" r="1.2" fill="#1a1a1a"/>
    <ellipse cx="12" cy="10.5" rx="1.2" ry=".7" fill="#FF8800"/>
    <ellipse cx="12" cy="17" rx="5.5" ry="4.5" fill="#1a1a1a"/>
    <ellipse cx="12" cy="16.5" rx="3.5" ry="3" fill="#FCC624"/>
    <path d="M7 14.5c-1.5 1-2 2.5-1.5 3.5M17 14.5c1.5 1 2 2.5 1.5 3.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const PuzzleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <path d="M13 2a1 1 0 00-1 1v1H8a1 1 0 00-1 1v4H6a1 1 0 000 2h1v4a1 1 0 001 1h4v1a1 1 0 002 0v-1h4a1 1 0 001-1v-4h1a1 1 0 000-2h-1V5a1 1 0 00-1-1h-4V3a1 1 0 00-1-1z" fill="#FF6B6B" fillOpacity="0.9" stroke="#FF6B6B" strokeWidth="0.5"/>
  </svg>
)

// ── Tech data ────────────────────────────────────────────────────
const techIcons = [
  { name: 'Python',          color: '#3776AB', Icon: PythonIcon,  x: 42, y: 18 },
  { name: 'C++',             color: '#00599C', Icon: CppIcon,     x: 18, y: 30 },
  { name: 'JS',              color: '#F7DF1E', Icon: JSIcon,      x: 56, y: 30 },
  { name: 'Tailwind',        color: '#06B6D4', Icon: TailwindIcon, x: 72, y: 22 },
  { name: 'CSS',             color: '#264DE4', Icon: CSSIcon,     x: 15, y: 48 },
  { name: 'HTML',            color: '#E34F26', Icon: HTMLIcon,    x: 44, y: 50 },
  { name: 'React',           color: '#61DAFB', Icon: ReactIcon,   x: 66, y: 48 },
  { name: "API's",           color: '#AA44FF', Icon: APIIcon,     x: 25, y: 65 },
  { name: 'CSS3',            color: '#264DE4', Icon: CSSIcon,     x: 44, y: 70 },
  { name: 'Problem\nSolving',color: '#FF6B6B', Icon: PuzzleIcon,  x: 58, y: 65 },
  { name: 'Linux',           color: '#FCC624', Icon: LinuxIcon,   x: 72, y: 58 },
]

// ── Draggable capsule ────────────────────────────────────────────
function FloatingIcon({ tech, delay, containerRef }) {
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragMomentum={false}
      dragElastic={0.05}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.15 }}
      style={{
        position: 'absolute',
        left: `${tech.x}%`,
        top: `${tech.y}%`,
        translateX: '-50%',
        translateY: '-50%',
        cursor: 'none',
        zIndex: 10,
        touchAction: 'none',
        userSelect: 'none',
      }}
    >
      <motion.div
        whileHover={{ boxShadow: `0 0 20px ${tech.color}, 0 0 40px ${tech.color}80` }}
        className="flex items-center gap-2 px-3 py-2 rounded-xl"
        style={{
          background: 'rgba(10, 10, 30, 0.85)',
          border: `1px solid ${tech.color}60`,
          boxShadow: `0 0 8px ${tech.color}30`,
          backdropFilter: 'blur(8px)',
          minWidth: 80,
          whiteSpace: 'nowrap',
        }}
      >
        <tech.Icon />
        <span
          className="font-poppins font-semibold text-xs"
          style={{ color: tech.color, textShadow: `0 0 6px ${tech.color}` }}
        >
          {tech.name}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function StackSection() {
  const navigate = useNavigate()
  const containerRef = useRef(null)

  const scrollToContact = () => navigate('/get-in-touch')
  const goExperience = () => navigate('/experience')

  return (
    <section id="stack" className="relative py-20" style={{ zIndex: 1 }}>
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="font-orbitron font-black mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, #00FFFF, #9900FF, #FF007F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 15px rgba(0,255,255,0.4))',
            }}
          >
            Habib's Stack
          </h2>
          <p className="font-poppins text-gray-300 max-w-lg mx-auto">
            A curated collection of technologies I leverage to build scalable AI systems and elegant web experiences.
          </p>
        </motion.div>

        {/* Circuit board frame */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mb-12"
          style={{ maxWidth: 700, height: 380 }}
        >
          {/* Circuit SVG border */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 700 380"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="cyanPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="50%" stopColor="#9900FF" />
                <stop offset="100%" stopColor="#FF007F" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect x="10" y="10" width="680" height="360" rx="20" ry="20"
              fill="none" stroke="url(#cyanPurple)" strokeWidth="2" filter="url(#glow)" opacity="0.8"/>
            <path d="M30,10 L10,10 L10,30" fill="none" stroke="#00FFFF" strokeWidth="3" filter="url(#glow)"/>
            <path d="M670,10 L690,10 L690,30" fill="none" stroke="#00FFFF" strokeWidth="3" filter="url(#glow)"/>
            <path d="M30,370 L10,370 L10,350" fill="none" stroke="#FF007F" strokeWidth="3" filter="url(#glow)"/>
            <path d="M670,370 L690,370 L690,350" fill="none" stroke="#FF007F" strokeWidth="3" filter="url(#glow)"/>
            <line x1="100" y1="10" x2="200" y2="10" stroke="#00FFFF" strokeWidth="1" opacity="0.4"/>
            <line x1="200" y1="10" x2="200" y2="-5" stroke="#00FFFF" strokeWidth="1" opacity="0.4"/>
            <line x1="500" y1="10" x2="600" y2="10" stroke="#9900FF" strokeWidth="1" opacity="0.4"/>
            <line x1="120" y1="370" x2="250" y2="370" stroke="#FF007F" strokeWidth="1" opacity="0.4"/>
            <line x1="450" y1="370" x2="580" y2="370" stroke="#9900FF" strokeWidth="1" opacity="0.4"/>
            <circle cx="200" cy="10" r="3" fill="#00FFFF" opacity="0.8" filter="url(#glow)"/>
            <circle cx="500" cy="10" r="3" fill="#9900FF" opacity="0.8" filter="url(#glow)"/>
            <circle cx="250" cy="370" r="3" fill="#FF007F" opacity="0.8" filter="url(#glow)"/>
            <circle cx="450" cy="370" r="3" fill="#9900FF" opacity="0.8" filter="url(#glow)"/>
          </svg>

          {/* Background inside frame */}
          <div
            className="absolute"
            style={{
              inset: '12px',
              background: 'rgba(0,0,20,0.85)',
              borderRadius: '16px',
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Draggable icons */}
          {techIcons.map((tech, i) => (
            <FloatingIcon
              key={`${tech.name}-${i}`}
              tech={tech}
              delay={0.3 + i * 0.08}
              containerRef={containerRef}
            />
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,255,255,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="font-poppins font-semibold px-8 py-3 rounded-full text-sm"
            style={{
              background: 'linear-gradient(135deg, #0066FF, #00FFFF)',
              color: '#03030F',
              cursor: 'none',
              boxShadow: '0 0 15px rgba(0,255,255,0.35)',
            }}
          >
            Let's Get in Touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#00FFFF', color: '#00FFFF' }}
            whileTap={{ scale: 0.97 }}
            onClick={goExperience}
            className="font-poppins font-semibold px-8 py-3 rounded-full text-sm text-white transition-all"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.35)',
              cursor: 'none',
            }}
          >
            My Experience
          </motion.button>
        </motion.div>

        {/* Footer icons */}
        <FooterSocials />
      </div>
    </section>
  )
}

function FooterSocials() {
  return (
    <div className="flex justify-center">
      <SocialIcons size={22} gap={6} />
    </div>
  )
}
