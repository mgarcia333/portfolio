export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const THEME_COLORS: Record<Theme, string> = {
  dark: "#12131a",
  light: "#f6f8fb",
};
