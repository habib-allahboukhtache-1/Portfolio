import { motion } from 'framer-motion'

const webProjects = [
  {
    title: 'KHB Portfolio',
    desc: 'A modern, integrated landing page featuring a custom geometric KHB logo and a dynamic, data-driven hero section, highlighting full-stack and AI passion.',
    hasPreview: true,
  },
  {
    title: 'Coming Soon',
    desc: 'A platform for chess enthusiasts to manage and analyze their opening repertoires, utilizing a custom backend and interactive UI.',
    hasPreview: false,
  },
]

const sysProjects = [
  {
    title: 'Coming Soon',
    desc: 'A robust, distributed API service built for high concurrency and microservice orchestration, featuring comprehensive logging and automated scaling.',
    hasPreview: false,
  },
  {
    title: 'Coming Soon',
    desc: 'An efficient ETL (Extract, Transform, Load) pipeline for large-scale data ingestion and transformation, utilizing modern cloud technologies and data warehousing.',
    hasPreview: false,
  },
]

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M9 9l6 6M15 9v6H9"/>
    </svg>
  )
}

function ProjectCard({ project, type }) {
  const isCyan = type === 'web'
  const accentColor = isCyan ? '#00FFFF' : '#FF007F'
  const glowColor = isCyan ? 'rgba(0,255,255,0.2)' : 'rgba(255,0,127,0.2)'

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl p-4 mb-4"
      style={{
        background: 'rgba(5, 5, 20, 0.85)',
        border: `1px solid ${accentColor}40`,
        boxShadow: `0 0 20px ${glowColor}, inset 0 0 20px ${glowColor}`,
        cursor: 'none',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-poppins font-semibold text-white text-base">{project.title}</h3>
        <div className="flex gap-2 text-gray-400">
          <motion.a href="#" whileHover={{ color: accentColor }} style={{ cursor: 'none' }}>
            <GitHubIcon />
          </motion.a>
          {project.hasPreview && (
            <motion.a href="#" whileHover={{ color: accentColor }} style={{ cursor: 'none' }}>
              <ExternalIcon />
            </motion.a>
          )}
        </div>
      </div>

      {/* Mini preview / placeholder */}
      <div
        className="rounded-lg mb-3 flex items-center justify-center"
        style={{
          height: 80,
          background: `linear-gradient(135deg, rgba(5,5,20,0.9), ${accentColor}10)`,
          border: `1px solid ${accentColor}20`,
        }}
      >
        {project.hasPreview ? (
          <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
            <span className="text-xs text-gray-500 font-poppins">Portfolio Preview</span>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-1 p-3 opacity-20">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-1 rounded" style={{ background: accentColor }} />
            ))}
          </div>
        )}
      </div>

      <p className="font-poppins text-gray-400 text-xs leading-relaxed mb-3">{project.desc}</p>

      <motion.button
        whileHover={{ boxShadow: `0 0 20px ${accentColor}60`, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="font-poppins font-semibold text-xs px-4 py-2 rounded-full"
        style={{
          background: `${accentColor}20`,
          border: `1px solid ${accentColor}`,
          color: accentColor,
          cursor: 'none',
          textShadow: `0 0 8px ${accentColor}`,
        }}
      >
        Explore this project.
      </motion.button>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20" style={{ zIndex: 1 }}>
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <h2
            className="font-orbitron font-black mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              background: 'linear-gradient(135deg, #00FFFF, #9900FF, #FF007F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 15px rgba(150,0,255,0.4))',
            }}
          >
            Projects
          </h2>
          <p className="font-poppins text-gray-300 max-w-2xl mx-auto text-sm">
            These projects are curated to demonstrate my diverse skills in full-stack engineering, scalable architecture,
            and AI application, showcasing a passion for innovation and elegant problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 mt-10">
          {/* Web Dev column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Column header with outer glow border */}
            <div
              className="rounded-2xl p-5"
              style={{
                border: '1px solid rgba(0,255,255,0.3)',
                boxShadow: '0 0 30px rgba(0,255,255,0.15), inset 0 0 30px rgba(0,255,255,0.03)',
                background: 'rgba(0,5,15,0.5)',
              }}
            >
              <h3 className="font-poppins font-semibold text-white text-lg mb-5">
                Web Development Projects.
              </h3>
              {webProjects.map((p, i) => (
                <ProjectCard key={i} project={p} type="web" />
              ))}
            </div>
          </motion.div>

          {/* Software Systems column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-5"
              style={{
                border: '1px solid rgba(255,0,127,0.3)',
                boxShadow: '0 0 30px rgba(255,0,127,0.15), inset 0 0 30px rgba(255,0,127,0.03)',
                background: 'rgba(15,0,5,0.5)',
              }}
            >
              <h3 className="font-poppins font-semibold text-white text-lg mb-5">
                Software Systems Projects.
              </h3>
              {sysProjects.map((p, i) => (
                <ProjectCard key={i} project={p} type="sys" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
