import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GitBranch, ExternalLink, Play, ArrowRight } from 'lucide-react'
import { AnimacionEntrada } from '../ui/AnimacionEntrada'
import { DemoGymSolution } from '../ui/DemoGymSolution'
import { PROYECTOS } from '../../constantes/proyectos'

// Variantes para las tarjetas de proyecto en cascada
const variantesGrid = {
  contenedor: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  tarjeta: {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
}

export function Proyectos() {
  // Controla si la demo de GymSolution está abierta
  const [demoAbierta, setDemoAbierta] = useState(false)

  return (
    <>
      <section id="proyectos" className="py-32 px-6">
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

          {/* ── Encabezado ─────────────────────────────────────── */}
          <AnimacionEntrada className="text-center mb-20">
            <span
              className="text-xs font-mono tracking-[0.3em] uppercase"
              style={{ color: 'rgba(59, 130, 246, 0.6)' }}
            >
              // 04&nbsp;&nbsp;PROYECTOS
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-100">
              Proyectos Destacados
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Sistemas reales construidos para resolver problemas de negocio concretos.
            </p>
          </AnimacionEntrada>

          {/* ── Grid de proyectos ──────────────────────────────── */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={variantesGrid.contenedor}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {PROYECTOS.map((proyecto) => (
              <TarjetaProyecto
                key={proyecto.id}
                proyecto={proyecto}
                onAbrirDemo={() => setDemoAbierta(true)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Modal de demo de GymSolution ─────────────────────── */}
      <AnimatePresence>
        {demoAbierta && (
          <DemoGymSolution onCerrar={() => setDemoAbierta(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

// ── Componente de tarjeta individual ───────────────────────────
function TarjetaProyecto({ proyecto, onAbrirDemo }) {
  const { numero, titulo, subtitulo, descripcion, desafio, tecnologias, colorAcento, tieneDemo, github, live } = proyecto

  return (
    <motion.article
      variants={variantesGrid.tarjeta}
      whileHover={{ y: -4, borderColor: `${colorAcento}35` }}
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        border: '1px solid rgba(30, 41, 59, 0.8)',
        transition: 'border-color 0.3s',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Línea de acento superior (color del proyecto) */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${colorAcento}, ${colorAcento}00)`,
        }}
      />

      <div className="flex flex-col flex-1 p-7">

        {/* Número + acciones */}
        <div className="flex items-start justify-between mb-5">
          <span
            className="text-xs font-mono font-bold"
            style={{ color: `${colorAcento}60` }}
          >
            {numero}
          </span>

          {/* Botón "Ver Demo Simulada" solo para GymSolution */}
          {tieneDemo && (
            <motion.button
              onClick={onAbrirDemo}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer border"
              style={{
                backgroundColor: `${colorAcento}10`,
                borderColor: `${colorAcento}35`,
                color: colorAcento,
              }}
              whileHover={{
                backgroundColor: `${colorAcento}20`,
                borderColor: `${colorAcento}60`,
                scale: 1.04,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Play className="w-3 h-3" />
              Ver Demo Simulada
            </motion.button>
          )}
        </div>

        {/* Título y subtítulo */}
        <h3 className="text-xl font-bold text-slate-100 mb-1">{titulo}</h3>
        <p className="text-sm font-medium mb-4" style={{ color: `${colorAcento}80` }}>
          {subtitulo}
        </p>

        {/* Descripción */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {descripcion}
        </p>

        {/* Desafío técnico */}
        <div
          className="p-4 rounded-xl mb-5 flex-1"
          style={{
            backgroundColor: `${colorAcento}06`,
            border: `1px solid ${colorAcento}20`,
          }}
        >
          <p className="text-xs font-semibold mb-1.5" style={{ color: `${colorAcento}90` }}>
            Desafío técnico
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">{desafio}</p>
        </div>

        {/* Tags de tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tecnologias.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs text-slate-500"
              style={{
                backgroundColor: 'rgba(2, 8, 23, 0.6)',
                border: '1px solid rgba(30, 41, 59, 0.9)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones de acción */}
        <div className="flex items-center gap-3 mt-auto">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-slate-200 transition-colors"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(51, 65, 85, 0.5)',
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <GitBranch className="w-3.5 h-3.5" />
              GitHub
            </motion.a>
          )}

          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
              style={{
                background: `linear-gradient(135deg, ${colorAcento}, ${colorAcento}90)`,
                color: '#fff',
              }}
              whileHover={{ scale: 1.04, opacity: 0.9 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Ver en vivo
            </motion.a>
          )}

          {/* Indicador de "en construcción" si no tiene live */}
          {!live && (
            <span className="ml-auto text-xs text-slate-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              Privado / en desarrollo
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
