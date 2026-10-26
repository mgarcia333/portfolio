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
          background: "#0e0a18",
          color: "#eeeaf7",
          fontFamily: family,
        }}
      >
        <div style={{ display: "flex", height: 12, width: "100%" }}>
          <div style={{ display: "flex", width: "72%", background: "#7b3fd0" }} />
          <div style={{ display: "flex", width: "16%", background: "#8dff3b" }} />
          <div style={{ display: "flex", width: "12%", background: "#7b3fd0" }} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            padding: "0 96px",
          }}
        >
          <div
            style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}
          >
            Moisés García
          </div>
          <div
            style={{ display: "flex", marginTop: 28, fontSize: 44, fontWeight: 700, color: "#b48cf2" }}
          >
            Full-stack developer
          </div>
          <div
            style={{ display: "flex", marginTop: 12, fontSize: 32, fontWeight: 400, color: "#9b92b4" }}
          >
            Barcelona · Vue, React, Node, Docker, Cloudflare
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
