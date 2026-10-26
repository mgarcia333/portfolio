export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const DEFAULT_THEME: Theme = "light";
export const THEME_COLORS: Record<Theme, string> = {
  dark: "#100e17",
  light: "#eeeae2",
};
