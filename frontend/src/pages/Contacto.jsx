import React from 'react'
import '../styles/contacto.css'

function Contacto() {
  return (
    <main className="contacto-page">

      <a href="/" className="back-contacto">
        ← Volver al Inicio
      </a>

      <section className="contacto-container">

        <div className="contacto-title">
          <span>Happy Food For Kids</span>

          <h1>Nuestras Redes Sociales</h1>

          <p>
            Síguenos y descubre recetas saludables, consejos nutricionales
            y contenido creativo para niños.
          </p>
        </div>

        <div className="redes-grid">

          {/* FACEBOOK */}

          <a
            href="https://www.facebook.com/profile.php?id=100085638887853"
            target="_blank"
            className="social-card facebook"
          >
            <div className="circle">
              <img src="/facebook.png" alt="Facebook" />
            </div>

            <h2>Facebook</h2>

            <p>
              Noticias, recetas saludables y contenido educativo.
            </p>

            <span>Ir a Facebook →</span>
          </a>

          {/* TIKTOK */}

          <a
            href="https://www.tiktok.com/@happyfoodforkids5?is_from_webapp=1&sender_device=pc"
            target="_blank"
            className="social-card tiktok"
          >
            <div className="circle">
              <img src="/tiktok.png" alt="TikTok" />
            </div>

            <h2>TikTok</h2>

            <p>
              Videos creativos, recetas y tips saludables para niños.
            </p>

            <span>Ir a TikTok →</span>
          </a>

        </div>

      </section>

    </main>
  )
}

export default Contacto