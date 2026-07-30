import type { SiteContent } from "./types";
import { buildProjects, profileShared, socials, stackItemsByCategory } from "./shared";

export const contentEs: SiteContent = {
  profile: {
    ...profileShared,
    role: "Desarrollador de Software Full-Stack",
    status: "Disponible para proyectos seleccionados",
  },
  nav: [
    { label: "Sobre mí", href: "/#about", type: "anchor" },
    { label: "Stack", href: "/#stack", type: "anchor" },
    { label: "Trabajo", href: "/work", type: "route" },
    { label: "Experiencia", href: "/#experience", type: "anchor" },
    { label: "Contacto", href: "/#contact", type: "anchor" },
  ],
  menuToggle: "Abrir menú",
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
  },
  experience: {
    kicker: "04 — EXPERIENCIA",
    title: "Trayectoria",
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
    }),
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
