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
import type { Project, Social, StackItem } from "./types";

export const profileShared = {
  name: "Moisés García Poveda",
  nameLines: ["Moisés García", "Poveda"] as [string, string],
  initials: "MG",
  location: "Barcelona, ES",
  coordinates: "41.3874° N, 2.1686° E",
  timeZone: "Europe/Madrid",
  email: "moisesgp15@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
};

export const socials: Social[] = [
  { label: "GitHub", href: profileShared.github, icon: SiGithub },
  { label: "LinkedIn", href: profileShared.linkedin, icon: FaLinkedin },
];

export const stackItemsByCategory: Record<string, StackItem[]> = {
  frontend: [
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "Vuetify", icon: SiVuetify },
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: DiCss3 },
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
  ],
  infra: [
    { name: "Docker", icon: SiDocker },
    { name: "Oracle Cloud", icon: Cloud },
    { name: "Cloudflare", icon: SiCloudflare },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PHP", icon: SiPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "Java", icon: DiJava },
    { name: "Sockets", icon: Cable },
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "Android Studio", icon: SiAndroid },
    { name: "Unity", icon: SiUnity },
  ],
};

interface ProjectShared {
  tag: string;
  stack: string[];
  url: string;
  preview: string;
  github?: string;
}

export const projectsShared: Record<string, ProjectShared> = {
  "chatbot-movies": {
    tag: "CASE_01",
    stack: ["Chatbot", "Cloudflare Workers"],
    url: "https://chatbot-movies.mgarciap.workers.dev/",
    preview: "/projects/chatbot-movies.png",
  },
  scenesbeats: {
    tag: "CASE_02",
    stack: ["AI Recommendations", "Spotify", "Letterboxd"],
    url: "https://scenesbeats.mgarciap.workers.dev/",
    preview: "/projects/scenesbeats.png",
  },
  "2kedit": {
    tag: "CASE_03",
    stack: ["Video Editor", "Web App", "Cloudflare Workers"],
    url: "https://2kedit.mgarciap.workers.dev/",
    preview: "/projects/2kedit.png",
  },
  "clothes-template": {
    tag: "CASE_04",
    stack: ["E-commerce", "Next.js", "Cloudflare Workers"],
    url: "https://clothes-template.mgarciap.workers.dev/",
    preview: "/projects/clothes-template.webp",
  },
  "restaurant-template": {
    tag: "CASE_05",
    stack: ["Restaurant", "Next.js", "Cloudflare Workers"],
    url: "https://restaurant-template.mgarciap.workers.dev/",
    preview: "/projects/restaurant-template.webp",
  },
  nightfallpain: {
    tag: "CASE_06",
    stack: ["Unity", "WebGL", "Next.js"],
    url: "https://nightfallpain-web.mgarciap.workers.dev/",
    preview: "/projects/nightfallpain.webp",
    github: "https://github.com/mgarcia333/nightfallpain",
  },
};

export function buildProjects(
  translations: Record<string, { title: string; description: string }>
): Project[] {
  return Object.entries(projectsShared).map(([id, meta]) => ({
    id,
    ...meta,
    ...translations[id],
  }));
}
