import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "The Russian Tailor · Custom Tailoring & Expert Alterations, Victoria BC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const italiana = await readFile(
    join(process.cwd(), "assets/fonts/italiana-regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f7f4ec",
          color: "#26221b",
          fontFamily: "Italiana",
          border: "1px solid rgba(38,34,27,0.35)",
          boxShadow: "inset 0 0 0 18px #f7f4ec, inset 0 0 0 19px rgba(38,34,27,0.25)",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#5d564a",
          }}
        >
          Master tailor · Trained in St. Petersburg
        </div>
        <div
          style={{
            fontSize: 104,
            marginTop: 36,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: 14,
            textAlign: "center",
          }}
        >
          The Russian Tailor
        </div>
        <div
          style={{
            marginTop: 42,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          <div style={{ width: 80, height: 1, backgroundColor: "rgba(38,34,27,0.4)" }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#5d564a",
            }}
          >
            Custom Tailoring &amp; Expert Alterations
          </div>
          <div style={{ width: 80, height: 1, backgroundColor: "rgba(38,34,27,0.4)" }} />
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 17,
            letterSpacing: 9,
            textTransform: "uppercase",
            color: "#5d564a",
          }}
        >
          No. 203 · 612 View Street · Victoria BC
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Italiana", data: italiana, weight: 400, style: "normal" }],
    }
  );
}
