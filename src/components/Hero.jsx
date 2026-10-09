import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Reveal } from "./Reveal";

/**
 * Componente Hero:
 * - Sección principal de aterrizaje (Landing) que establece la propuesta de valor.
 * - Incluye texto de impacto con degradados y texto hueco 'stroke' característico.
 * - Acciones primarias y secundarias ("Ver servicios" y "Hablemos").
 * - Lado visual con efecto 3D: ventana de código interactiva, órbitas animadas y chips flotantes.
 * - Animado progresivamente mediante el componente `<Reveal>`.
 *
 * @param {Object} props
 * @param {Function} props.onNavigate - Función para desplazamiento suave a una sección
 */
export function Hero({ onNavigate }) {
  /**
   * Manejador de clics en los botones de acción del Hero
   */
  const handleActionClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <section className="section hero" id="inicio" aria-labelledby="hero-title">
      {/* Columna Izquierda: Mensaje principal y llamados a la acción */}
      <Reveal className="hero-copy">
        {/* Ceja identificadora */}
        <div className="eyebrow">
          <span></span> VOLCA TECH · SOLUCIONES DIGITALES
        </div>

        <p className="hero-pretitle">Desarrollo web y tecnología a medida</p>

        {/* Título principal con efecto stroke en la segunda línea */}
        <h1 id="hero-title">
          Desarrollo web<br />
          <span>profesional y a medida.</span>
        </h1>

        <p className="hero-description">
          En VOLCA TECH creamos páginas web, sitios institucionales y soluciones digitales personalizadas para profesionales,
          empresas y emprendimientos. Transformamos tus ideas en herramientas digitales pensadas para tu negocio.
        </p>

        {/* Botones de acción directos */}
        <div className="hero-actions">
          <a
            href="#servicios"
            className="btn btn-primary"
            onClick={(e) => handleActionClick(e, "servicios")}
          >
            Ver servicios <span>↓</span>
          </a>
          <a
            href="#contacto"
            className="btn btn-ghost"
            onClick={(e) => handleActionClick(e, "contacto")}
          >
            Hablemos <span>→</span>
          </a>
        </div>

        {/* Indicador de origen geográfico y alcance */}
        <div className="hero-origin">
          <span className="origin-line"></span>
          <strong>Desde {personalInfo.locality}, {personalInfo.country}.</strong>
          <span>{personalInfo.tagline}</span>
        </div>
      </Reveal>

      {/* Columna Derecha: Imagen promocional oficial VOLCA TECH */}
      <Reveal delay className="hero-visual" aria-hidden="true">
        {/* Grilla de fondo sutil y órbitas circulares */}
        <div className="visual-grid"></div>
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        {/* Imagen promocional oficial */}
        <div className="hero-brand-frame">
          <img
            src="./brand/imagen-promocional.png"
            alt="VOLCA TECH — Desarrollo web y soluciones digitales"
            className="hero-brand-img"
            loading="eager"
            draggable="false"
          />
        </div>

        {/* Chips flotantes con micro-animaciones */}
        <div className="floating-chip chip-one">Web</div>
        <div className="floating-chip chip-two">A medida</div>
        <div className="floating-chip chip-three">Responsive</div>
      </Reveal>
    </section>
  );
}
