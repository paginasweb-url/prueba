import React from 'react'
import '../styles/pedido.css'

function PedidoExitoso() {

  const usuario = JSON.parse(localStorage.getItem('usuario'))

  return (

    <main className="pedido-page">

      <section className="pedido-card">

        <div className="success-icon">
          ✓
        </div>

        <span className="pedido-badge">
          Pedido Procesado
        </span>

        <h1>
          ¡Compra Realizada!
        </h1>

        <p>
          Gracias <strong>{usuario?.nombre}</strong>,
          tu pedido fue procesado correctamente.
        </p>

        <div className="pedido-info">

          <div className="pedido-box">
            <small>Estado</small>
            <strong>Pagado</strong>
          </div>

          <div className="pedido-box">
            <small>Entrega</small>
            <strong>Digital PDF</strong>
          </div>

          <div className="pedido-box">
            <small>Acceso</small>
            <strong>Inmediato</strong>
          </div>

        </div>

        <div className="pedido-buttons">

          <a href="/" className="pedido-btn">
            Volver al Inicio
          </a>

          <a href="/productos" className="pedido-btn secondary">
            Seguir Comprando
          </a>

        </div>

      </section>

    </main>

  )
}

export default PedidoExitoso