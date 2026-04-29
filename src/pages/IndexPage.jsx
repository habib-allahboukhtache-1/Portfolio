import { motion } from 'framer-motion'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import StackSection from '../components/StackSection'
import ProjectsSection from '../components/ProjectsSection'
import FAQSection from '../components/FAQSection'

export default function IndexPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <Header />
      <HeroSection />
      <StackSection />
      <ProjectsSection />
      <FAQSection />
    </motion.div>
  )
}
