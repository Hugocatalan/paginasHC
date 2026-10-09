import React from "react";
import { projectsData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

/**
 * Componente Projects:
 * - Muestra la lista de proyectos y demostraciones desarrolladas.
 * - Cada tarjeta incorpora una captura visual real del sitio web montada en un mockup de navegador interactivo.
 * - Al hacer clic en la imagen o en "Ver sitio de muestra", el cliente navega a la demo completa.
 *
 * @param {Object} props
 * @param {Function} props.onSelectProject - Abre el modal con la ficha técnica
 * @param {Function} props.onViewDemoPage - Navega a la página completa de la demo
 */
export function Projects({ onSelectProject, onViewDemoPage }) {
  return (
    <section
      className="section content-section"
      id="proyectos"
      aria-labelledby="proyectos-title"
    >
      {/* Encabezado de la sección con introducción */}
      <Reveal className="section-heading projects-heading">
        <span className="section-number">02</span>
        <div>
          <p className="eyebrow">PROYECTOS</p>
          <h2 id="proyectos-title">
            Trabajo que<br />
            <span>podés ver.</span>
          </h2>
          <p className="section-intro">
            Sitios web reales y demostraciones interactivas desarrolladas por VOLCA TECH para representar soluciones específicas para cada rubro. Hacé clic en cualquier proyecto para ver el sitio web completo en funcionamiento.
          </p>
        </div>
      </Reveal>

      {/* Lista detallada de proyectos */}
      <div className="projects-list">
        {projectsData.map((project) => (
          <Reveal
            key={project.number}
            as="article"
            className="project"
          >
            {/* Número ordinal */}
            <div className="project-number">{project.number}</div>

            {/* Mockup visual interactivo con captura real del sitio web */}
            <div
              className={`project-preview-mockup ${project.previewClass}`}
              onClick={() => onViewDemoPage && onViewDemoPage(project.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onViewDemoPage && onViewDemoPage(project.slug);
                }
              }}
              aria-label={`Ver sitio web de muestra de ${project.title}`}
              title="Clic para navegar el sitio web completo"
            >
              {/* Barra superior estilo ventana de navegador moderno */}
              <div className="mockup-browser-chrome">
                <div className="mockup-window-dots">
                  <span className="window-dot dot-close"></span>
                  <span className="window-dot dot-min"></span>
                  <span className="window-dot dot-max"></span>
                </div>
                <div className="mockup-url-bar">
                  <span className="mockup-lock-icon">🔒</span>
                  <span className="mockup-domain">{project.simulatedDomain || `${project.slug}.com`}</span>
                </div>
                <div className="mockup-live-status">
                  <span className="live-pulse"></span>
                  <span>EN VIVO</span>
                </div>
              </div>

              {/* Pantalla con la imagen real de cómo es el sitio web */}
              <div className="mockup-screen">
                {project.imagePreviewUrl && (
                  <img
                    src={project.imagePreviewUrl}
                    alt={`Vista previa del sitio web: ${project.title}`}
                    className="mockup-screen-img"
                    loading="lazy"
                  />
                )}
                {/* Overlay sutil al hacer hover que invita a abrir la demo */}
                <div className="mockup-hover-cue">
                  <span className="mockup-hover-badge">
                    Navegar sitio web <span>↗</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Información detallada y etiquetas del proyecto */}
            <div className="project-info">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Tags de características */}
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              {/* Botones de acción: Demo completa y Ficha técnica */}
              <div className="project-actions-row" style={{ display: "flex", gap: "14px", alignItems: "center", marginTop: "20px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="project-link project-link-btn"
                  onClick={() => onViewDemoPage && onViewDemoPage(project.slug)}
                  aria-label={`Ver sitio web completo de muestra: ${project.title}`}
                >
                  Ver sitio de muestra <span>↗</span>
                </button>

                <button
                  type="button"
                  className="btn-technical-sheet"
                  onClick={() => onSelectProject && onSelectProject(project)}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--line)",
                    borderRadius: "8px",
                    padding: "6px 14px",
                    color: "#8995a3",
                    fontSize: "11px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 152, 255, 0.4)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--line)";
                    e.currentTarget.style.color = "#8995a3";
                  }}
                  aria-label={`Ver ficha técnica y detalles de ${project.title}`}
                >
                  Ficha técnica
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Nota aclaratoria */}
      <Reveal as="p" className="portfolio-note">
        Cada proyecto cuenta con su propia página navegable e interactiva para que puedas evaluar la experiencia real de usuario.
      </Reveal>
    </section>
  );
}
