import type { SiteContent } from "./types";
import { buildProjects, profileShared, socials, stackItemsByCategory } from "./shared";

export const contentEn: SiteContent = {
  profile: {
    ...profileShared,
    role: "Full-stack developer",
  },
  nav: [
    { label: "Work", href: "/work", type: "route" },
    { label: "About", href: "/about", type: "route" },
    { label: "Stack", href: "/stack", type: "route" },
    { label: "Experience", href: "/experience", type: "route" },
    { label: "Contact", href: "/#contact", type: "anchor" },
  ],
  menuOpen: "Open menu",
  menuClose: "Close menu",
  themeToggle: "Toggle theme",
  ui: {
    skipToContent: "Skip to content",
    visit: "Visit",
    viewCode: "Code",
    codeLabel: "{title} source code on GitHub",
    opensInNewTab: "opens in a new tab",
    copyEmail: "Copy email",
    emailCopied: "Copied!",
    copyFailed: "Couldn't copy",
    backToTop: "Back to top",
    language: "Language",
  },
  hero: {
    tagline:
      "I build *complete websites*: the interface (Vue, React), the services running behind it (Node, PHP, Java) and the infrastructure it's deployed on, which I also manage myself.",
    ctaWork: "See my work",
    ctaContact: "Email me",
  },
  about: {
    title: "About me",
    bio: [
      "I'm Moisés and I work from Barcelona. I'm at Seven Sector Technologies now, and before that I was at Reset Soluciones. I work across every layer: interfaces in Vue and React, and services in Node, PHP and Java underneath.",
      "I have the DAW and DAM Higher Degree. My own projects run in Docker on an Oracle Cloud server with Cloudflare in front. I care as much about how a product looks as about how it ships and scales.",
    ],
    facts: [
      { label: "Based in", value: "Barcelona, ES" },
      { label: "Now", value: "Seven Sector Technologies" },
      { label: "Before", value: "Reset Soluciones" },
      { label: "Studies", value: "DAW + DAM Higher Degree" },
    ],
    viewMore: "More about me",
  },
  homeWork: {
    title: "Featured work",
    description: "Six projects, live and running right now. You can go in and try them.",
    viewAll: "See all projects",
  },
  stack: {
    title: "What I work with",
    description: "What I use at each layer, from the screen to the server.",
    categories: [
      { id: "frontend", label: "Frontend", items: stackItemsByCategory.frontend },
      { id: "databases", label: "Databases", items: stackItemsByCategory.databases },
      { id: "infra", label: "Infra & DevOps", items: stackItemsByCategory.infra },
      { id: "backend", label: "Backend", items: stackItemsByCategory.backend },
      { id: "tools", label: "Tools", items: stackItemsByCategory.tools },
    ],
    viewMore: "See the full stack",
  },
  experience: {
    title: "Experience",
    viewMore: "See the full experience",
    entries: [
      {
        status: "Current",
        current: true,
        org: "Seven Sector Technologies",
        role: "Software developer",
        description:
          "I build and maintain whole web platforms: the interface, the APIs and the infrastructure they run on.",
      },
      {
        status: "Previous",
        current: false,
        org: "Reset Soluciones",
        role: "Software developer",
        description:
          "I developed web and multiplatform applications and took part in the whole cycle, from development to delivery.",
      },
      {
        status: "Education",
        current: false,
        org: "Higher Degree · DAW & DAM",
        role: "Web & Multiplatform Application Development",
        description:
          "Formal training in web applications (DAW) and in multiplatform and mobile applications (DAM).",
      },
    ],
  },
  contact: {
    title: "Let's talk?",
    description: "I'm in Barcelona. I work remotely or on site.",
    emailCta: "Email me",
  },
  work: {
    metaTitle: "Projects — Moisés García",
    metaDescription:
      "Live, running projects built by Moisés García, a full-stack developer in Barcelona.",
    backHome: "Back home",
    title: "All projects",
    description: "Everything I have live. Go in and try it.",
    filterLabel: "Filter by type",
    filterAll: "All",
    countOne: "{n} project",
    countMany: "{n} projects",
    categories: {
      client: "Clients",
      webapp: "Web apps",
      unity: "Games",
      template: "Templates",
    },
    tags: {
      client: "Real client",
      webapp: "Web app",
      unity: "Game",
      template: "Template",
    },
    projects: buildProjects({
      scenesbeats: {
        title: "ScenesBeats",
        description:
          "Finds what to watch based on what you listen to. You connect Spotify and Letterboxd and it recommends films with AI, built from your music taste.",
      },
      lastknightofaveron: {
        title: "The Last Knight of Averon",
        description:
          "A 2D dark-fantasy action-RPG made with Unity: sword and fire-spell combat, exploration and local save progress. I recovered it from a compiled build and shipped it to WebGL so it plays in the browser.",
      },
      "sessio-continua": {
        title: "Sessió Contínua",
        description:
          "Every cinema listing in Barcelona on one page: 28 venues, showtimes, language version and the real price of each screening. With filters, search and a city map.",
      },
      adictalia: {
        title: "Adictalia Control Center",
        description:
          "Corporate website for an online addiction treatment and family support service. It explains the program, services, pricing and process, and lets people get in touch by phone, WhatsApp or form.",
      },
      "2kedit": {
        title: "2K Edit",
        description:
          "A video editor that runs entirely in the browser. Cut clips, add cinematic effects and export to MP4, MOV or WebM, with nothing to install. I'm already working on a downloadable desktop version.",
      },
      nightfallpain: {
        title: "Nightfall Pain",
        description:
          "A 2D cyberpunk shooter made with Unity, for one or two players over Mirror Networking. I recovered it from a compiled build and shipped it to WebGL so it plays straight from the browser.",
      },
      mado: {
        title: "Mado",
        description:
          "A new-tab page for Chrome, your way: set your own background and image tiles that open your sites, and move and resize them by dragging. No accounts, no tracking.",
      },
      "chatbot-movies": {
        title: "CineRoulette",
        description:
          "A terminal-style chatbot that helps you decide what to watch. It asks about your mood and who you're with, then narrows it down until something fits.",
      },
      "clothes-template": {
        title: "Shop Template",
        description:
          "A minimalist fashion online-store template: dark editorial look, multi-language storefront, made for launching a seasonal collection.",
      },
      "restaurant-template": {
        title: "Restaurant Template",
        description:
          "A site for an experimental fine-dining restaurant: bold typography, dark mode by default, menu, gallery and built-in reservations.",
      },
    }),
  },
  aboutPage: {
    metaTitle: "About — Moisés García",
    metaDescription:
      "Full-stack developer in Barcelona: Vue and React interfaces, Node, PHP and Java services, and my own infrastructure on Docker, Oracle Cloud and Cloudflare.",
    backHome: "Back home",
    title: "About me",
    intro: [
      "I'm Moisés and I work from Barcelona. I'm at Seven Sector Technologies now, and before that I was at Reset Soluciones. I work across every layer: interfaces in Vue and React, and services in Node, PHP and Java underneath.",
      "I have the DAW and DAM Higher Degree. My own projects run in Docker on an Oracle Cloud server with Cloudflare in front. I care as much about how a product looks as about how it ships and scales.",
      "I'd rather understand the whole problem before writing the first line. That's why I'm just as comfortable in the interface, the API and the server behind them: seeing the full system helps me find bugs fast, instead of treating each layer as a black box.",
    ],
    principles: [
      {
        heading: "Understand the whole path",
        body: "From the moment someone clicks to the moment the server answers. I deploy and maintain the infrastructure myself (Docker on Oracle Cloud, with Cloudflare in front), so when something breaks I know where to start looking.",
      },
      {
        heading: "The problem picks the tool",
        body: "I use Vue, React, Node, PHP and Java depending on what each project asks for. Problem first, tool second.",
      },
      {
        heading: "What you see is running",
        body: "The projects in the Work section are published and running right now, on the same infrastructure I use for the rest of my work.",
      },
    ],
    education: {
      heading: "Education",
      body: "Higher Degree in Web Application Development (DAW) and in Multiplatform Application Development (DAM). It covers both the web and desktop and mobile apps, and it's the base of how I work across every layer.",
    },
  },
  stackPage: {
    metaTitle: "Stack — Moisés García",
    metaDescription:
      "Technologies I work with every day, from interface to infrastructure: Vue, React, Node, PHP, Java, Docker, Oracle Cloud and Cloudflare.",
    backHome: "Back home",
    title: "What I work with",
    description: "What I use at each layer, from the screen to the server, and why.",
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: stackItemsByCategory.frontend,
        description:
          "Where the user experience lives. Vue and React for the interface; Tailwind and Framer Motion to give it shape and movement.",
      },
      {
        id: "databases",
        label: "Databases",
        items: stackItemsByCategory.databases,
        description:
          "I pick based on the shape of the data: MongoDB when the schema is flexible, MySQL or PostgreSQL when the relationships between entities matter.",
      },
      {
        id: "infra",
        label: "Infra & DevOps",
        items: stackItemsByCategory.infra,
        description:
          "I run my own infrastructure: Docker containers on Oracle Cloud, with Cloudflare in front for CDN and security. That's where the projects in Work are deployed.",
      },
      {
        id: "backend",
        label: "Backend",
        items: stackItemsByCategory.backend,
        description:
          "Node, PHP and Java for server logic and APIs. Sockets when something needs to be real time.",
      },
      {
        id: "tools",
        label: "Tools",
        items: stackItemsByCategory.tools,
        description:
          "Git for version control, Android Studio for native mobile and Unity when a project needs a graphics engine.",
      },
    ],
  },
  experiencePage: {
    metaTitle: "Experience — Moisés García",
    metaDescription:
      "Experience of Moisés García as a full-stack developer, from DAW and DAM training to his current job at Seven Sector Technologies.",
    backHome: "Back home",
    title: "Full experience",
    description: "Every stage, with the role and the technologies I used.",
    entries: [
      {
        status: "Current",
        current: true,
        org: "Seven Sector Technologies",
        role: "Software developer",
        description:
          "I build and maintain whole web platforms: the interface, the APIs and the infrastructure they run on.",
        highlights: [
          "I build and maintain web platforms, from the interface to the API.",
          "I handle the deployment and infrastructure of the projects, without a separate DevOps team.",
          "I work directly with the production stack: Docker on Oracle Cloud, behind Cloudflare.",
        ],
        stack: ["Vue.js", "Node.js", "Docker", "Oracle Cloud", "Cloudflare"],
      },
      {
        status: "Previous",
        current: false,
        org: "Reset Soluciones",
        role: "Software developer",
        description:
          "I developed web and multiplatform applications and took part in the whole cycle, from development to delivery.",
        highlights: [
          "I developed web and multiplatform applications from start to finish.",
          "I took part in the whole delivery cycle, from development to production.",
        ],
        stack: ["PHP", "JavaScript", "MySQL"],
      },
      {
        status: "Education",
        current: false,
        org: "Higher Degree · DAW & DAM",
        role: "Web & Multiplatform Application Development",
        description:
          "Formal training in web applications (DAW) and in multiplatform and mobile applications (DAM).",
        highlights: [
          "Formal training in web application development (DAW).",
          "Formal training in multiplatform and mobile application development (DAM).",
        ],
        stack: ["HTML", "CSS", "Java", "Android Studio"],
      },
    ],
  },
  footer: {
    note: "Made in Barcelona with Next.js and Tailwind. Deployed on Cloudflare.",
    top: "Back to top",
  },
  socials,
};
