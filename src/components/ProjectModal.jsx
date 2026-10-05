import React, { useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

/**
 * Componente ProjectModal:
 * - Ventana modal interactiva que presenta los detalles completos de un proyecto.
 * - Bloquea el scroll de la página de fondo mientras está abierto.
 * - Soporta cierre con tecla 'Esc', clic en el fondo oscuro (backdrop) y botón de cierre.
 * - Incluye botón directo para consultar por WhatsApp con mensaje contextualizado sobre el proyecto.
 *
 * @param {Object} props
 * @param {Object|null} props.project - Objeto con los datos del proyecto seleccionado
 * @param {Function} props.onClose - Función para cerrar el modal
 */
export function ProjectModal({ project, onClose, onViewDemoPage }) {
  // Cierre con la tecla Escape y bloqueo de scroll en el body
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  // Enlace de WhatsApp personalizado para consultar por este proyecto específico
  const customWhatsAppUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    `Hola Hugo, vi el proyecto "${project.title}" en tu portfolio y me gustaría consultar por algo similar.`
  )}`;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal con categoría y botón de cierre */}
        <div className="modal-header">
          <div className="modal-category">
            <span className="modal-number">{project.number}</span>
            <span className="modal-type">{project.type}</span>
          </div>

          <button
            className="modal-close-btn"
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalle de proyecto"
          >
            ✕
          </button>
        </div>

        {/* Captura visual del sitio web dentro del modal */}
        {project.imagePreviewUrl && (
          <div
            className="modal-preview-banner"
            onClick={() => {
              onClose();
              if (onViewDemoPage) onViewDemoPage(project.slug);
            }}
            title="Clic para navegar el sitio web completo"
          >
            <img
              src={project.imagePreviewUrl}
              alt={`Captura del sitio web: ${project.title}`}
              className="modal-preview-img"
            />
            <div className="modal-preview-overlay">
              <span className="modal-preview-tag">
                Ver sitio web completo en vivo <span>↗</span>
              </span>
            </div>
          </div>
        )}

        {/* Título y descripción principal */}
        <h2 id="modal-project-title" className="modal-title">
          {project.title}
        </h2>
        <p className="modal-description">
          {project.detailedDescription || project.description}
        </p>

        {/* Desglose: Problema y Solución */}
        {(project.clientProblem || project.solutionProvided) && (
          <div className="modal-sections-grid">
            {project.clientProblem && (
              <div className="modal-card-detail">
                <h4>El desafío</h4>
                <p>{project.clientProblem}</p>
              </div>
            )}
            {project.solutionProvided && (
              <div className="modal-card-detail">
                <h4>La solución</h4>
                <p>{project.solutionProvided}</p>
              </div>
            )}
          </div>
        )}

        {/* Características clave del desarrollo */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="modal-features">
            <h4>Características principales</h4>
            <ul>
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tecnologías aplicadas */}
        {project.techStack && (
          <div className="modal-tech-stack">
            <h4>Tecnologías aplicadas</h4>
            <div className="tags">
              {project.techStack.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
          </div>
        )}

        {/* Acciones inferiores: Ver demo completa, Contactar o Cerrar */}
        <div className="modal-footer-actions">
          {project.slug && (
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                onClose();
                if (onViewDemoPage) onViewDemoPage(project.slug);
              }}
            >
              Ver sitio web de muestra <span>↗</span>
            </button>
          )}
          <a
            className="btn btn-ghost"
            href={customWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp <span>→</span>
          </a>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
