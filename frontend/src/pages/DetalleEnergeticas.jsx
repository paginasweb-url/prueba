import React from 'react'
import '../styles/detalle.css'

function DetalleEnergeticas() {
  return (
    <main className="detalle-page">
      <a href="/productos" className="volver-btn">← Volver</a>

      <section className="detalle-card">
        <div className="detalle-img">
          <img src="/libro3.png" alt="Loncheras Energéticas" />
        </div>

        <div className="detalle-info">
          <h1>
            <span>Loncheras</span><br />
            Energéticas
          </h1>

          <div className="linea"></div>

          <p>
            Loncheras Energéticas es un recetario pensado para brindar a los niños
            preparaciones saludables, nutritivas y llenas de energía para acompañar
            sus actividades diarias. Incluye recetas prácticas, equilibradas y fáciles
            de preparar para la etapa escolar.
          </p>

          <div className="info-grid">
            <div className="info-box">
              <small>Autor</small>
              <strong>Yudy Cabrera</strong>
            </div>

            <div className="info-box">
              <small>Páginas</small>
              <strong>20 páginas</strong>
            </div>

            <div className="info-box">
              <small>Publicación</small>
              <strong>20/04/2026</strong>
            </div>

            <div className="info-box">
              <small>Idioma</small>
              <strong>Español</strong>
            </div>

            <div className="info-box">
              <small>Formato</small>
              <strong>Digital PDF</strong>
            </div>

            <div className="info-box">
              <small>Categoría</small>
              <strong>Nutrición Infantil</strong>
            </div>
          </div>

          <h2 className="precio">S/ 40.00</h2>

          <div className="detalle-buttons">
            <button className="comprar-btn">Comprar Ahora</button>
            <button className="carrito-btn">Agregar al Carrito</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DetalleEnergeticas