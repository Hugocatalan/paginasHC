import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Reveal } from "./Reveal";

/**
 * Componente Contact:
 * - Panel de llamado a la acción final (CTA) con iluminación radial y borde sutil.
 * - Cartel instruccional destacado que guía hacia los tres canales directos:
 *   WhatsApp, Correo electrónico (Gmail) e Instagram.
 * - Botón interactivo de "Copiar email" con notificación toast para usuarios sin cliente de correo.
 * - Iconos oficiales de alta calidad servidos vía CDN con accesibilidad para lectores de pantalla.
 * - Animado progresivamente mediante el componente `<Reveal>`.
 */
export function Contact() {
  const { contactLinks } = personalInfo;
  // Estado para la notificación flotante al copiar el correo
  const [copied, setCopied] = useState(false);

  /**
   * Copia el email al portapapeles del usuario con retroalimentación visual
   */
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactLinks.emailRaw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback para navegadores antiguos
      window.location.href = contactLinks.email;
    }
  };

  return (
    <section
      className="section contact-section"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <Reveal className="contact-panel">
        {/* Información y propuesta de contacto */}
        <div>
          <p className="eyebrow">
            <span></span> CONTACTO VOLCA TECH
          </p>
          <h2 id="contact-title">
            ¿Tenés un proyecto?<br />
            <span>Hablemos.</span>
          </h2>
          <p>Contanos qué necesitás y diseñamos la mejor solución digital para tu negocio.</p>
        </div>

        {/* Acciones y canales de contacto directo */}
        <div className="contact-actions">
          {/* Cartel indicador con flecha hacia abajo */}
          <div
            className="contact-methods-label"
            aria-label="Medios de contacto de VOLCA TECH"
          >
            <span>Escribinos por estos canales</span>
            <span className="contact-methods-arrow" aria-hidden="true">
              ↓
            </span>
          </div>

          {/* Fila horizontal de botones de contacto con logos e interactividad hover */}
          <div className="social-links" aria-label="Medios de contacto">
            {/* WhatsApp comercial con mensaje pre-cargado */}
            <a
              className="social-link whatsapp"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a VOLCA TECH por WhatsApp"
              title="Abrir chat en WhatsApp"
            >
              <img
                src="https://cdn.simpleicons.org/whatsapp/25D366"
                alt=""
                aria-hidden="true"
              />
              <span className="sr-only">WhatsApp</span>
            </a>

            {/* Gmail directo */}
            <a
              className="social-link email"
              href={contactLinks.email}
              aria-label="Enviar un correo electrónico a VOLCA TECH"
              title="Escribir correo a Gmail"
            >
              <img
                src="https://cdn.simpleicons.org/gmail/EA4335"
                alt=""
                aria-hidden="true"
              />
              <span className="sr-only">Gmail</span>
            </a>
          </div>

          {/* Botón rápido para copiar email con feedback visual inmediato */}
          <div className="copy-email-wrapper">
            <button
              type="button"
              className="btn-copy-email"
              onClick={handleCopyEmail}
              aria-label="Copiar dirección de correo electrónico al portapapeles"
            >
              <i className="ph ph-copy" aria-hidden="true"></i>
              <span>{copied ? "¡Email copiado!" : "Copiar email"}</span>
            </button>
            {copied && (
              <span className="copy-badge-notification" role="status">
                ✓ Listo para pegar
              </span>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
