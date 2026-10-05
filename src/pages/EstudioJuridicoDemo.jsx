import React, { useState } from "react";
import { ProjectHeaderBar } from "../components/projects-demo/ProjectHeaderBar";
import "./projects-demo.css";

/**
 * Página de Demostración 01: Estudio Jurídico "Catalan & Asociados"
 * - Identidad: Legal Editorial Premium (Azul noche profundo, oro viejo y tipografía serif clásica).
 * - Diseño: Split-hero asimétrico con fotografía real de estudio, métricas de casos y formulario de consulta inmediata.
 *
 * @param {Object} props
 * @param {Function} props.onBack - Retorna al portfolio principal
 */
export function EstudioJuridicoDemo({ onBack }) {
  // Estado para el formulario de consulta rápida simulado
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", area: "laboral", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  const whatsappDirectUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola, deseo agendar una consulta jurídica prioritaria con el Estudio Catalan & Asociados."
  )}`;

  const hireHugoUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola Hugo, vi la demo completa del Estudio Jurídico y quiero un sitio web profesional similar para mi profesión."
  )}`;

  return (
    <div className="page-legal">
      {/* Barra superior de control */}
      <ProjectHeaderBar
        projectName="Sitio para un profesional independiente"
        category="Estudio Jurídico"
        onBack={onBack}
      />

      {/* Navegación del Estudio Jurídico */}
      <header className="legal-navbar">
        <div className="legal-brand">
          <div className="legal-brand-mark">⚖</div>
          <div className="legal-brand-name">
            Catalan &amp; Asociados
            <span>Abogados Consultores · Santa Fe</span>
          </div>
        </div>
        <ul className="legal-nav-links">
          <li><a href="#areas">Áreas de Práctica</a></li>
          <li><a href="#estudio">El Estudio</a></li>
          <li><a href="#consulta">Consulta Online</a></li>
          <li><a href="#contacto">Ubicación</a></li>
        </ul>
      </header>

      {/* Hero asimétrico con fotografía legal y llamados de autoridad */}
      <section className="legal-hero">
        <div>
          <div className="legal-badge">
            <span>●</span> Defensa y Asesoramiento Estratégico
          </div>
          <h1>
            Defensa legal rigurosa y <span>compromiso incondicional</span> con tu tranquilidad.
          </h1>
          <p className="legal-hero-desc">
            Representamos a particulares, familias y empresas ante los fueros civil, laboral y comercial.
            Combinamos más de 15 años de experiencia en litigios con un enfoque moderno, transparente y resolutivo.
          </p>

          <div className="legal-actions">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-legal-primary"
            >
              Consulta Urgente por WhatsApp <span>→</span>
            </a>
            <a href="#consulta" className="btn-legal-ghost">
              Agendar entrevista en estudio
            </a>
          </div>
        </div>

        {/* Imagen del Estudio Jurídico con tarjeta flotante de reputación */}
        <div className="legal-hero-media">
          <div className="legal-hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80"
              alt="Sala de acuerdos y biblioteca del estudio jurídico"
              loading="lazy"
            />
          </div>
          <div className="legal-card-floating">
            <strong>98.4%</strong>
            <span>Casos con resolución favorable</span>
          </div>
        </div>
      </section>

      {/* Métricas clave de confianza */}
      <section className="legal-stats">
        <div className="legal-stat-box">
          <div className="legal-stat-number">+15</div>
          <div className="legal-stat-label">Años de ejercicio profesional</div>
        </div>
        <div className="legal-stat-box">
          <div className="legal-stat-number">+1.400</div>
          <div className="legal-stat-label">Causas judiciales concluidas</div>
        </div>
        <div className="legal-stat-box">
          <div className="legal-stat-number">24 h</div>
          <div className="legal-stat-label">Tiempo máximo de primera respuesta</div>
        </div>
        <div className="legal-stat-box">
          <div className="legal-stat-number">100%</div>
          <div className="legal-stat-label">Confidencialidad amparada por ley</div>
        </div>
      </section>

      {/* Áreas de especialización */}
      <section className="legal-section" id="areas">
        <div className="legal-section-title">
          <h2>Nuestras Áreas de Práctica</h2>
          <p>Asesoramiento preventivo y litigios en los fueros más críticos del derecho contemporáneo.</p>
        </div>

        <div className="legal-practice-grid">
          <article className="legal-practice-card">
            <div className="legal-practice-icon">💼</div>
            <h3>Derecho del Trabajo y ART</h3>
            <p>
              Reclamos por indemnizaciones por despido, diferencias salariales, trabajo no registrado,
              accidentes laborales e incapacidades ante comisiones médicas.
            </p>
          </article>

          <article className="legal-practice-card">
            <div className="legal-practice-icon">📜</div>
            <h3>Sucesiones y Herencias</h3>
            <p>
              Declaratoria de herederos rápida, partición de bienes familiares, donaciones con reserva de usufructo
              y prevención de conflictos hereditarios.
            </p>
          </article>

          <article className="legal-practice-card">
            <div className="legal-practice-icon">🤝</div>
            <h3>Contratos y Daños Civiles</h3>
            <p>
              Redacción y blindaje de contratos comerciales y de locación, accidentes de tránsito, reclamos
              a compañías aseguradoras y defensas patrimoniales.
            </p>
          </article>

          <article className="legal-practice-card">
            <div className="legal-practice-icon">🏢</div>
            <h3>Asesoramiento a Empresas y Pymes</h3>
            <p>
              Auditoría legal laboral permanente, gestión de cobranzas prejudiciales y judiciales, y mediación
              estratégica en conflictos societarios.
            </p>
          </article>
        </div>
      </section>

      {/* Formulario interactivo de consulta / Agendamiento */}
      <section className="legal-section" id="consulta" style={{ background: "rgba(14, 21, 33, 0.4)", borderRadius: "24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "center" }}>
          <div>
            <div className="legal-badge">Atención Presencial y Virtual</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "36px", marginBottom: "16px", color: "#f5f0eb" }}>
              Solicitá una evaluación inicial de tu caso
            </h2>
            <p style={{ color: "#8fa0b5", fontSize: "14px", lineHeight: "1.7", marginBottom: "24px" }}>
              Analizamos la viabilidad legal de tu situación sin compromiso. Completá el formulario o comunicate
              directamente con nuestra secretaría para coordinar una cita en nuestras oficinas de Santa Fe.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#cbd5e1" }}>
              <div>📍 <strong>Sede Central:</strong> San Martín 2450, Piso 4, Santa Fe</div>
              <div>🕒 <strong>Horarios:</strong> Lunes a Viernes de 8:30 a 18:00 hs</div>
              <div>📞 <strong>Urgencias:</strong> +54 342 566-1863</div>
            </div>
          </div>

          <form
            onSubmit={handleFormSubmit}
            style={{
              background: "rgba(8, 12, 20, 0.95)",
              border: "1px solid rgba(197, 160, 89, 0.3)",
              borderRadius: "18px",
              padding: "32px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
            }}
          >
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#c5a059", marginBottom: "18px" }}>
              Formulario de Consulta Confidencial
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <input
                type="text"
                placeholder="Nombre completo"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "13px",
                  outline: "none"
                }}
              />
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp de contacto"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "13px",
                  outline: "none"
                }}
              />
              <select
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                style={{
                  padding: "12px 16px",
                  background: "#080c14",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  color: "#cbd5e1",
                  fontSize: "13px",
                  outline: "none"
                }}
              >
                <option value="laboral">Derecho Laboral / Despidos</option>
                <option value="sucesiones">Sucesiones y Familia</option>
                <option value="civil">Contratos y Accidentes</option>
                <option value="pymes">Asesoramiento a Pymes</option>
                <option value="otro">Otra consulta</option>
              </select>
              <textarea
                rows="3"
                placeholder="Breve resumen de tu situación..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "13px",
                  outline: "none",
                  resize: "vertical"
                }}
              ></textarea>

              <button type="submit" className="btn-legal-primary" style={{ justifyContent: "center" }}>
                Enviar Consulta Prioritaria <span>→</span>
              </button>

              {formSent && (
                <div style={{ color: "#39e58c", fontSize: "12px", textAlign: "center", marginTop: "6px" }}>
                  ✓ Consulta enviada. Te contactaremos en menos de 2 horas hábiles.
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Banner de conversión para clientes del portfolio */}
      <aside className="demo-footer-banner">
        <div className="demo-footer-copy">
          <h3>¿Necesitás una web que transmita prestigio y capte clientes para tu estudio?</h3>
          <p>
            Esta web fue diseñada por <strong>Hugo Catalan</strong> pensando en la seriedad que demanda el ámbito profesional.
            Incluye formulario de agendamiento, velocidad ultra rápida y botón directo a WhatsApp.
          </p>
        </div>
        <div className="demo-footer-actions">
          <a
            href={hireHugoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Quiero mi web profesional <span>→</span>
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={onBack}
          >
            Volver al portfolio
          </button>
        </div>
      </aside>

      {/* Footer del estudio */}
      <footer className="demo-page-footer">
        © 2026 Catalan &amp; Asociados · Matrícula Provincial Colegiada N° 4589 · Sitio web demostrativo desarrollado por Hugo Catalan (Santa Fe, Argentina).
      </footer>
    </div>
  );
}
