import type { SiteContent } from "./types";
import { buildProjects, profileShared, socials, stackItemsByCategory } from "./shared";

export const contentEn: SiteContent = {
  profile: {
    ...profileShared,
    role: "Full-Stack Software Developer",
    status: "Open to select work",
  },
  nav: [
    { label: "About", href: "/about", type: "route" },
    { label: "Stack", href: "/stack", type: "route" },
    { label: "Work", href: "/work", type: "route" },
    { label: "Experience", href: "/experience", type: "route" },
    { label: "Contact", href: "/#contact", type: "anchor" },
  ],
  menuToggle: "Toggle menu",
  themeToggle: "Toggle theme",
  heroTicker: [
    "FULL-STACK DEVELOPER",
    "BARCELONA, ES",
    "VUE · REACT · NODE",
    "DOCKER + ORACLE CLOUD + CLOUDFLARE",
    "AVAILABLE FOR NEW PROJECTS",
  ],
  hero: {
    badge: "FULL-STACK DEVELOPER • BARCELONA, ES • ",
    tagline:
      "I design and ship products end to end — Vue and React interfaces on top of Node, PHP and Java services, deployed on infrastructure I run myself.",
    ctaWork: "View the work",
    ctaContact: "Get in touch",
  },
  dossier: {
    kicker: "01 — ABOUT",
    title: "Dossier",
    bio: [
      "I build across the full stack — from Vue and React interfaces to Node, PHP and Java services underneath. Currently shipping at Seven Sector Technologies, with previous hands-on experience at Reset Soluciones.",
      "I hold a Higher Degree in Web Application Development and Multiplatform Application Development, and I run my own Dockerized infrastructure on Oracle Cloud behind Cloudflare — so I care as much about how a product ships and scales as how it looks on screen.",
    ],
    fields: [
      { label: "Name", value: "Moisés García Poveda" },
      { label: "Role", value: "Full-Stack Developer" },
      { label: "Base", value: "Barcelona, ES" },
      { label: "Currently", value: "Seven Sector Technologies" },
      { label: "Education", value: "DAW + DAM Higher Degree" },
      { label: "Status", value: "Online" },
    ],
    signalActive: "SIGNAL ACTIVE",
    viewMore: "View full dossier",
  },
  homeWork: {
    kicker: "02 — WORK",
    title: "Selected work",
    description: "Shipped, deployed and running right now — click through to try any of them.",
    viewAll: "View all work",
  },
  stack: {
    kicker: "03 — STACK",
    title: "Loadout",
    description:
      "Technologies I reach for, sorted by layer — from interface down to the infrastructure it runs on.",
    categories: [
      { id: "frontend", label: "Frontend", items: stackItemsByCategory.frontend },
      { id: "databases", label: "Databases", items: stackItemsByCategory.databases },
      { id: "infra", label: "Infra & DevOps", items: stackItemsByCategory.infra },
      { id: "backend", label: "Backend", items: stackItemsByCategory.backend },
      { id: "tools", label: "Tools", items: stackItemsByCategory.tools },
    ],
    viewMore: "View full stack",
  },
  experience: {
    kicker: "04 — EXPERIENCE",
    title: "Trajectory",
    viewMore: "View full trajectory",
    entries: [
      {
        tag: "02",
        status: "Current",
        current: true,
        org: "Seven Sector Technologies",
        role: "Software Developer",
        description:
          "Building and maintaining web platforms end to end — UI, APIs and the infrastructure they run on.",
      },
      {
        tag: "01",
        status: "Previous",
        current: false,
        org: "Reset Soluciones",
        role: "Software Developer",
        description:
          "Developed web and multiplatform applications, working across the full delivery lifecycle.",
      },
      {
        tag: "00",
        status: "Education",
        current: false,
        org: "Higher Degree · DAW & DAM",
        role: "Web & Multiplatform Application Development",
        description:
          "Formal training across web application development and multiplatform / mobile application development.",
      },
    ],
  },
  contact: {
    kicker: "05 — CONTACT",
    title: "Let's build something",
    description: "Based in Barcelona, ES — open to remote and on-site work.",
    emailCta: "Email me",
    localTime: "LOCAL TIME",
  },
  work: {
    metaTitle: "Work — Moisés García Poveda",
    metaDescription:
      "Live projects built and shipped by Moisés García Poveda, full-stack software developer based in Barcelona.",
    backHome: "BACK HOME",
    selectedWork: "SELECTED WORK",
    title: "Live projects",
    description: "Shipped, deployed and running right now — click through to try any of them.",
    projects: buildProjects({
      "chatbot-movies": {
        title: "CineRoulette",
        description:
          "A terminal-styled chatbot that helps you decide what to watch — it asks about your mood and company, then narrows it down for you.",
      },
      scenesbeats: {
        title: "ScenesBeats",
        description:
          "Finds what to watch based on what you listen to — connects Spotify and Letterboxd for AI recommendations driven by your music taste.",
      },
      "2kedit": {
        title: "2K Edit",
        description:
          "A video editor that runs entirely in the browser — cut clips, apply cinematic effects and export to MP4, MOV or WebM, no install required. A downloadable app version is in the works.",
      },
      "clothes-template": {
        title: "Shop Template",
        description:
          "A minimalist fashion e-commerce template — dark editorial aesthetic, multi-language storefront, built for a seasonal collection drop.",
      },
      "restaurant-template": {
        title: "Restaurant Template",
        description:
          "A site for an experimental fine-dining concept — bold typography, dark mode by default, menu, gallery and a built-in reservation flow.",
      },
      nightfallpain: {
        title: "Nightfall Pain",
        description:
          "A 2D cyberpunk shooter built in Unity, single-player and co-op over Mirror Networking — recovered from a compiled build and shipped to WebGL so it plays straight from the browser.",
      },
      lastknightofaveron: {
        title: "The Last Knight of Averon",
        description:
          "A 2D dark-fantasy action-RPG built in Unity — sword and fire-spell combat, exploration, and local save progress — recovered and shipped to WebGL so it plays straight from the browser.",
      },
    }),
  },
  aboutPage: {
    metaTitle: "About — Moisés García Poveda",
    metaDescription:
      "Full-stack developer based in Barcelona with end-to-end experience: Vue and React interfaces, Node, PHP and Java services, and self-managed infrastructure on Docker, Oracle Cloud and Cloudflare.",
    backHome: "BACK HOME",
    kicker: "01 — ABOUT",
    title: "Full dossier",
    intro: [
      "I build across the full stack — from Vue and React interfaces to Node, PHP and Java services underneath. Currently shipping at Seven Sector Technologies, with previous hands-on experience at Reset Soluciones.",
      "I hold a Higher Degree in Web Application Development and Multiplatform Application Development, and I run my own Dockerized infrastructure on Oracle Cloud behind Cloudflare — so I care as much about how a product ships and scales as how it looks on screen.",
      "I prefer to understand the whole problem before writing the first line of code. That's why I move just as comfortably between the interface, the API and the server behind it: seeing the system end to end is what lets me diagnose and fix issues fast, instead of treating each layer as a black box.",
    ],
    fields: [
      { label: "Name", value: "Moisés García Poveda" },
      { label: "Role", value: "Full-Stack Developer" },
      { label: "Base", value: "Barcelona, ES" },
      { label: "Currently", value: "Seven Sector Technologies" },
      { label: "Education", value: "DAW + DAM Higher Degree" },
      { label: "Status", value: "Online" },
    ],
    principles: [
      {
        heading: "From interface to infrastructure",
        body: "I don't stop at application code — I deploy, monitor and maintain the infrastructure it runs on, with Docker containers on Oracle Cloud behind Cloudflare. Understanding the full path, from a user's click to the server's response, is what lets me diagnose and fix problems fast.",
      },
      {
        heading: "Full-stack by conviction, not by resume",
        body: "Working with Vue, React, Node, PHP and Java isn't a list of collected technologies — it's the natural consequence of owning a product end to end. I pick the tool for the problem in front of me, not the other way around.",
      },
      {
        heading: "Every project, shipped to production",
        body: "The projects you can see in the Work section aren't local demos — they're deployed and live right now, on the same infrastructure I manage for the rest of my work.",
      },
    ],
    education: {
      heading: "Education",
      body: "Higher Degree in Web Application Development (DAW) and Multiplatform Application Development (DAM) — a foundation that covers both web application development and desktop / mobile application development, and that underpins how I work across every layer of a product.",
    },
  },
  stackPage: {
    metaTitle: "Stack — Moisés García Poveda",
    metaDescription:
      "Technologies I work with day to day, from interface to infrastructure: Vue, React, Node, PHP, Java, Docker, Oracle Cloud and Cloudflare.",
    backHome: "BACK HOME",
    kicker: "03 — STACK",
    title: "Full loadout",
    description:
      "Technologies I reach for, sorted by layer — from interface down to the infrastructure it runs on, with the reasoning behind each choice.",
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: stackItemsByCategory.frontend,
        description:
          "Where the user experience lives. Vue and React to build the interface; Tailwind and Framer Motion give it shape and motion without leaving the browser.",
      },
      {
        id: "databases",
        label: "Databases",
        items: stackItemsByCategory.databases,
        description:
          "Persistence is picked to fit the shape of the data: MongoDB when the schema is flexible, MySQL and PostgreSQL when the relationships between entities matter as much as the data itself.",
      },
      {
        id: "infra",
        label: "Infra & DevOps",
        items: stackItemsByCategory.infra,
        description:
          "I manage my own infrastructure: Docker containers running on Oracle Cloud, with Cloudflare in front for CDN, security and deployment of the projects you see in Work.",
      },
      {
        id: "backend",
        label: "Backend",
        items: stackItemsByCategory.backend,
        description:
          "Node, PHP and Java cover server logic and APIs; Sockets come in whenever the product needs real-time communication.",
      },
      {
        id: "tools",
        label: "Tools",
        items: stackItemsByCategory.tools,
        description:
          "Git for day-to-day version control, Android Studio for native mobile development, and Unity whenever a project calls for a graphics engine.",
      },
    ],
  },
  experiencePage: {
    metaTitle: "Experience — Moisés García Poveda",
    metaDescription:
      "Professional trajectory of Moisés García Poveda as a full-stack developer, from DAW and DAM training to his current role at Seven Sector Technologies.",
    backHome: "BACK HOME",
    kicker: "04 — EXPERIENCE",
    title: "Full trajectory",
    description: "Every stage, with the role, the context and the technologies I worked with.",
    entries: [
      {
        tag: "02",
        status: "Current",
        current: true,
        org: "Seven Sector Technologies",
        role: "Software Developer",
        description:
          "Building and maintaining web platforms end to end — UI, APIs and the infrastructure they run on.",
        highlights: [
          "Building and maintaining web platforms end to end, from interface to API.",
          "Managing the deployment and infrastructure the projects run on, without relying on a separate DevOps team.",
          "Working directly with the production stack: Docker on Oracle Cloud, behind Cloudflare.",
        ],
        stack: ["Vue.js", "Node.js", "Docker", "Oracle Cloud", "Cloudflare"],
      },
      {
        tag: "01",
        status: "Previous",
        current: false,
        org: "Reset Soluciones",
        role: "Software Developer",
        description:
          "Developed web and multiplatform applications, working across the full delivery lifecycle.",
        highlights: [
          "Developed web and multiplatform applications end to end.",
          "Took part in the full delivery lifecycle, from development through to production release.",
        ],
        stack: ["PHP", "JavaScript", "MySQL"],
      },
      {
        tag: "00",
        status: "Education",
        current: false,
        org: "Higher Degree · DAW & DAM",
        role: "Web & Multiplatform Application Development",
        description:
          "Formal training across web application development and multiplatform / mobile application development.",
        highlights: [
          "Formal training in web application development (DAW).",
          "Formal training in multiplatform and mobile application development (DAM).",
        ],
        stack: ["HTML", "CSS", "Java", "Android Studio"],
      },
    ],
  },
  footer: {
    builtWith: "BUILT WITH NEXT.JS + TAILWIND — DEPLOYED ON CLOUDFLARE",
    top: "TOP",
  },
  boot: [
    "PORTFOLIO_OS v2.6 — BOOT SEQUENCE",
    "MOUNTING INTERFACE... OK",
    "LOADING PROFILE: M.GARCIA_POVEDA... OK",
    "STATUS: READY",
  ],
  socials,
};
