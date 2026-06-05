import { motion } from 'framer-motion'

const ORBES = [
  {
    estilo: { width: 600, height: 600, top: '-10%', left: '-10%' },
    color: 'rgba(6, 182, 212, 0.12)',
    duracion: 9,
    animX: [0, 50, 20, 0],
    animY: [0, 30, 60, 0],
  },
  {
    estilo: { width: 500, height: 500, bottom: '-8%', right: '-8%' },
    color: 'rgba(139, 92, 246, 0.12)',
    duracion: 11,
    animX: [0, -40, -20, 0],
    animY: [0, -50, -20, 0],
  },
  {
    estilo: { width: 400, height: 400, top: '40%', left: '50%', transform: 'translate(-50%, -50%)' },
    color: 'rgba(59, 130, 246, 0.08)',
    duracion: 14,
    animX: [0, 30, -30, 0],
    animY: [0, -40, 20, 0],
  },
]

export function FondoAnimado() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {ORBES.map((orbe, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(80px)',
            backgroundColor: orbe.color,
            ...orbe.estilo,
          }}
          animate={{ x: orbe.animX, y: orbe.animY }}
          transition={{
            duration: orbe.duracion,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
