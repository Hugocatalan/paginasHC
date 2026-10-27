import React, { useState } from "react";
import { ProjectHeaderBar } from "../components/projects-demo/ProjectHeaderBar";
import "./projects-demo.css";
import "./aslop-demo.css";

/**
 * Página de Demostración 07: ASLOP · Asociación Santafesina de Levantamiento Olímpico de Pesas
 * - Paleta Institucional Oficial Fiel:
 *   --color-primary: #102A43 (Azul Marino Institucional)
 *   --color-primary-dark: #091a2b (Azul Profundo)
 *   --color-secondary: #36A9D6 (Celeste Olímpico / Bandera Santafesina)
 *   --color-secondary-dark: #2288b2
 *   --color-secondary-light: #e6f6fd
 *   --color-accent: #C62835 (Rojo Acento Deportivo Santa Fe)
 *   --color-background: #FFFFFF (Fondo Blanco Limpio Institucional)
 *   --color-surface: #F2F5F7 (Superficie Gris Claro)
 *   --color-text: #102A43 (Texto Azul Marino)
 *   --color-text-secondary: #52616B
 *   --color-border: #D9E2EC
 *
 * @param {Object} props
 * @param {Function} props.onBack - Retorna al portfolio principal de VOLCA TECH
 */
export function AslopDemo({ onBack }) {
  // Enlace comercial para solicitar una solución a VOLCA TECH
  const hireVolcaUrl = `https://wa.me/543425661863?text=${encodeURIComponent(
    "Hola, estuve viendo el portal institucional de ASLOP en VOLCA TECH y me interesa desarrollar un sitio web similar para mi federación, club o asociación deportiva."
  )}`;

  // WhatsApp oficial simulado de la mesa de entradas de ASLOP
  const aslopWhatsappNumber = "543425661863";

  // Estados interactivos
  const [activeTab, setActiveTab] = useState("todos-torneos");
  const [selectedRecordGender, setSelectedRecordGender] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [expandedNoticeId, setExpandedNoticeId] = useState(null);
  const [downloadSuccessModal, setDownloadSuccessModal] = useState(null);

  // Estados del Asistente Interactivo de Mesa de Entradas / Afiliación
  const [afiliacionTipo, setAfiliacionTipo] = useState("club");
  const [afiliacionDepto, setAfiliacionDepto] = useState("la-capital");
  const [afiliacionCategoria, setAfiliacionCategoria] = useState("mayores");
  const [afiliacionAtletasAprox, setAfiliacionAtletasAprox] = useState("10");

  // Competencias oficiales
  const competencias = [
    {
      id: "torneo-apertura-2026",
      nombre: "Campeonato Provincial Apertura Santa Fe 2026",
      tipo: "provincial",
      fecha: "18 de Abril de 2026",
      sede: "Gimnasio Polideportivo Provincial (CARD)",
      localidad: "Santa Fe Capital",
      direccion: "Raúl Tacca 700",
      estado: "Inscripciones Abiertas",
      estadoTipo: "open",
      categorias: ["Menores (U15)", "Juveniles (U17)", "Junior (U20)", "Mayores"],
      descripcion:
        "Primer torneo oficial puntuable del calendario santafesino de halterofilia. Clasificatorio directo al Campeonato Regional del Litoral.",
      requisitos: [
        "Licencia deportiva provincial ASLOP / FAP al día",
        "Certificado EMMAC o aptitud médica de alto rendimiento",
        "Malla de levantamiento homologada según reglamento IWF"
      ]
    },
    {
      id: "selectivo-evita-2026",
      nombre: "Evaluativo Provincial & Selectivo Santafesino",
      tipo: "evaluativo",
      fecha: "23 de Mayo de 2026",
      sede: "Centro de Alto Rendimiento Deportivo",
      localidad: "Rosario, Santa Fe",
      direccion: "Parque de la Independencia",
      estado: "Próximamente",
      estadoTipo: "soon",
      categorias: ["U15 Femenino y Masculino", "U17 Femenino y Masculino"],
      descripcion:
        "Jornada técnica de control para conformación del seleccionado provincial santafesino rumbo a certámenes nacionales.",
      requisitos: [
        "Atletas federados en clubes afiliados a ASLOP",
        "Control biométrico y pesaje oficial en plataforma"
      ]
    },
    {
      id: "clausura-santafesino-2025",
      nombre: "Torneo Clausura Provincial Santafesino 2025",
      tipo: "finalizado",
      fecha: "15 de Noviembre de 2025",
      sede: "Club Náutico El Quillá",
      localidad: "Santa Fe Capital",
      direccion: "Paseo del Lago",
      estado: "Finalizado · Actas Disponibles",
      estadoTipo: "closed",
      categorias: ["Todas las divisiones de peso oficiales IWF"],
      descripcion:
        "Cierre anual del calendario federativo con coronación de campeones provinciales por equipos e individuales.",
      requisitos: [
        "Resultados oficiales homologados por el Colegio de Árbitros ASLOP"
      ]
    },
    {
      id: "regional-centro-2025",
      nombre: "Torneo Regional de Halterofilia Centro 2025",
      tipo: "finalizado",
      fecha: "20 de Septiembre de 2025",
      sede: "Polideportivo Municipal de Rafaela",
      localidad: "Rafaela, Santa Fe",
      direccion: "Av. Brasil y Constituyentes",
      estado: "Finalizado · Actas Disponibles",
      estadoTipo: "closed",
      categorias: ["Juvenil", "Junior", "Mayores"],
      descripcion:
        "Certamen interprovincial fiscalizado con participación de delegaciones oficiales de Santa Fe, Córdoba y Entre Ríos.",
      requisitos: [
        "Fiscalización conjunta FAP y ASLOP"
      ]
    }
  ];

  // Récords provinciales homologados
  const records = [
    {
      id: "rec-m-81",
      categoriaPeso: "81 kg",
      genero: "Masculino",
      division: "Mayores",
      atleta: "Registro Provincial Homologado",
      club: "Centro Provincial de Halterofilia (Santa Fe)",
      snatch: 135,
      cleanJerk: 165,
      total: 300,
      torneo: "Campeonato Provincial 2024",
      estado: "Homologado ASLOP / FAP"
    },
    {
      id: "rec-m-73",
      categoriaPeso: "73 kg",
      genero: "Masculino",
      division: "Mayores",
      atleta: "Marca Técnica de Referencia",
      club: "Escuela de Halterofilia Rosario",
      snatch: 125,
      cleanJerk: 155,
      total: 280,
      torneo: "Selectivo CARD Rosario",
      estado: "Homologado ASLOP / FAP"
    },
    {
      id: "rec-f-59",
      categoriaPeso: "59 kg",
      genero: "Femenino",
      division: "Mayores",
      atleta: "Marca Registrada Oficial",
      club: "Centro de Halterofilia Rafaela",
      snatch: 80,
      cleanJerk: 102,
      total: 182,
      torneo: "Torneo Apertura Santa Fe 2025",
      estado: "Homologado ASLOP / FAP"
    },
    {
      id: "rec-f-64",
      categoriaPeso: "64 kg",
      genero: "Femenino",
      division: "Mayores",
      atleta: "Registro Homologado Provincial",
      club: "Escuela Municipal de Rosario",
      snatch: 86,
      cleanJerk: 110,
      total: 196,
      torneo: "Clausura Provincial 2025",
      estado: "Homologado ASLOP / FAP"
    },
    {
      id: "rec-m-89-j",
      categoriaPeso: "89 kg",
      genero: "Masculino",
      division: "Junior",
      atleta: "Marca Juvenil Santafesina",
      club: "Centro Provincial Santa Fe",
      snatch: 130,
      cleanJerk: 160,
      total: 290,
      torneo: "Regional Centro 2025",
      estado: "Homologado ASLOP / FAP"
    },
    {
      id: "rec-f-71",
      categoriaPeso: "71 kg",
      genero: "Femenino",
      division: "Mayores",
      atleta: "Registro Homologado Absoluto",
      club: "Núcleo Norte Halterofilia Reconquista",
      snatch: 92,
      cleanJerk: 118,
      total: 210,
      torneo: "Selectivo Provincial 2025",
      estado: "Homologado ASLOP / FAP"
    }
  ];

  // Clubes federados
  const clubes = [
    {
      id: "club-1",
      nombre: "Centro Provincial de Levantamiento de Pesas",
      sigla: "CPLP",
      deptoId: "la-capital",
      departamento: "La Capital",
      localidad: "Santa Fe Capital",
      direccion: "Sector Polideportivo CARD, Raúl Tacca 700",
      entrenador: "Cuerpo Técnico Provincial ASLOP",
      horarios: "Lunes a Viernes de 15:00 a 20:30 hs",
      estado: "Afiliado Oficial",
      descripcion:
        "Sede principal de tecnificación provincial. Dispone de 8 tarimas de competición de madera maciza y material reglamentario IWF."
    },
    {
      id: "club-2",
      nombre: "Escuela Municipal de Halterofilia de Rosario",
      sigla: "EMHR",
      deptoId: "rosario",
      departamento: "Rosario",
      localidad: "Rosario",
      direccion: "Complejo Deportivo Parque Independencia",
      entrenador: "Delegación Técnica Zona Sur",
      horarios: "Lunes a Viernes de 14:00 a 19:30 hs",
      estado: "Afiliado Oficial",
      descripcion:
        "Polo formativo del sur provincial con amplia tradición en el desarrollo y proyección de pesistas para selecciones juveniles argentinas."
    },
    {
      id: "club-3",
      nombre: "Centro de Halterofilia del Oeste Santafesino",
      sigla: "CHOS",
      deptoId: "castellanos",
      departamento: "Castellanos",
      localidad: "Rafaela",
      direccion: "Área Polideportiva Municipal, Rafaela",
      entrenador: "Coordinador Regional Oeste",
      horarios: "Lunes, Miércoles y Viernes de 16:00 a 20:00 hs",
      estado: "Centro de Desarrollo",
      descripcion:
        "Espacio de formación regional especializado en la captación infanto-juvenil y escuela de iniciación técnica en levantamiento olímpico."
    },
    {
      id: "club-4",
      nombre: "Núcleo de Halterofilia Norte Santafesino",
      sigla: "NNHS",
      deptoId: "general-obligado",
      departamento: "General Obligado",
      localidad: "Reconquista",
      direccion: "Instalaciones Polideportivas Departamentales",
      entrenador: "Prof. de Educación Física y Halterofilia",
      horarios: "Martes y Jueves de 17:00 a 20:00 hs",
      estado: "En Proceso de Homologación",
      descripcion:
        "Iniciativa para la federalización y consolidación de la halterofilia en el norte provincial en convenio con comunas departamentales."
    }
  ];

  // Documentos oficiales
  const documentos = [
    {
      id: "doc-1",
      codigo: "EST-ASLOP-001",
      titulo: "Estatuto Social & Bases Constitutivas de ASLOP",
      categoria: "Estatuto Institucional",
      formato: "PDF",
      peso: "1.4 MB",
      vigencia: "Aprobación Oficial 2025"
    },
    {
      id: "doc-2",
      codigo: "REG-IWF-2024",
      titulo: "Reglamento Técnico y de Competición Oficial IWF",
      categoria: "Reglamento Técnico",
      formato: "PDF",
      peso: "3.8 MB",
      vigencia: "Ciclo Olímpico 2024-2028"
    },
    {
      id: "doc-3",
      codigo: "FOR-AFIL-2026",
      titulo: "Planilla Única de Afiliación de Clubes e Instituciones",
      categoria: "Formularios Administrativos",
      formato: "PDF / Word",
      peso: "420 KB",
      vigencia: "Período 2026"
    },
    {
      id: "doc-4",
      codigo: "MED-EMMAC-02",
      titulo: "Ficha Médica de Aptitud Deportiva de Alta Competencia",
      categoria: "Protocolos Médicos",
      formato: "PDF",
      peso: "680 KB",
      vigencia: "Obligatorio Anual"
    }
  ];

  // Noticias institucionales
  const noticias = [
    {
      id: "not-1",
      categoria: "Institucional",
      fecha: "20 de Febrero de 2026",
      titulo: "Puesta en marcha del nuevo portal institucional y censo de pesas en Santa Fe",
      bajada:
        "La ASLOP presenta su canal oficial de comunicación para nuclear a clubes, atletas y entrenadores de los 19 departamentos provinciales.",
      imagen: "./images/projects/aslop/images/hero-weightlifting.jpg",
      cuerpoCompleto:
        "Con el firme compromiso de jerarquizar el levantamiento olímpico de pesas en la provincia de Santa Fe, la Asociación Santafesina de Levantamiento Olímpico de Pesas (ASLOP) pone en funcionamiento su portal centralizado. A través de este entorno digital, la comunidad deportiva podrá consultar cronogramas homologados, tablas de marcas oficiales, licencias federativas y el registro de clubes afiliados bajo estricta reglamentación de la FAP y la IWF."
    },
    {
      id: "not-2",
      categoria: "Capacitaciones",
      fecha: "10 de Febrero de 2026",
      titulo: "Clínica de arbitraje y actualización de reglas técnicas IWF para entrenadores",
      bajada:
        "Jornada teórico-práctica destinada a jueces provinciales y preparadores físicos para unificar criterios de juzgamiento.",
      imagen: "./images/projects/aslop/images/coaching-training.jpg",
      cuerpoCompleto:
        "La constante evolución del reglamento internacional de la IWF requiere que tanto los jueces de tarima como los directores técnicos dominen en detalle las directrices de juzgamiento en el Snatch (Arranque) y Clean & Jerk (Envión). Esta capacitación formal certifica créditos para la nómina arbitral provincial del ciclo 2026."
    },
    {
      id: "not-3",
      categoria: "Institucional",
      fecha: "28 de Enero de 2026",
      titulo: "Apertura del Registro Único de Clubes y Centros de Halterofilia",
      bajada:
        "Gimnasios y escuelas deportivas pueden iniciar su trámite de homologación y personería deportiva provincial.",
      imagen: "./images/projects/aslop/images/barbell-chalk.jpg",
      cuerpoCompleto:
        "Para garantizar un marco normativo seguro y federado, ASLOP habilita la recepción de carpetas institucionales para nuevos centros deportivos. Estar federado permite a los atletas obtener su licencia única FAP, puntuar en campeonatos provinciales y acceder a programas de becas de la Secretaría de Deportes."
    }
  ];

  // Filtros
  const filteredCompetencias =
    activeTab === "todos-torneos"
      ? competencias
      : competencias.filter((c) => c.tipo === activeTab);

  const filteredRecords =
    selectedRecordGender === "all"
      ? records
      : records.filter((r) => r.genero === selectedRecordGender);

  const filteredClubes =
    selectedDepartment === "all"
      ? clubes
      : clubes.filter((c) => c.deptoId === selectedDepartment);

  // Mensaje generado para el Asistente de Afiliación
  const tramiteNombres = {
    club: "Afiliación Institucional de Club / Gimnasio",
    atleta: "Licencia Deportiva Federativa de Atleta",
    arbitro: "Postulación para Formación Arbitral / Entrenador"
  };

  const deptoNombres = {
    "la-capital": "La Capital (Santa Fe y zona)",
    rosario: "Rosario y Gran Rosario",
    castellanos: "Castellanos (Rafaela y zona)",
    "general-obligado": "General Obligado (Norte Provincial)",
    otro: "Otro departamento santafesino"
  };

  const generatedAslopMessage = `Hola Mesa de Entradas ASLOP, quiero iniciar el trámite de: *${tramiteNombres[afiliacionTipo]}* en el departamento *${deptoNombres[afiliacionDepto]}*. Categoría principal: *${afiliacionCategoria}* (Estimado: ${afiliacionAtletasAprox} participantes). ¿Cuáles son los próximos pasos administrativos?`;
  const aslopWhatsappUrl = `https://wa.me/${aslopWhatsappNumber}?text=${encodeURIComponent(
    generatedAslopMessage
  )}`;

  const handleSimulatedDownload = (doc) => {
    setDownloadSuccessModal({
      title: doc.titulo,
      codigo: doc.codigo,
      peso: doc.peso
    });
  };

  return (
    <div className="demo-page-container aslop-demo-theme">
      {/* ====================================================================
          1. BARRA SUPERIOR FIJA DEL PORTFOLIO (VOLCA TECH)
          ==================================================================== */}
      <ProjectHeaderBar
        projectName="ASLOP · Federación Santafesina de Pesas"
        category="Federación Deportiva & Levantamiento Olímpico"
        onBack={onBack}
      />

      {/* ====================================================================
          2. TOPBAR INSTITUCIONAL OFICIAL DE ASLOP
          ==================================================================== */}
      <div className="aslop-topbar-institutional">
        <div className="aslop-container aslop-topbar-content">
          <div className="aslop-topbar-tagline">
            <span className="aslop-topbar-dot"></span>
            <span>Provincia de Santa Fe · República Argentina · Afiliada a Federación Argentina de Pesas (FAP)</span>
          </div>
          <div className="aslop-topbar-quicklinks">
            <a href="#documentacion" className="aslop-topbar-link">
              <span>🛡️</span> Estatuto y Reglamentos
            </a>
            <span className="aslop-topbar-sep">|</span>
            <a href="#tramites" className="aslop-topbar-link">
              <span>🏛️</span> Mesa de Entradas
            </a>
          </div>
        </div>
      </div>

      {/* ====================================================================
          3. NAVBAR INSTITUCIONAL DE ASLOP (BLANCO & AZUL MARINO)
          ==================================================================== */}
      <header className="aslop-navbar">
        <div className="aslop-container aslop-nav-inner">
          <div className="aslop-brand-wrap">
            <div
              className="aslop-shield-wrapper"
              style={{
                width: "86px",
                height: "86px",
                minWidth: "86px",
                minHeight: "86px",
                maxWidth: "86px",
                maxHeight: "86px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #ffffff",
                boxShadow: "0 6px 18px rgba(16, 42, 67, 0.18), 0 0 0 3px #ffffff, 0 0 0 6px #36A9D6"
              }}
            >
              <img
                src="./images/projects/aslop/logo-aslop.jpeg"
                alt="Escudo oficial ASLOP"
                className="aslop-official-shield"
                width="86"
                height="86"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  display: "block"
                }}
                onError={(e) => {
                  e.target.src = "./images/projects/aslop/logo sin fondo.png";
                }}
              />
            </div>
            <div className="aslop-brand-text">
              <span className="aslop-brand-acronym">ASLOP</span>
              <span className="aslop-brand-fullname">
                Asociación Santafesina de Levantamiento Olímpico de Pesas
              </span>
              <span className="aslop-brand-region">
                SANTA FE · REPÚBLICA ARGENTINA
              </span>
            </div>
          </div>

          <nav className="aslop-nav-links" aria-label="Navegación institucional">
            <a href="#institucional">La Asociación</a>
            <a href="#competencias">Competencias</a>
            <a href="#records">Récords</a>
            <a href="#clubes">Clubes</a>
            <a href="#documentacion">Documentación</a>
            <a href="#noticias">Noticias</a>
            <a href="#tramites">Contacto</a>
            <a href="#competencias" className="aslop-nav-cta">
              📅 Calendario
            </a>
          </nav>
        </div>
      </header>

      {/* ====================================================================
          4. HERO INSTITUCIONAL DE ALTO IMPACTO (AZUL MARINO CON CAPA OFICIAL)
          ==================================================================== */}
      <section className="aslop-hero">
        <div className="aslop-hero-bg">
          <img
            src="./images/projects/aslop/images/hero-weightlifting.jpg"
            alt="Atleta en plataforma oficial de competencia de levantamiento olímpico de pesas"
            className="aslop-hero-bg-img"
          />
          <div className="aslop-hero-overlay"></div>
        </div>

        <div className="aslop-container aslop-hero-content">
          <div className="aslop-hero-badge">
            <span className="aslop-hero-badge-dot"></span>
            <span>Asociación Santafesina de Levantamiento Olímpico de Pesas</span>
          </div>

          <h1 className="aslop-hero-title">
            Potencia, técnica y tradición deportiva.
          </h1>

          <p className="aslop-hero-description">
            Una institución dedicada al desarrollo, la promoción y el crecimiento del
            levantamiento olímpico de pesas en la Provincia de Santa Fe.
          </p>

          <div className="aslop-hero-actions">
            <a href="#institucional" className="aslop-btn aslop-btn-primary aslop-btn-lg">
              <span>Conocé la Asociación</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="#competencias" className="aslop-btn aslop-btn-outline-white aslop-btn-lg">
              <span>📅 Calendario de Competencias</span>
            </a>
            <a href="#tramites" className="aslop-btn aslop-btn-secondary aslop-btn-lg">
              <span>🏛️ Mesa de Entradas / Afiliar Club</span>
            </a>
          </div>

          {/* Credenciales y Avales Oficiales */}
          <div className="aslop-hero-credentials">
            <div className="aslop-credential-pill">
              <span className="cred-icon">⚖️</span>
              <span>Reglamentación oficial IWF</span>
            </div>
            <div className="aslop-credential-pill">
              <span className="cred-icon">🇦🇷</span>
              <span>Afiliada a la FAP</span>
            </div>
            <div className="aslop-credential-pill">
              <span className="cred-icon">🏛️</span>
              <span>Desarrollo deportivo provincial Santa Fe</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. PRESENTACIÓN INSTITUCIONAL & PROPÓSITO
          ==================================================================== */}
      <section id="institucional" className="aslop-section aslop-bg-surface">
        <div className="aslop-container">
          <div className="aslop-section-header">
            <span className="aslop-section-badge badge-secondary">Propósito Institucional</span>
            <h2 className="aslop-section-title">
              Jerarquizando el deporte olímpico en cada rincón de la provincia
            </h2>
            <p className="aslop-section-lead">
              La Asociación Santafesina de Levantamiento Olímpico de Pesas (ASLOP) nuclea a deportistas,
              entrenadores, jueces e instituciones con un objetivo común: consolidar una estructura
              técnica y federativa sólida, formativa y transparente.
            </p>
          </div>

          {/* Estadísticas Institucionales */}
          <div className="aslop-stats-grid">
            <div className="aslop-stat-card">
              <span className="stat-number">19</span>
              <span className="stat-label">Departamentos Provinciales</span>
              <p>Alcance territorial para la detección de talentos deportivos en toda la bota santafesina.</p>
            </div>
            <div className="aslop-stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Normativa Homologada</span>
              <p>Torneos arbitrados por jueces oficiales bajo directrices técnicas de la IWF y la FAP.</p>
            </div>
            <div className="aslop-stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">Divisiones Competitivas</span>
              <p>Categorías U15 formativo, Juveniles U17, Junior U20 y Mayores Absoluto.</p>
            </div>
            <div className="aslop-stat-card">
              <span className="stat-number">2026</span>
              <span className="stat-label">Ciclo Federativo</span>
              <p>Planificación de torneos provinciales, evaluativos selectivos y clínicas de arbitraje.</p>
            </div>
          </div>

          {/* Comisiones y Autoridades */}
          <div className="aslop-authorities-card">
            <div className="authorities-header">
              <span className="aslop-section-badge badge-accent">Gobernanza Institucional</span>
              <h3>Autoridades y Comisiones de Trabajo ASLOP</h3>
            </div>
            <div className="authorities-grid">
              <div className="authority-box">
                <span className="auth-role">Presidencia & Representación Legal</span>
                <strong className="auth-name">Comisión Directiva Central</strong>
                <small className="auth-mandate">Período Oficial Vigente 2025–2027</small>
              </div>
              <div className="authority-box">
                <span className="auth-role">Dirección Técnica Provincial</span>
                <strong className="auth-name">Cuerpo de Entrenadores CARD</strong>
                <small className="auth-mandate">Área de Tecnificación & Alto Rendimiento</small>
              </div>
              <div className="authority-box">
                <span className="auth-role">Colegio de Árbitros Provincial</span>
                <strong className="auth-name">Cuerpo de Jueces IWF / FAP</strong>
                <small className="auth-mandate">Arbitraje Oficial de Plataforma</small>
              </div>
              <div className="authority-box">
                <span className="auth-role">Secretaría General & Mesa de Entradas</span>
                <strong className="auth-name">Administración y Fichajes</strong>
                <small className="auth-mandate">Mesa de Entradas & Afiliación de Clubes</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. CALENDARIO OFICIAL DE COMPETENCIAS 2026
          ==================================================================== */}
      <section id="competencias" className="aslop-section">
        <div className="aslop-container">
          <div className="aslop-section-header">
            <span className="aslop-section-badge badge-secondary">Torneos Oficiales</span>
            <h2 className="aslop-section-title">Calendario Deportivo Santafesino 2026</h2>
            <p className="aslop-section-lead">
              Cronograma anual de certámenes puntuables fiscalizados por ASLOP para la clasificación a
              campeonatos regionales y nacionales.
            </p>

            <div className="aslop-filter-pills">
              <button
                type="button"
                className={`pill-btn ${activeTab === "todos-torneos" ? "active" : ""}`}
                onClick={() => setActiveTab("todos-torneos")}
              >
                Todos los torneos
              </button>
              <button
                type="button"
                className={`pill-btn ${activeTab === "provincial" ? "active" : ""}`}
                onClick={() => setActiveTab("provincial")}
              >
                Provinciales
              </button>
              <button
                type="button"
                className={`pill-btn ${activeTab === "evaluativo" ? "active" : ""}`}
                onClick={() => setActiveTab("evaluativo")}
              >
                Evaluativos & Selectivos
              </button>
              <button
                type="button"
                className={`pill-btn ${activeTab === "finalizado" ? "active" : ""}`}
                onClick={() => setActiveTab("finalizado")}
              >
                Finalizados & Actas
              </button>
            </div>
          </div>

          <div className="aslop-competitions-grid">
            {filteredCompetencias.map((c) => (
              <article key={c.id} className="competition-card">
                <div className="comp-card-top">
                  <span className={`comp-status-badge status-${c.estadoTipo}`}>
                    {c.estado}
                  </span>
                  <span className="comp-date">📅 {c.fecha}</span>
                </div>

                <h3 className="comp-title">{c.nombre}</h3>

                <div className="comp-meta-box">
                  <p>
                    <strong>📍 Sede:</strong> {c.sede} ({c.localidad})
                  </p>
                  <p>
                    <strong>🏢 Ubicación:</strong> {c.direccion}
                  </p>
                </div>

                <p className="comp-desc">{c.descripcion}</p>

                <div className="comp-categories-wrap">
                  <span className="comp-section-label">Divisiones habilitadas:</span>
                  <div className="comp-pill-group">
                    {c.categorias.map((cat, i) => (
                      <span key={i} className="cat-pill">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="comp-requirements">
                  <span className="comp-section-label">Requisitos técnicos:</span>
                  <ul>
                    {c.requisitos.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="comp-actions">
                  {c.estadoTipo === "open" ? (
                    <a
                      href={`https://wa.me/${aslopWhatsappNumber}?text=${encodeURIComponent(
                        `Hola ASLOP, deseo solicitar la planilla de inscripción oficial para el "${c.nombre}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aslop-btn aslop-btn-primary comp-btn"
                    >
                      Inscribir Delegación Oficial →
                    </a>
                  ) : c.estadoTipo === "soon" ? (
                    <a
                      href={`https://wa.me/${aslopWhatsappNumber}?text=${encodeURIComponent(
                        `Hola ASLOP, deseo recibir el reglamento técnico y pautas del "${c.nombre}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aslop-btn aslop-btn-outline comp-btn"
                    >
                      Consultar Pautas Técnicas
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="aslop-btn aslop-btn-outline comp-btn"
                      onClick={() =>
                        handleSimulatedDownload({
                          titulo: `Acta Oficial de Resultados - ${c.nombre}`,
                          codigo: "ACTA-PROV-RESULT",
                          peso: "1.2 MB"
                        })
                      }
                    >
                      Descargar Acta de Resultados (PDF)
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. TABLA DE RÉCORDS PROVINCIALES HOMOLOGADOS
          ==================================================================== */}
      <section id="records" className="aslop-section aslop-bg-surface">
        <div className="aslop-container">
          <div className="aslop-section-header">
            <span className="aslop-section-badge badge-accent">Marcas Históricas Homologadas</span>
            <h2 className="aslop-section-title">Récords Provinciales de Santa Fe</h2>
            <p className="aslop-section-lead">
              Marcas técnicas máximas alcanzadas en torneos oficiales fiscalizados por ASLOP y
              homologadas bajo estrictos protocolos de jurado y pesaje de la IWF.
            </p>

            <div className="records-control-bar">
              <div className="records-gender-toggle">
                <button
                  type="button"
                  className={`gender-btn ${selectedRecordGender === "all" ? "active" : ""}`}
                  onClick={() => setSelectedRecordGender("all")}
                >
                  Todas las ramas
                </button>
                <button
                  type="button"
                  className={`gender-btn ${selectedRecordGender === "Masculino" ? "active" : ""}`}
                  onClick={() => setSelectedRecordGender("Masculino")}
                >
                  Rama Masculina
                </button>
                <button
                  type="button"
                  className={`gender-btn ${selectedRecordGender === "Femenino" ? "active" : ""}`}
                  onClick={() => setSelectedRecordGender("Femenino")}
                >
                  Rama Femenina
                </button>
              </div>
            </div>
          </div>

          <div className="aslop-table-responsive">
            <table className="aslop-records-table">
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Rama</th>
                  <th>División</th>
                  <th>Club de Procedencia</th>
                  <th className="th-number">Arranque (Snatch)</th>
                  <th className="th-number">Envión (C&J)</th>
                  <th className="th-number th-highlight">Total Olímpico</th>
                  <th>Torneo</th>
                  <th>Verificación</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((r) => (
                  <tr key={r.id}>
                    <td>
                      <span className="badge-weight">{r.categoriaPeso}</span>
                    </td>
                    <td>{r.genero}</td>
                    <td>
                      <span className="badge-division">{r.division}</span>
                    </td>
                    <td className="td-club">{r.club}</td>
                    <td className="td-number font-mono">{r.snatch} kg</td>
                    <td className="td-number font-mono">{r.cleanJerk} kg</td>
                    <td className="td-number font-mono td-total-highlight">
                      <strong>{r.total} kg</strong>
                    </td>
                    <td className="td-tournament">{r.torneo}</td>
                    <td>
                      <span className="badge-homologado">✓ {r.estado}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="records-footer-note">
            <p>
              ℹ️ Las marcas en kilogramos son registradas en báscula electrónica calibrada y
              validadas por 3 jueces de plataforma más jurado oficial de apelación IWF/FAP.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. DIRECTORIO DE CLUBES FEDERADOS
          ==================================================================== */}
      <section id="clubes" className="aslop-section">
        <div className="aslop-container">
          <div className="aslop-section-header">
            <span className="aslop-section-badge badge-secondary">Red Institucional</span>
            <h2 className="aslop-section-title">Directorio de Clubes y Centros de Halterofilia</h2>
            <p className="aslop-section-lead">
              Entidades deportivas reconocidas que cuentan con plataformas reglamentarias,
              entrenadores habilitados y programas formativos en la disciplina olímpica.
            </p>

            <div className="clubes-department-filter">
              <span className="filter-label">Filtrar por Departamento:</span>
              <div className="dept-buttons">
                <button
                  type="button"
                  className={`dept-btn ${selectedDepartment === "all" ? "active" : ""}`}
                  onClick={() => setSelectedDepartment("all")}
                >
                  Todos
                </button>
                <button
                  type="button"
                  className={`dept-btn ${selectedDepartment === "la-capital" ? "active" : ""}`}
                  onClick={() => setSelectedDepartment("la-capital")}
                >
                  La Capital (Santa Fe)
                </button>
                <button
                  type="button"
                  className={`dept-btn ${selectedDepartment === "rosario" ? "active" : ""}`}
                  onClick={() => setSelectedDepartment("rosario")}
                >
                  Rosario
                </button>
                <button
                  type="button"
                  className={`dept-btn ${selectedDepartment === "castellanos" ? "active" : ""}`}
                  onClick={() => setSelectedDepartment("castellanos")}
                >
                  Castellanos (Rafaela)
                </button>
                <button
                  type="button"
                  className={`dept-btn ${selectedDepartment === "general-obligado" ? "active" : ""}`}
                  onClick={() => setSelectedDepartment("general-obligado")}
                >
                  Gral. Obligado (Norte)
                </button>
              </div>
            </div>
          </div>

          <div className="aslop-clubs-grid">
            {filteredClubes.map((club) => (
              <article key={club.id} className="club-card">
                <div className="club-card-header">
                  <div className="club-sigla-badge">{club.sigla}</div>
                  <span className="club-state-tag">{club.estado}</span>
                </div>

                <h3 className="club-name">{club.nombre}</h3>
                <span className="club-location">
                  📍 {club.localidad} · Depto. {club.departamento}
                </span>

                <p className="club-description">{club.descripcion}</p>

                <div className="club-details-list">
                  <div className="club-detail">
                    <strong>Dirección:</strong> <span>{club.direccion}</span>
                  </div>
                  <div className="club-detail">
                    <strong>Responsable Técnico:</strong> <span>{club.entrenador}</span>
                  </div>
                  <div className="club-detail">
                    <strong>Horarios:</strong> <span>{club.horarios}</span>
                  </div>
                </div>

                <div className="club-card-footer">
                  <a
                    href={`https://wa.me/${aslopWhatsappNumber}?text=${encodeURIComponent(
                      `Hola ASLOP, quiero consultar por los entrenamientos y requisitos de ingreso en "${club.nombre}" (${club.localidad}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aslop-btn aslop-btn-outline club-cta-btn"
                  >
                    Consultar por este Club →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. NORMATIVA & CENTRO DE DOCUMENTACIÓN OFICIAL
          ==================================================================== */}
      <section id="documentacion" className="aslop-section aslop-bg-surface">
        <div className="aslop-container">
          <div className="aslop-section-header">
            <span className="aslop-section-badge badge-secondary">Transparencia & Reglamentación</span>
            <h2 className="aslop-section-title">Documentación Oficial & Resoluciones</h2>
            <p className="aslop-section-lead">
              Acceso público e irrestricto a los estatutos constitutivos, reglamentos técnicos de la
              IWF, protocolos médicos EMMAC y planillas de afiliación para el ciclo vigente.
            </p>
          </div>

          <div className="aslop-docs-grid">
            {documentos.map((doc) => (
              <div key={doc.id} className="doc-item-card">
                <div className="doc-icon-wrap">📄</div>
                <div className="doc-item-info">
                  <span className="doc-code">{doc.codigo}</span>
                  <h3 className="doc-title">{doc.titulo}</h3>
                  <div className="doc-meta-tags">
                    <span className="doc-tag">{doc.categoria}</span>
                    <span className="doc-tag">{doc.formato} · {doc.peso}</span>
                    <span className="doc-tag tag-vigencia">{doc.vigencia}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="aslop-btn aslop-btn-outline doc-download-btn"
                  onClick={() => handleSimulatedDownload(doc)}
                >
                  Descargar Archivo
                </button>
              </div>
            ))}
          </div>

          {/* Modal simulado de confirmación de descarga */}
          {downloadSuccessModal && (
            <div className="download-modal-backdrop" onClick={() => setDownloadSuccessModal(null)}>
              <div className="download-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-icon">✅</div>
                <h3>Documento Oficial Solicitado</h3>
                <p>
                  Has iniciado la descarga del documento: <strong>{downloadSuccessModal.title}</strong>
                </p>
                <div className="modal-file-details">
                  <span>Código: <code>{downloadSuccessModal.codigo}</code></span>
                  <span>Tamaño: {downloadSuccessModal.peso}</span>
                  <span>Formato: PDF Oficial Homologado</span>
                </div>
                <button
                  type="button"
                  className="aslop-btn aslop-btn-primary modal-close-btn"
                  onClick={() => setDownloadSuccessModal(null)}
                >
                  Cerrar Notificación
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ====================================================================
          10. PRENSA Y COMUNICADOS INSTITUCIONALES
          ==================================================================== */}
      <section id="noticias" className="aslop-section">
        <div className="aslop-container">
          <div className="aslop-section-header">
            <span className="aslop-section-badge badge-accent">Actualidad Federativa</span>
            <h2 className="aslop-section-title">Noticias y Comunicados Oficiales</h2>
            <p className="aslop-section-lead">
              Novedades sobre convenios, clínicas de arbitraje y aperturas de padrones provinciales.
            </p>
          </div>

          <div className="aslop-news-grid">
            {noticias.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-image-wrap">
                  <img src={item.imagen} alt={item.titulo} className="news-card-img" />
                  <span className="news-badge">{item.categoria}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">📅 {item.fecha}</span>
                  <h3 className="news-card-title">{item.titulo}</h3>
                  <p className="news-bajada">{item.bajada}</p>

                  {expandedNoticeId === item.id && (
                    <div className="news-expanded-text">
                      <p>{item.cuerpoCompleto}</p>
                    </div>
                  )}

                  <button
                    type="button"
                    className="news-read-more-btn"
                    onClick={() =>
                      setExpandedNoticeId(expandedNoticeId === item.id ? null : item.id)
                    }
                  >
                    {expandedNoticeId === item.id ? "Mostrar menos ↑" : "Leer comunicado completo →"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          11. ASISTENTE INTERACTIVO DE MESA DE ENTRADAS & AFILIACIONES
          ==================================================================== */}
      <section id="tramites" className="aslop-section aslop-bg-surface">
        <div className="aslop-container">
          <div className="aslop-assistant-wrapper">
            <div className="assistant-header-col">
              <span className="aslop-section-badge badge-secondary">Mesa de Entradas Virtual</span>
              <h2 className="aslop-section-title">Asistente de Afiliación & Fichajes Federativos</h2>
              <p className="aslop-section-lead">
                Iniciá la gestión federativa de tu institución, atletas o equipo técnico.
                Seleccioná los datos de tu trámite para generar automáticamente la solicitud y
                comunicarte directamente con la secretaría de ASLOP.
              </p>

              <div className="assistant-perks">
                <div className="perk-item">
                  <span className="perk-check">✓</span>
                  <span>Licencia Única FAP con seguro deportivo nacional</span>
                </div>
                <div className="perk-item">
                  <span className="perk-check">✓</span>
                  <span>Habilitación para competir en torneos puntuables y selectivos</span>
                </div>
                <div className="perk-item">
                  <span className="perk-check">✓</span>
                  <span>Homologación de plataformas y arbitraje oficial</span>
                </div>
              </div>
            </div>

            <div className="assistant-form-card">
              <div className="form-group-field">
                <label className="field-label">1. Tipo de trámite a gestionar:</label>
                <div className="option-chips-grid">
                  <button
                    type="button"
                    className={`chip-btn ${afiliacionTipo === "club" ? "selected" : ""}`}
                    onClick={() => setAfiliacionTipo("club")}
                  >
                    🏛️ Club / Gimnasio
                  </button>
                  <button
                    type="button"
                    className={`chip-btn ${afiliacionTipo === "atleta" ? "selected" : ""}`}
                    onClick={() => setAfiliacionTipo("atleta")}
                  >
                    🏋️‍♂️ Atleta Federado
                  </button>
                  <button
                    type="button"
                    className={`chip-btn ${afiliacionTipo === "arbitro" ? "selected" : ""}`}
                    onClick={() => setAfiliacionTipo("arbitro")}
                  >
                    ⚖️ Árbitro / Entrenador
                  </button>
                </div>
              </div>

              <div className="form-group-field">
                <label className="field-label">2. Departamento de residencia:</label>
                <select
                  value={afiliacionDepto}
                  onChange={(e) => setAfiliacionDepto(e.target.value)}
                  className="aslop-select"
                >
                  <option value="la-capital">La Capital (Santa Fe Capital y zona)</option>
                  <option value="rosario">Rosario y Área Metropolitana</option>
                  <option value="castellanos">Castellanos (Rafaela, Sunchales)</option>
                  <option value="general-obligado">General Obligado (Reconquista, Avellaneda)</option>
                  <option value="otro">Otro departamento de la provincia</option>
                </select>
              </div>

              <div className="form-row-two-col">
                <div className="form-group-field">
                  <label className="field-label">3. Categoría principal:</label>
                  <select
                    value={afiliacionCategoria}
                    onChange={(e) => setAfiliacionCategoria(e.target.value)}
                    className="aslop-select"
                  >
                    <option value="menores-u15">Menores (U15 formativo)</option>
                    <option value="juvenil-u17">Juvenil (U17)</option>
                    <option value="junior-u20">Junior (U20)</option>
                    <option value="mayores">Mayores (Absoluto)</option>
                    <option value="master">Master (+35)</option>
                  </select>
                </div>

                <div className="form-group-field">
                  <label className="field-label">4. Atletas estimados:</label>
                  <select
                    value={afiliacionAtletasAprox}
                    onChange={(e) => setAfiliacionAtletasAprox(e.target.value)}
                    className="aslop-select"
                  >
                    <option value="1 a 3">1 a 3 atletas</option>
                    <option value="5 a 10">5 a 10 atletas</option>
                    <option value="10 a 25">10 a 25 atletas</option>
                    <option value="más de 25">Más de 25 atletas</option>
                  </select>
                </div>
              </div>

              <div className="form-preview-box">
                <span className="preview-label">Resumen preformateado para la Mesa de Entradas:</span>
                <p className="preview-message-text">"{generatedAslopMessage}"</p>
              </div>

              <a
                href={aslopWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aslop-btn aslop-btn-primary aslop-btn-block"
              >
                <span>Enviar solicitud a Mesa de Entradas por WhatsApp</span>
                <span className="btn-arrow">→</span>
              </a>

              <div className="direct-channels">
                <span>📧 Correo oficial: <strong>contacto@aslop.org.ar</strong></span>
                <span>⏱️ Horario de atención: Lunes a Viernes de 9:00 a 18:00 hs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          12. FOOTER INSTITUCIONAL OFICIAL ASLOP (4 COLUMNAS + MARCA OFICIAL)
          ==================================================================== */}
      <footer className="aslop-footer" role="contentinfo">
        <div className="aslop-footer-top">
          <div className="aslop-container aslop-footer-grid">
            {/* Columna 1: Identidad y Escudo Oficial */}
            <div className="aslop-footer-col brand-col">
              <div className="footer-brand">
                <div
                  className="footer-shield"
                  style={{
                    width: "74px",
                    height: "74px",
                    minWidth: "74px",
                    minHeight: "74px",
                    maxWidth: "74px",
                    maxHeight: "74px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    padding: "3px",
                    border: "2px solid #FFFFFF",
                    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(54, 169, 214, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexShrink: 0
                  }}
                >
                  <img
                    src="./images/projects/aslop/logo-aslop.jpeg"
                    alt="Escudo oficial ASLOP"
                    width="74"
                    height="74"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      display: "block"
                    }}
                    onError={(e) => {
                      e.target.src = "./images/projects/aslop/03-isotipo.png";
                    }}
                  />
                </div>
                <div className="footer-brand-text">
                  <span className="footer-acronym">ASLOP</span>
                  <p className="footer-fullname">Asociación Santafesina de Levantamiento Olímpico de Pesas</p>
                </div>
              </div>
              <p className="footer-description">
                Entidad rectora del levantamiento olímpico de pesas en la Provincia de Santa Fe. Comprometida con la formación de deportistas, la reglamentación técnica y la jerarquización del deporte provincial.
              </p>
              <div className="footer-credentials">
                <span className="credential-item">
                  <span>🛡️</span>
                  Afiliada a la Federación Argentina de Pesas (FAP)
                </span>
                <span className="credential-item">
                  <span>🏛️</span>
                  Fiscalización y arbitraje oficial IWF
                </span>
              </div>
            </div>

            {/* Columna 2: Navegación Institucional */}
            <div className="aslop-footer-col">
              <h3 className="footer-heading">Institucional</h3>
              <ul className="footer-links">
                <li><a href="#institucional">› Sobre la Asociación</a></li>
                <li><a href="#institucional">› Autoridades y Gobierno</a></li>
                <li><a href="#clubes">› Directorio de Clubes Afiliados</a></li>
                <li><a href="#documentacion">› Estatuto y Resoluciones</a></li>
                <li><a href="#noticias">› Comunicados Oficiales</a></li>
              </ul>
            </div>

            {/* Columna 3: Área Deportiva y Técnica */}
            <div className="aslop-footer-col">
              <h3 className="footer-heading">Área Deportiva</h3>
              <ul className="footer-links">
                <li><a href="#competencias">› Calendario Oficial de Torneos</a></li>
                <li><a href="#records">› Récords y Marcas Provinciales</a></li>
                <li><a href="#records">› Categorías y Tablas IWF</a></li>
                <li><a href="#documentacion">› Reglamento Técnico Oficial</a></li>
                <li><a href="#documentacion">› Protocolos Antidopaje (CNAD)</a></li>
              </ul>
            </div>

            {/* Columna 4: Mesa de Entradas y Contacto */}
            <div className="aslop-footer-col">
              <h3 className="footer-heading">Mesa de Entradas</h3>
              <ul className="footer-contact-list">
                <li>
                  <span className="contact-icon">📍</span>
                  <span>Santa Fe Capital · Rep. Argentina</span>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:contacto@aslop.org.ar">contacto@aslop.org.ar</a>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:secretaria@aslop.org.ar">secretaria@aslop.org.ar</a>
                </li>
                <li>
                  <span className="contact-icon">📸</span>
                  <a
                    href="https://instagram.com/aslopesas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-instagram-link"
                  >
                    @aslopesas
                  </a>
                </li>
                <li>
                  <span className="contact-icon">🎖️</span>
                  <span>Afiliación y licencias deportivas</span>
                </li>
              </ul>
              <div className="footer-cta-box">
                <a href="#tramites" className="aslop-btn aslop-btn-outline-white aslop-btn-block">
                  🏛️ Mesa de Entradas Online
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Franja Inferior de Copyright */}
        <div className="aslop-footer-bottom">
          <div className="aslop-container footer-bottom-inner">
            <p className="copyright-text">
              © {new Date().getFullYear()} Asociación Santafesina de Levantamiento Olímpico de Pesas (ASLOP). Todos los derechos reservados.
            </p>
            <div className="legal-links">
              <span>Provincia de Santa Fe · República Argentina</span>
              <span className="bullet-sep">·</span>
              <a href="#documentacion">Transparencia</a>
              <span className="bullet-sep">·</span>
              <a
                href="https://hugocatalan.github.io/aslope-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-repo-link"
              >
                Sitio original en GitHub Pages ↗
              </a>
            </div>
          </div>
        </div>

        {/* Franja de Reconocimiento Tecnológico Oficial (VolcaTech) */}
        <div className="footer-developer">
          <div className="aslop-container footer-developer-content">
            <div className="developer-info">
              <p className="developer-text">
                Desarrollo web por{" "}
                <a
                  href="https://volcatech.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="developer-link"
                  title="Sitio oficial de VolcaTech"
                >
                  <img
                    src="./images/projects/aslop/03-isotipo.png"
                    alt="VolcaTech Isotipo"
                    className="developer-logo"
                    width="20"
                    height="20"
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                      display: "inline-block",
                      verticalAlign: "middle"
                    }}
                  />
                  <span className="developer-name">VOLCA TECH</span>
                </a>
              </p>
              <p className="developer-tagline">
                Soluciones digitales de alto impacto para federaciones, instituciones y empresas.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          13. BANNER PROMOCIONAL VOLCA TECH (CONVERSIÓN DE PORTFOLIO)
          ==================================================================== */}
      <section className="aslop-portfolio-promo-section">
        <div className="aslop-container">
          <div className="aslop-promo-banner-card">
            <div className="aslop-promo-copy">
              <span className="aslop-promo-badge">PROYECTO REAL EN PORTFOLIO</span>
              <h3 className="aslop-promo-title">
                ¿Buscás un portal institucional o sistema de gestión para tu federación, club o asociación?
              </h3>
              <p className="aslop-promo-desc">
                En <strong>VOLCA TECH</strong> desarrollamos plataformas integrales con calendarios oficiales,
                tablas de récords homologadas, padrón de clubes con geolocalización y mesas de entrada
                digitales automatizadas para modernizar tu entidad deportiva.
              </p>
            </div>
            <div className="aslop-promo-actions">
              <a
                href={hireVolcaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aslop-btn aslop-btn-primary aslop-btn-lg"
              >
                <span>Quiero una web como ASLOP</span>
                <span className="btn-arrow">→</span>
              </a>
              <button onClick={onBack} className="aslop-btn aslop-btn-outline-white aslop-btn-lg">
                <span>← Volver a VOLCA TECH</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="aslop-bottom-meta-bar">
        <div className="aslop-container">
          <p>ASLOP · Demostración técnica interactiva incluida en el portfolio oficial de VOLCA TECH · Santa Fe, Argentina</p>
        </div>
      </div>
    </div>
  );
}

export default AslopDemo;
