import React, { useState } from "react";
import { faqData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

/**
 * Componente Faq (Preguntas Frecuentes):
 * - Resuelve las dudas más habituales de los clientes antes del contacto (plazos, pagos, hosting, etc.).
 * - Mejora el posicionamiento en motores generativos (GEO) y Google AI Overviews.
 * - Acordeón interactivo suave con rotación de flecha y soporte de teclado accesible.
 */
export function Faq() {
  // Estado para controlar qué pregunta está actualmente abierta (permite alternar individualmente)
  const [openFaqId, setOpenFaqId] = useState(null);

  /**
   * Alterna la apertura o cierre de un ítem de FAQ
   * @param {string} id - Identificador de la pregunta
   */
  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="section content-section"
      id="faq"
      aria-labelledby="faq-title"
    >
      {/* Encabezado de la sección */}
      <Reveal className="section-heading">
        <span className="section-number">05</span>
        <div>
          <p className="eyebrow">PREGUNTAS FRECUENTES</p>
          <h2 id="faq-title">
            Dudas comunes,<br />
            <span>respuestas claras.</span>
          </h2>
          <p className="section-intro">
            Todo lo que necesitás saber sobre tiempos, modalidades de trabajo y entrega antes de comenzar tu proyecto.
          </p>
        </div>
      </Reveal>

      {/* Lista de acordeones de preguntas */}
      <div className="faq-list">
        {faqData.map((item) => {
          const isOpen = openFaqId === item.id;

          return (
            <Reveal
              key={item.id}
              as="article"
              className={`faq-item ${isOpen ? "is-open" : ""}`}
            >
              <button
                className="faq-question-btn"
                type="button"
                onClick={() => toggleFaq(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  <i className="ph ph-caret-down"></i>
                </span>
              </button>

              <div
                id={`faq-answer-${item.id}`}
                className="faq-answer-wrapper"
                aria-hidden={!isOpen}
              >
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
