import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (item) => {
    setMenuOpen(false)
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
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ zIndex: 100 }}
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 py-3 md:py-4"
      >
        {/* Left: 7aBib brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => navigate('/')}
        >
          <span
            className="font-orbitron font-bold text-xl md:text-2xl"
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

        {/* Center: Nav pill — hidden on mobile, visible on lg+ */}
        <div
          className="hidden lg:flex glass rounded-full px-6 py-2 items-center gap-4"
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

        {/* Sparkle — desktop spacer */}
        <div className="hidden lg:block" style={{ width: 40 }} />

        {/* Hamburger — visible only on mobile/tablet */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          style={{ background: 'none', border: 'none', cursor: 'none' }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 8 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-6 rounded"
              style={{ background: '#00FFFF', boxShadow: '0 0 6px #00FFFF' }}
            />
          ))}
        </motion.button>
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(3,3,20,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,255,255,0.15)',
            }}
            className="flex flex-col items-center gap-0 py-4 lg:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item)}
                className="w-full text-center py-3 font-poppins font-medium text-sm tracking-wider text-gray-300 transition-colors hover:text-cyan-400"
                style={{ background: 'none', border: 'none', cursor: 'none' }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
