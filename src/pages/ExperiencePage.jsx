import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import KHBLogo from '../components/KHBLogo'
import SocialIcons from '../components/SocialIcons'

const experiences = [
  {
    title: 'Academic Experience (BAC)',
    color: '#00FFFF',
    content: `I demonstrated exceptional academic prowess, achieving a BAC score of 19.38/20, ranking 1st in the Oran province and 8th nationally across over 800,000 students in 20 Algeria 25. Honored by the Provincial Wali, this performance was the key to my entry into ENSIA.`,
  },
  {
    title: 'University Path & AI Journey',
    color: '#00FFFF',
    content: `I am now pursuing a rigorous degree at the National Higher School of Artificial Intelligence (ENSIA). My studies are focused on large-scale data analysis, advanced machine learning models, and cutting-edge algorithmic solutions. With a passion for creation and a deep curiosity, I aim to push the boundaries of AI, developing scalable systems that innovate and create positive change.`,
  },
  {
    title: 'Professional life & skills',
    color: '#00FFFF',
    content: `I'm constantly converting my diverse technical skill set—including C++, Python, JavaScript, HTML, CSS, Tailwind, and React, alongside API development and advanced problem-solving—into real-world solutions. Diving into the dynamic freelance landscape and building complex projects, I leverage these skills to craft elegant and performant web experiences. I am passionate about the intersection of tech and creation, always striving to build impactful and innovational systems.`,
  },
]

function CircuitCorner({ position }) {
  const corners = {
    'top-left': { top: 0, left: 0 },
    'top-right': { top: 0, right: 0, transform: 'scaleX(-1)' },
    'bottom-left': { bottom: 0, left: 0, transform: 'scaleY(-1)' },
    'bottom-right': { bottom: 0, right: 0, transform: 'scale(-1)' },
  }
  const style = corners[position]

  return (
    <svg width="80" height="80" style={{ position: 'absolute', ...style, zIndex: 2 }} viewBox="0 0 80 80">
      <path d="M5,5 L30,5 L30,8 L8,8 L8,30 L5,30 Z" fill="#00FFFF" opacity="0.7"/>
      <line x1="30" y1="5" x2="60" y2="5" stroke="#00FFFF" strokeWidth="1" opacity="0.3"/>
      <line x1="8" y1="30" x2="8" y2="60" stroke="#00FFFF" strokeWidth="1" opacity="0.3"/>
      <circle cx="30" cy="5" r="2" fill="#00FFFF" opacity="0.8"/>
      <circle cx="8" cy="30" r="2" fill="#00FFFF" opacity="0.8"/>
    </svg>
  )
}

function ExperienceItem({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-gray-800 last:border-b-0 last:mb-0"
    >
      <h3
        className="font-poppins font-bold text-base sm:text-xl mb-3"
        style={{ color: exp.color, textShadow: `0 0 15px ${exp.color}80, 0 0 30px ${exp.color}40` }}
      >
        {exp.title}
      </h3>
      <p className="font-poppins text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
        {exp.content}
      </p>
    </motion.div>
  )
}

export default function ExperiencePage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Header */}
      <div className="flex items-center px-4 sm:px-8 pt-6 pb-4 gap-3 sm:gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          style={{ cursor: 'none', flexShrink: 0 }}
          title="Back to Home"
        >
          <KHBLogo size={50} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-orbitron font-black"
          style={{
            fontSize: 'clamp(1.3rem, 4.5vw, 3.5rem)',
            background: 'linear-gradient(135deg, #00FFFF 0%, #9900FF 50%, #FF007F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 15px rgba(0,255,255,0.5))',
          }}
        >
          Habib's Experiences
        </motion.h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex justify-center px-4 sm:px-8 py-4 sm:py-6">
        <div className="w-full max-w-2xl">
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} exp={exp} index={i} />
          ))}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,255,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                navigate('/')
                setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)
              }}
              className="font-poppins font-semibold px-8 py-3 rounded-full text-sm"
              style={{ background: 'linear-gradient(135deg, #0066FF, #00FFFF)', color: '#03030F', cursor: 'none', boxShadow: '0 0 15px rgba(0,255,255,0.4)' }}
            >
              Explore Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#00FFFF', color: '#00FFFF' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/get-in-touch')}
              className="font-poppins font-semibold px-8 py-3 rounded-full text-sm text-white transition-all"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.35)', cursor: 'none' }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center gap-6 py-6"
      >
        <SocialIcons size={20} gap={6} />
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
