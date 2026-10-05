import React, { useState } from "react";
import { ProjectHeaderBar } from "../components/projects-demo/ProjectHeaderBar";
import "./projects-demo.css";

/**
 * Página de Demostración 04: SS Servicios - Ingeniería Eléctrica & Automatización
 * - Identidad: Dark Tech Industrial (azul noche profundo, cian eléctrico #00E5FF, acentos ámbar).
 * - Componentes: Hero con diagramación técnica, métricas SEC/HSE, especialidades con filtro
 *   y un Estimador de Proyectos interactivo en tiempo real con conversión a WhatsApp.
 *
 * @param {Object} props
 * @param {Function} props.onBack - Retorna al portfolio principal
 */
export function ElectricidadDemo({ onBack }) {
  // Estado para el filtro de especialidades
  const [activeCategory, setActiveCategory] = useState("all");

  // Estado para el Estimador Técnico Interactivo
  const [projectType, setProjectType] = useState("industrial");
  const [surfaceM2, setSurfaceM2] = useState(250);
  const [urgencyLevel, setUrgencyLevel] = useState("normal");

  // Tarifas estimativas base para cálculo interactivo
  const rates = {
    industrial: { name: "Montaje & Electricidad Industrial", basePerM2: 32000 },
    automatizacion: { name: "Tableros Eléctricos & PLC / SCADA", basePerM2: 26000 },
    mantenimiento: { name: "Mantenimiento Preventivo & Termografía", basePerM2: 15000 },
    certificacion: { name: "Certificaciones SEC & Trámites TE1/TE2", basePerM2: 12000 }
  };

  const urgencyMultipliers = {
    normal: { label: "Plazo estándar programado", mult: 1.0 },
    prioritario: { label: "Ejecución prioritaria (+20%)", mult: 1.2 },
    emergencia: { label: "Emergencia 24/7 inmediata (+40%)", mult: 1.4 }
  };

  // Cálculo en tiempo real
  const currentRate = rates[projectType] || rates.industrial;
  const calculatedEstimated = Math.round(
    currentRate.basePerM2 * surfaceM2 * urgencyMultipliers[urgencyLevel].mult
  );

  const formattedEstimated = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(calculatedEstimated);

  // Enlace dinámico de WhatsApp con los datos del estimador
  const whatsappEstimatorMessage = `Hola SS Servicios, coticé en su web un proyecto de ${currentRate.name} para una superficie de ${surfaceM2} m² con plazo ${urgencyMultipliers[urgencyLevel].label}. Estimación orientativa: ${formattedEstimated}. ¿Podemos coordinar una visita técnica?`;
  const whatsappEstimatorUrl = `https://wa.me/543425661863?text=${encodeURIComponent(whatsappEstimatorMessage)}`;

  // Enlace directo para contratar a Hugo por una web de este estilo
  const hireHugoUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola Hugo, vi la demo de SS Servicios (Ingeniería Eléctrica) y me interesa una web similar para mi empresa o servicios técnicos."
  )}`;

  // Especialidades técnicas
  const specialties = [
    {
      id: "sp-1",
      category: "industrial",
      badge: "Alta Tensión & Fuerza",
      title: "Electricidad Industrial",
      icon: "⚡",
      items: [
        "Subestaciones eléctricas de fuerza y distribución",
        "Montaje y calibración de transformadores trifásicos",
        "Tableros de Transferencia Automática (TTA)",
        "Bancos de condensadores y corrección de factor de potencia"
      ]
    },
    {
      id: "sp-2",
      category: "industrial",
      badge: "Infraestructura",
      title: "Obras y Montajes Electromecánicos",
      icon: "🏗️",
      items: [
        "Canalizaciones subterráneas y aéreas de gran porte",
        "Tendido en bandejas portacables tipo escalerilla",
        "Alumbrado perimetral y naves industriales LED",
        "Montaje de grupos electrógenos con conmutación"
      ]
    },
    {
      id: "sp-3",
      category: "automatizacion",
      badge: "Control & Procesos",
      title: "Tableros PLC y Automatización",
      icon: "💻",
      items: [
        "Diseño y armado de tableros de control con norma IEC",
        "Programación de autómatas PLC (Siemens, Schneider, Allen Bradley)",
        "Integración de variadores de frecuencia y servomotores",
        "Desarrollo de interfaces HMI y telemetría SCADA"
      ]
    },
    {
      id: "sp-4",
      category: "mantenimiento",
      badge: "Diagnóstico No Invasivo",
      title: "Mantenimiento Predictivo & Termografía",
      icon: "🔍",
      items: [
        "Inspección termográfica infrarroja bajo carga",
        "Medición y certificación de mallas de puesta a tierra",
        "Análisis de armónicos y calidad de energía (PQM)",
        "Planes de mantenimiento preventivo programado 24/7"
      ]
    },
    {
      id: "sp-5",
      category: "certificacion",
      badge: "Legal & Normativo",
      title: "Certificaciones SEC y Planos",
      icon: "📋",
      items: [
        "Declaraciones TE1, TE2 y TE4 ante la SEC",
        "Aumentos de capacidad y tramitación con distribuidoras",
        "Planos eléctricos As-Built en AutoCAD y Revit",
        "Auditorías técnicas para seguros y habilitaciones comerciales"
      ]
    },
    {
      id: "sp-6",
      category: "automatizacion",
      badge: "Sustentabilidad",
      title: "Energía Solar y Sistemas Ininterrumpidos",
      icon: "☀️",
      items: [
        "Plantas fotovoltaicas On-Grid y Off-Grid para industrias",
        "Sistemas UPS trifásicos para centros de datos y quirófanos",
        "Monitoreo remoto de generación solar en tiempo real",
        "Gestión inteligente de la demanda energética peak shaving"
      ]
    }
  ];

  const filteredSpecialties =
    activeCategory === "all"
      ? specialties
      : specialties.filter((s) => s.category === activeCategory);

  return (
    <div className="demo-page-container electric-demo-theme">
      {/* 1. BARRA SUPERIOR PERSISTENTE DEL PORTFOLIO */}
      <ProjectHeaderBar
        projectName="SS Servicios · Ingeniería Eléctrica & Automatización"
        onBack={onBack}
        demoType="Ingeniería Industrial & Control"
        hireUrl={hireHugoUrl}
      />

      {/* 2. NAVBAR PROPIO DE LA EMPRESA */}
      <header className="electric-navbar">
        <div className="electric-container electric-nav-inner">
          <div className="electric-logo-wrap">
            <div className="electric-logo-symbol">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="electric-logo-text">
              SS <span>SERVICIOS</span>
              <small>INGENIERÍA & CONTROL</small>
            </div>
          </div>

          <nav className="electric-nav-links">
            <a href="#especialidades">Especialidades</a>
            <a href="#metricas">Trayectoria</a>
            <a href="#estimador">Estimador Online</a>
            <a href="#seguridad">Normativa SEC</a>
            <a href="#contacto" className="electric-btn-nav">
              Guardia Técnica 24/7
            </a>
          </nav>
        </div>
      </header>

      {/* 3. HERO SECTION ULTRA TECNOLÓGICO */}
      <section className="electric-hero">
        <div className="electric-hero-bg-grid"></div>
        <div className="electric-hero-ambient-glow"></div>

        <div className="electric-container electric-hero-grid">
          <div className="electric-hero-content">
            <div className="electric-tag-pill">
              <span className="electric-tag-dot"></span>
              INGENIERÍA ELÉCTRICA Y NORMATIVA DE VANGUARDIA
            </div>

            <h1 className="electric-hero-title">
              Energía <span className="text-cyan-glow">Inteligente</span>.<br />
              Control Absoluto.<br />
              Infraestructura <span className="text-amber-glow">Segura</span>.
            </h1>

            <p className="electric-hero-desc">
              Diseñamos, ejecutamos y mantenemos montajes eléctricos industriales,
              obras de infraestructura y automatizaciones complejas con máxima
              responsabilidad, certificaciones de calidad y garantía técnica.
            </p>

            <div className="electric-hero-actions">
              <a href="#estimador" className="electric-btn-primary">
                Simular Presupuesto <span>⚡</span>
              </a>
              <a href="#especialidades" className="electric-btn-secondary">
                Ver Especialidades ↓
              </a>
            </div>

            {/* Badges de acreditación rápida */}
            <div className="electric-accreditations">
              <div className="electric-acc-item">
                <span className="acc-icon">🛡️</span>
                <span>Instaladores Autorizados SEC Clase A</span>
              </div>
              <div className="electric-acc-item">
                <span className="acc-icon">✓</span>
                <span>Protocolo Cero Accidentes HSE</span>
              </div>
            </div>
          </div>

          {/* Visual gráfico 3D tech */}
          <div className="electric-hero-visual">
            <div className="electric-visual-frame">
              <div className="electric-badge-floating badge-top-right">
                <span className="floating-icon">🛡️</span>
                <div>
                  <strong>Seguridad Crítica</strong>
                  <small>Cumplimiento Normativo SEC</small>
                </div>
              </div>

              <div className="electric-badge-floating badge-bottom-left">
                <span className="floating-icon electric-pulse-icon">⚡</span>
                <div>
                  <strong>Control Digital</strong>
                  <small>Monitoreo en Tiempo Real</small>
                </div>
              </div>

              {/* Cubo isométrico animado con gradientes */}
              <div className="tech-cube-showcase">
                <div className="tech-cube-inner">
                  <div className="cube-wire-grid"></div>
                  <div className="cube-core-light"></div>
                  <div className="cube-orbit-ring ring-1"></div>
                  <div className="cube-orbit-ring ring-2"></div>
                </div>
                <div className="tech-cube-metrics">
                  <div className="metric-chip">
                    <small>TENSIÓN OPERATIVA</small>
                    <strong>380V / 13.2 kV</strong>
                  </div>
                  <div className="metric-chip">
                    <small>MONITOREO TELEMÉTRICO</small>
                    <strong style={{ color: "#00E5FF" }}>ACTIVO 24/7</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TIRA DE MÉTRICAS Y LOGROS */}
      <section id="metricas" className="electric-stats-strip">
        <div className="electric-container electric-stats-grid">
          <div className="electric-stat-item">
            <span className="electric-stat-number">+15</span>
            <span className="electric-stat-label">Años de Trayectoria</span>
            <p>Ingeniería confiable en el mercado industrial.</p>
          </div>
          <div className="electric-stat-item">
            <span className="electric-stat-number">+500</span>
            <span className="electric-stat-label">Obras Ejecutadas</span>
            <p>Plantas fabriles, logística y distribución comercial.</p>
          </div>
          <div className="electric-stat-item">
            <span className="electric-stat-number">100%</span>
            <span className="electric-stat-label">Seguridad Laboral</span>
            <p>Cero accidentes graves bajo protocolo internacional HSE.</p>
          </div>
          <div className="electric-stat-item">
            <span className="electric-stat-number">SEC Cl. A</span>
            <span className="electric-stat-label">Máxima Categoría</span>
            <p>Habilitados legalmente para todo nivel de tensión y potencia.</p>
          </div>
        </div>
      </section>

      {/* 5. ESPECIALIDADES Y SERVICIOS CON FILTROS */}
      <section id="especialidades" className="electric-section">
        <div className="electric-container">
          <div className="electric-section-header">
            <span className="electric-subheading">NUESTRAS CAPACIDADES</span>
            <h2>Especialidades de Ingeniería Eléctrica</h2>
            <p>
              Ofrecemos alta especialización técnica para proyectos comerciales,
              industriales y de infraestructura de gran envergadura.
            </p>

            {/* Filtros de categoría */}
            <div className="electric-filter-tabs">
              <button
                className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                Todas las Áreas
              </button>
              <button
                className={`filter-btn ${activeCategory === "industrial" ? "active" : ""}`}
                onClick={() => setActiveCategory("industrial")}
              >
                Fuerza & Montajes
              </button>
              <button
                className={`filter-btn ${activeCategory === "automatizacion" ? "active" : ""}`}
                onClick={() => setActiveCategory("automatizacion")}
              >
                PLC & Automatización
              </button>
              <button
                className={`filter-btn ${activeCategory === "mantenimiento" ? "active" : ""}`}
                onClick={() => setActiveCategory("mantenimiento")}
              >
                Termografía & Mallas
              </button>
              <button
                className={`filter-btn ${activeCategory === "certificacion" ? "active" : ""}`}
                onClick={() => setActiveCategory("certificacion")}
              >
                Normativa SEC
              </button>
            </div>
          </div>

          <div className="electric-specialties-grid">
            {filteredSpecialties.map((item) => (
              <div key={item.id} className="electric-card">
                <div className="card-top-row">
                  <span className="card-icon-badge">{item.icon}</span>
                  <span className="card-category-tag">{item.badge}</span>
                </div>
                <h3>{item.title}</h3>
                <ul className="card-checklist">
                  {item.items.map((bullet, i) => (
                    <li key={i}>
                      <span className="check-bullet">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="card-bottom-action">
                  <a
                    href={`https://wa.me/543425661863?text=${encodeURIComponent(
                      `Hola SS Servicios, quiero consultar por la especialidad: ${item.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-consult-link"
                  >
                    Consultar por esta área →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ESTIMADOR DE PRESUPUESTO TÉCNICO INTERACTIVO */}
      <section id="estimador" className="electric-estimator-section">
        <div className="electric-container">
          <div className="estimator-wrapper">
            <div className="estimator-left">
              <span className="electric-subheading" style={{ color: "#00E5FF" }}>
                HERRAMIENTA DIGITAL INTERACTIVA
              </span>
              <h2>Simulador de Presupuesto para Proyectos</h2>
              <p>
                Calculá al instante un presupuesto orientativo para tu obra o instalación.
                Podés ajustar el metraje, el tipo de servicio técnico y el plazo requerido.
              </p>

              {/* Paso 1: Tipo de servicio */}
              <div className="estimator-group">
                <label className="estimator-label">1. Seleccioná el tipo de trabajo técnico:</label>
                <div className="estimator-options-grid">
                  {Object.entries(rates).map(([key, val]) => (
                    <button
                      key={key}
                      type="button"
                      className={`option-card ${projectType === key ? "selected" : ""}`}
                      onClick={() => setProjectType(key)}
                    >
                      <span className="opt-title">{val.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 2: Superficie en m² con Slider */}
              <div className="estimator-group">
                <div className="slider-header-row">
                  <label className="estimator-label">2. Superficie estimada de obra:</label>
                  <span className="slider-value-badge">{surfaceM2} m²</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={surfaceM2}
                  onChange={(e) => setSurfaceM2(Number(e.target.value))}
                  className="estimator-range-slider"
                />
                <div className="slider-hints">
                  <span>50 m² (Local o taller)</span>
                  <span>500 m² (Nave media)</span>
                  <span>2.000 m² (Planta fabril)</span>
                </div>
              </div>

              {/* Paso 3: Nivel de urgencia */}
              <div className="estimator-group">
                <label className="estimator-label">3. Plazo de ejecución y prioridad:</label>
                <div className="urgency-buttons-row">
                  {Object.entries(urgencyMultipliers).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      className={`urgency-chip ${urgencyLevel === key ? "active" : ""}`}
                      onClick={() => setUrgencyLevel(key)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tarjeta de resultado en tiempo real */}
            <div className="estimator-right">
              <div className="result-card">
                <div className="result-glow-edge"></div>
                <span className="result-badge">COTIZACIÓN PRELIMINAR ORIENTATIVA</span>

                <div className="result-amount">
                  <small>Estimado aproximado:</small>
                  <h3>{formattedEstimated}</h3>
                  <p>Valores sujetos a inspección técnica en terreno y plano unifilar.</p>
                </div>

                <div className="result-breakdown">
                  <div className="breakdown-item">
                    <span>Especialidad:</span>
                    <strong>{currentRate.name}</strong>
                  </div>
                  <div className="breakdown-item">
                    <span>Área computable:</span>
                    <strong>{surfaceM2} m² cubiertos</strong>
                  </div>
                  <div className="breakdown-item">
                    <span>Plazo de entrega:</span>
                    <strong>{urgencyMultipliers[urgencyLevel].label}</strong>
                  </div>
                  <div className="breakdown-item">
                    <span>Certificación:</span>
                    <strong style={{ color: "#39e58c" }}>Incluye Carpeta SEC</strong>
                  </div>
                </div>

                <a
                  href={whatsappEstimatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-send-estimate"
                >
                  <span>Pedir Cotización Oficial por WhatsApp</span>
                  <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEGURIDAD Y NORMATIVA SEC */}
      <section id="seguridad" className="electric-safety-section">
        <div className="electric-container">
          <div className="safety-box">
            <div className="safety-icon-large">🛡️</div>
            <div className="safety-info">
              <h3>Protocolo de Seguridad Eléctrica y Garantía Certificada</h3>
              <p>
                Cada montaje se realiza bajo rigurosas normas internacionales de bloqueo y etiquetado
                (LOTO), con instrumental calibrado Fluke con certificado de calibración vigente,
                y póliza de seguro de responsabilidad civil para trabajos industriales de alto riesgo.
              </p>
            </div>
            <div className="safety-checks">
              <div className="sc-item">✓ Acreditación SEC Vigente</div>
              <div className="sc-item">✓ Memoria Técnica y Planos As-Built</div>
              <div className="sc-item">✓ Garantía de 12 Meses en Mano de Obra</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER PROMOCIONAL DEL PORTFOLIO */}
      <footer className="demo-footer-banner">
        <div className="demo-footer-copy">
          <h4>¿Te gustaría una web con este nivel técnico y calculador interactivo?</h4>
          <p>
            Desarrollo sitios profesionales a medida que no solo muestran servicios, sino que
            automatizan cotizaciones preliminares y generan consultas calificadas por WhatsApp.
          </p>
        </div>
        <div className="demo-footer-actions">
          <a
            href={hireHugoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo-contact"
          >
            Quiero una web así para mi empresa →
          </a>
          <button onClick={onBack} className="btn-demo-return">
            Volver a la lista de proyectos
          </button>
        </div>
      </footer>

      <div className="demo-page-footer">
        <p>SS Servicios Ingeniería · Demo interactiva integrada en el Portfolio de Hugo Catalan</p>
      </div>
    </div>
  );
}
