import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Code2, Zap, Shield, Lightbulb } from 'lucide-react'
import { AnimacionEntrada } from '../ui/AnimacionEntrada'

// Puntos clave del perfil profesional
const PUNTOS_CLAVE = [
  {
    Icono: GraduationCap,
    titulo: 'Formación Técnica',
    descripcion: 'Técnico Universitario en Programación · UTN — en curso.',
  },
  {
    Icono: Code2,
    titulo: 'Backend-First',
    descripcion: '.NET 8 / C# con foco en arquitecturas robustas y escalables.',
  },
  {
    Icono: Zap,
    titulo: 'Full-Stack',
    descripcion: 'Frontends dinámicos y fluidos con React + Vite + Tailwind CSS.',
  },
  {
    Icono: Shield,
    titulo: 'QA & Testing',
    descripcion: 'Automatización con xUnit, pruebas de estrés y análisis de calidad.',
  },
]

// Métricas del perfil
const STATS = [
  { valor: '4+',  etiqueta: 'Proyectos construidos' },
  { valor: '2+',  etiqueta: 'Años de experiencia'   },
  { valor: '10+', etiqueta: 'Tecnologías dominadas' },
  { valor: '∞',   etiqueta: 'Curiosidad técnica'    },
]

// Variantes para cascada en los puntos clave
const variantesCascada = {
  contenedor: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  },
  elemento: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
}

export function SobreMi() {
  return (
    <section id="sobre-mi" className="py-32 px-6">
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* ── Encabezado de sección ─────────────────────────── */}
        <AnimacionEntrada className="text-center mb-20">
          <span
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: 'rgba(6, 182, 212, 0.55)' }}
          >
            // 02&nbsp;&nbsp;SOBRE MÍ
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-100">
            Sobre Mí
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Desarrollador de Buenos Aires apasionado por construir sistemas sólidos y experiencias fluidas.
          </p>
        </AnimacionEntrada>

        {/* ── Contenido: texto (izq) + stats (der) ─────────── */}
        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* Columna de texto — 3/5 */}
          <AnimacionEntrada demora={0.1} className="lg:col-span-3 space-y-6">

            <p className="text-slate-300 text-lg leading-relaxed">
              Soy{' '}
              <span className="text-white font-semibold">Diego Fernandez</span>,
              desarrollador Full-Stack con fuerte orientación al backend. Construyo
              aplicaciones web que priorizan la{' '}
              <span className="text-cyan-400">arquitectura robusta</span>, la
              escalabilidad y la calidad del código como primer principio.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Actualmente curso el Técnico Universitario en Programación en la{' '}
              <span className="text-slate-300">UTN (Universidad Tecnológica Nacional)</span>,
              complementando la formación académica con el desarrollo de proyectos
              reales orientados a resolver problemas concretos de negocio.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Mi stack gira en torno a{' '}
              <span className="text-slate-300">.NET 8 / C#</span> para el backend y{' '}
              <span className="text-slate-300">React</span> en el frontend.
              Me especializo en arquitecturas como{' '}
              <span className="text-cyan-400/80">multi-tenancy</span>, APIs RESTful
              con lógica de negocio compleja y sistemas con requisitos de aislamiento
              de datos críticos.
            </p>

            {/* Grid de puntos clave con cascada de aparición */}
            <motion.div
              className="grid sm:grid-cols-2 gap-3 pt-2"
              variants={variantesCascada.contenedor}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {PUNTOS_CLAVE.map(({ Icono, titulo, descripcion }) => (
                <motion.div
                  key={titulo}
                  variants={variantesCascada.elemento}
                  whileHover={{ borderColor: 'rgba(6, 182, 212, 0.35)', scale: 1.01 }}
                  className="flex gap-3 p-4 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(30, 41, 59, 0.8)',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                  >
                    <Icono className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{titulo}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Ubicación */}
            <div className="flex items-center gap-2 text-slate-500 text-sm pt-1">
              <MapPin className="w-4 h-4 text-cyan-400/50" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </AnimacionEntrada>

          {/* Columna de stats — 2/5 */}
          <AnimacionEntrada demora={0.2} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ valor, etiqueta }, i) => (
                <motion.div
                  key={etiqueta}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.04, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                  className="p-6 rounded-2xl text-center"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(30, 41, 59, 0.8)',
                    transition: 'border-color 0.25s',
                  }}
                >
                  <p
                    className="text-4xl font-black mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {valor}
                  </p>
                  <p className="text-xs text-slate-500 leading-tight">{etiqueta}</p>
                </motion.div>
              ))}
            </div>

            {/* Card de disponibilidad */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 p-5 rounded-2xl"
              style={{
                backgroundColor: 'rgba(6, 182, 212, 0.05)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  style={{ boxShadow: '0 0 6px #06b6d4' }}
                />
                <span className="text-cyan-400 text-sm font-medium">
                  Disponible para proyectos
                </span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Abierto a propuestas freelance, colaboraciones y oportunidades
                de trabajo full-time o part-time remotas.
              </p>
            </motion.div>
          </AnimacionEntrada>
        </div>
      </div>
    </section>
  )
}
