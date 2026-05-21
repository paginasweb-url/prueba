import React from 'react'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">🍎 Alimentación saludable infantil</span>

        <h1>
          Loncheras <br />
          <span>Saludables</span> <br />
          Para Niños
        </h1>

        <p>
          Recetas nutritivas, creativas y divertidas para mejorar la energía,
          concentración y alimentación de los niños en su día escolar.
        </p>

        <div className="hero-actions">
          <a href="/productos" className="hero-btn">Ver Productos</a>
         
        </div>
      </div>

      <div className="hero-side-card">
        <h3>Menús pensados para niños</h3>

        <p>
          Opciones balanceadas con frutas, snacks saludables y combinaciones
          ideales para la etapa escolar.
        </p>

        <div className="hero-stats">
          <div>
            <strong>+15</strong>
            Menús
          </div>

          <div>
            <strong>100%</strong>
            Fresco
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero