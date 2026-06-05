import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { ENLACES_NAV } from '../../constantes/navegacion'
import { useSeccionActiva } from '../../hooks/useSeccionActiva'

export function Navbar() {
  const [conFondo, setConFondo] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const seccionActiva = useSeccionActiva()

  useEffect(() => {
    const alHacerScroll = () => setConFondo(window.scrollY > 20)
    window.addEventListener('scroll', alHacerScroll, { passive: true })
    return () => window.removeEventListener('scroll', alHacerScroll)
  }, [])

  const navegar = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuAbierto(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s, border-color 0.3s',
        backgroundColor: conFondo ? 'rgba(2, 8, 23, 0.85)' : 'transparent',
        backdropFilter: conFondo ? 'blur(12px)' : 'none',
        borderBottom: conFondo ? '1px solid rgba(30, 41, 59, 0.5)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <motion.button
          onClick={() => navegar('inicio')}
          className="flex items-center gap-2 group cursor-pointer bg-transparent border-none p-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center flex-shrink-0">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
            Diegooo<span className="text-cyan-400">.dev</span>
          </span>
        </motion.button>

        {/* Links escritorio */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {ENLACES_NAV.map((enlace) => (
            <li key={enlace.id}>
              <motion.button
                onClick={() => navegar(enlace.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer border-none bg-transparent ${
                  seccionActiva === enlace.id ? 'text-cyan-400' : 'text-slate-400 hover:text-slate-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {seccionActiva === enlace.id && (
                  <motion.span
                    layoutId="indicador-activo-nav"
                    className="absolute inset-0 bg-slate-800/60 rounded-lg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{enlace.etiqueta}</span>
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Botón CTA escritorio */}
        <motion.button
          onClick={() => navegar('contacto')}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-cyan-400 cursor-pointer border transition-all"
          style={{
            backgroundColor: 'rgba(6, 182, 212, 0.08)',
            borderColor: 'rgba(6, 182, 212, 0.3)',
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(6, 182, 212, 0.15)',
            borderColor: 'rgba(6, 182, 212, 0.6)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Contacto
        </motion.button>

        {/* Botón menú móvil */}
        <motion.button
          className="md:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer bg-transparent border-none"
          onClick={() => setMenuAbierto(!menuAbierto)}
          whileTap={{ scale: 0.9 }}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuAbierto ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </nav>

      {/* Menú desplegable móvil */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: 'rgba(2, 8, 23, 0.97)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(30, 41, 59, 0.5)',
            }}
          >
            <ul className="px-6 py-4 space-y-1 list-none m-0">
              {ENLACES_NAV.map((enlace) => (
                <li key={enlace.id}>
                  <button
                    onClick={() => navegar(enlace.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer border-none ${
                      seccionActiva === enlace.id
                        ? 'text-cyan-400 bg-slate-800/60'
                        : 'text-slate-400 hover:text-slate-100 bg-transparent hover:bg-slate-800/30'
                    }`}
                  >
                    {enlace.etiqueta}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
