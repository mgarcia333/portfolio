import { ImageResponse } from "next/og";
import { loadArchivoBlack, OG_FONT_NAME, ogFonts } from "@/lib/og-font";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await loadArchivoBlack();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff5a36",
          border: "3px solid #16130e",
          color: "#16130e",
          fontSize: 20,
          fontWeight: 400,
          fontFamily: font ? OG_FONT_NAME : "sans-serif",
        }}
      >
        M
      </div>
    ),
    { ...size, fonts: ogFonts(font) }
  );
}
