import React, { useState, useEffect } from "react";
import { AmbientGlow } from "./components/AmbientGlow";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { ProjectModal } from "./components/ProjectModal";
import { useScrollSpy } from "./hooks/useScrollSpy";

// Páginas completas e interactivas de cada proyecto de muestra
import { EstudioJuridicoDemo } from "./pages/EstudioJuridicoDemo";
import { EmpresaInstitucionalDemo } from "./pages/EmpresaInstitucionalDemo";
import { LandingEntrenamientoDemo } from "./pages/LandingEntrenamientoDemo";
import { ElectricidadDemo } from "./pages/ElectricidadDemo";
import { TiroDemo } from "./pages/TiroDemo";
import { HugoLandingDemo } from "./pages/HugoLandingDemo";

// Identificadores de las secciones principales para el espía de scroll y navegación
const SECTION_IDS = [
  "inicio",
  "servicios",
  "proyectos",
  "como-trabajo",
  "sobre-mi",
  "faq",
  "contacto"
];

/**
 * Componente Principal App:
 * - Sistema de enrutamiento integrado para alternar entre el Portfolio principal y las páginas completas de cada proyecto demo.
 * - Rutas dedicadas por proyecto:
 *   - `#/proyecto/estudio-juridico` -> Estudio Jurídico Demo
 *   - `#/proyecto/sitio-institucional` -> Sitio Institucional Empresa Demo
 *   - `#/proyecto/landing-entrenamiento` -> Landing Entrenamiento & Fitness Demo
 * - Sincroniza con el historial del navegador (soporta botones Atrás/Adelante y enlaces directos).
 * - Sincroniza las clases del body (`sidebar-collapsed`, `mobile-menu-open`).
 */
export function App() {
  // Estado para la ruta actual (sincronizada con window.location.hash)
  const [currentRoute, setCurrentRoute] = useState(
    () => window.location.hash || ""
  );

  // Estado para colapso del menú lateral en pantallas de escritorio
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Estado para la apertura del menú desplegable en pantallas móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Estado para el proyecto activo en el modal de ficha técnica
  const [selectedProject, setSelectedProject] = useState(null);

  // Hook para detectar la sección activa y realizar desplazamientos suaves en el portfolio
  const { activeSection, scrollToSection } = useScrollSpy(SECTION_IDS);

  /**
   * Listener del evento 'hashchange':
   * Permite que la navegación entre páginas funcione con el historial del navegador.
   */
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "";
      setCurrentRoute(hash);

      // Si entramos a una página de demo, hacemos scroll inmediato al tope
      if (hash.startsWith("#/proyecto/")) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  /**
   * Navega a la página completa de un proyecto
   * @param {string} slug - Identificador amigable de la ruta del proyecto
   */
  const navigateToDemo = (slug) => {
    window.location.hash = `#/proyecto/${slug}`;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  /**
   * Regresa desde cualquier demo a la sección de proyectos del portfolio
   */
  const navigateBackToPortfolio = () => {
    window.location.hash = "#proyectos";
    // Pequeño timeout para permitir el re-montaje antes de centrar la sección
    setTimeout(() => {
      const elem = document.getElementById("proyectos");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  /**
   * Sincronización de clases con el elemento <body>
   */
  useEffect(() => {
    if (isSidebarCollapsed) {
      document.body.classList.add("sidebar-collapsed");
    } else {
      document.body.classList.remove("sidebar-collapsed");
    }
  }, [isSidebarCollapsed]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [isMobileMenuOpen]);

  /**
   * Control de Resize para consistencia responsive
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        setIsSidebarCollapsed(false);
      } else {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Soporte de tecla Escape
   */
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === "Escape") {
        if (selectedProject) setSelectedProject(null);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [selectedProject, isMobileMenuOpen]);

  // =========================================================================
  // ENRUTAMIENTO CONDICIONAL: PÁGINAS DEDICADAS DE CADA PROYECTO
  // =========================================================================
  if (currentRoute.startsWith("#/proyecto/estudio-juridico")) {
    return <EstudioJuridicoDemo onBack={navigateBackToPortfolio} />;
  }

  if (currentRoute.startsWith("#/proyecto/sitio-institucional")) {
    return <EmpresaInstitucionalDemo onBack={navigateBackToPortfolio} />;
  }

  if (currentRoute.startsWith("#/proyecto/landing-entrenamiento")) {
    return <LandingEntrenamientoDemo onBack={navigateBackToPortfolio} />;
  }

  if (currentRoute.startsWith("#/proyecto/electricidad-industrial")) {
    return <ElectricidadDemo onBack={navigateBackToPortfolio} />;
  }

  if (currentRoute.startsWith("#/proyecto/tiro-profesional")) {
    return <TiroDemo onBack={navigateBackToPortfolio} />;
  }

  if (currentRoute.startsWith("#/proyecto/hugo-catalan-coaching")) {
    return <HugoLandingDemo onBack={navigateBackToPortfolio} />;
  }

  // =========================================================================
  // VISTA PRINCIPAL DEL PORTFOLIO
  // =========================================================================
  return (
    <>
      {/* ------------------------------------------------------------------
          1. BARRA DE PROGRESO DE LECTURA (SCROLL PROGRESS)
          ------------------------------------------------------------------ */}
      <ScrollProgressBar />

      {/* ------------------------------------------------------------------
          2. ACCESIBILIDAD: ENLACE PARA SALTAR AL CONTENIDO
          ------------------------------------------------------------------ */}
      <a
        className="skip-link"
        href="#contenido"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("inicio");
        }}
      >
        Saltar al contenido
      </a>

      {/* ------------------------------------------------------------------
          3. LUCES AMBIENTALES DECORATIVAS (DARK PREMIUM GLOW)
          ------------------------------------------------------------------ */}
      <AmbientGlow />

      {/* ------------------------------------------------------------------
          4. BARRA LATERAL / NAVEGACIÓN PRINCIPAL RESPONSIVE
          ------------------------------------------------------------------ */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* ------------------------------------------------------------------
          5. CONTENIDO PRINCIPAL DE LA APLICACIÓN
          ------------------------------------------------------------------ */}
      <main className="main" id="contenido">
        {/* Sección Hero: Inicio y propuesta de valor */}
        <Hero onNavigate={scrollToSection} />

        {/* Sección Servicios: Soluciones ofrecidas */}
        <Services />

        {/* Sección Proyectos: Muestras y casos de uso con páginas completas y modal */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onViewDemoPage={navigateToDemo}
        />

        {/* Sección Cómo trabajo: Proceso con detalle expandible */}
        <Process />

        {/* Sección Sobre mí: Perfil y stack de tecnologías con filtros */}
        <About />

        {/* Sección Preguntas frecuentes: Resuelve objeciones y potencia GEO/SEO */}
        <Faq />

        {/* Sección Contacto: Formas directas de comunicación con copiar email */}
        <Contact />

        {/* Pie de página institucional */}
        <Footer />
      </main>

      {/* ------------------------------------------------------------------
          6. MODAL INTERACTIVO DE FICHA TÉCNICA DEL PROYECTO
          ------------------------------------------------------------------ */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onViewDemoPage={navigateToDemo}
      />

      {/* ------------------------------------------------------------------
          7. BOTÓN FLOTANTE PERMANENTE DE WHATSAPP
          ------------------------------------------------------------------ */}
      <FloatingWhatsApp />
    </>
  );
}

export default App;
