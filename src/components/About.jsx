import React, { useState } from "react";
import { personalInfo, technologies, techCategories } from "../data/portfolioData";
import { Reveal } from "./Reveal";

/**
 * Componente About ("Sobre mí"):
 * - Presentación personal y formación académica (UTN).
 * - Filosofía de desarrollo: soluciones claras, profesionales y mantenibles.
 * - Tarjeta visual interactiva con el stack tecnológico y filtro dinámico por categorías:
 *   (Todas, Frontend, Backend, Bases de datos, DevOps & Herramientas).
 * - Animado progresivamente mediante el componente `<Reveal>`.
 */
export function About() {
  // Estado para la categoría activa del stack tecnológico
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtrado de tecnologías según la pestaña seleccionada
  const filteredTechs =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section
      className="section content-section"
      id="sobre-mi"
      aria-labelledby="sobre-title"
    >
      {/* Encabezado de la sección */}
      <Reveal className="section-heading">
        <span className="section-number">04</span>
        <div>
          <p className="eyebrow">SOBRE MÍ</p>
          <h2 id="sobre-title">
            La persona detrás<br />
            <span>del código.</span>
          </h2>
        </div>
      </Reveal>

      <div className="about-grid">
        {/* Columna Izquierda: Biografía y enfoque profesional */}
        <Reveal className="about-main">
          <p className="large-text">
            Soy <strong>{personalInfo.name}</strong>, desarrollador Full Stack de {personalInfo.locality}, {personalInfo.country}.
          </p>
          <p>
            Estoy formado en desarrollo web y soy estudiante avanzado de la Tecnicatura Universitaria en
            Programación de la UTN. Mi trabajo combina programación, resolución de problemas y una mirada
            práctica sobre lo que cada proyecto necesita.
          </p>
          <p>
            Mi objetivo es desarrollar soluciones claras, profesionales y mantenibles, sin agregar
            complejidad donde no hace falta.
          </p>
        </Reveal>

        {/* Columna Derecha: Tarjeta de Tecnologías con resplandor tech y filtros interactivos */}
        <Reveal className="tech-card">
          <div className="card-glow" aria-hidden="true"></div>
          <p className="tech-title">Tecnologías con las que trabajo</p>

          {/* Pestañas de filtrado por categoría tecnológica */}
          <div className="tech-filter-tabs" role="tablist" aria-label="Filtro de tecnologías">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`tech-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grilla dinámica de tecnologías filtradas */}
          <div className="tech-list">
            {filteredTechs.map((tech) => (
              <span key={tech.name} className="tech-item">
                {tech.isPhosphor ? (
                  <i className={tech.iconClass} aria-hidden="true"></i>
                ) : (
                  <img src={tech.iconUrl} alt="" aria-hidden="true" loading="lazy" />
                )}
                {tech.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
