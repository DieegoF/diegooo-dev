import { motion } from 'framer-motion'

/**
 * Wrapper para animaciones de entrada activadas por scroll.
 * Aplica fade-up con ligero blur cuando el elemento entra al viewport.
 *
 * @param {number} demora - Retraso en segundos antes de iniciar la animación
 */
export function AnimacionEntrada({ children, demora = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay: demora,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
