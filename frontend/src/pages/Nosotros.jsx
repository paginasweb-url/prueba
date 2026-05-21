import React from 'react'
import '../styles/nosotros.css'

function Nosotros() {
  return (
    <main className="nosotros-page">
      <a href="/" className="back-nosotros">← Volver al Inicio</a>

      <section className="nosotros-hero">
        <div className="nosotros-title">
          <span>Sobre Nosotros</span>
          <h1>Alimentación saludable desde la infancia</h1>
          <p>
            Creemos que una lonchera saludable puede cambiar el futuro de un niño.
          </p>
        </div>

        <div className="zigzag">
          <div className="info-card left">
            <div className="icon">🍎</div>
            <h3>¿Por qué nace este proyecto?</h3>
            <p>
              Nacimos al identificar que muchos niños llevan loncheras con exceso
              de azúcar, productos procesados y alimentos poco nutritivos.
            </p>
          </div>

          <div className="info-card right">
            <div className="icon">🥗</div>
            <h3>Nuestra solución</h3>
            <p>
              Creamos recetarios prácticos, accesibles y fáciles de preparar para
              ayudar a las familias a mejorar la alimentación escolar.
            </p>
          </div>

          <div className="info-card left">
            <div className="icon">📚</div>
            <h3>Nuestros recetarios</h3>
            <p>
              Ofrecemos libros de loncheras saludables, energéticas, económicas
              y contra la anemia, pensados para distintas necesidades.
            </p>
          </div>

          <div className="info-card right">
            <div className="icon">💚</div>
            <h3>Nuestro propósito</h3>
            <p>
              Promover mejores hábitos alimenticios desde la infancia y demostrar
              que comer sano también puede ser práctico, creativo y delicioso.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Nosotros