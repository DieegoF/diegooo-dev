import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users, DollarSign, MapPin, Database, Lock, ArrowRight } from 'lucide-react'

// Datos simulados por tenant — cada uno tiene su propia BD aislada
const TENANTS = [
  {
    id: 'alpha',
    nombre: 'Gym Alpha',
    color: '#06b6d4',
    bgColor: 'rgba(6, 182, 212, 0.1)',
    stats: { miembros: 342, ingresos: '$45.200', sucursales: 2 },
    conexion: `Server=sql-prod-01;\nDatabase=GymAlpha_DB;\nUser Id=tenant_alpha;\nPassword=••••••••;`,
    miembros: [
      { nombre: 'Lucía Fernández', plan: 'Premium',   estado: 'Activo',  vto: '31/12/2025' },
      { nombre: 'Martín García',   plan: 'Básico',    estado: 'Activo',  vto: '15/07/2025' },
      { nombre: 'Ana López',       plan: 'Premium',   estado: 'Vencido', vto: '01/05/2025' },
      { nombre: 'Carlos Ruiz',     plan: 'Semestral', estado: 'Activo',  vto: '30/09/2025' },
    ],
  },
  {
    id: 'fitcenter',
    nombre: 'FitCenter Pro',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    stats: { miembros: 187, ingresos: '$28.900', sucursales: 1 },
    conexion: `Server=sql-prod-01;\nDatabase=FitCenter_DB;\nUser Id=tenant_fitcenter;\nPassword=••••••••;`,
    miembros: [
      { nombre: 'Sofía Méndez',  plan: 'Anual',   estado: 'Activo',  vto: '01/01/2026' },
      { nombre: 'Diego Torres',  plan: 'Mensual', estado: 'Activo',  vto: '30/06/2025' },
      { nombre: 'Paula Vega',    plan: 'Anual',   estado: 'Activo',  vto: '15/11/2025' },
      { nombre: 'Roberto Silva', plan: 'Básico',  estado: 'Vencido', vto: '20/04/2025' },
    ],
  },
  {
    id: 'powergym',
    nombre: 'PowerGym Centro',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    stats: { miembros: 521, ingresos: '$72.100', sucursales: 3 },
    conexion: `Server=sql-prod-02;\nDatabase=PowerGym_DB;\nUser Id=tenant_powergym;\nPassword=••••••••;`,
    miembros: [
      { nombre: 'Javier Mora',    plan: 'Premium',    estado: 'Activo',  vto: '28/02/2026' },
      { nombre: 'María Castillo', plan: 'Trimestral', estado: 'Activo',  vto: '01/08/2025' },
      { nombre: 'Tomás Herrera',  plan: 'Anual',      estado: 'Activo',  vto: '10/10/2025' },
      { nombre: 'Laura Ibáñez',   plan: 'Básico',     estado: 'Vencido', vto: '05/03/2025' },
    ],
  },
]

export function DemoGymSolution({ onCerrar }) {
  const [tenantActivo, setTenantActivo] = useState('alpha')
  const tenant = TENANTS.find((t) => t.id === tenantActivo)

  return (
    // Overlay con fondo semitransparente
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onCerrar}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(2, 8, 23, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Modal — stopPropagation evita cerrar al hacer click adentro */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '760px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0a1628',
          border: '1px solid rgba(30, 41, 59, 0.8)',
          borderRadius: '1rem',
        }}
      >
        {/* ── Encabezado del modal ──────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(30, 41, 59, 0.6)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#06b6d4',
                  boxShadow: '0 0 8px #06b6d4',
                }}
              />
              <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                GymSolution — Simulación Multi-Tenant
              </span>
            </div>
            <p style={{ color: '#475569', fontSize: '0.7rem', marginTop: '0.25rem' }}>
              Cada tenant accede únicamente a su propia base de datos en SQL Server
            </p>
          </div>
          <button
            onClick={onCerrar}
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(51, 65, 85, 0.5)',
              borderRadius: '0.5rem',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X style={{ width: 16, height: 16 }} />
          </button>
        </div>

        <div style={{ padding: '1.5rem' }}>
          {/* ── Selector de tenants ──────────────────────────── */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {TENANTS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTenantActivo(t.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: `1px solid ${tenantActivo === t.id ? t.color : 'rgba(30, 41, 59, 0.8)'}`,
                  backgroundColor: tenantActivo === t.id ? t.bgColor : 'transparent',
                  color: tenantActivo === t.id ? t.color : '#64748b',
                }}
              >
                {t.nombre}
              </button>
            ))}
          </div>

          {/* ── Datos del tenant activo (con animación de cambio) ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tenantActivo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Stats del tenant */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                {[
                  { Icono: Users,       valor: tenant.stats.miembros,   etiqueta: 'Miembros' },
                  { Icono: DollarSign,  valor: tenant.stats.ingresos,   etiqueta: 'Ingresos mensuales' },
                  { Icono: MapPin,      valor: tenant.stats.sucursales, etiqueta: 'Sucursales' },
                ].map(({ Icono, valor, etiqueta }) => (
                  <div
                    key={etiqueta}
                    style={{
                      padding: '0.875rem',
                      borderRadius: '0.625rem',
                      backgroundColor: tenant.bgColor,
                      border: `1px solid ${tenant.color}30`,
                      textAlign: 'center',
                    }}
                  >
                    <Icono style={{ width: 16, height: 16, color: tenant.color, margin: '0 auto 0.35rem' }} />
                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: tenant.color }}>{valor}</p>
                    <p style={{ fontSize: '0.65rem', color: '#64748b' }}>{etiqueta}</p>
                  </div>
                ))}
              </div>

              {/* Tabla de miembros */}
              <div
                style={{
                  borderRadius: '0.625rem',
                  border: '1px solid rgba(30, 41, 59, 0.8)',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    padding: '0.5rem 0.875rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    borderBottom: '1px solid rgba(30, 41, 59, 0.6)',
                  }}
                >
                  {['Miembro', 'Plan', 'Estado', 'Vencimiento'].map((h) => (
                    <span key={h} style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
                  ))}
                </div>
                {tenant.miembros.map((m, i) => (
                  <div
                    key={m.nombre}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr 1fr 1fr',
                      padding: '0.6rem 0.875rem',
                      borderBottom: i < tenant.miembros.length - 1 ? '1px solid rgba(30, 41, 59, 0.4)' : 'none',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 500 }}>{m.nombre}</span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{m.plan}</span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '9999px',
                        display: 'inline-block',
                        width: 'fit-content',
                        backgroundColor: m.estado === 'Activo' ? 'rgba(52, 211, 153, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        color: m.estado === 'Activo' ? '#34d399' : '#f87171',
                        border: `1px solid ${m.estado === 'Activo' ? 'rgba(52, 211, 153, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                      }}
                    >
                      {m.estado}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{m.vto}</span>
                  </div>
                ))}
              </div>

              {/* Cadena de conexión aislada */}
              <div style={{ borderRadius: '0.625rem', overflow: 'hidden', border: '1px solid rgba(30, 41, 59, 0.8)' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.875rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderBottom: '1px solid rgba(30, 41, 59, 0.6)',
                  }}
                >
                  <Lock style={{ width: 12, height: 12, color: tenant.color }} />
                  <span style={{ fontSize: '0.65rem', color: '#64748b', fontFamily: 'monospace' }}>
                    TenantProvider → Conexión resuelta para: <span style={{ color: tenant.color }}>{tenant.nombre}</span>
                  </span>
                </div>
                <pre
                  style={{
                    margin: 0,
                    padding: '0.875rem',
                    fontSize: '0.72rem',
                    lineHeight: 1.7,
                    color: '#34d399',
                    backgroundColor: 'rgba(2, 8, 23, 0.8)',
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {tenant.conexion}
                </pre>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Diagrama del flujo de multi-tenancy */}
          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.875rem',
              borderRadius: '0.625rem',
              backgroundColor: 'rgba(15, 23, 42, 0.5)',
              border: '1px solid rgba(30, 41, 59, 0.5)',
            }}
          >
            <p style={{ fontSize: '0.65rem', color: '#475569', marginBottom: '0.625rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Flujo de resolución del tenant
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { label: 'HTTP Request', color: '#94a3b8' },
                { label: 'TenantMiddleware', color: '#06b6d4' },
                { label: 'Resolve Connection', color: '#8b5cf6' },
                { label: 'SQL Server DB', color: '#10b981' },
              ].map((paso, i, arr) => (
                <div key={paso.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.25rem',
                      color: paso.color,
                      border: `1px solid ${paso.color}40`,
                      backgroundColor: `${paso.color}10`,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {paso.label}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight style={{ width: 12, height: 12, color: '#334155', flexShrink: 0 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
