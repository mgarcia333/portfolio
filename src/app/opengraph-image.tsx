import { ImageResponse } from "next/og";
import { loadArchivoBlack, OG_FONT_NAME, ogFonts } from "@/lib/og-font";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Moisés García Poveda — Full-Stack Software Developer";

export default async function OpengraphImage() {
  const font = await loadArchivoBlack();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 84px",
          background: "#f3eee3",
          color: "#16130e",
          fontFamily: font ? OG_FONT_NAME : "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 400 }}>¡Hola! Soy</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 112,
            fontWeight: 400,
            lineHeight: 1,
            whiteSpace: "nowrap",
            marginTop: 20,
            textTransform: "uppercase",
            letterSpacing: -2,
          }}
        >
          <div style={{ display: "flex" }}>Moisés García</div>
          <div style={{ display: "flex" }}>Poveda</div>
        </div>
        <div style={{ display: "flex", marginTop: 44 }}>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 400,
              padding: "12px 24px",
              background: "#ff5a36",
              border: "4px solid #16130e",
              boxShadow: "8px 8px 0 #16130e",
            }}
          >
            Full-stack developer · Barcelona
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts(font) }
  );
}
