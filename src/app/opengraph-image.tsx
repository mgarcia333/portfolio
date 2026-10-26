import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-font";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Moisés García — Full-Stack Software Developer";

export default async function OpengraphImage() {
  const { fonts, family } = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background: "#eeeae2",
          color: "#15121d",
          fontFamily: family,
          borderTop: "14px solid #15121d",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>Moisés García</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
              whiteSpace: "nowrap",
            }}
          >
            <div style={{ display: "flex" }}>Webs completas,</div>
            <div style={{ display: "flex", color: "#5a2d9c" }}>de la interfaz al servidor.</div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, fontWeight: 400, color: "#4a4556" }}>
          Desarrollador full-stack · Barcelona
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
