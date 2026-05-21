import React from 'react'

function ProductCard({ nombre, descripcion, precio }) {
  return (
    <div className="product-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <strong>S/ {precio}</strong>
      <button>Agregar</button>
    </div>
  )
}

export default ProductCard