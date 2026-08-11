import type { SiteContent } from "./types";
import { buildProjects, profileShared, socials, stackItemsByCategory } from "./shared";

export const contentEs: SiteContent = {
  profile: {
    ...profileShared,
    role: "Desarrollador de Software Full-Stack",
    status: "Disponible para proyectos seleccionados",
  },
  nav: [
    { label: "Sobre mí", href: "/about", type: "route" },
    { label: "Stack", href: "/stack", type: "route" },
    { label: "Trabajo", href: "/work", type: "route" },
    { label: "Experiencia", href: "/experience", type: "route" },
    { label: "Contacto", href: "/#contact", type: "anchor" },
  ],
  menuToggle: "Abrir menú",
  themeToggle: "Cambiar tema",
  heroTicker: [
    "DESARROLLADOR FULL-STACK",
    "BARCELONA, ES",
    "VUE · REACT · NODE",
    "DOCKER + ORACLE CLOUD + CLOUDFLARE",
    "DISPONIBLE PARA NUEVOS PROYECTOS",
  ],
  hero: {
    badge: "DESARROLLADOR FULL-STACK • BARCELONA, ES • ",
    tagline:
      "Diseño y entrego productos de principio a fin — interfaces en Vue y React sobre servicios en Node, PHP y Java, desplegados en infraestructura que gestiono yo mismo.",
    ctaWork: "Ver los proyectos",
    ctaContact: "Hablemos",
  },
  dossier: {
    kicker: "01 — SOBRE MÍ",
    title: "Dossier",
    bio: [
      "Trabajo en todo el stack — desde interfaces en Vue y React hasta servicios en Node, PHP y Java por debajo. Actualmente en Seven Sector Technologies, con experiencia previa en Reset Soluciones.",
      "Tengo un Grado Superior en Desarrollo de Aplicaciones Web y Desarrollo de Aplicaciones Multiplataforma, y gestiono mi propia infraestructura Dockerizada en Oracle Cloud detrás de Cloudflare — me importa tanto cómo se ve un producto como cómo se despliega y escala.",
    ],
    fields: [
      { label: "Nombre", value: "Moisés García Poveda" },
      { label: "Rol", value: "Desarrollador Full-Stack" },
      { label: "Base", value: "Barcelona, ES" },
      { label: "Actualmente", value: "Seven Sector Technologies" },
      { label: "Educación", value: "Grado Superior DAW + DAM" },
      { label: "Estado", value: "En línea" },
    ],
    signalActive: "SEÑAL ACTIVA",
    viewMore: "Ver dossier completo",
  },
  homeWork: {
    kicker: "02 — TRABAJO",
    title: "Trabajos destacados",
    description: "Entregados, desplegados y funcionando ahora mismo — entra a probar cualquiera de ellos.",
    viewAll: "Ver todos los proyectos",
  },
  stack: {
    kicker: "03 — STACK",
    title: "Loadout",
    description:
      "Tecnologías a las que recurro, ordenadas por capa — desde la interfaz hasta la infraestructura sobre la que corre.",
    categories: [
      { id: "frontend", label: "Frontend", items: stackItemsByCategory.frontend },
      { id: "databases", label: "Bases de datos", items: stackItemsByCategory.databases },
      { id: "infra", label: "Infra y DevOps", items: stackItemsByCategory.infra },
      { id: "backend", label: "Backend", items: stackItemsByCategory.backend },
      { id: "tools", label: "Herramientas", items: stackItemsByCategory.tools },
    ],
    viewMore: "Ver stack completo",
  },
  experience: {
    kicker: "04 — EXPERIENCIA",
    title: "Trayectoria",
    viewMore: "Ver trayectoria completa",
    entries: [
      {
        tag: "02",
        status: "Actual",
        current: true,
        org: "Seven Sector Technologies",
        role: "Desarrollador de Software",
        description:
          "Construyo y mantengo plataformas web de principio a fin — UI, APIs y la infraestructura sobre la que corren.",
      },
      {
        tag: "01",
        status: "Anterior",
        current: false,
        org: "Reset Soluciones",
        role: "Desarrollador de Software",
        description:
          "Desarrollé aplicaciones web y multiplataforma, trabajando en todo el ciclo de vida de entrega.",
      },
      {
        tag: "00",
        status: "Educación",
        current: false,
        org: "Grado Superior · DAW y DAM",
        role: "Desarrollo de Aplicaciones Web y Multiplataforma",
        description:
          "Formación reglada en desarrollo de aplicaciones web y desarrollo de aplicaciones multiplataforma / móviles.",
      },
    ],
  },
  contact: {
    kicker: "05 — CONTACTO",
    title: "Construyamos algo",
    description: "Con base en Barcelona, ES — abierto a trabajo remoto y presencial.",
    emailCta: "Escríbeme",
    localTime: "HORA LOCAL",
  },
  work: {
    metaTitle: "Trabajo — Moisés García Poveda",
    metaDescription:
      "Proyectos en producción, construidos y desplegados por Moisés García Poveda, desarrollador de software full-stack con base en Barcelona.",
    backHome: "VOLVER AL INICIO",
    selectedWork: "TRABAJOS DESTACADOS",
    title: "Proyectos en producción",
    description: "Entregados, desplegados y funcionando ahora mismo — entra a probar cualquiera de ellos.",
    categories: {
      webapp: "Apps web",
      unity: "Unity · Videojuegos",
      template: "Plantillas",
    },
    projects: buildProjects({
      "chatbot-movies": {
        title: "CineRoulette",
        description:
          "Un chatbot con estética de terminal que te ayuda a decidir qué ver — pregunta por tu estado de ánimo y compañía, y a partir de ahí lo acota.",
      },
      scenesbeats: {
        title: "ScenesBeats",
        description:
          "Encuentra qué ver según lo que escuchas — conecta Spotify y Letterboxd para recomendaciones con IA basadas en tus gustos musicales.",
      },
      "2kedit": {
        title: "2K Edit",
        description:
          "Un editor de vídeo que funciona íntegramente en el navegador — corta clips, aplica efectos cinematográficos y exporta a MP4, MOV o WebM, sin instalación. Ya se está trabajando en una versión de escritorio descargable.",
      },
      "clothes-template": {
        title: "Plantilla Tienda",
        description:
          "Plantilla de e-commerce de moda minimalista — estética editorial oscura, tienda multi-idioma, pensada para el lanzamiento de una colección de temporada.",
      },
      "restaurant-template": {
        title: "Plantilla Restaurante",
        description:
          "Web para un concepto de alta cocina experimental — tipografía contundente, modo oscuro por defecto, menú, galería y reservas integradas.",
      },
      nightfallpain: {
        title: "Nightfall Pain",
        description:
          "Shooter 2D cyberpunk hecho en Unity, un jugador y cooperativo por red con Mirror Networking — recuperado a partir de un build compilado y publicado en WebGL para jugarlo directo desde el navegador.",
      },
      lastknightofaveron: {
        title: "The Last Knight of Averon",
        description:
          "Action-RPG 2D de fantasía oscura hecho en Unity — combate con espada y hechizos de fuego, exploración y progreso guardado en local — recuperado y publicado en WebGL para jugarlo directo desde el navegador.",
      },
    }),
  },
  aboutPage: {
    metaTitle: "Sobre mí — Moisés García Poveda",
    metaDescription:
      "Desarrollador full-stack en Barcelona con experiencia de punta a punta: interfaces en Vue y React, servicios en Node, PHP y Java, e infraestructura propia en Docker sobre Oracle Cloud y Cloudflare.",
    backHome: "VOLVER AL INICIO",
    kicker: "01 — SOBRE MÍ",
    title: "Dossier completo",
    intro: [
      "Trabajo en todo el stack — desde interfaces en Vue y React hasta servicios en Node, PHP y Java por debajo. Actualmente en Seven Sector Technologies, con experiencia previa en Reset Soluciones.",
      "Tengo un Grado Superior en Desarrollo de Aplicaciones Web y Desarrollo de Aplicaciones Multiplataforma, y gestiono mi propia infraestructura Dockerizada en Oracle Cloud detrás de Cloudflare — me importa tanto cómo se ve un producto como cómo se despliega y escala.",
      "Prefiero entender el problema completo antes de escribir la primera línea de código. Por eso me muevo con la misma soltura entre la interfaz, la API y el servidor que la sirve: ver el sistema de punta a punta es lo que me permite diagnosticar y resolver problemas rápido, en vez de tratar cada capa como una caja negra.",
    ],
    fields: [
      { label: "Nombre", value: "Moisés García Poveda" },
      { label: "Rol", value: "Desarrollador Full-Stack" },
      { label: "Base", value: "Barcelona, ES" },
      { label: "Actualmente", value: "Seven Sector Technologies" },
      { label: "Educación", value: "Grado Superior DAW + DAM" },
      { label: "Estado", value: "En línea" },
    ],
    principles: [
      {
        heading: "De la interfaz a la infraestructura",
        body: "No me detengo en el código de la aplicación — despliego, monitorizo y mantengo la infraestructura sobre la que corre, con contenedores Docker en Oracle Cloud detrás de Cloudflare. Entender el camino completo, del clic del usuario a la respuesta del servidor, es lo que me permite diagnosticar y resolver problemas rápido.",
      },
      {
        heading: "Full-stack por convicción, no por currículum",
        body: "Trabajar con Vue, React, Node, PHP y Java no es una lista de tecnologías coleccionadas — es la consecuencia natural de asumir un producto de principio a fin. Elijo la herramienta según el problema que tengo delante, no al revés.",
      },
      {
        heading: "Cada proyecto, hasta producción",
        body: "Los proyectos que puedes ver en la sección de Trabajo no son demos locales — están desplegados y accesibles ahora mismo, en la misma infraestructura que gestiono para el resto de mi trabajo.",
      },
    ],
    education: {
      heading: "Formación",
      body: "Grado Superior en Desarrollo de Aplicaciones Web (DAW) y Desarrollo de Aplicaciones Multiplataforma (DAM) — una base que cubre tanto el desarrollo de aplicaciones web como el de aplicaciones de escritorio y móviles, y que sostiene mi forma de trabajar en todas las capas de un producto.",
    },
  },
  stackPage: {
    metaTitle: "Stack — Moisés García Poveda",
    metaDescription:
      "Tecnologías con las que trabajo a diario, de la interfaz a la infraestructura: Vue, React, Node, PHP, Java, Docker, Oracle Cloud y Cloudflare.",
    backHome: "VOLVER AL INICIO",
    kicker: "03 — STACK",
    title: "Loadout completo",
    description:
      "Tecnologías a las que recurro, ordenadas por capa — desde la interfaz hasta la infraestructura sobre la que corre, con el motivo por el que las elijo.",
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: stackItemsByCategory.frontend,
        description:
          "Donde vive la experiencia de usuario. Vue y React para construir la interfaz; Tailwind y Framer Motion le dan forma y movimiento sin salir del navegador.",
      },
      {
        id: "databases",
        label: "Bases de datos",
        items: stackItemsByCategory.databases,
        description:
          "La persistencia se elige según la forma de los datos: MongoDB cuando el esquema es flexible, MySQL y PostgreSQL cuando la relación entre entidades importa tanto como los datos en sí.",
      },
      {
        id: "infra",
        label: "Infra y DevOps",
        items: stackItemsByCategory.infra,
        description:
          "Gestiono mi propia infraestructura: contenedores Docker corriendo en Oracle Cloud, con Cloudflare por delante para CDN, seguridad y el despliegue de los proyectos que ves en Trabajo.",
      },
      {
        id: "backend",
        label: "Backend",
        items: stackItemsByCategory.backend,
        description:
          "Node, PHP y Java cubren la lógica de servidor y las APIs; Sockets entra en juego cuando el producto necesita comunicación en tiempo real.",
      },
      {
        id: "tools",
        label: "Herramientas",
        items: stackItemsByCategory.tools,
        description:
          "Git para el control de versiones del día a día, Android Studio para desarrollo móvil nativo y Unity cuando el proyecto pide un motor gráfico.",
      },
    ],
  },
  experiencePage: {
    metaTitle: "Experiencia — Moisés García Poveda",
    metaDescription:
      "Trayectoria profesional de Moisés García Poveda como desarrollador full-stack, de la formación en DAW y DAM a su rol actual en Seven Sector Technologies.",
    backHome: "VOLVER AL INICIO",
    kicker: "04 — EXPERIENCIA",
    title: "Trayectoria completa",
    description: "Cada etapa, con el rol, el contexto y las tecnologías con las que trabajé.",
    entries: [
      {
        tag: "02",
        status: "Actual",
        current: true,
        org: "Seven Sector Technologies",
        role: "Desarrollador de Software",
        description:
          "Construyo y mantengo plataformas web de principio a fin — UI, APIs y la infraestructura sobre la que corren.",
        highlights: [
          "Construyo y mantengo plataformas web de principio a fin, desde la interfaz hasta la API.",
          "Gestiono el despliegue y la infraestructura sobre la que corren los proyectos, sin depender de un equipo de DevOps separado.",
          "Trabajo directamente con el stack de producción: Docker en Oracle Cloud, detrás de Cloudflare.",
        ],
        stack: ["Vue.js", "Node.js", "Docker", "Oracle Cloud", "Cloudflare"],
      },
      {
        tag: "01",
        status: "Anterior",
        current: false,
        org: "Reset Soluciones",
        role: "Desarrollador de Software",
        description:
          "Desarrollé aplicaciones web y multiplataforma, trabajando en todo el ciclo de vida de entrega.",
        highlights: [
          "Desarrollé aplicaciones web y multiplataforma de principio a fin.",
          "Participé en todo el ciclo de vida de entrega, desde el desarrollo hasta la puesta en producción.",
        ],
        stack: ["PHP", "JavaScript", "MySQL"],
      },
      {
        tag: "00",
        status: "Educación",
        current: false,
        org: "Grado Superior · DAW y DAM",
        role: "Desarrollo de Aplicaciones Web y Multiplataforma",
        description:
          "Formación reglada en desarrollo de aplicaciones web y desarrollo de aplicaciones multiplataforma / móviles.",
        highlights: [
          "Formación reglada en desarrollo de aplicaciones web (DAW).",
          "Formación reglada en desarrollo de aplicaciones multiplataforma y móviles (DAM).",
        ],
        stack: ["HTML", "CSS", "Java", "Android Studio"],
      },
    ],
  },
  footer: {
    builtWith: "HECHO CON NEXT.JS + TAILWIND — DESPLEGADO EN CLOUDFLARE",
    top: "ARRIBA",
  },
  boot: [
    "PORTFOLIO_OS v2.6 — SECUENCIA DE ARRANQUE",
    "MONTANDO INTERFAZ... OK",
    "CARGANDO PERFIL: M.GARCIA_POVEDA... OK",
    "ESTADO: LISTO",
  ],
  socials,
};
