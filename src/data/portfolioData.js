/**
 * ============================================================================
 * DATOS CENTRALIZADOS DEL PORTFOLIO DE HUGO CATALAN
 * ============================================================================
 * Centralizar los datos aquí permite actualizar textos, proyectos, servicios,
 * tecnologías, preguntas frecuentes y enlaces de contacto fácilmente sin alterar
 * los componentes React.
 */

// Información personal y profesional principal
export const personalInfo = {
  name: "Hugo Catalan",
  initials: "HC",
  role: "Desarrollo web",
  jobTitle: "Desarrollador Full Stack",
  locality: "Santa Fe",
  country: "Argentina",
  availabilityText: "Disponible para proyectos",
  tagline: "Desde Santa Fe al mundo.",
  contactLinks: {
    // WhatsApp con mensaje de apertura predeterminado para mayor tasa de conversión
    whatsapp: "https://wa.me/543425661863?text=Hola%20Hugo,%20vi%20tu%20portfolio%20y%20quiero%20hacerte%20una%20consulta%20sobre%20un%20proyecto.",
    email: "mailto:hugo.catalan.dev@gmail.com",
    emailRaw: "hugo.catalan.dev@gmail.com",
    instagram: "https://www.instagram.com/"
  }
};

// Ítems de la barra de navegación principal
export const navItems = [
  { id: "inicio", label: "Inicio", icon: "ph ph-house" },
  { id: "servicios", label: "Servicios", icon: "ph ph-briefcase-metal" },
  { id: "proyectos", label: "Proyectos", icon: "ph ph-stack" },
  { id: "como-trabajo", label: "Cómo trabajo", icon: "ph ph-flow-arrow" },
  { id: "sobre-mi", label: "Sobre mí", icon: "ph ph-user-circle-gear" },
  { id: "faq", label: "Preguntas", icon: "ph ph-question" },
  { id: "contacto", label: "Contacto", icon: "ph ph-paper-plane-tilt" }
];

// Servicios profesionales ofrecidos
export const servicesData = [
  {
    number: "01",
    icon: "WEB",
    title: "Páginas web",
    description: "Una presencia profesional para mostrar quién sos, qué ofrecés y facilitar que tus clientes se pongan en contacto.",
    target: "Profesionales · Emprendimientos"
  },
  {
    number: "02",
    icon: "EMP",
    title: "Sitios institucionales",
    description: "Una web que represente a tu empresa, comunique tus servicios y transmita confianza desde el primer contacto.",
    target: "Empresas · Organizaciones"
  },
  {
    number: "03",
    icon: "</>",
    title: "Desarrollos personalizados",
    description: "Aplicaciones y sistemas web creados para necesidades específicas cuando una página tradicional no alcanza.",
    target: "Procesos · Gestión · Sistemas"
  },
  {
    number: "04",
    icon: "↯",
    title: "Automatización",
    description: "Conexión de herramientas y procesos para ahorrar tiempo, reducir tareas repetitivas y mejorar la organización.",
    target: "Integraciones · Procesos · APIs"
  }
];

// Proyectos de muestra y casos de uso con estructura lista para cargar datos reales
export const projectsData = [
  {
    id: "proj-1",
    number: "01",
    previewClass: "preview-law",
    smallCategory: "ESTUDIO JURÍDICO",
    previewTitle: "Confianza desde el primer contacto.",
    previewAction: "Ver servicios →",
    type: "DEMO · PROFESIONAL",
    title: "Sitio para un profesional independiente",
    description: "Una presencia clara y profesional para presentar servicios, trayectoria y medios de contacto.",
    tags: ["Responsive", "Contacto", "SEO"],
    // Detalles enriquecidos para la ventana modal
    detailedDescription: "Diseño y desarrollo web enfocado en la credibilidad y la conversión de consultas para un estudio profesional. Prioriza la rapidez de carga, la claridad en las áreas de especialización y múltiples llamados a la acción directos por WhatsApp y formulario.",
    clientProblem: "El cliente necesitaba transmitir seriedad institucional y facilitar que personas que buscan asesoramiento jurídico puedan comunicarse en un solo clic desde su teléfono.",
    solutionProvided: "Se estructuró una interfaz elegante con jerarquía visual cuidada, carga ultra rápida en móviles y posicionamiento local optimizado para Santa Fe y zona de influencia.",
    keyFeatures: [
      "Diseño adaptable 100% responsive para celulares y computadoras",
      "Botones directos de contacto por WhatsApp y llamada telefónica",
      "Sección de preguntas frecuentes y áreas de práctica profesional",
      "Optimización de velocidad (Core Web Vitals) y SEO local"
    ],
    techStack: ["React", "CSS Modular", "Vite", "Schema.org"],
    slug: "estudio-juridico",
    simulatedDomain: "catalan-asociados.com",
    demoUrl: "#/proyecto/estudio-juridico",
    githubUrl: "#",
    imagePreviewUrl: "./images/projects/estudio-juridico-preview.webp",
    accentColor: "#c5a059"
  },
  {
    id: "proj-2",
    number: "02",
    previewClass: "preview-company",
    smallCategory: "EMPRESA",
    previewTitle: "Soluciones que construyen futuro.",
    previewAction: "Conocé la empresa →",
    type: "DEMO · INSTITUCIONAL",
    title: "Sitio institucional para una empresa",
    description: "Una web enfocada en presentar la empresa, sus servicios, proyectos y formas de contacto.",
    tags: ["Institucional", "Servicios", "Responsive"],
    detailedDescription: "Portal corporativo creado para comunicar la propuesta de valor, historia, catálogo de servicios y casos de éxito de una empresa en expansión.",
    clientProblem: "La empresa contaba con un sitio desactualizado que no reflejaba el crecimiento de su equipo ni la calidad de sus servicios.",
    solutionProvided: "Desarrollo de una arquitectura web sólida, moderna y dinámica, con diseño sobrio y navegación intuitiva para clientes corporativos.",
    keyFeatures: [
      "Presentación corporativa de alto impacto",
      "Catálogo dinámico de soluciones empresariales",
      "Formulario de contacto y cotización de proyectos",
      "Panel preparado para futuras integraciones y escalabilidad"
    ],
    techStack: ["React", "JavaScript ES6+", "HTML5 Semántico", "CSS3"],
    slug: "sitio-institucional",
    simulatedDomain: "innova-ingenieria.com.ar",
    demoUrl: "#/proyecto/sitio-institucional",
    githubUrl: "#",
    imagePreviewUrl: "./images/projects/sitio-institucional-preview.webp",
    accentColor: "#f59e0b"
  },
  {
    id: "proj-3",
    number: "03",
    previewClass: "preview-sport",
    smallCategory: "ENTRENAMIENTO",
    previewTitle: "Entrená con un plan pensado para vos.",
    previewAction: "Conocé el servicio →",
    type: "DEMO · SERVICIOS",
    title: "Landing para un servicio profesional",
    description: "Una página orientada a explicar una propuesta y convertir visitas en consultas.",
    tags: ["Landing", "CTA", "Conversión"],
    detailedDescription: "Landing page de alta conversión para entrenadores, preparadores físicos o profesionales de la salud que ofrecen planes personalizados y suscripciones.",
    clientProblem: "Dificultad para explicar en redes sociales los detalles de los planes de entrenamiento y pérdida de clientes potenciales por falta de un canal centralizado.",
    solutionProvided: "Landing page directa, visual y dinámica con llamado a la acción enfocado en WhatsApp y agenda de entrevistas iniciales.",
    keyFeatures: [
      "Estructura orientada 100% a la conversión (Storytelling + CTA)",
      "Testimonios de alumnos y tabla comparativa de planes",
      "Integración directa con WhatsApp para iniciar consultas",
      "Animaciones micro-interactivas fluidas"
    ],
    techStack: ["React", "Diseño Dark Tech", "Phosphor Icons", "Mobile First"],
    slug: "landing-entrenamiento",
    simulatedDomain: "catalanperformance.fit",
    demoUrl: "#/proyecto/landing-entrenamiento",
    githubUrl: "#",
    imagePreviewUrl: "./images/projects/landing-entrenamiento-preview.webp",
    accentColor: "#ccff00"
  },
  {
    id: "proj-4",
    number: "04",
    previewClass: "preview-electric",
    smallCategory: "INGENIERÍA & ENERGÍA",
    previewTitle: "Energía inteligente y control absoluto.",
    previewAction: "Ver servicios técnicos →",
    type: "DEMO · INGENIERÍA",
    title: "Portal de ingeniería y servicios eléctricos",
    description: "Sitio corporativo industrial para montajes eléctricos, tableros PLC y obras con estimador de presupuestos interactivo.",
    tags: ["Ingeniería", "Estimador", "Normativa SEC", "Tech UI"],
    detailedDescription: "Portal corporativo y técnico diseñado para una empresa de montajes industriales, ingeniería eléctrica y automatizaciones de alta complejidad. Integra un simulador dinámico de presupuestos según metraje y tipo de obra, presentación técnica de capacidades y cumplimiento estricto de protocolos normativos SEC y de seguridad laboral HSE.",
    clientProblem: "La empresa necesitaba consolidar una presencia digital de alto nivel técnico que transmitiera solvencia para licitaciones y permitiera a clientes corporativos cotizar obras preliminares rápidamente.",
    solutionProvided: "Desarrollo de una interfaz 'Dark Tech Industrial' con acentos en cian eléctrico (#00E5FF), métricas de seguridad laboral, catálogo estructurado de especialidades y un estimador interactivo de proyectos en tiempo real.",
    keyFeatures: [
      "Simulador interactivo de presupuesto técnico en tiempo real",
      "Catálogo especializado de tableros PLC, TTA y subestaciones",
      "Indicadores de cumplimiento normativo SEC y protocolo HSE",
      "Integración de cotizaciones directas por WhatsApp con resumen pre-cargado"
    ],
    techStack: ["React", "CSS Modular", "Simulador Interactivo", "Responsive UI"],
    slug: "electricidad-industrial",
    simulatedDomain: "ss-servicios.com.ar",
    demoUrl: "#/proyecto/electricidad-industrial",
    githubUrl: "#",
    imagePreviewUrl: "./images/projects/electricidad-preview.webp",
    accentColor: "#00e5ff"
  },
  {
    id: "proj-5",
    number: "05",
    previewClass: "preview-tactical",
    smallCategory: "INSTRUCCIÓN & TÁCTICA",
    previewTitle: "Entrenamiento real para resultados reales.",
    previewAction: "Ver cursos y trámites →",
    type: "PROYECTO REAL · CLIENTE",
    title: "Sitio web para instructor de tiro oficial ANMaC",
    description: "Plataforma web con catálogo de cursos, requisitos para Legítimo Usuario (CLU) y conversión directa a WhatsApp.",
    tags: ["Militar Urbano", "ANMaC ITB", "Catálogo", "Conversión"],
    detailedDescription: "Sitio web profesional y comercial desarrollado para Julio Mercado (Instructor de Tiro ITB 7796 certificado por ANMaC). Diseñado con estética táctica moderna 'Dark Tactical' de alto impacto, permite a civiles y miembros de fuerzas de seguridad consultar programas de tiro defensivo, idoneidad de tiro y acompañamiento integral en trámites registrales.",
    clientProblem: "El cliente perdía tiempo explicando reiteradamente los mismos requisitos de CLU por mensajes sueltos y no contaba con una presencia institucional que reflejara su acreditación oficial ANMaC ni ordenara su oferta de cursos.",
    solutionProvided: "Desarrollo de un sitio responsive con tipografía táctica de impacto, asistente paso a paso de trámites para Legítimo Usuario, credenciales verificadas y llamados a la acción directos por WhatsApp optimizados para móviles.",
    keyFeatures: [
      "Catálogo de programas de tiro defensivo, idoneidad y porte oculto",
      "Asistente interactivo de requisitos para Legítimo Usuario (CLU)",
      "Verificación de matrícula oficial ANMaC ITB 7796",
      "Integración directa con WhatsApp con mensajes contextuales por curso"
    ],
    techStack: ["React", "CSS Modular", "Lucide Icons", "Mobile First"],
    slug: "tiro-profesional",
    simulatedDomain: "tiroprofesionalsf.com.ar",
    demoUrl: "#/proyecto/tiro-profesional",
    githubUrl: "#",
    liveUrl: "https://hugocatalan.github.io/tiro-profesional-sf/",
    imagePreviewUrl: "./images/projects/tiro-profesional-preview.webp",
    accentColor: "#ff6b00"
  },
  {
    id: "proj-6",
    number: "06",
    previewClass: "preview-athlete",
    smallCategory: "MARCA PERSONAL & DEPORTE",
    previewTitle: "La técnica no se improvisa, se entrena.",
    previewAction: "Ver programas y asesor →",
    type: "PROYECTO PROPIO · COACHING",
    title: "Landing de levantamiento olímpico y coaching",
    description: "Sitio web de alto impacto para entrenador internacional con estadísticas de autoridad, cursos y asesor de planes.",
    tags: ["Marca Personal", "Autoridad", "CrossFit", "Conversión"],
    detailedDescription: "Plataforma de coaching deportivo y marca personal desarrollada para Hugo Catalán, atleta y entrenador de Levantamiento Olímpico de Pesas con más de 50 medallas internacionales. Presenta métricas de trayectoria deportiva, modalidades de entrenamiento a distancia por videoanálisis, clínicas presenciales para boxes y un asesor interactivo de objetivos para atletas de CrossFit.",
    clientProblem: "Necesidad de canalizar consultas de atletas de todo el país, diferenciar la propuesta de coaching online basada en videoanálisis técnico y transmitir una sólida autoridad respaldada por trayectoria de competición internacional.",
    solutionProvided: "Creación de una landing page rápida, mobile first y con diseño moderno de alto contraste, tira de medallas y logros deportivos verificados, catálogo de seminarios para boxes y cotizador interactivo de programas por WhatsApp.",
    keyFeatures: [
      "Métricas de autoridad deportiva destacadas (50 medallas internacionales)",
      "Asesor interactivo de objetivos y nivel técnico para atletas",
      "Módulos para atletas a distancia, boxes de CrossFit y clases particulares",
      "Llamados a la acción fluidos con mensajes pre-cargados a WhatsApp"
    ],
    techStack: ["React", "CSS Modular", "Mobile First", "Core Web Vitals"],
    slug: "hugo-catalan-coaching",
    simulatedDomain: "hugocatalan.com",
    demoUrl: "#/proyecto/hugo-catalan-coaching",
    githubUrl: "#",
    imagePreviewUrl: "./images/projects/hugo-weightlifting-preview.webp",
    accentColor: "#f59e0b"
  }
];

// Etapas del proceso de trabajo (+ info desplegable)
export const processSteps = [
  {
    id: "step-1",
    number: "01",
    title: "Hablamos",
    summary: "Entendemos qué necesitás, para quién es tu proyecto y qué querés conseguir.",
    detail: "Antes de pensar en código, conozco tu idea, tus objetivos y las necesidades de las personas que van a utilizar el sitio. Así podemos definir qué conviene hacer y qué no hace falta agregar."
  },
  {
    id: "step-2",
    number: "02",
    title: "Planificamos",
    summary: "Definimos estructura, funcionalidades, contenido y alcance antes de desarrollar.",
    detail: "Organizamos las secciones, funcionalidades y contenido del proyecto. También definimos el alcance para que tengas claro qué se va a desarrollar y cómo vamos a avanzar."
  },
  {
    id: "step-3",
    number: "03",
    title: "Desarrollamos",
    summary: "Construyo la solución y validamos el resultado durante el proceso.",
    detail: "Paso el proyecto a la etapa de desarrollo y voy validando el resultado durante el camino. La idea es detectar ajustes a tiempo y llegar a una solución funcional, clara y profesional."
  },
  {
    id: "step-4",
    number: "04",
    title: "Publicamos",
    summary: "Dejamos tu sitio funcionando y preparado para que puedas utilizarlo.",
    detail: "Publicamos el sitio y comprobamos que funcione correctamente. También dejamos preparada la información necesaria para que puedas utilizarlo y continuar con su evolución."
  }
];

// Stack tecnológico del perfil profesional clasificado por categorías para filtros
export const technologies = [
  // Frontend
  { name: "HTML", category: "frontend", iconUrl: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", category: "frontend", iconUrl: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "JavaScript", category: "frontend", iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", category: "frontend", iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
  // Backend & APIs
  { name: "Java", category: "backend", iconUrl: "https://cdn.simpleicons.org/openjdk/FFFFFF" },
  { name: "Spring Boot", category: "backend", iconUrl: "https://cdn.simpleicons.org/springboot/6DB33F" },
  { name: "Python", category: "backend", iconUrl: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "FastAPI", category: "backend", iconUrl: "https://cdn.simpleicons.org/fastapi/009688" },
  // Bases de Datos
  { name: "SQL", category: "database", isPhosphor: true, iconClass: "ph ph-database" },
  { name: "MongoDB", category: "database", iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
  // DevOps y Automatización
  { name: "Git", category: "tools", iconUrl: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Docker", category: "tools", iconUrl: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "n8n", category: "tools", iconUrl: "https://cdn.simpleicons.org/n8n/EA4B71" }
];

// Categorías disponibles para los filtros del stack tecnológico
export const techCategories = [
  { id: "all", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Bases de datos" },
  { id: "tools", label: "DevOps & Herramientas" }
];

// Preguntas frecuentes visuales (FAQ) para resolver dudas de clientes y potenciar GEO/SEO
export const faqData = [
  {
    id: "faq-1",
    question: "¿Cuánto tiempo suele demorar el desarrollo de una web?",
    answer: "El tiempo depende del alcance de cada proyecto. Para una página web profesional o landing page, el tiempo estimado suele ser de entre 1 y 2 semanas. Para sitios institucionales más amplios o desarrollos a medida con bases de datos y flujos específicos, suele oscilar entre 3 y 5 semanas. Antes de iniciar, definimos un cronograma claro para que sepas exactamente cuándo estará lista tu web."
  },
  {
    id: "faq-2",
    question: "¿Cómo es el esquema de pagos para iniciar el proyecto?",
    answer: "Normalmente trabajamos con un esquema transparente en dos etapas: un anticipo del 50% al definir y acordar el alcance del proyecto para reservar disponibilidad e iniciar el desarrollo, y el 50% restante una vez que el sitio está completado, validado por vos y listo para publicar."
  },
  {
    id: "faq-3",
    question: "¿El servicio incluye dominio, hosting y puesta en marcha?",
    answer: "Sí, te asesoro de principio a fin en la elección y registro de tu dominio (.com, .com.ar, etc.) y en la contratación o configuración del servidor de hosting más adecuado. Me encargo de la configuración técnica, certificados SSL de seguridad (HTTPS) y puesta en producción para que no tengas que preocuparte por aspectos técnicos."
  },
  {
    id: "faq-4",
    question: "¿La página se verá bien en celulares y computadoras?",
    answer: "Absolutamente. Todos los sitios se desarrollan con enfoque 'Mobile-First' y 100% responsivo. Esto significa que la web se adapta y luce perfecta tanto en smartphones de cualquier tamaño como en tablets, laptops y pantallas de escritorio."
  },
  {
    id: "faq-5",
    question: "¿Qué ocurre si necesito mantenimiento o cambios después de publicado?",
    answer: "Una vez entregado el sitio contás con un período de garantía para validar su funcionamiento y realizar ajustes menores. Además, ofrezco planes de mantenimiento evolutivo, soporte técnico y actualización periódica para acompañar el crecimiento de tu proyecto en el tiempo."
  }
];
