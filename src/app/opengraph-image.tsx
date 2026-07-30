import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Moises Garcia Poveda — Full-Stack Software Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px",
          background: "#12131a",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#96c7ff", fontSize: 24, letterSpacing: 6 }}>
          PORTFOLIO_OS // BARCELONA, ES
        </div>
        <div style={{ display: "flex", fontSize: 80, fontWeight: 700, color: "#e3e2e6", marginTop: 28 }}>
          MOISES GARCIA POVEDA
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#96c7ff", marginTop: 12 }}>
          Full-Stack Software Developer
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#c7c6ca", marginTop: 48, gap: 28 }}>
          <div style={{ display: "flex" }}>VUE</div>
          <div style={{ display: "flex" }}>REACT</div>
          <div style={{ display: "flex" }}>NODE</div>
          <div style={{ display: "flex" }}>DOCKER</div>
          <div style={{ display: "flex" }}>CLOUDFLARE</div>
        </div>
      </div>
    ),
    size
  );
}
