import type { SiteContent } from "./types";
import { buildProjects, profileShared, socials, stackItemsByCategory } from "./shared";

export const contentEn: SiteContent = {
  profile: {
    ...profileShared,
    role: "Full-Stack Software Developer",
    status: "Open to select work",
  },
  nav: [
    { label: "About", href: "/#about", type: "anchor" },
    { label: "Stack", href: "/#stack", type: "anchor" },
    { label: "Work", href: "/work", type: "route" },
    { label: "Experience", href: "/#experience", type: "anchor" },
    { label: "Contact", href: "/#contact", type: "anchor" },
  ],
  menuToggle: "Toggle menu",
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
  },
  experience: {
    kicker: "04 — EXPERIENCE",
    title: "Trajectory",
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
    }),
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
