import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../services/supabase'
import '../styles/detalle.css'

function DetalleProducto() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    obtenerProducto()
  }, [id])

  async function obtenerProducto() {
    const { data, error } = await supabase
      .from('productos')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.log(error)
    } else {
      setProducto(data)
    }
  }
 async function agregarCarrito() {

  const usuario = JSON.parse(localStorage.getItem('usuario'))

  if (!usuario) {
    alert('Primero debes iniciar sesión')
    window.location.href = '/login'
    return
  }

  // Buscar si el producto ya existe
  const { data: existente, error: errorBuscar } = await supabase
    .from('carrito')
    .select('*')
    .eq('usuario_id', usuario.id)
    .eq('producto_id', producto.id)
    .maybeSingle()

  if (errorBuscar) {
    console.log('ERROR BUSCAR:', errorBuscar)
    return
  }

  // Si ya existe -> aumentar cantidad
  if (existente) {

    const { error } = await supabase
      .from('carrito')
      .update({
        cantidad: existente.cantidad + 1
      })
      .eq('id', existente.id)

    if (error) {
      console.log('ERROR ACTUALIZAR:', error)
      alert('Error al actualizar carrito')
    } else {
      alert('Cantidad actualizada en el carrito')
      window.location.href = '/carrito'
    }

    return
  }

  // Si NO existe -> insertar nuevo
  const { error } = await supabase
    .from('carrito')
    .insert([
      {
        usuario_id: usuario.id,
        producto_id: producto.id,
        cantidad: 1
      }
    ])

  if (error) {
    console.log('ERROR INSERTAR:', error)
    alert('Error al agregar al carrito')
  } else {
    alert('Producto agregado al carrito')
    window.location.href = '/carrito'
  }

}
  if (!producto) {
    return <h2>Cargando producto...</h2>
  }

  return (
    <main className="detalle-page">
      <a href="/productos" className="volver-btn">← Volver</a>

      <section className="detalle-card">
        <div className="detalle-img">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className="detalle-info">
          <h1>
            <span>{producto.nombre.split(' ')[0]}</span><br />
            {producto.nombre.replace('Loncheras ', '')}
          </h1>

          <div className="linea"></div>

          <p>{producto.descripcion}</p>

          <div className="info-grid">
            <div className="info-box"><small>Autor</small><strong>{producto.autor}</strong></div>
            <div className="info-box"><small>Páginas</small><strong>22 páginas</strong></div>
            <div className="info-box"><small>Formato</small><strong>Digital PDF</strong></div>
            <div className="info-box"><small>Idioma</small><strong>Español</strong></div>
            <div className="info-box"><small>Categoría</small><strong>Nutrición Infantil</strong></div>
            <div className="info-box"><small>Stock</small><strong>{producto.stock}</strong></div>
          </div>

          <h2 className="precio">S/ {producto.precio}</h2>

          <div className="detalle-buttons">
            <button className="comprar-btn">Comprar Ahora</button>
            <button className="carrito-btn" onClick={agregarCarrito}>
                      Agregar al Carrito
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DetalleProducto