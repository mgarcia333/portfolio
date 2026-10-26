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
  status: string;
  current: boolean;
  org: string;
  role: string;
  description: string;
}

export type ProjectCategory = "client" | "webapp" | "unity" | "template";

export interface Project {
  id: string;
  category: ProjectCategory;
  featured: boolean;
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

export interface Fact {
  label: string;
  value: string;
}

export interface SiteContent {
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
  };
  nav: NavItem[];
  menuOpen: string;
  menuClose: string;
  themeToggle: string;
  ui: {
    skipToContent: string;
    visit: string;
    viewCode: string;
    /** Use `{title}` where the project name goes. */
    codeLabel: string;
    opensInNewTab: string;
    copyEmail: string;
    emailCopied: string;
    copyFailed: string;
    backToTop: string;
    language: string;
  };
  /** Wrap a phrase in `*asterisks*` to emphasise it (rendered bold). */
  hero: {
    tagline: string;
    ctaWork: string;
    ctaContact: string;
  };
  about: {
    title: string;
    bio: string[];
    facts: Fact[];
    viewMore: string;
  };
  homeWork: {
    title: string;
    description: string;
    viewAll: string;
  };
  stack: {
    title: string;
    description: string;
    categories: StackCategory[];
    viewMore: string;
  };
  experience: {
    title: string;
    entries: ExperienceEntry[];
    viewMore: string;
  };
  contact: {
    title: string;
    description: string;
    emailCta: string;
  };
  work: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    title: string;
    description: string;
    filterLabel: string;
    filterAll: string;
    /** Use `{n}` where the number goes. */
    countOne: string;
    countMany: string;
    categories: Record<ProjectCategory, string>;
    tags: Record<ProjectCategory, string>;
    projects: Project[];
  };
  aboutPage: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    title: string;
    intro: string[];
    principles: { heading: string; body: string }[];
    education: { heading: string; body: string };
  };
  stackPage: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    title: string;
    description: string;
    categories: (StackCategory & { description: string })[];
  };
  experiencePage: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    title: string;
    description: string;
    entries: (ExperienceEntry & { highlights: string[]; stack: string[] })[];
  };
  footer: {
    note: string;
    top: string;
  };
  socials: Social[];
}
