import type { SiteContent } from "./types";
import { buildProjects, profileShared, socials, stackItemsByCategory } from "./shared";

export const contentEs: SiteContent = {
  profile: {
    ...profileShared,
    role: "Desarrollador full-stack",
    status: "Disponible para proyectos nuevos",
  },
  nav: [
    { label: "Trabajo", href: "/work", type: "route" },
    { label: "Sobre mí", href: "/about", type: "route" },
    { label: "Stack", href: "/stack", type: "route" },
    { label: "Experiencia", href: "/experience", type: "route" },
    { label: "Contacto", href: "/#contact", type: "anchor" },
  ],
  menuOpen: "Abrir menú",
  menuClose: "Cerrar menú",
  themeToggle: "Cambiar tema",
  ui: {
    skipToContent: "Saltar al contenido",
    visit: "Visitar",
    viewCode: "Código",
    codeLabel: "Código de {title} en GitHub",
    opensInNewTab: "se abre en una pestaña nueva",
    copyEmail: "Copiar email",
    emailCopied: "¡Copiado!",
    copyFailed: "No se pudo copiar",
    backToTop: "Volver arriba",
    language: "Idioma",
  },
  hero: {
    greeting: "¡Hola! Soy",
    tagline:
      "Hago *webs completas*: lo que se ve en pantalla (Vue, React), lo que corre por detrás (Node, PHP, Java) y el servidor donde viven. Ese último también lo monto y lo llevo yo.",
    ctaWork: "Ver proyectos",
    ctaContact: "Escríbeme",
    scrollNote: "mira lo que he hecho",
  },
  about: {
    title: "Sobre mí",
    bio: [
      "Soy Moisés y trabajo desde Barcelona. Ahora estoy en Seven Sector Technologies y antes pasé por Reset Soluciones. Toco todas las capas: pantallas en Vue y React, y por debajo servicios en Node, PHP y Java.",
      "Tengo el Grado Superior de DAW y DAM. Mis proyectos propios están en Docker, sobre un servidor de Oracle Cloud con Cloudflare por delante. Me importa tanto que *se vea bien* como que *aguante* cuando entra gente.",
    ],
    facts: [
      { label: "Base", value: "Barcelona, ES" },
      { label: "Ahora", value: "Seven Sector Technologies" },
      { label: "Antes", value: "Reset Soluciones" },
      { label: "Estudios", value: "Grado Superior DAW + DAM" },
    ],
    viewMore: "Más sobre mí",
  },
  homeWork: {
    title: "Trabajos destacados",
    note: "empieza por aquí",
    description: "Seis proyectos publicados y funcionando ahora mismo. Entra y pruébalos.",
    viewAll: "Ver todos los proyectos",
  },
  stack: {
    title: "Con qué trabajo",
    description: "Lo que uso en cada capa, de la pantalla al servidor.",
    categories: [
      { id: "frontend", label: "Frontend", items: stackItemsByCategory.frontend },
      { id: "databases", label: "Bases de datos", items: stackItemsByCategory.databases },
      { id: "infra", label: "Infra y DevOps", items: stackItemsByCategory.infra },
      { id: "backend", label: "Backend", items: stackItemsByCategory.backend },
      { id: "tools", label: "Herramientas", items: stackItemsByCategory.tools },
    ],
    viewMore: "Ver el stack completo",
  },
  experience: {
    title: "Experiencia",
    viewMore: "Ver la experiencia completa",
    entries: [
      {
        status: "Actual",
        current: true,
        org: "Seven Sector Technologies",
        role: "Desarrollador de software",
        description:
          "Construyo y mantengo plataformas web enteras: la interfaz, las APIs y la infraestructura donde corren.",
      },
      {
        status: "Anterior",
        current: false,
        org: "Reset Soluciones",
        role: "Desarrollador de software",
        description:
          "Desarrollé aplicaciones web y multiplataforma, y participé en todo el ciclo, del desarrollo a la entrega.",
      },
      {
        status: "Formación",
        current: false,
        org: "Grado Superior · DAW y DAM",
        role: "Desarrollo de Aplicaciones Web y Multiplataforma",
        description:
          "Formación reglada en aplicaciones web (DAW) y en aplicaciones multiplataforma y móviles (DAM).",
      },
    ],
  },
  contact: {
    title: "¿Hablamos?",
    description: "Estoy en Barcelona. Trabajo en remoto o en persona.",
    emailCta: "Escríbeme",
    localTime: "En Barcelona ahora son las",
  },
  work: {
    metaTitle: "Proyectos — Moisés García Poveda",
    metaDescription:
      "Proyectos publicados y funcionando, hechos por Moisés García Poveda, desarrollador full-stack en Barcelona.",
    backHome: "Volver al inicio",
    title: "Todos los proyectos",
    description: "Todo lo que tengo publicado. Entra y pruébalo.",
    filterLabel: "Filtrar por tipo",
    filterAll: "Todos",
    countOne: "{n} proyecto",
    countMany: "{n} proyectos",
    categories: {
      client: "Clientes",
      webapp: "Apps web",
      unity: "Videojuegos",
      template: "Plantillas",
    },
    tags: {
      client: "Cliente real",
      webapp: "App web",
      unity: "Videojuego",
      template: "Plantilla",
    },
    projects: buildProjects({
      scenesbeats: {
        title: "ScenesBeats",
        description:
          "Encuentra qué ver según lo que escuchas. Conectas Spotify y Letterboxd y te recomienda películas con IA a partir de tus gustos musicales.",
      },
      lastknightofaveron: {
        title: "The Last Knight of Averon",
        description:
          "Action-RPG 2D de fantasía oscura hecho con Unity: combate con espada y hechizos de fuego, exploración y progreso guardado en local. Lo recuperé de un build compilado y lo publiqué en WebGL para jugarlo en el navegador.",
      },
      "sessio-continua": {
        title: "Sessió Contínua",
        description:
          "Toda la cartelera de cines de Barcelona en una sola página: 28 salas, horarios, versión y el precio real de cada sesión. Con filtros, buscador y plano de la ciudad.",
      },
      adictalia: {
        title: "Adictalia Control Center",
        description:
          "Web corporativa de un servicio de tratamiento de adicciones online y apoyo a la familia. Explica el programa, los servicios, los precios y el proceso, y deja contactar por teléfono, WhatsApp o formulario.",
      },
      "2kedit": {
        title: "2K Edit",
        description:
          "Un editor de vídeo que funciona entero en el navegador. Cortas clips, les pones efectos de cine y exportas a MP4, MOV o WebM, sin instalar nada. Ya estoy trabajando en una versión de escritorio descargable.",
      },
      nightfallpain: {
        title: "Nightfall Pain",
        description:
          "Shooter 2D cyberpunk hecho con Unity, para uno o dos jugadores en red con Mirror Networking. Lo recuperé de un build compilado y lo publiqué en WebGL para jugarlo directo en el navegador.",
      },
      mado: {
        title: "Mado",
        description:
          "Una pestaña nueva para Chrome a tu medida: pones tu propio fondo y cuadros con imagen que abren tus webs, y los colocas y redimensionas arrastrando. Sin cuentas ni rastreo.",
      },
      "chatbot-movies": {
        title: "CineRoulette",
        description:
          "Un chatbot con pinta de terminal que te ayuda a decidir qué ver. Te pregunta qué ánimo tienes y con quién estás, y va acotando hasta dar con algo.",
      },
      "clothes-template": {
        title: "Plantilla Tienda",
        description:
          "Plantilla de tienda online de moda minimalista: estética editorial oscura, tienda en varios idiomas, pensada para lanzar una colección de temporada.",
      },
      "restaurant-template": {
        title: "Plantilla Restaurante",
        description:
          "Web para un restaurante de alta cocina experimental: tipografía contundente, modo oscuro por defecto, carta, galería y reservas integradas.",
      },
    }),
  },
  aboutPage: {
    metaTitle: "Sobre mí — Moisés García Poveda",
    metaDescription:
      "Desarrollador full-stack en Barcelona: interfaces en Vue y React, servicios en Node, PHP y Java, e infraestructura propia en Docker sobre Oracle Cloud y Cloudflare.",
    backHome: "Volver al inicio",
    title: "Sobre mí",
    intro: [
      "Soy Moisés y trabajo desde Barcelona. Ahora estoy en Seven Sector Technologies y antes pasé por Reset Soluciones. Toco todas las capas: pantallas en Vue y React, y por debajo servicios en Node, PHP y Java.",
      "Tengo el Grado Superior de DAW y DAM. Mis proyectos propios están en Docker, sobre un servidor de Oracle Cloud con Cloudflare por delante. Me importa tanto que *se vea bien* como que *aguante* cuando entra gente.",
      "Prefiero entender el problema entero antes de escribir la primera línea. Por eso me muevo igual de cómodo entre la interfaz, la API y el servidor que las sirve: ver el sistema completo me ayuda a encontrar los fallos rápido, en vez de tratar cada capa como una caja negra.",
    ],
    principles: [
      {
        heading: "Entender todo el camino",
        body: "Desde que alguien hace clic hasta que el servidor responde. Despliego y mantengo yo mismo la infraestructura (Docker en Oracle Cloud, con Cloudflare delante), así que cuando algo falla sé por dónde empezar a mirar.",
      },
      {
        heading: "La herramienta la pone el problema",
        body: "Vue, React, Node, PHP y Java los uso según lo que pida cada proyecto. Primero el problema, luego la herramienta.",
      },
      {
        heading: "Lo que ves está en marcha",
        body: "Los proyectos de la sección Trabajo no son demos que viven en mi ordenador. Están publicados y funcionando ahora mismo, en la misma infraestructura que uso para todo lo demás.",
      },
    ],
    education: {
      heading: "Formación",
      body: "Grado Superior en Desarrollo de Aplicaciones Web (DAW) y en Desarrollo de Aplicaciones Multiplataforma (DAM). Cubre tanto la web como las aplicaciones de escritorio y móviles, y es la base de cómo trabajo en todas las capas.",
    },
  },
  stackPage: {
    metaTitle: "Stack — Moisés García Poveda",
    metaDescription:
      "Tecnologías con las que trabajo a diario, de la interfaz a la infraestructura: Vue, React, Node, PHP, Java, Docker, Oracle Cloud y Cloudflare.",
    backHome: "Volver al inicio",
    title: "Con qué trabajo",
    description: "Lo que uso en cada capa, de la pantalla al servidor, y por qué.",
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: stackItemsByCategory.frontend,
        description:
          "Donde vive la experiencia de usuario. Vue y React para la interfaz; Tailwind y Framer Motion para darle forma y movimiento.",
      },
      {
        id: "databases",
        label: "Bases de datos",
        items: stackItemsByCategory.databases,
        description:
          "Elijo según la forma de los datos: MongoDB cuando el esquema es flexible, MySQL o PostgreSQL cuando importan las relaciones entre entidades.",
      },
      {
        id: "infra",
        label: "Infra y DevOps",
        items: stackItemsByCategory.infra,
        description:
          "Llevo mi propia infraestructura: contenedores Docker en Oracle Cloud, con Cloudflare por delante para CDN y seguridad. Ahí están desplegados los proyectos de Trabajo.",
      },
      {
        id: "backend",
        label: "Backend",
        items: stackItemsByCategory.backend,
        description:
          "Node, PHP y Java para la lógica de servidor y las APIs. Sockets cuando hace falta tiempo real.",
      },
      {
        id: "tools",
        label: "Herramientas",
        items: stackItemsByCategory.tools,
        description:
          "Git para el control de versiones, Android Studio para móvil nativo y Unity cuando el proyecto pide un motor gráfico.",
      },
    ],
  },
  experiencePage: {
    metaTitle: "Experiencia — Moisés García Poveda",
    metaDescription:
      "Experiencia de Moisés García Poveda como desarrollador full-stack, de la formación en DAW y DAM a su puesto actual en Seven Sector Technologies.",
    backHome: "Volver al inicio",
    title: "Experiencia completa",
    description: "Cada etapa, con su rol y las tecnologías que usé.",
    entries: [
      {
        status: "Actual",
        current: true,
        org: "Seven Sector Technologies",
        role: "Desarrollador de software",
        description:
          "Construyo y mantengo plataformas web enteras: la interfaz, las APIs y la infraestructura donde corren.",
        highlights: [
          "Construyo y mantengo plataformas web, de la interfaz a la API.",
          "Me encargo del despliegue y la infraestructura de los proyectos, sin un equipo de DevOps aparte.",
          "Trabajo directamente con el stack de producción: Docker en Oracle Cloud, detrás de Cloudflare.",
        ],
        stack: ["Vue.js", "Node.js", "Docker", "Oracle Cloud", "Cloudflare"],
      },
      {
        status: "Anterior",
        current: false,
        org: "Reset Soluciones",
        role: "Desarrollador de software",
        description:
          "Desarrollé aplicaciones web y multiplataforma, y participé en todo el ciclo, del desarrollo a la entrega.",
        highlights: [
          "Desarrollé aplicaciones web y multiplataforma de principio a fin.",
          "Participé en todo el ciclo de entrega, del desarrollo a producción.",
        ],
        stack: ["PHP", "JavaScript", "MySQL"],
      },
      {
        status: "Formación",
        current: false,
        org: "Grado Superior · DAW y DAM",
        role: "Desarrollo de Aplicaciones Web y Multiplataforma",
        description:
          "Formación reglada en aplicaciones web (DAW) y en aplicaciones multiplataforma y móviles (DAM).",
        highlights: [
          "Formación reglada en desarrollo de aplicaciones web (DAW).",
          "Formación reglada en desarrollo de aplicaciones multiplataforma y móviles (DAM).",
        ],
        stack: ["HTML", "CSS", "Java", "Android Studio"],
      },
    ],
  },
  footer: {
    note: "Hecho en Barcelona con Next.js y Tailwind. Desplegado en Cloudflare.",
    top: "Volver arriba",
  },
  socials,
};
