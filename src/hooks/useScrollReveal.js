import { useEffect } from "react";

/**
 * Hook para animaciones de entrada progresiva (Scroll Reveal).
 * Utiliza IntersectionObserver para añadir la clase 'visible' a los elementos
 * con la clase 'reveal' en cuanto entran en un 12% del viewport del usuario.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Si el navegador no soporta IntersectionObserver o el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Una vez visible, dejamos de observar para maximizar rendimiento
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
