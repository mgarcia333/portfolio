export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const DEFAULT_THEME: Theme = "dark";
export const THEME_COLORS: Record<Theme, string> = {
  dark: "#0e0a18",
  light: "#f7f5fb",
};
