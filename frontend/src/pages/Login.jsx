import React, { useState } from 'react'
import '../styles/login.css'
import { supabase } from '../services/supabase'

function Login() {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')

  async function iniciarSesion(e) {
    e.preventDefault()

    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('correo', correo)
      .eq('password', password)
      .single()

    console.log('USUARIO LOGIN:', data)
    console.log('ERROR LOGIN:', error)

    if (error || !data) {
      alert('Correo o contraseña incorrectos')
      return
    }

    localStorage.setItem('usuario', JSON.stringify(data))

    alert('Inicio de sesión correcto')
    window.location.href = '/'
  }

  return (
    <main className="login-page">
      <div className="login-left">
        <div className="login-overlay"></div>

        <div className="login-info">
          <span>🥗 Happy Food For Kids</span>

          <h1>
            Bienvenido <br />
            Nuevamente
          </h1>

          <p>
            Inicia sesión para acceder a tus libros, recetas y productos
            saludables favoritos.
          </p>
        </div>
      </div>

      <div className="login-right">
        <a href="/" className="back-login">
          ← Volver al Inicio
        </a>

        <form className="login-form" onSubmit={iniciarSesion}>
          <h2>Iniciar Sesión</h2>

          <div className="login-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="correo@gmail.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="login-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Ingresar
          </button>

          <p className="register-link">
            ¿No tienes cuenta?
            <a href="/registro"> Registrarse</a>
          </p>
        </form>
      </div>
    </main>
  )
}

export default Login