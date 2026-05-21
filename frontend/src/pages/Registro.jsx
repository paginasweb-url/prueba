import React, { useState } from 'react'
import '../styles/registro.css'
import { supabase } from '../services/supabase'

function Registro() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')

  async function registrarUsuario(e) {
    e.preventDefault()

    if (password !== confirmar) {
      alert('Las contraseñas no coinciden')
      return
    }

    const { data, error } = await supabase
      .from('usuarios')
      .insert([
        {
          nombre: nombre,
          correo: correo,
          password: password
        }
      ])

    console.log('USUARIO REGISTRADO:', data)
    console.log('ERROR:', error)

    if (error) {
      alert('Error al registrar usuario')
    } else {
      alert('Usuario registrado correctamente')
      window.location.href = '/login'
    }
  }

  return (
    <main className="registro-page">
      <div className="registro-left">
        <div className="overlay"></div>

        <div className="registro-info">
          <span>🍎 Happy Food For Kids</span>

          <h1>
            Crea tu <br />
            cuenta saludable
          </h1>

          <p>
            Regístrate para descubrir recetas, libros y contenido saludable
            para niños.
          </p>
        </div>
      </div>

      <div className="registro-right">
        <a href="/" className="back-home">
          ← Volver al Inicio
        </a>

        <form className="registro-form" onSubmit={registrarUsuario}>
          <h2>Registrarse</h2>

          <div className="input-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="correo@gmail.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="registro-btn">
            Crear Cuenta
          </button>

          <p className="login-link">
            ¿Ya tienes cuenta?
            <a href="/login"> Iniciar Sesión</a>
          </p>
        </form>
      </div>
    </main>
  )
}

export default Registro