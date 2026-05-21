import React from 'react'
import '../styles/detalle.css'

function DetalleAnemia() {
  return (
    <main className="detalle-page">
      <a href="/productos" className="volver-btn">← Atrás</a>

      <section className="detalle-card">
        <div className="detalle-img">
          <img src="/libro4.png" alt="Loncheras Contra la Anemia" />
        </div>

        <div className="detalle-info">
          <h1>
            <span>Loncheras</span><br />
            Contra la Anemia
          </h1>

          <div className="linea"></div>

          <p>
            Loncheras para Combatir la Anemia es un recetario creado para ayudar
            a prevenir y combatir la anemia infantil mediante preparaciones saludables,
            nutritivas y fáciles de elaborar.
          </p>

          <div className="info-grid">
            <div className="info-box"><small>Autor</small><strong>Lourdes Nicolle</strong></div>
            <div className="info-box"><small>Páginas</small><strong>20 páginas</strong></div>
            <div className="info-box"><small>Publicación</small><strong>20/04/2026</strong></div>
            <div className="info-box"><small>Idioma</small><strong>Español</strong></div>
            <div className="info-box"><small>Formato</small><strong>Digital PDF</strong></div>
            <div className="info-box"><small>Categoría</small><strong>Nutrición Infantil</strong></div>
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

export default DetalleAnemia