import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Hook personalizado para detectar qué sección está actualmente activa en pantalla.
 * Implementa una línea de lectura fija (triggerY) para evitar saltos o activaciones simultáneas,
 * e incluye bloqueo temporal durante el scroll suave programado al hacer click en el menú.
 *
 * @param {Array<string>} sectionIds - Lista de IDs de las secciones a observar
 * @returns {{
 *   activeSection: string,
 *   scrollToSection: (sectionId: string, onComplete?: () => void) => void
 * }}
 */
export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "inicio");
  const isLockedRef = useRef(false);
  const lockTimerRef = useRef(null);

  /**
   * Calcula qué sección cruzó la línea de lectura superior (38% del viewport o máx 360px)
   */
  const updateActiveSection = useCallback(() => {
    if (isLockedRef.current) return;

    const triggerY = Math.min(window.innerHeight * 0.38, 360);
    let current = sectionIds[0] || "inicio";

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Si el tope del elemento está por encima o a la altura de la línea de lectura
        if (rect.top <= triggerY) {
          current = id;
        }
      }
    }

    setActiveSection(current);
  }, [sectionIds]);

  /**
   * Desplazamiento suave controlado al pulsar un enlace de navegación
   */
  const scrollToSection = useCallback((sectionId, onComplete) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    // Bloquear temporalmente la actualización por scroll para que la navegación sea precisa
    isLockedRef.current = true;
    setActiveSection(sectionId);

    // Actualizar hash en la URL sin saltos bruscos
    window.history.replaceState(null, "", `#${sectionId}`);

    // Si hay un callback (ej: cerrar menú móvil), ejecutarlo
    if (onComplete) onComplete();

    // Scroll nativo suave
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // Desbloquear tras finalizar la animación de scroll
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      isLockedRef.current = false;
      updateActiveSection();
    }, 1100);
  }, [updateActiveSection]);

  // Listener optimizado de scroll con requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Verificación inicial
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, [updateActiveSection]);

  return { activeSection, scrollToSection };
}
