import React, { useState } from "react";
import { ProjectHeaderBar } from "../components/projects-demo/ProjectHeaderBar";
import "./projects-demo.css";

/**
 * Página de Demostración 02: INNOVA Infraestructura & Obras Industriales
 * - Identidad: Heavy Engineering & Infrastructure (asfalto oscuro, amarillo de seguridad y detalles en cian técnico).
 * - Diseño: Hero panorámico con fotografía de obra real, tira técnica de especificaciones y galería de obras con métricas.
 *
 * @param {Object} props
 * @param {Function} props.onBack - Retorna al portfolio principal
 */
export function EmpresaInstitucionalDemo({ onBack }) {
  const [activeTab, setActiveTab] = useState("all");

  const works = [
    {
      title: "Parque Logístico & Distribución Litoral",
      category: "industrial",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      desc: "Construcción integral de 16.000 m² cubiertos con pavimentos de alta resistencia y dársenas automatizadas.",
      surface: "16.000 m²",
      duration: "10 meses"
    },
    {
      title: "Torre Corporativa Boulevard Alvear",
      category: "comercial",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      desc: "Edificio bioclimático de 14 niveles con muro cortina de alta eficiencia energética y cocheras subterráneas.",
      surface: "5.400 m²",
      duration: "14 meses"
    },
    {
      title: "Planta de Procesamiento Agroindustrial",
      category: "industrial",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      desc: "Montaje electromecánico de silos, cintas transportadoras y sistemas de aspiración industrial certificada.",
      surface: "8.800 m²",
      duration: "8 meses"
    },
    {
      title: "Infraestructura Vial y Puente de Acceso",
      category: "vial",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      desc: "Movimiento de suelos, alcantarillado pluvial de gran escala y pavimentación de accesos pesados a puerto.",
      surface: "22.000 m²",
      duration: "12 meses"
    }
  ];

  const filteredWorks = activeTab === "all" ? works : works.filter(w => w.category === activeTab);

  const whatsappQuoteUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola, deseo solicitar cotización técnica y pliegos de obra a INNOVA Infraestructura."
  )}`;

  const hireVolcaUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola, estuve viendo la muestra de sitio institucional en VOLCA TECH y quiero consultar por una web corporativa sólida para mi empresa."
  )}`;

  return (
    <div className="page-corporate">
      {/* Barra superior fija con control para volver al portfolio */}
      <ProjectHeaderBar
        projectName="Sitio institucional para una empresa"
        category="Ingeniería y Construcción"
        onBack={onBack}
      />

      {/* Navegación corporativa */}
      <header className="corp-navbar">
        <div className="corp-brand">
          <div className="corp-logo-icon">▲</div>
          <div className="corp-logo-text">
            INNOVA
            <span>Infraestructura &amp; Construcción</span>
          </div>
        </div>
        <ul className="corp-nav-links">
          <li><a href="#obras">Obras Ejecutadas</a></li>
          <li><a href="#capacidad">Capacidad Operativa</a></li>
          <li><a href="#calidad">Certificaciones ISO</a></li>
          <li><a href="#cotizar">Licitaciones</a></li>
        </ul>
      </header>

      {/* Hero panorámico con imagen de obra real */}
      <section
        className="corp-hero"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1600&q=80')"
        }}
      >
        <div className="corp-hero-overlay"></div>
        <div className="corp-hero-grid">
          <div className="corp-hero-content">
            <div className="corp-badge">
              ■ Capacidad Operativa y Cumplimiento Técnico
            </div>
            <h1>
              Ingeniería de vanguardia que <span>transforma la matriz productiva.</span>
            </h1>
            <p>
              Ejecutamos obras civiles, naves industriales y desarrollos logísticos de gran envergadura.
              Más de 120 proyectos concluidos con plazos rigurosos y los más altos estándares de seguridad en obra.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-corp-primary"
              >
                Solicitar Pliegos y Presupuesto <span>→</span>
              </a>
              <a
                href="#obras"
                style={{
                  padding: "14px 24px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(8,11,17,0.7)",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase"
                }}
              >
                Ver Portfolio de Obras
              </a>
            </div>
          </div>

          {/* Tarjeta técnica visual de obra destacada */}
          <div className="corp-hero-visual">
            <div className="corp-feature-card">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80"
                alt="Parque Logístico Litoral"
                className="corp-feature-img"
              />
              <div className="corp-feature-info">
                <span className="corp-feature-tag">OBRA EN EJECUCIÓN</span>
                <h3>Parque Logístico Litoral</h3>
                <div className="corp-feature-metrics">
                  <div>
                    <strong>16.000 m²</strong>
                    <span>Superficie</span>
                  </div>
                  <div>
                    <strong>94%</strong>
                    <span>Avance Físico</span>
                  </div>
                  <div>
                    <strong>ISO 9001</strong>
                    <span>Certificación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tira técnica de especificaciones */}
      <section className="corp-stats-strip">
        <div className="corp-stat-cell">
          <div className="corp-stat-num">+120</div>
          <div className="corp-stat-text">Obras llave en mano concluidas</div>
        </div>
        <div className="corp-stat-cell">
          <div className="corp-stat-num">+180K</div>
          <div className="corp-stat-text">Metros cuadrados construidos</div>
        </div>
        <div className="corp-stat-cell">
          <div className="corp-stat-num">0</div>
          <div className="corp-stat-text">Accidentes con pérdida de tiempo (HSE)</div>
        </div>
        <div className="corp-stat-cell">
          <div className="corp-stat-num">ISO</div>
          <div className="corp-stat-text">Gestión certificada 9001 / 14001 / 45001</div>
        </div>
      </section>

      {/* Galería de obras con fotos y especificaciones técnicas */}
      <section className="demo-section" id="obras">
        <div className="demo-section-header">
          <h2>Portfolio de Obras Destacadas</h2>
          <p>Supervisión rigurosa, maquinarias propias y mano de obra altamente especializada.</p>

          {/* Filtros técnicos */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "24px", flexWrap: "wrap" }}>
            {[
              { id: "all", label: "Todas las Obras" },
              { id: "industrial", label: "Naves Industriales" },
              { id: "comercial", label: "Edificios Comerciales" },
              { id: "vial", label: "Obras Viales" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tech-filter-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "8px 18px"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="corp-works-grid">
          {filteredWorks.map((work, idx) => (
            <article key={idx} className="corp-work-card">
              <img
                src={work.img}
                alt={work.title}
                className="corp-work-img"
                loading="lazy"
              />
              <div className="corp-work-body">
                <span className="corp-work-tag">{work.category}</span>
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
                <div className="corp-work-meta">
                  <span>📐 Superficie: <strong>{work.surface}</strong></span>
                  <span>⏱ Plazo: <strong>{work.duration}</strong></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Clientes y socios comerciales */}
      <section style={{ padding: "40px 20px 60px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ color: "#64748b", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "20px" }}>
          Empresas que confían en nuestra capacidad técnica
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "35px", flexWrap: "wrap", opacity: 0.6, fontSize: "16px", fontWeight: "800", color: "#94a3b8" }}>
          <span>AGROEXPORT S.A.</span>
          <span>LOGÍSTICA DEL CENTRO</span>
          <span>GRUPO INDUSTRIAL NORTE</span>
          <span>PUERTO SANTA FE</span>
          <span>TRANS-LITORAL</span>
        </div>
      </section>

      {/* Banner de conversión para clientes */}
      <aside className="demo-footer-banner">
        <div className="demo-footer-copy">
          <h3>¿Buscás una web institucional que refleje la magnitud de tu empresa?</h3>
          <p>
            Esta solución fue desarrollada por <strong>VOLCA TECH</strong>. Creamos sitios corporativos con alta velocidad,
            presentación técnica de proyectos y formularios optimizados para captar presupuestos y licitaciones.
          </p>
        </div>
        <div className="demo-footer-actions">
          <a
            href={hireVolcaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Cotizar web corporativa <span>→</span>
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={onBack}
          >
            Volver a VOLCA TECH
          </button>
        </div>
      </aside>

      {/* Footer corporativo */}
      <footer className="demo-page-footer">
        © 2026 INNOVA Infraestructura S.A. · CUIT 30-71458921-9 · Solución web demostrativa desarrollada por VOLCA TECH (Santa Fe, Argentina).
      </footer>
    </div>
  );
}
