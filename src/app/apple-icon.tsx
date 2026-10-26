import { ImageResponse } from "next/og";
import { loadArchivoBlack, OG_FONT_NAME, ogFonts } from "@/lib/og-font";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          background: "#f3eee3",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 132,
            height: 132,
            background: "#ff5a36",
            border: "6px solid #16130e",
            boxShadow: "8px 8px 0 #16130e",
            color: "#16130e",
            fontSize: 76,
            fontWeight: 400,
            fontFamily: font ? OG_FONT_NAME : "sans-serif",
          }}
        >
          MG
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts(font) }
  );
}
