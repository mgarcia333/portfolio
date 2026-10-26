const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÉÍÓÚáéíóú¡!·-+/ ";

/**
 * The OG/icon renderer only ships a regular-weight font, so the poster look has
 * to be loaded explicitly. These routes are prerendered at build time; if the
 * font can't be fetched we return null and the caller falls back to the default.
 */
export async function loadArchivoBlack(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Archivo+Black&text=${encodeURIComponent(GLYPHS)}`
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export const OG_FONT_NAME = "Archivo Black";

export function ogFonts(data: ArrayBuffer | null) {
  return data
    ? [{ name: OG_FONT_NAME, data, style: "normal" as const, weight: 400 as const }]
    : undefined;
}
