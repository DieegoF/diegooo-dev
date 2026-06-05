import { motion } from 'framer-motion'
import { AnimacionEntrada } from '../ui/AnimacionEntrada'
import { CATEGORIAS_TECH, COLOR_NIVEL } from '../../constantes/tecnologias'

// Variantes para la aparición en cascada de las tarjetas de categoría
const variantesGrid = {
  contenedor: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  },
  tarjeta: {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
}

// Variantes para la cascada de pills de tecnología dentro de cada tarjeta
const variantesPills = {
  contenedor: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
  },
  pill: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  },
}

export function Tecnologias() {
  return (
    <section id="tecnologias" className="py-32 px-6">
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* ── Encabezado ──────────────────────────────────────── */}
        <AnimacionEntrada className="text-center mb-20">
          <span
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: 'rgba(167, 139, 250, 0.6)' }}
          >
            // 03&nbsp;&nbsp;TECNOLOGÍAS
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-100">
            Mi Stack Técnico
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Herramientas y tecnologías con las que construyo soluciones reales día a día.
          </p>
        </AnimacionEntrada>

        {/* ── Leyenda de niveles ─────────────────────────────── */}
        <AnimacionEntrada demora={0.1} className="flex justify-center gap-6 mb-14">
          {[
            { nivel: 'avanzado',   etiqueta: 'Avanzado'   },
            { nivel: 'intermedio', etiqueta: 'Intermedio' },
            { nivel: 'básico',     etiqueta: 'Básico'     },
          ].map(({ nivel, etiqueta }) => (
            <div key={nivel} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: COLOR_NIVEL[nivel], boxShadow: `0 0 5px ${COLOR_NIVEL[nivel]}` }}
              />
              <span className="text-xs text-slate-500">{etiqueta}</span>
            </div>
          ))}
        </AnimacionEntrada>

        {/* ── Grid de categorías ────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={variantesGrid.contenedor}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {CATEGORIAS_TECH.map(({ id, categoria, Icono, colorAcento, tecnologias }) => (
            <motion.div
              key={id}
              variants={variantesGrid.tarjeta}
              whileHover={{ borderColor: `${colorAcento}40`, scale: 1.01 }}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(30, 41, 59, 0.8)',
                transition: 'border-color 0.25s, transform 0.2s',
              }}
            >
              {/* Cabecera de la categoría */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${colorAcento}15`, border: `1px solid ${colorAcento}30` }}
                >
                  <Icono className="w-4 h-4" style={{ color: colorAcento }} />
                </div>
                <h3 className="text-sm font-semibold text-slate-200">{categoria}</h3>
              </div>

              {/* Pills de tecnologías con cascada */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={variantesPills.contenedor}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {tecnologias.map(({ nombre, nivel }) => (
                  <motion.span
                    key={nombre}
                    variants={variantesPills.pill}
                    whileHover={{ scale: 1.06, color: '#e2e8f0' }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-400"
                    style={{
                      backgroundColor: 'rgba(2, 8, 23, 0.5)',
                      border: '1px solid rgba(30, 41, 59, 0.9)',
                      cursor: 'default',
                      transition: 'color 0.2s',
                    }}
                  >
                    {/* Indicador de nivel */}
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: COLOR_NIVEL[nivel],
                        boxShadow: `0 0 4px ${COLOR_NIVEL[nivel]}`,
                      }}
                    />
                    {nombre}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Línea de cierre ───────────────────────────────── */}
        <AnimacionEntrada demora={0.2} className="mt-16 text-center">
          <p className="text-slate-600 text-sm">
            En constante aprendizaje · Siempre explorando nuevas herramientas
          </p>
        </AnimacionEntrada>
      </div>
    </section>
  )
}
