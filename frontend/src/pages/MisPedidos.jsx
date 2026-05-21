import React, { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import '../styles/pedidos.css'

function MisPedidos() {
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    obtenerPedidos()
  }, [])

  async function obtenerPedidos() {
    const usuario = JSON.parse(localStorage.getItem('usuario'))

    if (!usuario) {
      window.location.href = '/login'
      return
    }

    const { data: pedidosData } = await supabase
      .from('pedidos')
      .select('*')
      .eq('usuario_id', usuario.id)
      .order('created_at', { ascending: false })

    const idsPedidos = pedidosData.map(p => p.id)

    const { data: detallesData } = await supabase
      .from('detalle_pedido')
      .select('*')
      .in('pedido_id', idsPedidos)

    const idsProductos = detallesData.map(d => d.producto_id)

    const { data: productosData } = await supabase
      .from('productos')
      .select('id, nombre')
      .in('id', idsProductos)

    const pedidosCompletos = pedidosData.map((pedido) => {
      const detalles = detallesData
        .filter(d => d.pedido_id === pedido.id)
        .map((detalle) => {
          const producto = productosData.find(p => p.id === detalle.producto_id)

          return {
            ...detalle,
            nombre: producto ? producto.nombre : 'Libro no encontrado'
          }
        })

      return {
        ...pedido,
        detalles
      }
    })

    setPedidos(pedidosCompletos)
  }

  return (
    <main className="pedidos-page">
      <a href="/" className="volver-btn">
        ← Volver al Inicio
      </a>

      <h1 className="pedidos-title">Mis Pedidos</h1>

      <section className="pedidos-grid">
        {pedidos.map((pedido) => (
          <article className="pedido-card" key={pedido.id}>
            <span className="pedido-status">{pedido.estado}</span>

            <p>
              <strong>Fecha:</strong>{' '}
              {new Date(pedido.created_at).toLocaleDateString('es-PE')}
            </p>

            <div className="pedido-libros">
              <strong>Libros comprados:</strong>

              {pedido.detalles.map((detalle) => (
                <div className="libro-comprado" key={detalle.id}>
                  <span>{detalle.nombre}</span>
                  <small>Cantidad: {detalle.cantidad}</small>
                </div>
              ))}
            </div>

            <h3>
              Monto total pagado: S/ {Number(pedido.total).toFixed(2)}
            </h3>
          </article>
        ))}
      </section>
    </main>
  )
}

export default MisPedidos