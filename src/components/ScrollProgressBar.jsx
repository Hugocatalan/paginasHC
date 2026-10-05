import React, { useState, useEffect } from "react";

/**
 * Componente ScrollProgressBar:
 * - Muestra una línea delgada e interactiva fija en el tope de la pantalla (z-index 200).
 * - Calcula en tiempo real el porcentaje de desplazamiento del documento (0% a 100%).
 * - Utiliza un degradado Tech azul/naranja característico de la identidad visual.
 */
export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-container"
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progreso de lectura de la página"
    >
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
