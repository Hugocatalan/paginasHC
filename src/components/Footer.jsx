import React from "react";
import { personalInfo } from "../data/portfolioData";

/**
 * Componente Footer:
 * - Pie de página minimalista institucional.
 * - Muestra derechos reservados, ubicación geográfica y lema profesional.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <span>© {currentYear} {personalInfo.name}</span>
      <span>{personalInfo.role} · {personalInfo.locality}, {personalInfo.country}</span>
      <span>{personalInfo.tagline}</span>
    </footer>
  );
}
