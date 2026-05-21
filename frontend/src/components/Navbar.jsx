import React, { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

function Navbar() {

  const usuario = JSON.parse(localStorage.getItem('usuario'))

  const [cantidadCarrito, setCantidadCarrito] = useState(0)

  useEffect(() => {
    obtenerCantidadCarrito()
  }, [])

  async function obtenerCantidadCarrito() {

    if (!usuario) return

    const { data, error } = await supabase
      .from('carrito')
      .select('*')
      .eq('usuario_id', usuario.id)

    if (!error) {
      const totalCantidad = data.reduce((suma, item) => {
  return suma + item.cantidad
}, 0)

setCantidadCarrito(totalCantidad)
    }
  }

  return (
    <>

      <div className="top-bar">

        <div className="top-left">

          {usuario && (
            <span className="usuario-name">
              👤 {usuario.nombre}
            </span>
          )}

        </div>

        <div className="top-actions">

          {usuario ? (

            <>
              <a href="/carrito" className="cart-link">
                🛒 {cantidadCarrito} - Carrito
              </a>
              <a href="/mis-pedidos" className="cart-link">
  📦 Mis Pedidos
</a>

              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem('usuario')
                  window.location.href = '/'
                }}
              >
                Cerrar Sesión
              </button>
            </>

          ) : (

            <>
              <a href="/registro">Registrarse</a>
              <a href="/login">Iniciar Sesión</a>
            </>

          )}

        </div>

      </div>

      <header className="main-header">

        <a href="/" className="logo-box">
          <img src="/logo.png" alt="Happy Food For Kids" />
        </a>

        <nav className="nav-menu">
          <a href="/nosotros">Sobre Nosotros</a>
          <a href="/contacto">Contáctanos</a>
        </nav>

      </header>

    </>
  )
}

export default Navbar