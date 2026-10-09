import React from "react";

/**
 * Iconos oficiales de navegación de VOLCA TECH en formato SVG nativo.
 * Desarrollados con currentColor para responder fielmente a estados hover y active desde CSS.
 * Vectoriales puros, de alta nitidez y rendimiento óptimo.
 */
export function NavIcon({ name, className = "" }) {
  const iconKey = name?.toLowerCase();

  switch (iconKey) {
    case "inicio":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M8 29 32 9l24 20"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 27v27h34V27M26 54V38h12v16"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "servicios":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <rect
            x="9"
            y="20"
            width="46"
            height="35"
            rx="5"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <path
            d="M23 20v-6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6M9 32h46M26 32v5h12v-5"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "proyectos":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="m32 8 23 12-23 12L9 20 32 8Z"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="m9 30 23 12 23-12M9 40l23 12 23-12"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "como-trabajo":
    case "como-trabajamos":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <circle cx="13" cy="48" r="5" stroke="currentColor" strokeWidth="3.5" />
          <circle cx="50" cy="16" r="5" stroke="currentColor" strokeWidth="3.5" />
          <path
            d="M18 48h9a8 8 0 0 0 8-8V25a8 8 0 0 1 8-8h2M41 10l6 6-6 6M25 42l6 6-6 6"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "sobre-mi":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <circle cx="27" cy="21" r="10" stroke="currentColor" strokeWidth="3.5" />
          <path
            d="M9 53c1-10 8-16 18-16s17 6 18 16"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="48" cy="17" r="9" stroke="currentColor" strokeWidth="3.5" />
          <path
            d="M48 12v10M43 17h10"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "faq":
    case "preguntas":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="23" stroke="currentColor" strokeWidth="3.5" />
          <path
            d="M24 24a8 8 0 1 1 13 6c-4 3-5 4-5 8"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="32" cy="46" r="2.3" fill="currentColor" stroke="none" />
        </svg>
      );

    case "contacto":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M55 8 8 27l19 8 8 20L55 8Z"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m27 35 14-14"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
}
