import React from "react";
import { personalInfo } from "../../data/portfolioData";

/**
 * Componente ProjectHeaderBar:
 * - Barra superior fija presente en cada página de proyecto de muestra.
 * - Permite al cliente volver instantáneamente al Portfolio principal de Hugo Catalan.
 * - Destaca que se trata de un sitio de muestra interactivo y ofrece un botón directo
 *   para solicitar un desarrollo web con características similares.
 *
 * @param {Object} props
 * @param {string} props.projectName - Nombre del proyecto
 * @param {string} props.category - Categoría del desarrollo (ej: Estudio Jurídico, Empresa, Fitness)
 * @param {Function} props.onBack - Función para retornar al portfolio
 */
export function ProjectHeaderBar({ projectName, category, onBack }) {
  const customWhatsAppUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    `Hola, estuve viendo el desarrollo "${projectName}" en VOLCA TECH y me gustaría consultar por una solución similar para mi negocio.`
  )}`;

  return (
    <header className="project-demo-topbar">
      {/* Botón de retorno a VOLCA TECH */}
      <button
        type="button"
        className="btn-back-portfolio"
        onClick={onBack}
        aria-label="Volver al inicio de VOLCA TECH"
      >
        <span className="back-arrow">←</span>
        <span>Volver a VOLCA TECH</span>
      </button>

      {/* Identificación del proyecto actual y badge de demo */}
      <div className="project-demo-badge-wrap">
        <span className="demo-live-dot"></span>
        <span className="demo-live-text">DEMO INTERACTIVA</span>
        <span className="demo-project-name">· {category}</span>
      </div>

      {/* Botón de llamado a la acción comercial */}
      <div className="project-demo-cta-wrap">
        <a
          href={customWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-demo-cta"
        >
          <span>Quiero una web así</span>
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </header>
  );
}
