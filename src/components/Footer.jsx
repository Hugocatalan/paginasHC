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
      <div className="footer-brand">
        <img
          src="./brand/logo-monocromo.png"
          alt="VOLCA TECH"
          className="footer-brand-logo"
          loading="lazy"
        />
        <span>© {currentYear} {personalInfo.name}</span>
      </div>
      <span>{personalInfo.role} · {personalInfo.locality}, {personalInfo.country}</span>
      <span>{personalInfo.tagline}</span>
    </footer>
  );
}
