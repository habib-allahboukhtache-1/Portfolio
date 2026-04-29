import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import IndexPage from './pages/IndexPage'
import ExperiencePage from './pages/ExperiencePage'
import GetInTouchPage from './pages/GetInTouchPage'
import CursorTrail from './components/CursorTrail'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#03030F', minHeight: '100vh', position: 'relative' }}>
        <ParticleBackground />
        <CursorTrail />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/get-in-touch" element={<GetInTouchPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  )
}
