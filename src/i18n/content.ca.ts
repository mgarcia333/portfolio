import type { SiteContent } from "./types";
import { buildProjects, profileShared, socials, stackItemsByCategory } from "./shared";

export const contentCa: SiteContent = {
  profile: {
    ...profileShared,
    role: "Desenvolupador de Software Full-Stack",
    status: "Disponible per a projectes seleccionats",
  },
  nav: [
    { label: "Sobre mi", href: "/#about", type: "anchor" },
    { label: "Stack", href: "/#stack", type: "anchor" },
    { label: "Feina", href: "/work", type: "route" },
    { label: "Experiència", href: "/#experience", type: "anchor" },
    { label: "Contacte", href: "/#contact", type: "anchor" },
  ],
  menuToggle: "Obre el menú",
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
  },
  experience: {
    kicker: "04 — EXPERIÈNCIA",
    title: "Trajectòria",
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
    }),
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
