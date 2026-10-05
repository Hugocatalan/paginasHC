import React, { useRef, useState, useEffect } from "react";

/**
 * Componente Reveal:
 * - Gestiona de forma 100% declarativa y nativa en React las animaciones de aparición al hacer scroll.
 * - Mantiene el estado `isVisible` en el estado de React (`useState`), evitando que re-renders
 *   (como alternar '+ info' o colapsar el sidebar) eliminen la clase 'visible' del DOM.
 * - Utiliza IntersectionObserver con un umbral del 12% del viewport.
 * - Soporta la etiqueta HTML que se le indique a través de la prop `as` (div, article, p, etc.).
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido interno
 * @param {string} [props.className=""] - Clases CSS adicionales
 * @param {boolean} [props.delay=false] - Añade un retardo sutil a la animación
 * @param {string|React.ElementType} [props.as="div"] - Elemento HTML a renderizar
 */
export function Reveal({
  children,
  className = "",
  delay = false,
  as: Component = "div",
  ...props
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Si el usuario prefiere reducción de movimiento o no existe soporte para IntersectionObserver
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    // Si ya es visible, no es necesario volver a observarlo
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  const combinedClasses = [
    "reveal",
    isVisible ? "visible" : "",
    delay ? "delay" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component ref={elementRef} className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}
