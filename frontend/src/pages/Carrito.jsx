import React, { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import '../styles/carrito.css'

function Carrito() {

  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    obtenerCarrito()
  }, [])

  async function obtenerCarrito() {

    const usuario = JSON.parse(localStorage.getItem('usuario'))

    if (!usuario) {
      alert('Debes iniciar sesión')
      window.location.href = '/login'
      return
    }

    const { data, error } = await supabase
      .from('carrito')
      .select(`
        id,
        cantidad,
        productos (
          id,
          nombre,
          precio
        )
      `)
      .eq('usuario_id', usuario.id)

    if (error) {
      console.log(error)
    } else {
      setCarrito(data)
    }
  }

  async function aumentarCantidad(item) {

    const { error } = await supabase
      .from('carrito')
      .update({ cantidad: item.cantidad + 1 })
      .eq('id', item.id)

    if (!error) {
      obtenerCarrito()
    }
  }

  async function disminuirCantidad(item) {

    if (item.cantidad <= 1) {

      const { error } = await supabase
        .from('carrito')
        .delete()
        .eq('id', item.id)

      if (!error) {
        obtenerCarrito()
      }

      return
    }

    const { error } = await supabase
      .from('carrito')
      .update({ cantidad: item.cantidad - 1 })
      .eq('id', item.id)

    if (!error) {
      obtenerCarrito()
    }
  }

  const total = carrito.reduce((suma, item) => {
    return suma + Number(item.productos.precio) * item.cantidad
  }, 0)

  async function finalizarCompra() {

    const usuario = JSON.parse(localStorage.getItem('usuario'))

    if (!usuario) {
      alert('Debes iniciar sesión')
      window.location.href = '/login'
      return
    }

    if (carrito.length === 0) {
      alert('Tu carrito está vacío')
      return
    }

    const { data: pedido, error: errorPedido } = await supabase
      .from('pedidos')
      .insert([
        {
          usuario_id: usuario.id,
          total: total,
          estado: 'pagado'
        }
      ])
      .select()
      .single()

    if (errorPedido) {
      console.log(errorPedido)
      alert('Error al crear pedido')
      return
    }

    const detalles = carrito.map((item) => ({
      pedido_id: pedido.id,
      producto_id: item.productos.id,
      cantidad: item.cantidad,
      subtotal: Number(item.productos.precio) * item.cantidad
    }))

    const { error: errorDetalle } = await supabase
      .from('detalle_pedido')
      .insert(detalles)

    if (errorDetalle) {
      console.log(errorDetalle)
      alert('Error al guardar detalle del pedido')
      return
    }

    await supabase
      .from('carrito')
      .delete()
      .eq('usuario_id', usuario.id)

    window.location.href = '/pedido-exitoso'
  }

  return (

    <main className="carrito-page">

      <div className="top-buttons">

        <a href="/" className="volver-btn">
          ← Volver al Inicio
        </a>

        <a href="/productos" className="productos-btn">
          Ver Productos
        </a>

      </div>

      <h1 className="carrito-title">
        Mi Carrito
      </h1>

      <section className="carrito-grid">

        {carrito.map((item) => (

          <article className="carrito-card" key={item.id}>

            <div className="carrito-info">

              <h2>
                {item.productos.nombre}
              </h2>

              <div className="cantidad-box">

                <button onClick={() => disminuirCantidad(item)}>
                  -
                </button>

                <span>
                  {item.cantidad}
                </span>

                <button onClick={() => aumentarCantidad(item)}>
                  +
                </button>

              </div>

              <h3>
                S/ {(Number(item.productos.precio) * item.cantidad).toFixed(2)}
              </h3>

            </div>

          </article>

        ))}

      </section>

      <section className="total-carrito">

        <h2>Total a pagar</h2>

        <strong>
          S/ {total.toFixed(2)}
        </strong>

        <button onClick={finalizarCompra}>
          Finalizar compra
        </button>

      </section>

    </main>
  )
}

export default Carrito
