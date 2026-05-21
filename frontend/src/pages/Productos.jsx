import React, { useEffect, useState } from 'react'
import '../styles/productos.css'
import { supabase } from '../services/supabase'

function Productos() {
  const [libros, setLibros] = useState([])

  useEffect(() => {
    obtenerProductos()
  }, [])

  async function obtenerProductos() {
    const { data, error } = await supabase
      .from('productos')
      .select('*')

    console.log('PRODUCTOS DESDE SUPABASE:', data)
    console.log('ERROR:', error)

    if (!error) {
      setLibros(data)
    }
  }

  return (
    <main className="productos-page">
      <a href="/" className="back-btn">
        ← Volver al Inicio
      </a>

      <section className="productos-header">
        <h1>Nuestros Libros</h1>
        <p>Recetarios saludables y creativos para mejorar la alimentación infantil.</p>
      </section>

      <section className="libros-grid">
        {libros.map((libro) => (
          <article className="libro-card" key={libro.id}>
            <img src={libro.imagen} alt={libro.nombre} />

            <div className="libro-info">
              <h2>{libro.nombre}</h2>
              <p>{libro.descripcion}</p>
              <h3>S/ {libro.precio}</h3>

              <a href={`/detalle/${libro.id}`} className="ver-btn">
                Ver Más
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Productos