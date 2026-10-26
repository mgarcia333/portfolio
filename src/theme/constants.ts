export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const THEME_COLORS: Record<Theme, string> = {
  dark: "#14120e",
  light: "#f3eee3",
};
