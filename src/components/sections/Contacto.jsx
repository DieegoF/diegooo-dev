import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle, MessageSquare, FileText, ChevronDown } from 'lucide-react'
import { AnimacionEntrada } from '../ui/AnimacionEntrada'

// Opciones del formulario de presupuesto
const TIPOS_PROYECTO = [
  { value: 'landing',  label: 'Landing Page'           },
  { value: 'ecommerce', label: 'Tienda / E-commerce'   },
  { value: 'sistema',  label: 'Sistema Web a Medida'   },
  { value: 'otro',     label: 'Otro / Consultar'       },
]

const RANGOS_PRESUPUESTO = [
  { value: 'menos-500',     label: 'Menos de USD $500'   },
  { value: '500-1500',      label: 'USD $500 – $1.500'   },
  { value: '1500-5000',     label: 'USD $1.500 – $5.000' },
  { value: 'mas-5000',      label: 'Más de USD $5.000'   },
  { value: 'a-definir',     label: 'A definir / Consultar' },
]

const PLAZOS = [
  { value: '1-2-semanas', label: '1 – 2 semanas'   },
  { value: '1-mes',       label: 'Aprox. 1 mes'    },
  { value: '1-3-meses',   label: '1 – 3 meses'     },
  { value: 'flexible',    label: 'Flexible'         },
]

// Estado inicial del formulario
const FORM_INICIAL = {
  nombre:           '',
  email:            '',
  mensaje:          '',
  tipoProyecto:     'landing',
  presupuesto:      '',
  plazo:            '',
  detallesTecnicos: '',
}

// Variantes para despliegue suave de campos extra
const variantesDespliegue = {
  oculto:  { opacity: 0, height: 0, overflow: 'hidden' },
  visible: { opacity: 1, height: 'auto', overflow: 'hidden', transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  salida:  { opacity: 0, height: 0, overflow: 'hidden', transition: { duration: 0.25 } },
}

// Estilos base reutilizados en todos los inputs y selects del formulario
const estiloInput = {
  width: '100%',
  padding: '0.75rem 1rem',
  backgroundColor: 'rgba(15, 23, 42, 0.7)',
  border: '1px solid rgba(30, 41, 59, 0.9)',
  borderRadius: '0.625rem',
  color: '#e2e8f0',
  fontSize: '0.875rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
}

export function Contacto() {
  const [modo, setModo]               = useState('consulta')   // 'consulta' | 'presupuesto'
  const [formulario, setFormulario]   = useState(FORM_INICIAL)
  // 'idle' | 'cargando' | 'exitoso'
  const [estadoEnvio, setEstadoEnvio] = useState('idle')

  // Actualiza un campo del formulario sin mutar el resto
  const actualizar = (campo) => (e) =>
    setFormulario((prev) => ({ ...prev, [campo]: e.target.value }))

  // Simula el envío — conectar aquí con EmailJS, Resend u otro servicio
  const manejarEnvio = async (e) => {
    e.preventDefault()
    setEstadoEnvio('cargando')
    await new Promise((res) => setTimeout(res, 2200))
    setEstadoEnvio('exitoso')
  }

  // Reinicia el formulario para enviar otro mensaje
  const reiniciar = () => {
    setFormulario(FORM_INICIAL)
    setModo('consulta')
    setEstadoEnvio('idle')
  }

  return (
    <section id="contacto" className="py-32 px-6">
      <div style={{ maxWidth: '52rem', margin: '0 auto' }}>

        {/* ── Encabezado ─────────────────────────────────────── */}
        <AnimacionEntrada className="text-center mb-16">
          <span
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: 'rgba(139, 92, 246, 0.6)' }}
          >
            // 05&nbsp;&nbsp;CONTACTO
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-100">
            ¿Hablamos?
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Estoy disponible para proyectos freelance, colaboraciones y nuevas oportunidades.
            Respondés dentro de las 24hs.
          </p>
        </AnimacionEntrada>

        {/* ── Tarjeta principal ──────────────────────────────── */}
        <AnimacionEntrada demora={0.1}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* AnimatePresence alterna entre el formulario y la pantalla de éxito */}
            <AnimatePresence mode="wait">

              {estadoEnvio === 'exitoso' ? (
                // ── Pantalla de éxito ──────────────────────────
                <motion.div
                  key="exito"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center p-16"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <CheckCircle
                      className="w-16 h-16 mb-6"
                      style={{ color: '#34d399' }}
                    />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-slate-100 mb-3"
                  >
                    ¡Mensaje enviado!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-400 mb-8 max-w-sm"
                  >
                    Muchas gracias por escribirme. Te respondo dentro de las próximas <span className="text-slate-300">24 horas</span>.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={reiniciar}
                    className="px-6 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(51, 65, 85, 0.5)',
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Enviar otro mensaje
                  </motion.button>
                </motion.div>

              ) : (
                // ── Formulario ────────────────────────────────
                <motion.div key="formulario" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>

                  {/* Selector de modo */}
                  <div
                    className="flex border-b"
                    style={{ borderColor: 'rgba(30, 41, 59, 0.6)' }}
                  >
                    {[
                      { id: 'consulta',     Icono: MessageSquare, label: 'Consulta General'    },
                      { id: 'presupuesto',  Icono: FileText,      label: 'Solicitar Presupuesto' },
                    ].map(({ id, Icono, label }) => (
                      <button
                        key={id}
                        onClick={() => setModo(id)}
                        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors cursor-pointer border-b-2"
                        style={{
                          borderBottomColor: modo === id ? '#8b5cf6' : 'transparent',
                          color: modo === id ? '#a78bfa' : '#64748b',
                          backgroundColor: 'transparent',
                          border: 'none',
                          borderBottom: `2px solid ${modo === id ? '#8b5cf6' : 'transparent'}`,
                        }}
                      >
                        <Icono className="w-4 h-4" />
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* Cuerpo del formulario */}
                  <form onSubmit={manejarEnvio} className="p-8 space-y-5">

                    {/* Nombre y Email en fila */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <CampoFormulario label="Nombre *">
                        <input
                          type="text"
                          placeholder="Tu nombre"
                          required
                          value={formulario.nombre}
                          onChange={actualizar('nombre')}
                          style={estiloInput}
                          onFocus={(e) => (e.target.style.borderColor = '#8b5cf6')}
                          onBlur={(e) => (e.target.style.borderColor = 'rgba(30, 41, 59, 0.9)')}
                        />
                      </CampoFormulario>

                      <CampoFormulario label="Email *">
                        <input
                          type="email"
                          placeholder="tu@email.com"
                          required
                          value={formulario.email}
                          onChange={actualizar('email')}
                          style={estiloInput}
                          onFocus={(e) => (e.target.style.borderColor = '#8b5cf6')}
                          onBlur={(e) => (e.target.style.borderColor = 'rgba(30, 41, 59, 0.9)')}
                        />
                      </CampoFormulario>
                    </div>

                    {/* ── Campos adicionales para modo Presupuesto ── */}
                    <AnimatePresence>
                      {modo === 'presupuesto' && (
                        <motion.div
                          key="campos-presupuesto"
                          variants={variantesDespliegue}
                          initial="oculto"
                          animate="visible"
                          exit="salida"
                          className="space-y-5"
                        >
                          {/* Tipo de proyecto */}
                          <CampoFormulario label="Tipo de proyecto *">
                            <div style={{ position: 'relative' }}>
                              <select
                                required
                                value={formulario.tipoProyecto}
                                onChange={actualizar('tipoProyecto')}
                                style={{ ...estiloInput, appearance: 'none', paddingRight: '2.5rem', cursor: 'pointer' }}
                                onFocus={(e) => (e.target.style.borderColor = '#8b5cf6')}
                                onBlur={(e) => (e.target.style.borderColor = 'rgba(30, 41, 59, 0.9)')}
                              >
                                {TIPOS_PROYECTO.map(({ value, label }) => (
                                  <option key={value} value={value} style={{ backgroundColor: '#0f172a' }}>
                                    {label}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown
                                className="w-4 h-4 text-slate-500 pointer-events-none"
                                style={{ position: 'absolute', right: '0.875rem', top: '50%', transform: 'translateY(-50%)' }}
                              />
                            </div>
                          </CampoFormulario>

                          {/* Detalle técnico — solo visible si elige "Sistema a Medida" */}
                          <AnimatePresence>
                            {formulario.tipoProyecto === 'sistema' && (
                              <motion.div
                                key="detalle-tecnico"
                                variants={variantesDespliegue}
                                initial="oculto"
                                animate="visible"
                                exit="salida"
                              >
                                <CampoFormulario label="Detalle técnico del sistema">
                                  <textarea
                                    rows={3}
                                    placeholder="Describí las funcionalidades, módulos o integraciones que necesitás..."
                                    value={formulario.detallesTecnicos}
                                    onChange={actualizar('detallesTecnicos')}
                                    style={{ ...estiloInput, resize: 'vertical', minHeight: '80px' }}
                                    onFocus={(e) => (e.target.style.borderColor = '#8b5cf6')}
                                    onBlur={(e) => (e.target.style.borderColor = 'rgba(30, 41, 59, 0.9)')}
                                  />
                                </CampoFormulario>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Presupuesto y Plazo en fila */}
                          <div className="grid sm:grid-cols-2 gap-4">
                            <CampoFormulario label="Presupuesto estimado">
                              <div style={{ position: 'relative' }}>
                                <select
                                  value={formulario.presupuesto}
                                  onChange={actualizar('presupuesto')}
                                  style={{ ...estiloInput, appearance: 'none', paddingRight: '2.5rem', cursor: 'pointer' }}
                                  onFocus={(e) => (e.target.style.borderColor = '#8b5cf6')}
                                  onBlur={(e) => (e.target.style.borderColor = 'rgba(30, 41, 59, 0.9)')}
                                >
                                  <option value="" style={{ backgroundColor: '#0f172a' }}>Seleccioná un rango</option>
                                  {RANGOS_PRESUPUESTO.map(({ value, label }) => (
                                    <option key={value} value={value} style={{ backgroundColor: '#0f172a' }}>
                                      {label}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown
                                  className="w-4 h-4 text-slate-500 pointer-events-none"
                                  style={{ position: 'absolute', right: '0.875rem', top: '50%', transform: 'translateY(-50%)' }}
                                />
                              </div>
                            </CampoFormulario>

                            <CampoFormulario label="Plazo estimado">
                              <div style={{ position: 'relative' }}>
                                <select
                                  value={formulario.plazo}
                                  onChange={actualizar('plazo')}
                                  style={{ ...estiloInput, appearance: 'none', paddingRight: '2.5rem', cursor: 'pointer' }}
                                  onFocus={(e) => (e.target.style.borderColor = '#8b5cf6')}
                                  onBlur={(e) => (e.target.style.borderColor = 'rgba(30, 41, 59, 0.9)')}
                                >
                                  <option value="" style={{ backgroundColor: '#0f172a' }}>Seleccioná un plazo</option>
                                  {PLAZOS.map(({ value, label }) => (
                                    <option key={value} value={value} style={{ backgroundColor: '#0f172a' }}>
                                      {label}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown
                                  className="w-4 h-4 text-slate-500 pointer-events-none"
                                  style={{ position: 'absolute', right: '0.875rem', top: '50%', transform: 'translateY(-50%)' }}
                                />
                              </div>
                            </CampoFormulario>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mensaje */}
                    <CampoFormulario label={modo === 'presupuesto' ? 'Información adicional' : 'Mensaje *'}>
                      <textarea
                        rows={4}
                        placeholder={
                          modo === 'presupuesto'
                            ? 'Contame más sobre tu proyecto, dudas o contexto...'
                            : 'Contame en qué puedo ayudarte...'
                        }
                        required={modo === 'consulta'}
                        value={formulario.mensaje}
                        onChange={actualizar('mensaje')}
                        style={{ ...estiloInput, resize: 'vertical', minHeight: '100px' }}
                        onFocus={(e) => (e.target.style.borderColor = '#8b5cf6')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(30, 41, 59, 0.9)')}
                      />
                    </CampoFormulario>

                    {/* Botón de envío con estado de carga */}
                    <motion.button
                      type="submit"
                      disabled={estadoEnvio === 'cargando'}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-white cursor-pointer border-none"
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                        boxShadow: '0 8px 24px rgba(124, 58, 237, 0.25)',
                        opacity: estadoEnvio === 'cargando' ? 0.8 : 1,
                      }}
                      whileHover={estadoEnvio !== 'cargando' ? { scale: 1.02, y: -1 } : {}}
                      whileTap={estadoEnvio !== 'cargando' ? { scale: 0.98 } : {}}
                    >
                      {estadoEnvio === 'cargando' ? (
                        <>
                          {/* Spinner de carga */}
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          >
                            <Loader2 className="w-4 h-4" />
                          </motion.span>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {modo === 'presupuesto' ? 'Enviar solicitud de presupuesto' : 'Enviar mensaje'}
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-slate-600 text-center">
                      Tu información es privada y solo se usa para responder tu consulta.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimacionEntrada>
      </div>
    </section>
  )
}

// ── Helper: envuelve un campo con su etiqueta ──────────────────
function CampoFormulario({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-slate-400">{label}</label>
      {children}
    </div>
  )
}
