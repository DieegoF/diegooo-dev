import { useState, useEffect } from 'react'
import { ENLACES_NAV } from '../constantes/navegacion'

export function useSeccionActiva() {
  const [seccionActiva, setSeccionActiva] = useState('inicio')

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setSeccionActiva(entrada.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    ENLACES_NAV.forEach(({ id }) => {
      const elemento = document.getElementById(id)
      if (elemento) observador.observe(elemento)
    })

    return () => observador.disconnect()
  }, [])

  return seccionActiva
}
