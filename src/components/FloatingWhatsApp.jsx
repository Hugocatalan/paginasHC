import React from "react";
import { personalInfo } from "../data/portfolioData";

/**
 * Componente FloatingWhatsApp:
 * - Botón de acceso rápido fijo en la esquina inferior derecha de la pantalla.
 * - Permite al visitante iniciar una conversación directa en WhatsApp en cualquier momento.
 * - Totalmente responsivo: Muestra texto e icono en escritorio; se compacta a botón circular en móviles.
 */
export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={personalInfo.contactLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar directamente por WhatsApp"
    >
      <img
        src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
        alt=""
        aria-hidden="true"
      />
      <span>WhatsApp</span>
    </a>
  );
}
