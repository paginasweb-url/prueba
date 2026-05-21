import React from 'react'
import '../styles/detalle.css'

function DetalleEconomicas() {
  return (
    <main className="detalle-page">
      <a href="/productos" className="volver-btn">← Volver</a>

      <section className="detalle-card">
        <div className="detalle-img">
          <img src="/libro2.png" alt="Loncheras Económicas" />
        </div>

        <div className="detalle-info">
          <h1>
            <span>Loncheras</span><br />
            Económicas
          </h1>

          <div className="linea"></div>

          <p>
            Aprende a preparar loncheras económicas, nutritivas y creativas
            para niños en etapa escolar. Este recetario incluye recetas fáciles,
            ingredientes accesibles y consejos prácticos para cuidar el presupuesto familiar.
          </p>

          <div className="info-grid">
            <div className="info-box">
              <small>Autor</small>
              <strong>Yenny Siesquen</strong>
            </div>

            <div className="info-box">
              <small>Páginas</small>
              <strong>22 páginas</strong>
            </div>

            <div className="info-box">
              <small>Publicación</small>
              <strong>10/05/2026</strong>
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

export default DetalleEconomicas