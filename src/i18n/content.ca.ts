import type { SiteContent } from "./types";
import { buildProjects, profileShared, socials, stackItemsByCategory } from "./shared";

export const contentCa: SiteContent = {
  profile: {
    ...profileShared,
    role: "Desenvolupador full-stack",
  },
  nav: [
    { label: "Feina", href: "/work" },
    { label: "Sobre mi", href: "/about" },
    { label: "Stack", href: "/stack" },
    { label: "Experiència", href: "/experience" },
    { label: "Contacte", href: "/contact" },
  ],
  menuOpen: "Obre el menú",
  menuClose: "Tanca el menú",
  themeToggle: "Canvia el tema",
  ui: {
    skipToContent: "Saltar al contingut",
    visit: "Visitar",
    viewCode: "Codi",
    codeLabel: "Codi de {title} a GitHub",
    opensInNewTab: "s'obre en una pestanya nova",
    copyEmail: "Copiar correu",
    emailCopied: "Copiat!",
    copyFailed: "No s'ha pogut copiar",
    backToTop: "Tornar a dalt",
    language: "Idioma",
    emailMe: "Enviar un correu",
    home: "Inici",
    previewAlt: "Vista prèvia de {title}",
  },
  hero: {
    statement: "Webs completes,\n*de la interfície*\n*al servidor.*",
    tagline:
      "Construeixo la interfície (Vue, React), els serveis que corren per darrere (Node, PHP, Java) i la infraestructura on es desplega, que també gestiono jo.",
    ctaWork: "Veure projectes",
    ctaContact: "Escriu-me",
  },
  about: {
    title: "Sobre mi",
    bio: [
      "Sóc el Moisés i treballo des de Barcelona. Ara sóc a Seven Sector Technologies i abans vaig passar per Reset Soluciones. Treballo a totes les capes: interfícies en Vue i React, i per sota serveis en Node, PHP i Java.",
      "Tinc el Grau Superior de DAW i DAM. Els meus projectes propis són a Docker, sobre un servidor d'Oracle Cloud amb Cloudflare al davant. M'importa tant com es veu un producte com la manera en què es desplega i escala.",
    ],
    facts: [
      { label: "Base", value: "Barcelona, ES" },
      { label: "Ara", value: "Seven Sector Technologies" },
      { label: "Abans", value: "Reset Soluciones" },
      { label: "Estudis", value: "Grau Superior DAW + DAM" },
    ],
    viewMore: "Més sobre mi",
  },
  homeWork: {
    title: "Feina destacada",
    description: "Sis projectes publicats i funcionant ara mateix. Pots entrar i provar-los.",
    viewAll: "Veure tots els projectes",
  },
  stack: {
    title: "Amb què treballo",
    description: "El que faig servir a cada capa, de la pantalla al servidor.",
    categories: [
      { id: "frontend", label: "Frontend", items: stackItemsByCategory.frontend },
      { id: "databases", label: "Bases de dades", items: stackItemsByCategory.databases },
      { id: "infra", label: "Infra i DevOps", items: stackItemsByCategory.infra },
      { id: "backend", label: "Backend", items: stackItemsByCategory.backend },
      { id: "tools", label: "Eines", items: stackItemsByCategory.tools },
    ],
    viewMore: "Veure el stack complet",
  },
  experience: {
    title: "Experiència",
    viewMore: "Veure l'experiència completa",
    entries: [
      {
        status: "Actual",
        current: true,
        org: "Seven Sector Technologies",
        role: "Desenvolupador de programari",
        description:
          "Construeixo i mantinc plataformes web senceres: la interfície, les APIs i la infraestructura on corren.",
      },
      {
        status: "Anterior",
        current: false,
        org: "Reset Soluciones",
        role: "Desenvolupador de programari",
        description:
          "Vaig desenvolupar aplicacions web i multiplataforma, i vaig participar en tot el cicle, del desenvolupament al lliurament.",
      },
      {
        status: "Formació",
        current: false,
        org: "Grau Superior · DAW i DAM",
        role: "Desenvolupament d'Aplicacions Web i Multiplataforma",
        description:
          "Formació reglada en aplicacions web (DAW) i en aplicacions multiplataforma i mòbils (DAM).",
      },
    ],
  },
  contact: {
    title: "Parlem?",
    description: "Estic a Barcelona. Treballo en remot o en persona.",
    emailCta: "Escriu-me",
  },
  work: {
    metaTitle: "Projectes — Moisés García",
    metaDescription:
      "Projectes publicats i funcionant, fets per Moisés García, desenvolupador full-stack a Barcelona.",
    backHome: "Tornar a l'inici",
    title: "Tots els projectes",
    description: "Tot el que tinc publicat. Entra i prova-ho.",
    filterLabel: "Filtrar per tipus",
    filterAll: "Tots",
    countOne: "{n} projecte",
    countMany: "{n} projectes",
    categories: {
      client: "Clients",
      webapp: "Apps web",
      unity: "Videojocs",
      template: "Plantilles",
    },
    tags: {
      client: "Client real",
      webapp: "App web",
      unity: "Videojoc",
      template: "Plantilla",
    },
    projects: buildProjects({
      scenesbeats: {
        title: "ScenesBeats",
        description:
          "Troba què veure segons el que escoltes. Connectes Spotify i Letterboxd i et recomana pel·lícules amb IA a partir dels teus gustos musicals.",
      },
      lastknightofaveron: {
        title: "The Last Knight of Averon",
        description:
          "Action-RPG 2D de fantasia fosca fet amb Unity: combat amb espasa i encanteris de foc, exploració i progrés desat en local. El vaig recuperar d'un build compilat i el vaig publicar en WebGL per jugar-hi al navegador.",
      },
      "sessio-continua": {
        title: "Sessió Contínua",
        description:
          "Tota la cartellera dels cinemes de Barcelona en una sola pàgina: 28 sales, horaris, versió i el preu real de cada sessió. Amb filtres, cercador i plànol de la ciutat.",
      },
      adictalia: {
        title: "Adictalia Control Center",
        description:
          "Web corporativa d'un servei de tractament d'addiccions en línia i suport a la família. Explica el programa, els serveis, els preus i el procés, i permet contactar per telèfon, WhatsApp o formulari.",
      },
      "2kedit": {
        title: "2K Edit",
        description:
          "Un editor de vídeo que funciona sencer al navegador. Retalles clips, hi poses efectes de cinema i exportes a MP4, MOV o WebM, sense instal·lar res. Ja estic treballant en una versió d'escriptori descarregable.",
      },
      nightfallpain: {
        title: "Nightfall Pain",
        description:
          "Shooter 2D cyberpunk fet amb Unity, per a un o dos jugadors en xarxa amb Mirror Networking. El vaig recuperar d'un build compilat i el vaig publicar en WebGL per jugar-hi directament al navegador.",
      },
      mado: {
        title: "Mado",
        description:
          "Una pestanya nova per a Chrome a la teva mida: poses el teu propi fons i quadres amb imatge que obren les teves webs, i els col·loques i redimensiones arrossegant. Sense comptes ni rastreig.",
      },
      "chatbot-movies": {
        title: "CineRoulette",
        description:
          "Un chatbot amb estètica de terminal que t'ajuda a decidir què veure. Et pregunta quin estat d'ànim tens i amb qui estàs, i va concretant fins a trobar alguna cosa.",
      },
      "clothes-template": {
        title: "Plantilla Botiga",
        description:
          "Plantilla de botiga en línia de moda minimalista: estètica editorial fosca, botiga en diversos idiomes, pensada per llançar una col·lecció de temporada.",
      },
      "restaurant-template": {
        title: "Plantilla Restaurant",
        description:
          "Web per a un restaurant d'alta cuina experimental: tipografia contundent, mode fosc per defecte, carta, galeria i reserves integrades.",
      },
    }),
  },
  aboutPage: {
    metaTitle: "Sobre mi — Moisés García",
    metaDescription:
      "Desenvolupador full-stack a Barcelona: interfícies en Vue i React, serveis en Node, PHP i Java, i infraestructura pròpia en Docker sobre Oracle Cloud i Cloudflare.",
    backHome: "Tornar a l'inici",
    title: "Sobre mi",
    intro: [
      "Sóc el Moisés i treballo des de Barcelona. Ara sóc a Seven Sector Technologies i abans vaig passar per Reset Soluciones. Treballo a totes les capes: interfícies en Vue i React, i per sota serveis en Node, PHP i Java.",
      "Tinc el Grau Superior de DAW i DAM. Els meus projectes propis són a Docker, sobre un servidor d'Oracle Cloud amb Cloudflare al davant. M'importa tant com es veu un producte com la manera en què es desplega i escala.",
      "Prefereixo entendre el problema sencer abans d'escriure la primera línia. Per això em moc igual de còmode entre la interfície, l'API i el servidor que les serveix: veure el sistema complet m'ajuda a trobar els errors ràpid, en lloc de tractar cada capa com una caixa negra.",
    ],
    principles: [
      {
        heading: "Entendre tot el camí",
        body: "Des que algú fa clic fins que el servidor respon. Desplego i mantinc jo mateix la infraestructura (Docker a Oracle Cloud, amb Cloudflare al davant), així que quan alguna cosa falla sé per on començar a mirar.",
      },
      {
        heading: "L'eina la posa el problema",
        body: "Vue, React, Node, PHP i Java els faig servir segons el que demani cada projecte. Primer el problema, després l'eina.",
      },
      {
        heading: "El que veus està en marxa",
        body: "Els projectes de la secció Feina estan publicats i funcionant ara mateix, a la mateixa infraestructura que faig servir per a la resta del meu treball.",
      },
    ],
    education: {
      heading: "Formació",
      body: "Grau Superior en Desenvolupament d'Aplicacions Web (DAW) i en Desenvolupament d'Aplicacions Multiplataforma (DAM). Cobreix tant la web com les aplicacions d'escriptori i mòbils, i és la base de com treballo a totes les capes.",
    },
  },
  stackPage: {
    metaTitle: "Stack — Moisés García",
    metaDescription:
      "Tecnologies amb què treballo cada dia, de la interfície a la infraestructura: Vue, React, Node, PHP, Java, Docker, Oracle Cloud i Cloudflare.",
    backHome: "Tornar a l'inici",
    title: "Amb què treballo",
    description: "El que faig servir a cada capa, de la pantalla al servidor, i per què.",
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: stackItemsByCategory.frontend,
        description:
          "On viu l'experiència d'usuari. Vue i React per a la interfície; Tailwind i Framer Motion per donar-li forma i moviment.",
      },
      {
        id: "databases",
        label: "Bases de dades",
        items: stackItemsByCategory.databases,
        description:
          "Trio segons la forma de les dades: MongoDB quan l'esquema és flexible, MySQL o PostgreSQL quan importen les relacions entre entitats.",
      },
      {
        id: "infra",
        label: "Infra i DevOps",
        items: stackItemsByCategory.infra,
        description:
          "Porto la meva pròpia infraestructura: contenidors Docker a Oracle Cloud, amb Cloudflare al davant per a CDN i seguretat. Allà estan desplegats els projectes de Feina.",
      },
      {
        id: "backend",
        label: "Backend",
        items: stackItemsByCategory.backend,
        description:
          "Node, PHP i Java per a la lògica de servidor i les APIs. Sockets quan cal temps real.",
      },
      {
        id: "tools",
        label: "Eines",
        items: stackItemsByCategory.tools,
        description:
          "Git per al control de versions, Android Studio per a mòbil natiu i Unity quan el projecte demana un motor gràfic.",
      },
    ],
  },
  experiencePage: {
    metaTitle: "Experiència — Moisés García",
    metaDescription:
      "Experiència de Moisés García com a desenvolupador full-stack, de la formació en DAW i DAM al seu lloc actual a Seven Sector Technologies.",
    backHome: "Tornar a l'inici",
    title: "Experiència completa",
    description: "Cada etapa, amb el seu rol i les tecnologies que vaig fer servir.",
    entries: [
      {
        status: "Actual",
        current: true,
        org: "Seven Sector Technologies",
        role: "Desenvolupador de programari",
        description:
          "Construeixo i mantinc plataformes web senceres: la interfície, les APIs i la infraestructura on corren.",
        highlights: [
          "Construeixo i mantinc plataformes web, de la interfície a l'API.",
          "M'encarrego del desplegament i la infraestructura dels projectes, sense un equip de DevOps a part.",
          "Treballo directament amb l'stack de producció: Docker a Oracle Cloud, darrere de Cloudflare.",
        ],
        stack: ["Vue.js", "Node.js", "Docker", "Oracle Cloud", "Cloudflare"],
      },
      {
        status: "Anterior",
        current: false,
        org: "Reset Soluciones",
        role: "Desenvolupador de programari",
        description:
          "Vaig desenvolupar aplicacions web i multiplataforma, i vaig participar en tot el cicle, del desenvolupament al lliurament.",
        highlights: [
          "Vaig desenvolupar aplicacions web i multiplataforma de principi a fi.",
          "Vaig participar en tot el cicle de lliurament, del desenvolupament a producció.",
        ],
        stack: ["PHP", "JavaScript", "MySQL"],
      },
      {
        status: "Formació",
        current: false,
        org: "Grau Superior · DAW i DAM",
        role: "Desenvolupament d'Aplicacions Web i Multiplataforma",
        description:
          "Formació reglada en aplicacions web (DAW) i en aplicacions multiplataforma i mòbils (DAM).",
        highlights: [
          "Formació reglada en desenvolupament d'aplicacions web (DAW).",
          "Formació reglada en desenvolupament d'aplicacions multiplataforma i mòbils (DAM).",
        ],
        stack: ["HTML", "CSS", "Java", "Android Studio"],
      },
    ],
  },
  contactPage: {
    metaTitle: "Contacte — Moisés García",
    metaDescription:
      "Escriu a Moisés García, desenvolupador full-stack a Barcelona. Treballa en remot o en persona.",
    backHome: "Tornar a l'inici",
    title: "Contacte",
    description:
      "Sóc a Barcelona i treballo en remot o en persona. Escriu-me per correu o troba'm a GitHub i LinkedIn.",
    channels: { email: "Correu", github: "GitHub", linkedin: "LinkedIn", base: "Base" },
    baseValue: "Barcelona, ES · remot o presencial",
  },
  contactForm: {
    title: "Envia'm un missatge",
    description: "Explica'm què necessites. El missatge m'arriba directament al correu.",
    fields: { name: "Nom", email: "Correu", topic: "Motiu", message: "Missatge" },
    placeholders: {
      name: "Com et dius",
      email: "tu@correu.com",
      message: "Explica'm en què et puc ajudar",
    },
    topics: {
      project: "Projecte",
      collaboration: "Col·laboració",
      job: "Oferta de feina",
      other: "Altres",
    },
    counter: "{n} / {max}",
    consent: "Accepto que s'utilitzi el meu correu només per respondre aquest missatge.",
    privacy:
      "El missatge s'envia per correu mitjançant un servei d'enviament. No es desa en aquesta web.",
    submit: "Enviar missatge",
    sending: "Enviant…",
    errors: {
      name: "Escriu el teu nom (mínim 2 lletres).",
      email: "Escriu un correu vàlid.",
      message: "El missatge ha de tenir almenys 10 caràcters.",
      consent: "Necessito que ho acceptis per poder respondre't.",
      summary: "Revisa els camps marcats.",
      generic: "No s'ha pogut enviar el missatge. Torna-ho a provar d'aquí a uns minuts.",
      rate: "Has enviat diversos missatges seguits. Espera uns minuts i torna-ho a provar.",
      unavailable: "El formulari no està disponible ara mateix.",
      network: "No hi ha connexió. Comprova la teva xarxa i torna-ho a provar.",
    },
    fallback: "Si ho prefereixes, escriu-me directament:",
    fallbackCta: "Obrir el meu correu amb el missatge",
    success: {
      title: "Missatge enviat",
      text: "Gràcies, {name}. El teu missatge ha arribat i et contestaré per correu a {email}.",
      again: "Enviar un altre missatge",
    },
  },
  notFound: {
    metaTitle: "Pàgina no trobada — Moisés García",
    title: "Pàgina no trobada",
    description: "L'adreça que busques no existeix o ha canviat de lloc.",
    cta: "Tornar a l'inici",
  },
  seo: {
    title: "Moisés García — Desenvolupador full-stack a Barcelona",
    description:
      "Portafoli de Moisés García, desenvolupador full-stack a Barcelona. Interfícies en Vue i React, serveis en Node, PHP i Java i infraestructura pròpia.",
  },
  footer: {
    note: "Fet a Barcelona amb Next.js i Tailwind. Desplegat a Cloudflare.",
    top: "Tornar a dalt",
  },
  socials,
};
