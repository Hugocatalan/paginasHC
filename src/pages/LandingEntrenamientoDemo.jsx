import React, { useState } from "react";
import { ProjectHeaderBar } from "../components/projects-demo/ProjectHeaderBar";
import "./projects-demo.css";

/**
 * Página de Demostración 03: Catalan Performance Fitness & Coaching
 * - Identidad: High Energy Athletic (negro carbón profundo, verde lima neón eléctrico y tipografía deportiva de alto impacto).
 * - Diseño: Hero dinámico con fotografía deportiva, selector interactivo de objetivos físicos, casos de transformación con fotos reales y matriz de precios orientada a la conversión inmediata.
 *
 * @param {Object} props
 * @param {Function} props.onBack - Retorna al portfolio principal
 */
export function LandingEntrenamientoDemo({ onBack }) {
  // Selector interactivo de objetivo para personalizar la propuesta
  const [selectedGoal, setSelectedGoal] = useState("fatloss");

  const goals = {
    fatloss: {
      title: "Definición y Pérdida de Grasa",
      desc: "Déficit calórico controlado sin pasar hambre, priorizando mantener tu masa muscular y energía diaria.",
      stat: "Promedio: -1.2 kg por semana"
    },
    muscle: {
      title: "Ganancia de Masa Muscular (Hipertrofia)",
      desc: "Superávit estratégico, sobrecarga progresiva en ejercicios básicos y descanso óptimo para crecer limpio.",
      stat: "Promedio: +4 a +6 kg en 16 semanas"
    },
    strength: {
      title: "Fuerza y Rendimiento Deportivo",
      desc: "Periodización por bloques, técnica depurada en levantamientos y transferencia directa a tu deporte.",
      stat: "Mejora comprobada en marcas personales"
    }
  };

  const whatsappJoinUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    `Hola, me interesa el coaching para mi objetivo de ${goals[selectedGoal].title}. ¿Hay cupos disponibles?`
  )}`;

  const hireVolcaUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola, estuve viendo la muestra de Landing Page en VOLCA TECH y quiero una página de alta conversión para mis servicios."
  )}`;

  return (
    <div className="page-fitness">
      {/* Barra superior de control */}
      <ProjectHeaderBar
        projectName="Landing para un servicio profesional"
        category="Fitness &amp; Coaching"
        onBack={onBack}
      />

      {/* Navegación deportiva de alto impacto */}
      <header className="fit-navbar">
        <div className="fit-brand">
          CATALAN <span>// PERFORMANCE</span>
        </div>
        <ul className="fit-nav-links">
          <li><a href="#objetivo">Tu Objetivo</a></li>
          <li><a href="#resultados">Casos Reales</a></li>
          <li><a href="#planes">Planes</a></li>
          <li><a href="#iniciar">Unirme</a></li>
        </ul>
      </header>

      {/* Hero dinámico con foto de atleta en acción */}
      <section className="fit-hero">
        <div>
          <div className="fit-spot-badge">
            ⚡ CUPOS DISPONIBLES: 4 / 20 PARA ESTE MES
          </div>
          <h1>
            Entrená con un plan pensado para <span>tu cuerpo, tu vida y tus metas.</span>
          </h1>
          <p>
            Basta de rutinas genéricas de internet y dietas que no podés sostener. Te guío paso a paso con
            programación científica de fuerza, nutrición flexible y corrección semanal 1 a 1 por WhatsApp.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href={whatsappJoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fit-primary"
            >
              Empezar Mi Transformación <span>→</span>
            </a>
            <a
              href="#planes"
              style={{
                color: "#cbd5e1",
                fontSize: "13px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                textDecoration: "underline",
                textUnderlineOffset: "4px"
              }}
            >
              Ver planes y tarifas
            </a>
          </div>
        </div>

        {/* Imagen de atleta con badge flotante de resultado */}
        <div className="fit-hero-media">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
            alt="Atleta entrenando con barra en gimnasio"
            loading="lazy"
          />
          <div className="fit-floating-badge">
            +500 ALUMNOS GUIADOS
          </div>
        </div>
      </section>

      {/* Selector interactivo de objetivo */}
      <section className="demo-section" id="objetivo" style={{ background: "#0a0a0a", borderRadius: "24px" }}>
        <div className="demo-section-header">
          <h2 style={{ textTransform: "uppercase", fontStyle: "italic", fontSize: "36px" }}>
            ¿Cuál es tu objetivo principal?
          </h2>
          <p>Seleccioná tu meta y descubrí cómo la abordamos con precisión técnica:</p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
            {[
              { id: "fatloss", label: "Pérdida de Grasa" },
              { id: "muscle", label: "Masa Muscular" },
              { id: "strength", label: "Fuerza & Rendimiento" }
            ].map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelectedGoal(g.id)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "999px",
                  border: selectedGoal === g.id ? "2px solid #ccff00" : "1px solid rgba(255,255,255,0.15)",
                  background: selectedGoal === g.id ? "rgba(204,255,0,0.15)" : "transparent",
                  color: selectedGoal === g.id ? "#ccff00" : "#a3a3a3",
                  fontSize: "12px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: "750px", margin: "0 auto", padding: "30px", background: "#111", borderRadius: "18px", border: "1px solid rgba(204,255,0,0.2)" }}>
          <h3 style={{ color: "#ccff00", fontSize: "22px", fontStyle: "italic", textTransform: "uppercase", marginBottom: "8px" }}>
            {goals[selectedGoal].title}
          </h3>
          <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
            {goals[selectedGoal].desc}
          </p>
          <div style={{ fontSize: "12px", color: "#a3e635", fontWeight: "800" }}>
            📊 {goals[selectedGoal].stat}
          </div>
        </div>
      </section>

      {/* Casos reales de transformación con fotos */}
      <section className="demo-section" id="resultados">
        <div className="demo-section-header">
          <h2 style={{ textTransform: "uppercase", fontStyle: "italic" }}>
            Resultados Comprobados de Alumnos
          </h2>
          <p>Personas con trabajos, familias y horarios reales que lograron su mejor versión física.</p>
        </div>

        <div className="fit-transformations-grid">
          <article className="fit-story-card">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
              alt="Martín - Entrenamiento de fuerza"
              className="fit-story-img"
              loading="lazy"
            />
            <div className="fit-story-body">
              <div className="fit-story-stats">
                <span className="fit-tag-result">-14 KG GRASA</span>
                <span className="fit-tag-result">16 SEMANAS</span>
              </div>
              <h3>Martín Gómez · 34 años</h3>
              <p>
                "Trabajando 9 horas en oficina creía que no tenía tiempo. El método me enseñó a comer bien y entrenar 4 días 50 minutos con resultados brutales."
              </p>
            </div>
          </article>

          <article className="fit-story-card">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
              alt="Entrenamiento y corrección técnica"
              className="fit-story-img"
              loading="lazy"
            />
            <div className="fit-story-body">
              <div className="fit-story-stats">
                <span className="fit-tag-result">+5 KG MÚSCULO</span>
                <span className="fit-tag-result">20 SEMANAS</span>
              </div>
              <h3>Santiago Rossi · 28 años</h3>
              <p>
                "Llevaba 2 años estancado en el gimnasio sin ver cambios. La corrección de técnica por video y la progresión de cargas marcaron toda la diferencia."
              </p>
            </div>
          </article>

          <article className="fit-story-card">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
              alt="Nutrición deportiva flexible"
              className="fit-story-img"
              loading="lazy"
            />
            <div className="fit-story-body">
              <div className="fit-story-stats">
                <span className="fit-tag-result">RECOMPOSICIÓN</span>
                <span className="fit-tag-result">12 SEMANAS</span>
              </div>
              <h3>Valeria Torres · 31 años</h3>
              <p>
                "Por fin una propuesta que no me prohíbe comer con amigos los fines de semana. Mi energía y mi rendimiento en el entrenamiento subieron al 100%."
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Matriz de Planes y Tarifas */}
      <section className="demo-section" id="planes">
        <div className="demo-section-header">
          <h2 style={{ textTransform: "uppercase", fontStyle: "italic" }}>
            Elegí tu Plan de Coaching
          </h2>
          <p>Sin contratos de permanencia. Podés cancelar o pausar cuando quieras.</p>
        </div>

        <div className="fitness-pricing-grid">
          {/* Plan Inicial */}
          <article className="pricing-card">
            <div className="pricing-header">
              <h3>Plan Rutina</h3>
              <p>Para quienes ya tienen experiencia y solo necesitan un plan ordenado.</p>
            </div>
            <div className="pricing-price">
              $25.000 <span>/ mes</span>
            </div>
            <ul className="pricing-features">
              <li><span>✓</span> Rutina estructurada en App</li>
              <li><span>✓</span> Videos demostrativos de cada ejercicio</li>
              <li><span>✓</span> Guía de hábitos y descanso</li>
              <li style={{ opacity: 0.35 }}><span>✕</span> Sin corrección de técnica semanal</li>
            </ul>
            <a href={whatsappJoinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ justifyContent: "center" }}>
              Elegir Rutina
            </a>
          </article>

          {/* Plan Pro (Destacado) */}
          <article className="pricing-card popular" style={{ border: "2px solid #ccff00" }}>
            <div className="popular-badge" style={{ background: "#ccff00", color: "#000" }}>Más Popular</div>
            <div className="pricing-header">
              <h3 style={{ color: "#ccff00" }}>Coaching Pro 1 a 1</h3>
              <p>Acompañamiento completo para asegurar que no te estanques nunca.</p>
            </div>
            <div className="pricing-price" style={{ color: "#ccff00" }}>
              $45.000 <span>/ mes</span>
            </div>
            <ul className="pricing-features">
              <li><span>✓</span> Rutina 100% individualizada</li>
              <li><span>✓</span> Estrategia nutricional y macros</li>
              <li><span>✓</span> Corrección de técnica por video</li>
              <li><span>✓</span> WhatsApp directo diario con el coach</li>
              <li><span>✓</span> Ajustes quincenales de cargas</li>
            </ul>
            <a href={whatsappJoinUrl} target="_blank" rel="noopener noreferrer" className="btn-fit-primary" style={{ justifyContent: "center" }}>
              Empezar Coaching Pro <span>→</span>
            </a>
          </article>

          {/* Plan VIP */}
          <article className="pricing-card">
            <div className="pricing-header">
              <h3>Plan VIP</h3>
              <p>Seguimiento semanal con videollamadas y respuesta prioritaria.</p>
            </div>
            <div className="pricing-price">
              $75.000 <span>/ mes</span>
            </div>
            <ul className="pricing-features">
              <li><span>✓</span> Todo lo incluido en Coaching Pro</li>
              <li><span>✓</span> Videollamada semanal de análisis</li>
              <li><span>✓</span> Suplementación deportiva avanzada</li>
              <li><span>✓</span> Respuesta garantizada en el día</li>
            </ul>
            <a href={whatsappJoinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ justifyContent: "center" }}>
              Consultar Cupo VIP
            </a>
          </article>
        </div>
      </section>

      {/* Banner de conversión para clientes */}
      <aside className="demo-footer-banner" id="iniciar">
        <div className="demo-footer-copy">
          <h3>¿Tenés un servicio o infoproducto y querés una Landing Page que venda?</h3>
          <p>
            Esta landing de alta conversión fue desarrollada por <strong>VOLCA TECH</strong>. Estructurada con psicología de ventas,
            demostraciones visuales y llamados directos a WhatsApp para convertir visitas en clientes reales.
          </p>
        </div>
        <div className="demo-footer-actions">
          <a
            href={hireVolcaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Quiero mi Landing Page <span>→</span>
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

      {/* Footer deportivo */}
      <footer className="demo-page-footer">
        © 2026 Catalan Performance · Coaching Online &amp; Presencial · Solución web demostrativa desarrollada por VOLCA TECH (Santa Fe, Argentina).
      </footer>
    </div>
  );
}
