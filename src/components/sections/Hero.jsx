import { motion } from 'framer-motion'
import { ArrowDown, Download, Rocket } from 'lucide-react'

const STACK_TECNICO = ['.NET 8', 'C#', 'React', 'TypeScript', 'SQL Server', 'Tailwind CSS']

const variantes = {
  contenedor: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.13,
        delayChildren: 0.3,
      },
    },
  },
  elemento: {
    hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
}

export function Hero() {
  const navegar = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        variants={variantes.contenedor}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Badge de disponibilidad */}
        <motion.div variants={variantes.elemento} className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-cyan-400"
            style={{
              backgroundColor: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-cyan-400"
              style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            />
            Disponible para proyectos freelance
          </span>
        </motion.div>

        {/* Nombre principal */}
        <motion.h1
          variants={variantes.elemento}
          className="font-black tracking-tight mb-4 leading-none"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', lineHeight: 1 }}
        >
          <span className="text-slate-100">Diegooo</span>
          <span
            className="bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #22d3ee 0%, #60a5fa 50%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            .dev
          </span>
        </motion.h1>

        {/* Rol */}
        <motion.p
          variants={variantes.elemento}
          className="text-xl md:text-2xl font-light mb-3 text-slate-400"
        >
          Full-Stack Developer
          <span className="mx-3 text-slate-700">/</span>
          <span className="text-violet-400">QA Automation</span>
        </motion.p>

        {/* Descripción breve */}
        <motion.p
          variants={variantes.elemento}
          className="text-base text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Construyo aplicaciones web robustas con{' '}
          <span className="text-slate-300 font-medium">.NET 8 / C#</span> y{' '}
          <span className="text-slate-300 font-medium">React</span>.
          Estudiante de Ingeniería en Sistemas (UTN) — Buenos Aires, Argentina.
        </motion.p>

        {/* Botones CTA */}
        <motion.div
          variants={variantes.elemento}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => navegar('proyectos')}
            className="flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-xl cursor-pointer border-none"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              boxShadow: '0 8px 32px rgba(6, 182, 212, 0.25)',
            }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 12px 40px rgba(6, 182, 212, 0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Rocket className="w-4 h-4" />
            Ver Proyectos
          </motion.button>

          <motion.a
            href="/DIEGO_FERNANDEZ_CV_2026.pdf"
            download="CV_DiegoFernandez.pdf"
            className="group flex items-center gap-2 px-8 py-4 font-semibold text-slate-200 rounded-xl cursor-pointer no-underline"
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(51, 65, 85, 0.6)',
              backdropFilter: 'blur(8px)',
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
              borderColor: 'rgba(100, 116, 139, 0.8)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Download className="w-4 h-4" />
            Descargar CV
          </motion.a>
        </motion.div>

        {/* Chips de tecnologías */}
        <motion.div
          variants={variantes.elemento}
          className="flex flex-wrap justify-center gap-2"
        >
          {STACK_TECNICO.map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1.5 text-xs text-slate-500 rounded-full"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(30, 41, 59, 0.8)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.4 }}
              whileHover={{
                color: '#94a3b8',
                borderColor: 'rgba(51, 65, 85, 0.9)',
                scale: 1.05,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador de scroll animado */}
      <motion.button
        onClick={() => navegar('sobre-mi')}
        className="flex flex-col items-center gap-2 text-slate-700 hover:text-slate-500 transition-colors cursor-pointer bg-transparent border-none"
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ color: '#64748b' }}
      >
        <span className="text-xs tracking-[0.2em] uppercase">scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  )
}
