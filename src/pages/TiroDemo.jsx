import React, { useState } from "react";
import { ProjectHeaderBar } from "../components/projects-demo/ProjectHeaderBar";
import "./projects-demo.css";

/**
 * Página de Demostración 05: Julio Mercado · Tiro Profesional SF
 * - Identidad: Tactical Dark Stencil (negro puro #0A0A0A, naranja táctico #FF6B00, dorado ANMaC #D4AF37).
 * - Componentes: Hero con credenciales oficiales ANMaC ITB 7796, catálogo de cursos tácticos,
 *   asistente interactivo de requisitos para Legítimo Usuario (CLU) y conversión directa a WhatsApp.
 *
 * @param {Object} props
 * @param {Function} props.onBack - Retorna al portfolio principal
 */
export function TiroDemo({ onBack }) {
  // Filtro de cursos
  const [activeCourseCategory, setActiveCourseCategory] = useState("all");

  // Estado del Asistente Interactivo de Trámite CLU
  const [userProfile, setUserProfile] = useState("nuevo");
  const [needsPsychophysical, setNeedsPsychophysical] = useState(true);
  const [needsShootingTest, setNeedsShootingTest] = useState(true);

  // Teléfono oficial de Julio Mercado para consultas del sitio
  const clientWhatsapp = "5493424079453";

  // Enlace para contratar a Hugo por una web de este estilo
  const hireHugoUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola Hugo, vi la web de Tiro Profesional SF de Julio Mercado y quiero una página profesional para mi academia o actividad."
  )}`;

  // Catálogo de Cursos y Capacitaciones
  const courses = [
    {
      id: "tc-1",
      category: "inicial",
      level: "Inicial / Intermedio",
      title: "Idoneidad de Tiro ANMaC",
      duration: "Teórico-Práctico",
      desc: "Certificado oficial exigido por ANMaC para tramitar la Credencial de Legítimo Usuario (CLU) por primera vez.",
      bullets: [
        "Medidas universales de seguridad con armas",
        "Manejo seguro, desarme básico y alimentación",
        "Disparo en polígono habilitado con munición provista",
        "Firma y certificación de idoneidad oficial ITB 7796"
      ],
      badgeColor: "#3b82f6"
    },
    {
      id: "tc-2",
      category: "tactico",
      level: "Avanzado",
      title: "Tiro Defensivo y Porte Oculto",
      duration: "Módulo Intensivo",
      desc: "Entrenamiento reactivo bajo estrés, desenfunde rápido desde funda interna y resolución de trabas en movimiento.",
      bullets: [
        "Mecánica de desenfunde táctico y grip de combate",
        "Tiro en movimiento y uso de parapetos y coberturas",
        "Transición de blancos y resolución de interrupciones",
        "Técnicas modernas de retención de arma en corta distancia"
      ],
      badgeColor: "#FF6B00"
    },
    {
      id: "tc-3",
      category: "gestion",
      level: "Trámite Registral",
      title: "Gestión Integral de Armas (CLU)",
      duration: "Gestoría Completa",
      desc: "Acompañamiento integral desde cero: formularios SIGIMAC, turnos psicofísicos, idoneidad y seguimiento en ANMaC.",
      bullets: [
        "Carga oficial en sistema SIGIMAC de ANMaC",
        "Coordinación de examen psicofísico oficial",
        "Certificación de medios lícitos de vida",
        "Seguimiento del expediente hasta la entrega física de la CLU"
      ],
      badgeColor: "#D4AF37"
    },
    {
      id: "tc-4",
      category: "tactico",
      level: "Especializado",
      title: "Clases Particulares Personalizadas",
      duration: "1 a 1 en Polígono",
      desc: "Sesiones exclusivas adaptadas al nivel y objetivos del alumno: corrección de puntería, control de retroceso y velocidad.",
      bullets: [
        "Diagnóstico visual de errores de empuñe y disparador",
        "Ejercicios con armas provistas o arma propia del alumno",
        "Pistas de tiro dinámico y toma de tiempos con timer",
        "Horarios flexibles en polígonos de Santa Fe y zona"
      ],
      badgeColor: "#FF6B00"
    }
  ];

  const filteredCourses =
    activeCourseCategory === "all"
      ? courses
      : courses.filter((c) => c.category === activeCourseCategory);

  // Mensaje dinámico de WhatsApp para el Asistente CLU
  const cluMessage = `Hola Julio, estuve en tu web simulando el trámite para Legítimo Usuario (${
    userProfile === "nuevo" ? "Primera vez" : "Renovación"
  }). Requiero: ${needsShootingTest ? "Idoneidad de tiro, " : ""}${
    needsPsychophysical ? "Examen psicofísico, " : ""
  }Gestión de formularios. ¿Cuándo podemos iniciar?`;

  const cluWhatsappUrl = `https://wa.me/${clientWhatsapp}?text=${encodeURIComponent(cluMessage)}`;

  return (
    <div className="demo-page-container tactical-demo-theme">
      {/* 1. BARRA SUPERIOR PERSISTENTE DEL PORTFOLIO */}
      <ProjectHeaderBar
        projectName="Julio Mercado · Tiro Profesional SF"
        onBack={onBack}
        demoType="Instructor ANMaC & Formación Táctica"
        hireUrl={hireHugoUrl}
      />

      {/* 2. NAVBAR PROPIO TÁCTICO */}
      <header className="tactical-navbar">
        <div className="tactical-container tactical-nav-inner">
          <div className="tactical-brand-wrap">
            <img
              src="./images/projects/tiro/logo.webp"
              alt="Logo Tiro Profesional"
              className="tactical-logo-img"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="tactical-brand-text">
              <span className="brand-primary">TIRO <strong>PROFESIONAL</strong></span>
              <span className="brand-badge">JULIO MERCADO · ITB 7796</span>
            </div>
          </div>

          <nav className="tactical-nav-links">
            <a href="#cursos">Cursos & Trámites</a>
            <a href="#instructor">Instructor</a>
            <a href="#asistente-clu">Asistente CLU</a>
            <a
              href={`https://wa.me/${clientWhatsapp}?text=${encodeURIComponent(
                "Hola Julio, vi tu sitio web y quiero hacerte una consulta por cursos o idoneidad de tiro."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-btn-whatsapp"
            >
              WhatsApp Directo
            </a>
          </nav>
        </div>
      </header>

      {/* 3. HERO MILITAR URBANO & TÁCTICO */}
      <section className="tactical-hero">
        <div className="tactical-hero-bg-texture"></div>
        <div className="tactical-hero-orange-glow"></div>

        <div className="tactical-container tactical-hero-grid">
          <div className="tactical-hero-content">
            {/* Badge de acreditación ANMaC con foto de Julio Mercado */}
            <div className="tactical-instructor-pill">
              <img
                src="./images/projects/tiro/julio_mercado.webp"
                alt="Julio Mercado Instructor ANMaC ITB 7796"
                className="instructor-avatar"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span className="instructor-pill-text">
                <span className="gold-star">★</span> JULIO MERCADO · INSTRUCTOR ANMaC ITB 7796
              </span>
            </div>

            {/* Slogan badges */}
            <div className="tactical-slogan-badges">
              <span className="slogan-badge">RÁPIDO</span>
              <span className="slogan-badge">SEGURO</span>
              <span className="slogan-badge">EFECTIVO</span>
            </div>

            <h1 className="tactical-hero-title">
              TE AYUDO EN TODO EL PROCESO PARA{" "}
              <span className="text-orange-tactical">LEGÍTIMOS USUARIOS</span>
            </h1>

            <p className="tactical-hero-desc">
              <strong>Más preparación = mejores resultados.</strong> Entrenamiento real para
              resultados reales. Idoneidad de tiro, clases particulares y gestión administrativa
              de armas de fuego.
            </p>

            {/* Lista rápida de garantías */}
            <div className="tactical-checklist-row">
              <div className="tc-item">
                <span className="tc-bullet">✓</span>
                <span>Idoneidad ANMaC Oficial</span>
              </div>
              <div className="tc-item">
                <span className="tc-bullet">✓</span>
                <span>Porte Oculto Táctico</span>
              </div>
              <div className="tc-item">
                <span className="tc-bullet">✓</span>
                <span>Gestión Integral CLU</span>
              </div>
            </div>

            <div className="tactical-hero-actions">
              <a
                href={`https://wa.me/${clientWhatsapp}?text=${encodeURIComponent(
                  "Hola Julio, quiero consultar para iniciar mi trámite o curso de tiro."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tactical-cta-btn"
              >
                <span>CONSULTAR POR WHATSAPP (+54 9 342 407-9453)</span>
              </a>

              <a href="#cursos" className="tactical-secondary-btn">
                VER CURSOS Y TRÁMITES ↓
              </a>
            </div>

            <span className="tactical-moto">HACÉLO BIEN. HACÉLO AHORA.</span>
          </div>

          {/* Hero Visual Card con Julio Mercado */}
          <div className="tactical-hero-visual">
            <div className="tactical-visual-card">
              <div className="tactical-card-border-glow"></div>
              <img
                src="./images/projects/tiro/julio_mercado.webp"
                alt="Julio Mercado Instructor ANMaC ITB 7796"
                className="tactical-instructor-photo"
              />
              <div className="tactical-card-overlay">
                <div className="instructor-card-badge">
                  <div className="badge-target-icon">◎</div>
                  <div>
                    <strong>JULIO MERCADO · ITB 7796</strong>
                    <small>Instructor de Tiro ANMaC Certificado</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TIRA DE CONFIANZA Y AUTORIZACIÓN OFICIAL */}
      <section className="tactical-trust-strip">
        <div className="tactical-container tactical-trust-grid">
          <div className="trust-col">
            <span className="trust-number">+10</span>
            <span className="trust-label">AÑOS DE INSTRUCCIÓN</span>
            <p>Experiencia operativa en fuerzas y capacitación a civiles.</p>
          </div>
          <div className="trust-col">
            <span className="trust-number">+850</span>
            <span className="trust-label">LEGÍTIMOS USUARIOS</span>
            <p>Alumnos y clientes que obtuvieron su credencial con éxito.</p>
          </div>
          <div className="trust-col">
            <span className="trust-number">ITB 7796</span>
            <span className="trust-label">MATRÍCULA ANMaC</span>
            <p>Habilitado para firma de idoneidad y trámites registrales.</p>
          </div>
          <div className="trust-col">
            <span className="trust-number">100%</span>
            <span className="trust-label">SEGURIDAD EN POLÍGONO</span>
            <p>Protocolos de seguridad bajo estándares internacionales.</p>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE CURSOS Y PROGRAMAS */}
      <section id="cursos" className="tactical-section">
        <div className="tactical-container">
          <div className="tactical-section-header">
            <span className="tactical-kicker">FORMACIÓN OPERATIVA</span>
            <h2>Cursos y Programas de Instrucción</h2>
            <p>
              Programas diseñados para Legítimos Usuarios civiles, personal de seguridad y
              profesionales que buscan máxima destreza y seguridad en el manejo de armas.
            </p>

            <div className="tactical-filter-bar">
              <button
                className={`tactical-filter-chip ${activeCourseCategory === "all" ? "active" : ""}`}
                onClick={() => setActiveCourseCategory("all")}
              >
                Todos los Programas
              </button>
              <button
                className={`tactical-filter-chip ${activeCourseCategory === "inicial" ? "active" : ""}`}
                onClick={() => setActiveCourseCategory("inicial")}
              >
                Idoneidad Inicial
              </button>
              <button
                className={`tactical-filter-chip ${activeCourseCategory === "tactico" ? "active" : ""}`}
                onClick={() => setActiveCourseCategory("tactico")}
              >
                Táctico & Porte Oculto
              </button>
              <button
                className={`tactical-filter-chip ${activeCourseCategory === "gestion" ? "active" : ""}`}
                onClick={() => setActiveCourseCategory("gestion")}
              >
                Trámite de CLU
              </button>
            </div>
          </div>

          <div className="tactical-cards-grid">
            {filteredCourses.map((c) => (
              <div key={c.id} className="tactical-course-card">
                <div className="course-card-top">
                  <span
                    className="course-level-badge"
                    style={{ backgroundColor: `${c.badgeColor}22`, color: c.badgeColor, borderColor: `${c.badgeColor}66` }}
                  >
                    {c.level}
                  </span>
                  <span className="course-duration">{c.duration}</span>
                </div>

                <h3>{c.title}</h3>
                <p className="course-desc">{c.desc}</p>

                <ul className="course-bullets">
                  {c.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="bullet-dash" style={{ color: c.badgeColor }}>▪</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="course-card-footer">
                  <a
                    href={`https://wa.me/${clientWhatsapp}?text=${encodeURIComponent(
                      `Hola Julio, quiero información y vacantes para el programa: ${c.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-enroll-btn"
                  >
                    Consultar Vacantes por WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ASISTENTE INTERACTIVO DE REQUISITOS CLU */}
      <section id="asistente-clu" className="tactical-assistant-section">
        <div className="tactical-container">
          <div className="assistant-card-wrapper">
            <div className="assistant-left">
              <span className="tactical-kicker" style={{ color: "#D4AF37" }}>
                GUÍA PASO A PASO
              </span>
              <h2>Asistente para Obtener tu Credencial (CLU)</h2>
              <p>
                Seleccioná tu situación actual para conocer los requisitos exactos y el tiempo
                estimado para tu habilitación legal ante ANMaC.
              </p>

              {/* Paso 1: Tipo de Trámite */}
              <div className="asst-group">
                <label className="asst-label">1. ¿Cuál es tu trámite?</label>
                <div className="asst-toggle-row">
                  <button
                    type="button"
                    className={`asst-toggle-btn ${userProfile === "nuevo" ? "active" : ""}`}
                    onClick={() => setUserProfile("nuevo")}
                  >
                    Primera vez (Nuevo Legítimo Usuario)
                  </button>
                  <button
                    type="button"
                    className={`asst-toggle-btn ${userProfile === "renovacion" ? "active" : ""}`}
                    onClick={() => setUserProfile("renovacion")}
                  >
                    Renovación de CLU Vencida
                  </button>
                </div>
              </div>

              {/* Paso 2: Servicios Adicionales */}
              <div className="asst-group">
                <label className="asst-label">2. Servicios que necesitás gestionar:</label>
                <div className="asst-checkbox-list">
                  <label className="asst-check-item">
                    <input
                      type="checkbox"
                      checked={needsShootingTest}
                      onChange={(e) => setNeedsShootingTest(e.target.checked)}
                    />
                    <span>Certificado de Idoneidad de Tiro con Instructor ITB</span>
                  </label>
                  <label className="asst-check-item">
                    <input
                      type="checkbox"
                      checked={needsPsychophysical}
                      onChange={(e) => setNeedsPsychophysical(e.target.checked)}
                    />
                    <span>Examen Psicofísico Oficial con prestador habilitado</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Resumen del Asistente */}
            <div className="assistant-right">
              <div className="asst-summary-box">
                <span className="summary-title">RESUMEN DEL TRÁMITE</span>
                <div className="summary-details">
                  <div className="sd-row">
                    <span>Trámite:</span>
                    <strong>{userProfile === "nuevo" ? "Alta Nuevo Usuario" : "Renovación Periódica"}</strong>
                  </div>
                  <div className="sd-row">
                    <span>Idoneidad de Tiro:</span>
                    <strong style={{ color: needsShootingTest ? "#39e58c" : "#94a3b8" }}>
                      {needsShootingTest ? "En Polígono con Julio Mercado" : "No requerida"}
                    </strong>
                  </div>
                  <div className="sd-row">
                    <span>Psicofísico:</span>
                    <strong style={{ color: needsPsychophysical ? "#39e58c" : "#94a3b8" }}>
                      {needsPsychophysical ? "Turno y gestión coordinada" : "Ya lo poseo"}
                    </strong>
                  </div>
                  <div className="sd-row">
                    <span>Tiempo estimado ANMaC:</span>
                    <strong>15 a 30 días hábiles</strong>
                  </div>
                </div>

                <a
                  href={cluWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="asst-send-btn"
                >
                  Iniciar Trámite por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER PROMOCIONAL DEL PORTFOLIO */}
      <footer className="demo-footer-banner">
        <div className="demo-footer-copy">
          <h4>¿Buscás una web de alto impacto para tu actividad o academia?</h4>
          <p>
            Desarrollo sitios webs modernos, rápidos y optimizados para Google y celulares,
            diseñados para generar contactos reales y ventas directas por WhatsApp.
          </p>
        </div>
        <div className="demo-footer-actions">
          <a
            href={hireHugoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo-contact"
          >
            Quiero una web así para mi negocio →
          </a>
          <button onClick={onBack} className="btn-demo-return">
            Volver a la lista de proyectos
          </button>
        </div>
      </footer>

      <div className="demo-page-footer">
        <p>Julio Mercado · Tiro Profesional SF · Demo interactiva en el Portfolio de Hugo Catalan</p>
      </div>
    </div>
  );
}
