const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÉÍÓÚáéíóú¡!·-+/ ";

export const OG_FONT_NAME = "Archivo";

type Weight = 400 | 700;

/**
 * The OG/icon renderer only ships a regular-weight font, so Archivo has to be
 * loaded explicitly. These routes are prerendered at build time; if the font
 * can't be fetched we return null and the caller falls back to the default.
 */
async function loadArchivo(weight: Weight): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Archivo:wght@${weight}&text=${encodeURIComponent(GLYPHS)}`
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export async function loadOgFonts() {
  const [regular, bold] = await Promise.all([loadArchivo(400), loadArchivo(700)]);
  const fonts = [
    regular && { name: OG_FONT_NAME, data: regular, style: "normal" as const, weight: 400 as const },
    bold && { name: OG_FONT_NAME, data: bold, style: "normal" as const, weight: 700 as const },
  ].filter((font): font is NonNullable<typeof font> => Boolean(font));

  return {
    fonts: fonts.length ? fonts : undefined,
    family: fonts.length ? OG_FONT_NAME : "sans-serif",
  };
}
