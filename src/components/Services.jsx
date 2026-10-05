import React from "react";
import { servicesData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

/**
 * Componente Services:
 * - Muestra las 4 soluciones principales ofrecidas por Hugo Catalan.
 * - Tarjetas con numeración ordenada, icono de categoría, título, descripción y público objetivo.
 * - Estética Dark Tech con resplandor azul en hover (`::after blur`).
 * - Integración con `<Reveal>` para transiciones fluidas e inmunes a re-renders.
 */
export function Services() {
  return (
    <section
      className="section content-section"
      id="servicios"
      aria-labelledby="servicios-title"
    >
      {/* Encabezado de la sección con número y ceja */}
      <Reveal className="section-heading">
        <span className="section-number">01</span>
        <div>
          <p className="eyebrow">SERVICIOS</p>
          <h2 id="servicios-title">
            Lo que puedo<br />
            <span>desarrollar para vos.</span>
          </h2>
        </div>
      </Reveal>

      {/* Grilla responsiva de tarjetas de servicios */}
      <div className="services-grid">
        {servicesData.map((service) => (
          <Reveal
            key={service.number}
            as="article"
            className="service-card"
          >
            {/* Número ordinal de la tarjeta */}
            <div className="service-number">{service.number}</div>

            {/* Ícono distintivo tech */}
            <div className="service-icon">{service.icon}</div>

            {/* Título del servicio */}
            <h3>{service.title}</h3>

            {/* Descripción de la propuesta de valor */}
            <p>{service.description}</p>

            {/* Segmento o público destinatario */}
            <span className="service-for">{service.target}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
