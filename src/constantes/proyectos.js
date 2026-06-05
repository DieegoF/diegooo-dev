// Mock data de proyectos destacados del portfolio

export const PROYECTOS = [
  {
    id: 'gym-solution',
    numero: '01',
    titulo: 'GymSolution',
    subtitulo: 'SaaS de Gestión Multi-Tenant',
    descripcion:
      'Plataforma SaaS para gimnasios con arquitectura multi-tenant. Cada cliente opera con aislamiento total de datos, branding propio y configuraciones independientes desde un único servidor.',
    desafio:
      'TenantProvider middleware que resuelve dinámicamente la cadena de conexión a SQL Server en cada request HTTP, garantizando aislamiento total entre clientes sin necesidad de instancias separadas.',
    tecnologias: ['.NET 8', 'C#', 'SQL Server', 'React', 'EF Core', 'Multi-Tenancy'],
    colorAcento: '#06b6d4',
    tieneDemo: true,  // Habilita el botón "Ver Demo Simulada"
    github: '#',
    live: null,
  },
  {
    id: 'delivery',
    numero: '02',
    titulo: 'Delivery Diegooo.dev',
    subtitulo: 'Plataforma de Pedidos Distribuida',
    descripcion:
      'Plataforma integral de pedidos y envíos con panel de administración dual-screen para control en tiempo real y aplicación de seguimiento para el cliente final.',
    desafio:
      'Arquitectura distribuida con actualizaciones en tiempo real entre el panel admin y la vista cliente, soportando múltiples repartidores simultáneos y estados de pedido dinámicos.',
    tecnologias: ['.NET 8', 'C#', 'React', 'Vite', 'SQL Server', 'SignalR'],
    colorAcento: '#3b82f6',
    tieneDemo: false,
    github: '#',
    live: null,
  },
  {
    id: 'inticket',
    numero: '03',
    titulo: 'InTicKet',
    subtitulo: 'Gestión de Tickets para Eventos',
    descripcion:
      'Sistema de venta y validación de tickets para eventos con generación de QR únicos, control de acceso en puerta y reportes de asistencia en tiempo real para organizadores.',
    desafio:
      'Generación de tickets con hash criptográfico único, validación offline por QR y sincronización de estado de acceso para eventos con alta concurrencia de ingreso simultáneo.',
    tecnologias: ['.NET 8', 'C#', 'React', 'SQL Server', 'QR Code', 'JWT Auth'],
    colorAcento: '#8b5cf6',
    tieneDemo: false,
    github: '#',
    live: null,
  },
  {
    id: 'erp',
    numero: '04',
    titulo: 'ERP Empresarial',
    subtitulo: 'Sistema de Gestión Modular',
    descripcion:
      'Sistema ERP modular con módulos de inventario, facturación, RRHH y reportes analíticos. Arquitectura orientada a dominios con autenticación basada en roles granulares.',
    desafio:
      'Diseño de arquitectura modular Domain-Driven con separación por bounded context (inventario, finanzas, RRHH) bajo un único núcleo de autenticación con permisos por rol y módulo.',
    tecnologias: ['.NET 8', 'C#', 'React', 'SQL Server', 'EF Core', 'Role Auth'],
    colorAcento: '#10b981',
    tieneDemo: false,
    github: '#',
    live: null,
  },
]
