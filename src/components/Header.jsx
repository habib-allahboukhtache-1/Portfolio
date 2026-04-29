import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import KHBLogo from './KHBLogo'

const navItems = [
  { label: 'PROJECTS', section: 'projects', route: '/' },
  { label: 'FAQ', section: 'faq', route: '/' },
  { label: 'GET IN TOUCH', section: null, route: '/get-in-touch' },
  { label: 'EXPERIENCE', section: null, route: '/experience' },
  { label: 'HOME', section: 'hero', route: '/' },
  { label: 'STACK', section: 'stack', route: '/' },
]

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNav = (item) => {
    if (item.route === '/' && item.section) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById(item.section)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const el = document.getElementById(item.section)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(item.route)
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ zIndex: 100 }}
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4"
    >
      {/* Left: 7aBib brand */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer"
        onClick={() => navigate('/')}
      >
        <span
          className="font-orbitron font-bold text-2xl"
          style={{
            background: 'linear-gradient(90deg, #00FFFF, #9900FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 8px #00FFFF80)',
          }}
        >
          7aBib
        </span>
      </motion.div>

      {/* Center: Nav pill */}
      <div
        className="glass rounded-full px-6 py-2 flex items-center gap-4"
        style={{
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(10,10,30,0.7)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {navItems.slice(0, 3).map((item) => (
          <NavBtn key={item.label} item={item} onClick={handleNav} />
        ))}

        {/* KHB Logo in center */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer mx-2"
          onClick={() => navigate('/')}
        >
          <KHBLogo size={60} />
        </motion.div>

        {navItems.slice(3).map((item) => (
          <NavBtn key={item.label} item={item} onClick={handleNav} />
        ))}
      </div>

      {/* Sparkle */}
      <div style={{ width: 40 }} />
    </motion.header>
  )
}

function NavBtn({ item, onClick }) {
  return (
    <motion.button
      whileHover={{ color: '#00FFFF', textShadow: '0 0 8px #00FFFF' }}
      onClick={() => onClick(item)}
      className="text-xs font-poppins font-medium tracking-wider text-gray-300 whitespace-nowrap transition-colors"
      style={{ background: 'none', border: 'none', cursor: 'none' }}
    >
      {item.label}
    </motion.button>
  )
}
