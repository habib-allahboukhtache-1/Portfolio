import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import myPhotosquare from '../assets/square.jpg'

const SYMBOLS = [
  { sym: '< />', color: '#00FFFF', left: '5%',  top: '10%', dur: 7,  dx: [0,12,-8,0],  dy: [0,-15,8,0] },
  { sym: '{ }',  color: '#9900FF', left: '88%', top: '8%',  dur: 9,  dx: [0,-10,6,0],  dy: [0,12,-10,0] },
  { sym: '[ ]',  color: '#00FFFF', left: '92%', top: '55%', dur: 8,  dx: [0,-14,4,0],  dy: [0,-8,12,0] },
  { sym: '∫',    color: '#FF007F', left: '4%',  top: '65%', dur: 11, dx: [0,10,-6,0],  dy: [0,14,-10,0] },
  { sym: '∑',    color: '#9900FF', left: '50%', top: '-8%', dur: 10, dx: [0,-8,14,0],  dy: [0,10,-6,0] },
  { sym: 'π',    color: '#00FFFF', left: '12%', top: '90%', dur: 13, dx: [0,16,-4,0],  dy: [0,-12,8,0] },
  { sym: '∞',    color: '#9900FF', left: '75%', top: '92%', dur: 8,  dx: [0,-12,8,0],  dy: [0,-10,14,0] },
  { sym: '=>',   color: '#00FFFF', left: '55%', top: '96%', dur: 12, dx: [0,8,-14,0],  dy: [0,-16,6,0] },
  { sym: 'fx',   color: '#FF007F', left: '80%', top: '30%', dur: 9,  dx: [0,-8,12,0],  dy: [0,10,-14,0] },
]

function ProfileCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-56 sm:w-72 md:w-80 flex-shrink-0"
    >
      {/* Orbital symbol particles — only visible on md+ */}
      <div className="hidden md:block" style={{ position: 'absolute', inset: '-60px', pointerEvents: 'none', zIndex: 5 }}>
        {SYMBOLS.map((s, i) => (
          <motion.span
            key={i}
            animate={{ x: s.dx, y: s.dy }}
            transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            style={{
              position: 'absolute', left: s.left, top: s.top, color: s.color,
              fontSize: 13 + (i % 3) * 2, fontFamily: 'monospace', fontWeight: 700,
              opacity: 0.7, textShadow: `0 0 10px ${s.color}, 0 0 20px ${s.color}60`,
              whiteSpace: 'nowrap', userSelect: 'none',
            }}
          >{s.sym}</motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        style={{
          position: 'relative', zIndex: 2, borderRadius: 24, overflow: 'hidden',
          border: '1px solid rgba(0,255,255,0.22)',
          boxShadow: '0 0 40px rgba(0,255,255,0.14), 0 0 80px rgba(150,0,255,0.10), 0 25px 60px rgba(0,0,0,0.55)',
        }}
      >
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.7), rgba(150,0,255,0.4), transparent)' }} />
        <img src={myPhotosquare} alt="Habib Allah" style={{ width: '100%', display: 'block', objectFit: 'cover', filter: 'saturate(0.9) contrast(1.05)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px 22px', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', background: 'rgba(3, 3, 20, 0.72)', borderTop: '1px solid rgba(0,255,255,0.2)' }}>
          <p className="font-orbitron font-black text-white" style={{ fontSize: '1rem', marginBottom: 4, textShadow: '0 0 12px rgba(0,255,255,0.5)', letterSpacing: '0.04em' }}>Habib Allah</p>
          <p className="font-poppins text-xs" style={{ color: '#00FFFF', textShadow: '0 0 8px rgba(0,255,255,0.6)', opacity: 0.9, letterSpacing: '0.02em' }}>Web Developer &amp; AI Enthusiast</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: -3, borderRadius: 27, border: '1px solid rgba(0,255,255,0.1)', pointerEvents: 'none', zIndex: 1 }}
      />
    </motion.div>
  )
}

export default function HeroSection() {
  const navigate = useNavigate()
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-x-hidden" style={{ zIndex: 1, paddingTop: '80px' }}>
      <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 py-10 lg:py-0">

        {/* Left: text */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex-1 max-w-xl text-center lg:text-left">
          <motion.h1
            variants={itemVariants}
            className="font-orbitron font-black leading-tight mb-4"
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 5rem)',
              background: 'linear-gradient(135deg, #ffffff 0%, #00FFFF 40%, #9900FF 80%, #FF007F 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.5))',
            }}
          >Habib Allah</motion.h1>

          <motion.h2 variants={itemVariants} className="font-poppins font-semibold text-lg sm:text-2xl text-white mb-4 sm:mb-6" style={{ textShadow: '0 0 15px rgba(255,255,255,0.5)' }}>
            Web Developer, AI Enthusiast
          </motion.h2>

          <motion.p variants={itemVariants} className="font-poppins text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0">
            Innovative Web Developer &amp; AI Enthusiast based in Algeria. Currently an ENSIA student
            diving into the world of Data Science, Algorithm Optimization, and Problem Solving.
            Passionate about crafting impactful digital experiences and exploring cutting-edge AI technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,255,255,0.6)' }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="font-poppins font-semibold px-7 py-3 rounded-full text-sm tracking-wide"
              style={{ background: 'linear-gradient(135deg, #0066FF, #00FFFF)', color: '#03030F', cursor: 'none', boxShadow: '0 0 15px rgba(0,255,255,0.4)' }}
            >Explore Projects</motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#00FFFF', color: '#00FFFF', boxShadow: '0 0 15px rgba(0,255,255,0.3)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/get-in-touch')}
              className="font-poppins font-semibold px-7 py-3 rounded-full text-sm tracking-wide text-white transition-all"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', cursor: 'none' }}
            >Get in Touch</motion.button>
          </motion.div>
        </motion.div>

        {/* Right: profile card */}
        <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="flex-1 flex justify-center">
          <ProfileCard />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 right-4 sm:right-8 flex items-center gap-2 text-gray-500 text-xs font-poppins tracking-widest">
        <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
        SCROLL TO EXPLORE
      </motion.div>

      <div className="absolute bottom-8 right-12 sm:right-16">
        <motion.div animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }} transition={{ duration: 2, repeat: Infinity }} style={{ color: 'white', fontSize: 28, filter: 'drop-shadow(0 0 8px white)' }}>✦</motion.div>
      </div>
    </section>
  )
}
