import { FondoAnimado }  from './components/ui/FondoAnimado'
import { Navbar }        from './components/layout/Navbar'
import { Hero }          from './components/sections/Hero'
import { SobreMi }       from './components/sections/SobreMi'
import { Tecnologias }   from './components/sections/Tecnologias'
import { Proyectos }     from './components/sections/Proyectos'
import { Contacto }      from './components/sections/Contacto'

function App() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100svh',
        backgroundColor: '#020817',
        color: '#f1f5f9',
        overflowX: 'hidden',
      }}
    >
      {/* Orbes de gradiente animados en el fondo */}
      <FondoAnimado />

      {/* Navbar fija con smooth scroll y detección de sección activa */}
      <Navbar />

      <main>
        <Hero />
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Contacto />
      </main>

      {/* Footer minimalista */}
      <footer
        className="py-8 text-center text-slate-700 text-xs"
        style={{ borderTop: '1px solid rgba(30, 41, 59, 0.4)' }}
      >
        <span>
          Diegooo<span className="text-cyan-900">.dev</span> · {new Date().getFullYear()} · Buenos Aires, Argentina
        </span>
      </footer>
    </div>
  )
}

export default App
