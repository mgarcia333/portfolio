import type { ComponentType } from "react";
import { Cable, Cloud } from "lucide-react";
import {
  SiAndroid,
  SiCloudflare,
  SiDocker,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiUnity,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";
import { DiCss3, DiJava } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export const profile = {
  name: "Moisés García Poveda",
  nameLines: ["Moisés García", "Poveda"],
  initials: "MG",
  role: "Full-Stack Software Developer",
  location: "Barcelona, ES",
  coordinates: "41.3874° N, 2.1686° E",
  timeZone: "Europe/Madrid",
  status: "Open to select work",
  email: "moisesgp15@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
};

export const nav = [
  { label: "About", href: "/#about", type: "anchor" },
  { label: "Stack", href: "/#stack", type: "anchor" },
  { label: "Work", href: "/work", type: "route" },
  { label: "Experience", href: "/#experience", type: "anchor" },
  { label: "Contact", href: "/#contact", type: "anchor" },
] as const;

export const heroTicker = [
  "FULL-STACK DEVELOPER",
  "BARCELONA, ES",
  "VUE · REACT · NODE",
  "DOCKER + ORACLE CLOUD + CLOUDFLARE",
  "AVAILABLE FOR NEW PROJECTS",
];

export const dossier = {
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
};

export type StackIcon = ComponentType<{ className?: string }>;

export interface StackItem {
  name: string;
  icon: StackIcon;
}

export interface StackCategory {
  id: string;
  label: string;
  span: string;
  items: StackItem[];
}

export const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    span: "lg:col-span-2 lg:row-span-2",
    items: [
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Vuetify", icon: SiVuetify },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: DiCss3 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    span: "lg:col-span-1 lg:row-span-1",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    id: "infra",
    label: "Infra & DevOps",
    span: "lg:col-span-1 lg:row-span-1",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Oracle Cloud", icon: Cloud },
      { name: "Cloudflare", icon: SiCloudflare },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    span: "lg:col-span-2 lg:row-span-1",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Java", icon: DiJava },
      { name: "Sockets", icon: Cable },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    span: "lg:col-span-1 lg:row-span-1",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Android Studio", icon: SiAndroid },
      { name: "Unity", icon: SiUnity },
    ],
  },
];

export interface ExperienceEntry {
  tag: string;
  status: string;
  org: string;
  role: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    tag: "02",
    status: "Current",
    org: "Seven Sector Technologies",
    role: "Software Developer",
    description:
      "Building and maintaining web platforms end to end — UI, APIs and the infrastructure they run on.",
  },
  {
    tag: "01",
    status: "Previous",
    org: "Reset Soluciones",
    role: "Software Developer",
    description:
      "Developed web and multiplatform applications, working across the full delivery lifecycle.",
  },
  {
    tag: "00",
    status: "Education",
    org: "Higher Degree · DAW & DAM",
    role: "Web & Multiplatform Application Development",
    description:
      "Formal training across web application development and multiplatform / mobile application development.",
  },
];

export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  preview: string;
}

export const projects: Project[] = [
  {
    id: "chatbot-movies",
    tag: "CASE_01",
    title: "CineRoulette",
    description:
      "A terminal-styled chatbot that helps you decide what to watch — it asks about your mood and company, then narrows it down for you.",
    stack: ["Chatbot", "Cloudflare Workers"],
    url: "https://chatbot-movies.mgarciap.workers.dev/",
    preview: "/projects/chatbot-movies.png",
  },
  {
    id: "scenesbeats",
    tag: "CASE_02",
    title: "ScenesBeats",
    description:
      "Finds what to watch based on what you listen to — connects Spotify and Letterboxd for AI recommendations driven by your music taste.",
    stack: ["AI Recommendations", "Spotify", "Letterboxd"],
    url: "https://scenesbeats.mgarciap.workers.dev/",
    preview: "/projects/scenesbeats.png",
  },
  {
    id: "2kedit",
    tag: "CASE_03",
    title: "2K Edit",
    description:
      "A video editor that runs entirely in the browser — cut clips, apply cinematic effects and export to MP4, MOV or WebM, no install required. A downloadable app version is in the works.",
    stack: ["Video Editor", "Web App", "Cloudflare Workers"],
    url: "https://2kedit.mgarciap.workers.dev/",
    preview: "/projects/2kedit.png",
  },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: SiGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
];
