import {useEffect, useState, useRef} from 'react'
                                      // rootMargin
export default function useNearScreen ({ distance = '100px', externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) { // Si las entradas se intersectan (En este caso hacemos scroll hasta el punto en el que detecta la intersección)
        setShow(true) // Enseña la petición (Los links de tendencias)
        once && observer.disconnect() // Gracias al observer.disconnect desconectamos al observador para que podamos
                                      // Aumentar el rendimiento muchísimo y que cada vez que subamos y bajemos no active el efecto
                                      // Constantemente.
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve( // Este Promise te importa la librería de intersection-observer de forma dinámica.
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      }) // rootMargin es el margen de distancia que utiliza el observador para poder
         // identificar cuando tendrá que cargar los datos que le indicamos, en este caso
         // los links de trending GIFs.
  
      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return {isNearScreen, fromRef}
}