import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import type { Project, ProjectCategory, Social, StackItem } from "./types";

export const profileShared = {
  name: "Moisés García",
  location: "Barcelona, ES",
  email: "moisesgp15@gmail.com",
  github: "https://github.com/mgarcia333",
  linkedin: "https://www.linkedin.com/in/MoisesGarPov",
};

export const socials: Social[] = [
  { label: "GitHub", href: profileShared.github, icon: SiGithub },
  { label: "LinkedIn", href: profileShared.linkedin, icon: FaLinkedin },
];

const names = (...list: string[]): StackItem[] => list.map((name) => ({ name }));

export const stackItemsByCategory: Record<string, StackItem[]> = {
  frontend: names(
    "Vue.js",
    "Vuetify",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript",
    "HTML",
    "CSS"
  ),
  databases: names("MongoDB", "MySQL", "PostgreSQL"),
  infra: names("Docker", "Oracle Cloud", "Cloudflare"),
  backend: names("Node.js", "PHP", "Laravel", "Java", "Sockets"),
  tools: names("Git", "Android Studio", "Unity"),
};

interface ProjectShared {
  category: ProjectCategory;
  featured?: boolean;
  stack: string[];
  url: string;
  preview: string;
  github?: string;
}

// Order matters: it is the order shown on /work ("all") and, for the ones
// flagged `featured`, the order of the six cards on the home page.
export const projectsShared: Record<string, ProjectShared> = {
  scenesbeats: {
    category: "webapp",
    featured: true,
    stack: ["AI Recommendations", "Spotify", "Letterboxd"],
    url: "https://scenesbeats.mgarciap.workers.dev/",
    preview: "/projects/scenesbeats.png",
    github: "https://github.com/mgarcia333/scenesbeats",
  },
  lastknightofaveron: {
    category: "unity",
    featured: true,
    stack: ["Unity", "WebGL", "Next.js"],
    url: "https://lastknightofaveron-web.mgarciap.workers.dev/",
    preview: "/projects/lastknightofaveron.webp",
    github: "https://github.com/mgarcia333/lastknightofaveron",
  },
  "sessio-continua": {
    category: "webapp",
    featured: true,
    stack: ["Cartelera", "Vanilla JS", "Python"],
    url: "https://sessio-continua.mgarciap.workers.dev/",
    preview: "/projects/sessio-continua.png",
    github: "https://github.com/mgarcia333/sessio-continua",
  },
  adictalia: {
    category: "client",
    featured: true,
    stack: ["Next.js", "Web corporativa", "Formulario de contacto"],
    url: "https://adictaliacontrolcenter.es/",
    preview: "/projects/adictalia.png",
  },
  "2kedit": {
    category: "webapp",
    featured: true,
    stack: ["Video Editor", "Web App", "Cloudflare Workers"],
    url: "https://2kedit.mgarciap.workers.dev/",
    preview: "/projects/2kedit.png",
    github: "https://github.com/mgarcia333/2kedit",
  },
  nightfallpain: {
    category: "unity",
    featured: true,
    stack: ["Unity", "WebGL", "Next.js"],
    url: "https://nightfallpain-web.mgarciap.workers.dev/",
    preview: "/projects/nightfallpain.webp",
    github: "https://github.com/mgarcia333/nightfallpain",
  },
  mado: {
    category: "webapp",
    stack: ["Chrome Extension", "Manifest V3", "JavaScript"],
    url: "https://mado.mgarciap.workers.dev/",
    preview: "/projects/mado.png",
    github: "https://github.com/mgarcia333/mado",
  },
  "chatbot-movies": {
    category: "webapp",
    stack: ["Chatbot", "Cloudflare Workers"],
    url: "https://chatbot-movies.mgarciap.workers.dev/",
    preview: "/projects/chatbot-movies.png",
    github: "https://github.com/mgarcia333/chatbot-movies",
  },
  "clothes-template": {
    category: "template",
    stack: ["E-commerce", "Next.js", "Cloudflare Workers"],
    url: "https://clothes-template.mgarciap.workers.dev/",
    preview: "/projects/clothes-template.webp",
    github: "https://github.com/mgarcia333/clothes-template",
  },
  "restaurant-template": {
    category: "template",
    stack: ["Restaurant", "Next.js", "Cloudflare Workers"],
    url: "https://restaurant-template.mgarciap.workers.dev/",
    preview: "/projects/restaurant-template.webp",
    github: "https://github.com/mgarcia333/restaurant-template",
  },
};

export function buildProjects(
  translations: Record<string, { title: string; description: string }>
): Project[] {
  return Object.entries(projectsShared).map(([id, { featured = false, ...meta }]) => ({
    id,
    featured,
    ...meta,
    ...translations[id],
  }));
}
