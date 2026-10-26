import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-font";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const { fonts, family } = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eeeae2",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            background: "#15121d",
            color: "#eeeae2",
            fontSize: 64,
            fontWeight: 700,
            fontFamily: family,
          }}
        >
          MG
          <div
            style={{ display: "flex", width: 44, height: 6, marginTop: 6, background: "#b4ff39" }}
          />
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
