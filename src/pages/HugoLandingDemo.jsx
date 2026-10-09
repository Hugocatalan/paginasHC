import React, { useState } from "react";
import { ProjectHeaderBar } from "../components/projects-demo/ProjectHeaderBar";
import "./projects-demo.css";

/**
 * Página de Demostración 06: Hugo Catalán · Entrenador de Levantamiento Olímpico & Coaching
 * - Identidad: Elite Athletic Performance (dorado cálido #f59e0b, ámbar energético, fondo oscuro deportivo).
 * - Componentes: Barra superior de portfolio, autoridad deportiva (medallas y trayectoria),
 *   hero con fotografía en competencia, catálogo de programas y asesor interactivo de objetivos.
 *
 * @param {Object} props
 * @param {Function} props.onBack - Retorna al portfolio principal
 */
export function HugoLandingDemo({ onBack }) {
   // Enlace de contacto para contratar el desarrollo de una web
  const hireHugoUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola Hugo, vi la demo de SS Servicios y me interesa una web similar para mi empresa."
  )}`;
  // Filtro de modalidades de entrenamiento
  const [activeTab, setActiveTab] = useState("distancia");

  // Asesor interactivo de entrenamiento
  const [sportType, setSportType] = useState("crossfit");
  const [currentLevel, setCurrentLevel] = useState("intermedio");
  const [primaryGoal, setPrimaryGoal] = useState("tecnica");

  const coachWhatsapp = "5493425661863";

  // Enlace comercial para solicitar una solución a VOLCA TECH
  const hireVolcaUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola, estuve viendo la landing de Levantamiento Olímpico en VOLCA TECH y quiero desarrollar una web profesional para mi marca personal o actividad."
  )}`;

  // Opciones del asesor interactivo
  const sports = {
    crossfit: "CrossFit & Atletas Híbridos",
    olimpico: "Levantamiento Olímpico Puro",
    fuerza: "Preparación Física & Fuerza"
  };

  const levels = {
    inicial: "Iniciación / Aprendizaje básico",
    intermedio: "Intermedio / Con experiencia previa",
    avanzado: "Avanzado / Atleta de competición"
  };

  const goals = {
    tecnica: "Corrección técnica de Snatch y Clean & Jerk",
    fuerza: "Aumento de marcas y fuerza máxima (PRs)",
    programacion: "Planificación periódica para torneos"
  };

  const customPlanMessage = `Hola Hugo, estuve en tu web seleccionando un plan para ${sports[sportType]} (${levels[currentLevel]}). Mi objetivo principal es: ${goals[primaryGoal]}. ¿Podemos coordinar una evaluación técnica?`;
  const customPlanWhatsappUrl = `https://wa.me/${coachWhatsapp}?text=${encodeURIComponent(customPlanMessage)}`;

  // Testimonios de atletas reales
  const testimonials = [
    {
      name: "Matías",
      role: "Atleta CrossFit Rx",
      text: "La corrección en video cambió por completo mi recepción en el Snatch. Pasé de fallar por inestabilidad a meter kilos con solidez."
    },
    {
      name: "Silvina",
      role: "Atleta Master",
      text: "Entrenar con alguien que compitió al máximo nivel internacional te da una tranquilidad enorme. No te inventa nada, te enseña técnica pura."
    },
    {
      name: "Cristian",
      role: "Head Coach de Box",
      text: "Vino a dictar la clínica a nuestro box y el feedback de los alumnos fue unánime: claridad conceptual y mucha paciencia en cada corrección."
    }
  ];

  return (
    <div className="demo-page-container weightlifting-demo-theme">
      {/* 1. BARRA SUPERIOR PERSISTENTE DEL PORTFOLIO */}
      <ProjectHeaderBar
        projectName="Hugo Catalán · Levantamiento Olímpico & Coaching"
        onBack={onBack}
        demoType="Marca Personal & Coaching Deportivo"
        hireUrl={hireHugoUrl}
      />

      {/* 2. NAVBAR PROPIO DEL ENTRENADOR */}
      <header className="wl-navbar">
        <div className="wl-container wl-nav-inner">
          <div className="wl-brand-wrap">
            <img
              src="./images/projects/weightlifting/logoHugo2.webp"
              alt="Logo Hugo Catalán"
              className="wl-logo-img"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="wl-brand-text">
              <strong>HUGO CATALÁN</strong>
              <span>LEVANTAMIENTO OLÍMPICO · CROSSFIT · ARGENTINA</span>
            </div>
          </div>

          <nav className="wl-nav-links">
            <a href="#autoridad">Trayectoria</a>
            <a href="#modalidades">A Distancia</a>
            <a href="#asesor">Asesor de Plan</a>
            <a href="#testimonios">Experiencias</a>
            <a
              href={`https://wa.me/${coachWhatsapp}?text=${encodeURIComponent(
                "Hola Hugo, vi tu web y quiero consultar por entrenamiento y corrección técnica."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wl-btn-whatsapp"
            >
              WhatsApp Directo
            </a>
          </nav>
        </div>
      </header>

      {/* 3. TIRA DE AUTORIDAD Y MEDALLAS */}
      <section id="autoridad" className="wl-authority-strip">
        <div className="wl-container wl-authority-grid">
          <div className="wl-auth-card">
            <div className="wl-auth-number">50</div>
            <div className="wl-auth-title">Medallas Internacionales</div>
            <div className="wl-medals-pills">
              <span className="medal-pill gold">34 Oro</span>
              <span className="medal-pill silver">11 Plata</span>
              <span className="medal-pill bronze">1 Bronce</span>
            </div>
          </div>

          <div className="wl-auth-card">
            <div className="wl-auth-number">18</div>
            <div className="wl-auth-title">Años Compitiendo</div>
            <p className="wl-auth-sub">Alto Rendimiento Internacional</p>
          </div>

          <div className="wl-auth-card">
            <div className="wl-auth-number">26</div>
            <div className="wl-auth-title">Años Ligado al Deporte</div>
            <p className="wl-auth-sub">Experiencia, Formación & Coaching</p>
          </div>
        </div>
      </section>

      {/* 4. HERO SECTION */}
      <section className="wl-hero">
        <div className="wl-hero-ambient-glow"></div>
        <div className="wl-container wl-hero-grid">
          <div className="wl-hero-left">
            <div className="wl-kicker">
              <span className="wl-kicker-dash"></span>
              ENTRENAMIENTO Y PLANIFICACIÓN
            </div>

            <h1 className="wl-hero-title">
              La técnica no se improvisa, <span className="text-gold-gradient">se entrena</span>.
            </h1>

            <h2 className="wl-hero-subtitle">
              Planificación y corrección de la técnica en Levantamiento Olímpico de Pesas
            </h2>

            <p className="wl-hero-desc">
              Planificación especializada y corrección técnica para mejorar el Snatch,
              el Clean & Jerk y el rendimiento general de atletas de CrossFit y pesas,
              con seguimiento personalizado online en toda Argentina.
            </p>

            <div className="wl-hero-actions">
              <a href="#modalidades" className="wl-btn-primary">
                Ver Programas a Distancia ↓
              </a>
              <a href="#asesor" className="wl-btn-secondary">
                Simular Plan Personalizado ⚙
              </a>
            </div>

            <div className="wl-guarantees">
              <span className="wl-g-item">✓ Feedback técnico en video</span>
              <span className="wl-g-item">✓ Comunicación fluida por WhatsApp</span>
              <span className="wl-g-item">✓ Adecuado a tus horarios</span>
            </div>
          </div>

          {/* Hero Visual Card con Hugo levantando */}
          <div className="wl-hero-visual">
            <div className="wl-visual-card">
              <div className="wl-visual-glow"></div>
              <img
                src="./images/projects/weightlifting/hugo-catalan-levantamiento-olimpico-snatch.webp"
                alt="Hugo Catalán en competencia de levantamiento olímpico"
                className="wl-athlete-img"
              />
              <div className="wl-visual-overlay">
                <div className="wl-overlay-badge">
                  <strong>HUGO CATALÁN</strong>
                  <small>Entrenador & Atleta de Levantamiento Olímpico</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MODALIDADES DE TRABAJO */}
      <section id="modalidades" className="wl-section">
        <div className="wl-container">
          <div className="wl-section-header">
            <span className="wl-kicker">CÓMO TRABAJAMOS</span>
            <h2>Modalidades de Coaching y Capacitaciones</h2>
            <p>
              Ya sea que entrenes en un box, en tu gimnasio habitual o gestiones un centro deportivo,
              hay un esquema de trabajo estructurado para vos.
            </p>

            <div className="wl-tabs-row">
              <button
                className={`wl-tab-btn ${activeTab === "distancia" ? "active" : ""}`}
                onClick={() => setActiveTab("distancia")}
              >
                Atletas a Distancia
              </button>
              <button
                className={`wl-tab-btn ${activeTab === "box" ? "active" : ""}`}
                onClick={() => setActiveTab("box")}
              >
                Clínicas para Boxes & Gimnasios
              </button>
              <button
                className={`wl-tab-btn ${activeTab === "presencial" ? "active" : ""}`}
                onClick={() => setActiveTab("presencial")}
              >
                Clases Personalizadas 1 a 1
              </button>
            </div>
          </div>

          {activeTab === "distancia" && (
            <div className="wl-cards-grid">
              <div className="wl-feature-card">
                <div className="card-top-icon">📹</div>
                <h3>Corrección Técnica por Video</h3>
                <p>
                  Me enviás tus levantamientos grabados por WhatsApp. Analizo la trayectoria de la
                  barra, ángulos articulares y tiempos de extensión para darte correcciones puntuales.
                </p>
                <span className="card-tag">Atletas CrossFit & Halterofilia</span>
              </div>

              <div className="wl-feature-card">
                <div className="card-top-icon">📊</div>
                <h3>Planificación Mensual a Medida</h3>
                <p>
                  Rutinas estructuradas con porcentajes reales, series, repeticiones y ejercicios
                  accesorios para superar estancamientos en Snatch y Clean & Jerk sin sobreentrenar.
                </p>
                <span className="card-tag">Progresión por Ciclos</span>
              </div>

              <div className="wl-feature-card">
                <div className="card-top-icon">💬</div>
                <h3>Acompañamiento Continuo</h3>
                <p>
                  Canal directo por WhatsApp para evacuar dudas sobre pesos, molestias o adaptaciones
                  de la rutina si tenés un viaje o cambio de horarios.
                </p>
                <span className="card-tag">Atención 1 a 1</span>
              </div>
            </div>
          )}

          {activeTab === "box" && (
            <div className="wl-cards-grid">
              <div className="wl-feature-card">
                <div className="card-top-icon">🏋️‍♂️</div>
                <h3>Seminarios Teórico-Prácticos</h3>
                <p>
                  Jornadas intensivas de 1 o 2 días en tu box para perfeccionar la enseñanza del
                  arranque y el envión con metodología olímpica aplicada al CrossFit.
                </p>
                <span className="card-tag">Boxes en toda Argentina</span>
              </div>

              <div className="wl-feature-card">
                <div className="card-top-icon">🎯</div>
                <h3>Capacitación para Coaches</h3>
                <p>
                  Herramientas pedagógicas para que los entrenadores del box aprendan a detectar y
                  corregir en tiempo real los 10 errores más comunes de sus alumnos.
                </p>
                <span className="card-tag">Formación de Entrenadores</span>
              </div>

              <div className="wl-feature-card">
                <div className="card-top-icon">🏆</div>
                <h3>Técnica bajo Fatiga</h3>
                <p>
                  Estrategias para sostener una técnica eficiente y segura durante WODs competitivos,
                  ahorrando energía y minimizando el riesgo de lesión articular.
                </p>
                <span className="card-tag">Rendimiento en WOD</span>
              </div>
            </div>
          )}

          {activeTab === "presencial" && (
            <div className="wl-cards-grid">
              <div className="wl-feature-card">
                <div className="card-top-icon">⚡</div>
                <h3>Sesiones Presenciales en Santa Fe</h3>
                <p>
                  Entrenamientos individuales en tarima oficial con barra olímpica reglamentaria y
                  corrección presencial instantánea en cada repetición.
                </p>
                <span className="card-tag">Cupos Limitados</span>
              </div>

              <div className="wl-feature-card">
                <div className="card-top-icon">🔍</div>
                <h3>Test de Movilidad y Posiciones Clave</h3>
                <p>
                  Evaluación de dorsiflexión de tobillo, movilidad torácica y agarre hook grip para
                  destrabar la posición de sentadilla profunda de arranque (Overhead Squat).
                </p>
                <span className="card-tag">Diagnóstico Integral</span>
              </div>

              <div className="wl-feature-card">
                <div className="card-top-icon">🚀</div>
                <h3>Puesta a Punto Pre-Competencia</h3>
                <p>
                  Tapering y estrategia de intentos para competidores de CrossFit o torneos de
                  levantamiento federado que buscan clavar sus tres intentos válidos.
                </p>
                <span className="card-tag">Estrategia de Tarima</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. ASESOR INTERACTIVO DE ENTRENAMIENTO */}
      <section id="asesor" className="wl-assistant-section">
        <div className="wl-container">
          <div className="wl-assistant-wrapper">
            <div className="asst-form">
              <span className="wl-kicker">PERSONALIZÁ TU PROPUESTA</span>
              <h2>Asistente de Objetivos de Levantamiento</h2>
              <p>
                Indicá tus metas actuales para enviarte una propuesta exacta de entrenamiento y
                corrección adaptada a tus necesidades.
              </p>

              {/* Paso 1: Deporte */}
              <div className="asst-field">
                <label className="asst-label">1. ¿En qué disciplina te enfocás?</label>
                <div className="asst-options-grid">
                  {Object.entries(sports).map(([k, name]) => (
                    <button
                      key={k}
                      type="button"
                      className={`asst-pill-btn ${sportType === k ? "selected" : ""}`}
                      onClick={() => setSportType(k)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 2: Nivel */}
              <div className="asst-field">
                <label className="asst-label">2. Tu nivel de experiencia:</label>
                <div className="asst-options-grid">
                  {Object.entries(levels).map(([k, label]) => (
                    <button
                      key={k}
                      type="button"
                      className={`asst-pill-btn ${currentLevel === k ? "selected" : ""}`}
                      onClick={() => setCurrentLevel(k)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 3: Meta */}
              <div className="asst-field">
                <label className="asst-label">3. Tu prioridad principal:</label>
                <div className="asst-options-grid">
                  {Object.entries(goals).map(([k, label]) => (
                    <button
                      key={k}
                      type="button"
                      className={`asst-pill-btn ${primaryGoal === k ? "selected" : ""}`}
                      onClick={() => setPrimaryGoal(k)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tarjeta de Resumen */}
            <div className="asst-summary-col">
              <div className="asst-summary-card">
                <span className="summary-badge">PLAN SUGERIDO</span>
                <h3>Coaching & Corrección Personalizada</h3>
                <p>Orientado a maximizar tu rendimiento con técnica sólida y segura.</p>

                <div className="summary-rows">
                  <div className="s-row">
                    <span>Disciplina:</span>
                    <strong>{sports[sportType]}</strong>
                  </div>
                  <div className="s-row">
                    <span>Nivel:</span>
                    <strong>{levels[currentLevel]}</strong>
                  </div>
                  <div className="s-row">
                    <span>Objetivo:</span>
                    <strong>{goals[primaryGoal]}</strong>
                  </div>
                  <div className="s-row">
                    <span>Modalidad:</span>
                    <strong style={{ color: "#f59e0b" }}>Online / Videoanálisis</strong>
                  </div>
                </div>

                <a
                  href={customPlanWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-send-plan"
                >
                  Consultar Plan por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIOS */}
      <section id="testimonios" className="wl-section">
        <div className="wl-container">
          <div className="wl-section-header">
            <span className="wl-kicker">EXPERIENCIAS REALES</span>
            <h2>Lo que dicen atletas que entrenan técnica</h2>
            <p>Resultados medibles y cambios posturales notorios desde las primeras semanas.</p>
          </div>

          <div className="wl-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="wl-testimonial-card">
                <div className="t-stars">★★★★★</div>
                <p className="t-quote">"{t.text}"</p>
                <div className="t-author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER PROMOCIONAL */}
      <footer className="demo-footer-banner">
        <div className="demo-footer-copy">
          <h4>¿Buscás una web como esta para tu marca personal o negocio deportivo?</h4>
          <p>
            En <strong>VOLCA TECH</strong> diseñamos y desarrollamos sitios web modernos que comunican tu autoridad profesional,
            muestran testimonios creíbles y convierten visitas en consultas directas por WhatsApp.
          </p>
        </div>
        <div className="demo-footer-actions">
          <a
            href={hireVolcaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo-contact"
          >
            Quiero una web de este estilo →
          </a>
          <button onClick={onBack} className="btn-demo-return">
            Volver a VOLCA TECH
          </button>
        </div>
      </footer>

      <div className="demo-page-footer">
        <p>Hugo Catalán · Entrenador de Levantamiento Olímpico · Proyecto personal desarrollado por VOLCA TECH</p>
      </div>
    </div>
  );
}
