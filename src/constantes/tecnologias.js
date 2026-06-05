import { Server, Monitor, Database, TestTube2, GitBranch } from 'lucide-react'

// Cada categoría agrupa tecnologías con su nivel de dominio
export const CATEGORIAS_TECH = [
  {
    id: 'backend',
    categoria: 'Backend',
    Icono: Server,
    colorAcento: '#06b6d4',
    tecnologias: [
      { nombre: '.NET 8',              nivel: 'avanzado'   },
      { nombre: 'C#',                  nivel: 'avanzado'   },
      { nombre: 'ASP.NET Web API',     nivel: 'avanzado'   },
      { nombre: 'Entity Framework Core', nivel: 'intermedio' },
      { nombre: 'Arquitectura REST',   nivel: 'avanzado'   },
      { nombre: 'Multi-Tenancy',       nivel: 'intermedio' },
    ],
  },
  {
    id: 'frontend',
    categoria: 'Frontend',
    Icono: Monitor,
    colorAcento: '#a78bfa',
    tecnologias: [
      { nombre: 'React 18',           nivel: 'avanzado'   },
      { nombre: 'Vite',               nivel: 'avanzado'   },
      { nombre: 'TypeScript',         nivel: 'intermedio' },
      { nombre: 'JavaScript ES6+',    nivel: 'avanzado'   },
      { nombre: 'Tailwind CSS',       nivel: 'avanzado'   },
      { nombre: 'Framer Motion',      nivel: 'intermedio' },
    ],
  },
  {
    id: 'bases-de-datos',
    categoria: 'Bases de Datos',
    Icono: Database,
    colorAcento: '#f59e0b',
    tecnologias: [
      { nombre: 'SQL Server',          nivel: 'avanzado'   },
      { nombre: 'Transact-SQL',        nivel: 'avanzado'   },
      { nombre: 'EF Core Migrations',  nivel: 'intermedio' },
      { nombre: 'Diseño Relacional',   nivel: 'avanzado'   },
    ],
  },
  {
    id: 'qa',
    categoria: 'QA & Testing',
    Icono: TestTube2,
    colorAcento: '#34d399',
    tecnologias: [
      { nombre: 'xUnit',                    nivel: 'intermedio' },
      { nombre: 'Automatización de Pruebas', nivel: 'intermedio' },
      { nombre: 'Pruebas de Estrés',        nivel: 'intermedio' },
      { nombre: 'Análisis QA',              nivel: 'intermedio' },
    ],
  },
  {
    id: 'devops',
    categoria: 'DevOps & Herramientas',
    Icono: GitBranch,
    colorAcento: '#94a3b8',
    tecnologias: [
      { nombre: 'Git & GitHub',        nivel: 'avanzado'   },
      { nombre: 'Ubuntu Linux',        nivel: 'intermedio' },
      { nombre: 'Virtualización',      nivel: 'básico'     },
      { nombre: 'VS / VS Code',        nivel: 'avanzado'   },
    ],
  },
]

// Color del indicador circular según nivel de dominio
export const COLOR_NIVEL = {
  avanzado:   '#06b6d4',
  intermedio: '#a78bfa',
  básico:     '#475569',
}
