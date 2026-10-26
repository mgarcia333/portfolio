import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-font";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          background: "#15121d",
          color: "#eeeae2",
          fontSize: 21,
          fontWeight: 700,
          fontFamily: family,
        }}
      >
        M
      </div>
    ),
    { ...size, fonts }
  );
}
