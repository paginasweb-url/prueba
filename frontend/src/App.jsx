import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import DetalleEconomicas from './pages/DetalleEconomicas'
import DetalleEnergeticas from './pages/DetalleEnergeticas'
import DetalleAnemia from './pages/DetalleAnemia'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Registro from './pages/Registro'
import Login from './pages/Login'
import Carrito from './pages/Carrito'
import PedidoExitoso from './pages/PedidoExitoso'
import MisPedidos from './pages/MisPedidos'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalle/:id" element={<DetalleProducto />} />
        <Route path="/detalle-economicas" element={<DetalleEconomicas />} />
        <Route path="/detalle-energeticas" element={<DetalleEnergeticas />} />
        <Route path="/detalle-anemia" element={<DetalleAnemia />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pedido-exitoso" element={<PedidoExitoso />} />
        <Route path="/mis-pedidos" element={<MisPedidos />} />
        
      </Routes>

    </BrowserRouter>
  )
}

export default App