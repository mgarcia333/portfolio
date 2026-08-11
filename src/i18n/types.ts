import type { ComponentType } from "react";

export type Locale = "es" | "ca" | "en";

export type StackIcon = ComponentType<{ className?: string }>;

export interface StackItem {
  name: string;
  icon: StackIcon;
}

export interface StackCategory {
  id: string;
  label: string;
  items: StackItem[];
}

export interface ExperienceEntry {
  tag: string;
  status: string;
  current: boolean;
  org: string;
  role: string;
  description: string;
}

export type ProjectCategory = "webapp" | "unity" | "template";

export interface Project {
  id: string;
  category: ProjectCategory;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  preview: string;
  github?: string;
}

export interface Social {
  label: string;
  href: string;
  icon: StackIcon;
}

export interface NavItem {
  label: string;
  href: string;
  type: "anchor" | "route";
}

export interface SiteContent {
  profile: {
    name: string;
    nameLines: [string, string];
    initials: string;
    role: string;
    location: string;
    coordinates: string;
    timeZone: string;
    status: string;
    email: string;
    github: string;
    linkedin: string;
  };
  nav: NavItem[];
  menuToggle: string;
  themeToggle: string;
  heroTicker: string[];
  hero: {
    badge: string;
    tagline: string;
    ctaWork: string;
    ctaContact: string;
  };
  dossier: {
    kicker: string;
    title: string;
    bio: string[];
    fields: { label: string; value: string }[];
    signalActive: string;
    viewMore: string;
  };
  homeWork: {
    kicker: string;
    title: string;
    description: string;
    viewAll: string;
  };
  stack: {
    kicker: string;
    title: string;
    description: string;
    categories: StackCategory[];
    viewMore: string;
  };
  experience: {
    kicker: string;
    title: string;
    entries: ExperienceEntry[];
    viewMore: string;
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    emailCta: string;
    localTime: string;
  };
  work: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    selectedWork: string;
    title: string;
    description: string;
    categories: Record<ProjectCategory, string>;
    projects: Project[];
  };
  aboutPage: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    kicker: string;
    title: string;
    intro: string[];
    fields: { label: string; value: string }[];
    principles: { heading: string; body: string }[];
    education: { heading: string; body: string };
  };
  stackPage: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    kicker: string;
    title: string;
    description: string;
    categories: (StackCategory & { description: string })[];
  };
  experiencePage: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    kicker: string;
    title: string;
    description: string;
    entries: (ExperienceEntry & { highlights: string[]; stack: string[] })[];
  };
  footer: {
    builtWith: string;
    top: string;
  };
  boot: string[];
  socials: Social[];
}
