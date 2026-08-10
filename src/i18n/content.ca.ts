import type { SiteContent } from "./types";
import { buildProjects, profileShared, socials, stackItemsByCategory } from "./shared";

export const contentCa: SiteContent = {
  profile: {
    ...profileShared,
    role: "Desenvolupador de Software Full-Stack",
    status: "Disponible per a projectes seleccionats",
  },
  nav: [
    { label: "Sobre mi", href: "/about", type: "route" },
    { label: "Stack", href: "/stack", type: "route" },
    { label: "Feina", href: "/work", type: "route" },
    { label: "Experiència", href: "/experience", type: "route" },
    { label: "Contacte", href: "/#contact", type: "anchor" },
  ],
  menuToggle: "Obre el menú",
  themeToggle: "Canvia el tema",
  heroTicker: [
    "DESENVOLUPADOR FULL-STACK",
    "BARCELONA, ES",
    "VUE · REACT · NODE",
    "DOCKER + ORACLE CLOUD + CLOUDFLARE",
    "DISPONIBLE PER A NOUS PROJECTES",
  ],
  hero: {
    badge: "DESENVOLUPADOR FULL-STACK • BARCELONA, ES • ",
    tagline:
      "Dissenyo i entrego productes de principi a fi — interfícies en Vue i React sobre serveis en Node, PHP i Java, desplegats en infraestructura que gestiono jo mateix.",
    ctaWork: "Veure els projectes",
    ctaContact: "Parlem",
  },
  dossier: {
    kicker: "01 — SOBRE MI",
    title: "Dossier",
    bio: [
      "Treballo en tot l'stack — des d'interfícies en Vue i React fins a serveis en Node, PHP i Java per sota. Actualment a Seven Sector Technologies, amb experiència prèvia a Reset Soluciones.",
      "Tinc un Grau Superior en Desenvolupament d'Aplicacions Web i Desenvolupament d'Aplicacions Multiplataforma, i gestiono la meva pròpia infraestructura Dockeritzada a Oracle Cloud darrere de Cloudflare — m'importa tant com es veu un producte com la manera en què es desplega i escala.",
    ],
    fields: [
      { label: "Nom", value: "Moisés García Poveda" },
      { label: "Rol", value: "Desenvolupador Full-Stack" },
      { label: "Base", value: "Barcelona, ES" },
      { label: "Actualment", value: "Seven Sector Technologies" },
      { label: "Educació", value: "Grau Superior DAW + DAM" },
      { label: "Estat", value: "En línia" },
    ],
    signalActive: "SENYAL ACTIVA",
    viewMore: "Veure dossier complet",
  },
  homeWork: {
    kicker: "02 — FEINA",
    title: "Feina destacada",
    description: "Lliurats, desplegats i funcionant ara mateix — entra a provar qualsevol d'ells.",
    viewAll: "Veure tots els projectes",
  },
  stack: {
    kicker: "03 — STACK",
    title: "Loadout",
    description:
      "Tecnologies a què recorro, ordenades per capa — des de la interfície fins a la infraestructura sobre la qual corre.",
    categories: [
      { id: "frontend", label: "Frontend", items: stackItemsByCategory.frontend },
      { id: "databases", label: "Bases de dades", items: stackItemsByCategory.databases },
      { id: "infra", label: "Infra i DevOps", items: stackItemsByCategory.infra },
      { id: "backend", label: "Backend", items: stackItemsByCategory.backend },
      { id: "tools", label: "Eines", items: stackItemsByCategory.tools },
    ],
    viewMore: "Veure stack complet",
  },
  experience: {
    kicker: "04 — EXPERIÈNCIA",
    title: "Trajectòria",
    viewMore: "Veure trajectòria completa",
    entries: [
      {
        tag: "02",
        status: "Actual",
        current: true,
        org: "Seven Sector Technologies",
        role: "Desenvolupador de Software",
        description:
          "Construeixo i mantinc plataformes web de principi a fi — UI, APIs i la infraestructura sobre la qual corren.",
      },
      {
        tag: "01",
        status: "Anterior",
        current: false,
        org: "Reset Soluciones",
        role: "Desenvolupador de Software",
        description:
          "Vaig desenvolupar aplicacions web i multiplataforma, treballant en tot el cicle de vida de lliurament.",
      },
      {
        tag: "00",
        status: "Educació",
        current: false,
        org: "Grau Superior · DAW i DAM",
        role: "Desenvolupament d'Aplicacions Web i Multiplataforma",
        description:
          "Formació reglada en desenvolupament d'aplicacions web i desenvolupament d'aplicacions multiplataforma / mòbils.",
      },
    ],
  },
  contact: {
    kicker: "05 — CONTACTE",
    title: "Construïm alguna cosa",
    description: "Amb base a Barcelona, ES — obert a treball remot i presencial.",
    emailCta: "Escriu-me",
    localTime: "HORA LOCAL",
  },
  work: {
    metaTitle: "Feina — Moisés García Poveda",
    metaDescription:
      "Projectes en producció, construïts i desplegats per Moisés García Poveda, desenvolupador de software full-stack amb base a Barcelona.",
    backHome: "TORNAR A L'INICI",
    selectedWork: "FEINA DESTACADA",
    title: "Projectes en producció",
    description: "Lliurats, desplegats i funcionant ara mateix — entra a provar qualsevol d'ells.",
    projects: buildProjects({
      "chatbot-movies": {
        title: "CineRoulette",
        description:
          "Un chatbot amb estètica de terminal que t'ajuda a decidir què veure — pregunta pel teu estat d'ànim i companyia, i a partir d'aquí ho concreta.",
      },
      scenesbeats: {
        title: "ScenesBeats",
        description:
          "Troba què veure segons el que escoltes — connecta Spotify i Letterboxd per a recomanacions amb IA basades en els teus gustos musicals.",
      },
      "2kedit": {
        title: "2K Edit",
        description:
          "Un editor de vídeo que funciona íntegrament al navegador — retalla clips, aplica efectes cinematogràfics i exporta a MP4, MOV o WebM, sense instal·lació. Ja s'està treballant en una versió d'escriptori descarregable.",
      },
      "clothes-template": {
        title: "NOIR",
        description:
          "Plantilla d'e-commerce de moda minimalista — estètica editorial fosca, botiga multi-idioma, pensada per al llançament d'una col·lecció de temporada.",
      },
      "restaurant-template": {
        title: "VØID Gastrobar",
        description:
          "Web per a un concepte d'alta cuina experimental — tipografia contundent, mode fosc per defecte, menú, galeria i reserves integrades.",
      },
      nightfallpain: {
        title: "Nightfall Pain",
        description:
          "Shooter 2D cyberpunk fet a Unity, un jugador i cooperatiu en xarxa amb Mirror Networking — recuperat a partir d'un build compilat i publicat en WebGL per jugar-hi directe des del navegador.",
      },
    }),
  },
  aboutPage: {
    metaTitle: "Sobre mi — Moisés García Poveda",
    metaDescription:
      "Desenvolupador full-stack a Barcelona amb experiència de punta a punta: interfícies en Vue i React, serveis en Node, PHP i Java, i infraestructura pròpia en Docker sobre Oracle Cloud i Cloudflare.",
    backHome: "TORNAR A L'INICI",
    kicker: "01 — SOBRE MI",
    title: "Dossier complet",
    intro: [
      "Treballo en tot l'stack — des d'interfícies en Vue i React fins a serveis en Node, PHP i Java per sota. Actualment a Seven Sector Technologies, amb experiència prèvia a Reset Soluciones.",
      "Tinc un Grau Superior en Desenvolupament d'Aplicacions Web i Desenvolupament d'Aplicacions Multiplataforma, i gestiono la meva pròpia infraestructura Dockeritzada a Oracle Cloud darrere de Cloudflare — m'importa tant com es veu un producte com la manera en què es desplega i escala.",
      "Prefereixo entendre el problema complet abans d'escriure la primera línia de codi. Per això em moc amb la mateixa soltesa entre la interfície, l'API i el servidor que la serveix: veure el sistema de punta a punta és el que em permet diagnosticar i resoldre problemes ràpid, en comptes de tractar cada capa com una caixa negra.",
    ],
    fields: [
      { label: "Nom", value: "Moisés García Poveda" },
      { label: "Rol", value: "Desenvolupador Full-Stack" },
      { label: "Base", value: "Barcelona, ES" },
      { label: "Actualment", value: "Seven Sector Technologies" },
      { label: "Educació", value: "Grau Superior DAW + DAM" },
      { label: "Estat", value: "En línia" },
    ],
    principles: [
      {
        heading: "De la interfície a la infraestructura",
        body: "No em quedo en el codi de l'aplicació — desplego, monitoritzo i mantinc la infraestructura sobre la qual corre, amb contenidors Docker a Oracle Cloud darrere de Cloudflare. Entendre el camí complet, del clic de l'usuari a la resposta del servidor, és el que em permet diagnosticar i resoldre problemes ràpid.",
      },
      {
        heading: "Full-stack per convicció, no per currículum",
        body: "Treballar amb Vue, React, Node, PHP i Java no és una llista de tecnologies col·leccionades — és la conseqüència natural d'assumir un producte de principi a fi. Trio l'eina segons el problema que tinc al davant, no a l'inrevés.",
      },
      {
        heading: "Cada projecte, fins a producció",
        body: "Els projectes que pots veure a la secció de Feina no són demos locals — estan desplegats i accessibles ara mateix, a la mateixa infraestructura que gestiono per a la resta de la meva feina.",
      },
    ],
    education: {
      heading: "Formació",
      body: "Grau Superior en Desenvolupament d'Aplicacions Web (DAW) i Desenvolupament d'Aplicacions Multiplataforma (DAM) — una base que cobreix tant el desenvolupament d'aplicacions web com el d'aplicacions d'escriptori i mòbils, i que sosté la meva manera de treballar en totes les capes d'un producte.",
    },
  },
  stackPage: {
    metaTitle: "Stack — Moisés García Poveda",
    metaDescription:
      "Tecnologies amb què treballo cada dia, de la interfície a la infraestructura: Vue, React, Node, PHP, Java, Docker, Oracle Cloud i Cloudflare.",
    backHome: "TORNAR A L'INICI",
    kicker: "03 — STACK",
    title: "Loadout complet",
    description:
      "Tecnologies a què recorro, ordenades per capa — des de la interfície fins a la infraestructura sobre la qual corre, amb el motiu pel qual les trio.",
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: stackItemsByCategory.frontend,
        description:
          "On viu l'experiència d'usuari. Vue i React per construir la interfície; Tailwind i Framer Motion li donen forma i moviment sense sortir del navegador.",
      },
      {
        id: "databases",
        label: "Bases de dades",
        items: stackItemsByCategory.databases,
        description:
          "La persistència es tria segons la forma de les dades: MongoDB quan l'esquema és flexible, MySQL i PostgreSQL quan la relació entre entitats importa tant com les pròpies dades.",
      },
      {
        id: "infra",
        label: "Infra i DevOps",
        items: stackItemsByCategory.infra,
        description:
          "Gestiono la meva pròpia infraestructura: contenidors Docker corrent a Oracle Cloud, amb Cloudflare al davant per a CDN, seguretat i el desplegament dels projectes que veus a Feina.",
      },
      {
        id: "backend",
        label: "Backend",
        items: stackItemsByCategory.backend,
        description:
          "Node, PHP i Java cobreixen la lògica de servidor i les APIs; Sockets entra en joc quan el producte necessita comunicació en temps real.",
      },
      {
        id: "tools",
        label: "Eines",
        items: stackItemsByCategory.tools,
        description:
          "Git per al control de versions del dia a dia, Android Studio per a desenvolupament mòbil natiu i Unity quan el projecte demana un motor gràfic.",
      },
    ],
  },
  experiencePage: {
    metaTitle: "Experiència — Moisés García Poveda",
    metaDescription:
      "Trajectòria professional de Moisés García Poveda com a desenvolupador full-stack, de la formació en DAW i DAM al seu rol actual a Seven Sector Technologies.",
    backHome: "TORNAR A L'INICI",
    kicker: "04 — EXPERIÈNCIA",
    title: "Trajectòria completa",
    description: "Cada etapa, amb el rol, el context i les tecnologies amb què vaig treballar.",
    entries: [
      {
        tag: "02",
        status: "Actual",
        current: true,
        org: "Seven Sector Technologies",
        role: "Desenvolupador de Software",
        description:
          "Construeixo i mantinc plataformes web de principi a fi — UI, APIs i la infraestructura sobre la qual corren.",
        highlights: [
          "Construeixo i mantinc plataformes web de principi a fi, des de la interfície fins a l'API.",
          "Gestiono el desplegament i la infraestructura sobre la qual corren els projectes, sense dependre d'un equip de DevOps separat.",
          "Treballo directament amb l'stack de producció: Docker a Oracle Cloud, darrere de Cloudflare.",
        ],
        stack: ["Vue.js", "Node.js", "Docker", "Oracle Cloud", "Cloudflare"],
      },
      {
        tag: "01",
        status: "Anterior",
        current: false,
        org: "Reset Soluciones",
        role: "Desenvolupador de Software",
        description:
          "Vaig desenvolupar aplicacions web i multiplataforma, treballant en tot el cicle de vida de lliurament.",
        highlights: [
          "Vaig desenvolupar aplicacions web i multiplataforma de principi a fi.",
          "Vaig participar en tot el cicle de vida de lliurament, des del desenvolupament fins a la posada en producció.",
        ],
        stack: ["PHP", "JavaScript", "MySQL"],
      },
      {
        tag: "00",
        status: "Educació",
        current: false,
        org: "Grau Superior · DAW i DAM",
        role: "Desenvolupament d'Aplicacions Web i Multiplataforma",
        description:
          "Formació reglada en desenvolupament d'aplicacions web i desenvolupament d'aplicacions multiplataforma / mòbils.",
        highlights: [
          "Formació reglada en desenvolupament d'aplicacions web (DAW).",
          "Formació reglada en desenvolupament d'aplicacions multiplataforma i mòbils (DAM).",
        ],
        stack: ["HTML", "CSS", "Java", "Android Studio"],
      },
    ],
  },
  footer: {
    builtWith: "FET AMB NEXT.JS + TAILWIND — DESPLEGAT A CLOUDFLARE",
    top: "AMUNT",
  },
  boot: [
    "PORTFOLIO_OS v2.6 — SEQÜÈNCIA D'ARRENCADA",
    "MUNTANT INTERFÍCIE... OK",
    "CARREGANT PERFIL: M.GARCIA_POVEDA... OK",
    "ESTAT: LLEST",
  ],
  socials,
};
