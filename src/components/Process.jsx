import React, { useState } from "react";
import { processSteps } from "../data/portfolioData";
import { Reveal } from "./Reveal";

/**
 * Componente Process ("Cómo trabajo"):
 * - Presenta las 4 etapas del flujo de trabajo: Hablamos, Planificamos, Desarrollamos, Publicamos.
 * - Cada tarjeta cuenta con un botón interactivo (+ info) que despliega suavemente
 *   la explicación detallada sin recargar ni alterar la navegación.
 * - El estado de apertura se maneja de forma declarativa con React useState.
 * - Utiliza el componente `<Reveal>` para que el estado de visibilidad nunca se pierda
 *   al interactuar con los botones o al re-renderizar la interfaz.
 */
export function Process() {
  // Estado para controlar qué pasos tienen su información expandida
  const [openSteps, setOpenSteps] = useState({});

  /**
   * Alterna la visibilidad del detalle de un paso específico
   * @param {string} stepId - Identificador del paso
   */
  const toggleStep = (stepId) => {
    setOpenSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  return (
    <section
      className="section content-section"
      id="como-trabajo"
      aria-labelledby="proceso-title"
    >
      {/* Encabezado de la sección con animación de entrada */}
      <Reveal className="section-heading">
        <span className="section-number">03</span>
        <div>
          <p className="eyebrow">PROCESO</p>
          <h2 id="proceso-title">
            Una forma de trabajar<br />
            <span>simple y clara.</span>
          </h2>
        </div>
      </Reveal>

      {/* Grilla de pasos del proceso */}
      <div className="process-grid">
        {processSteps.map((step) => {
          const isOpen = Boolean(openSteps[step.id]);

          return (
            <Reveal
              key={step.id}
              as="article"
              className={`process-step ${isOpen ? "is-open" : ""}`}
            >
              {/* Número del paso */}
              <span>{step.number}</span>

              {/* Título de la etapa */}
              <h3>{step.title}</h3>

              {/* Resumen principal */}
              <p>{step.summary}</p>

              {/* Botón para expandir / contraer el detalle (+ info) */}
              <button
                className="process-more"
                type="button"
                onClick={() => toggleStep(step.id)}
                aria-expanded={isOpen}
                aria-label={`${isOpen ? "Ocultar información" : "Ver más información"} sobre ${step.title}`}
              >
                + info <span aria-hidden="true">↓</span>
              </button>

              {/* Detalle ampliado con animación suave de apertura */}
              <div className="process-detail" aria-hidden={!isOpen}>
                {step.detail}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
