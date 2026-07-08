import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "The Russian Tailor · Custom Tailoring & Expert Alterations, Victoria BC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [extrabold, italic] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/besley-extrabold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/besley-medium-italic.ttf")),
  ]);

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
          backgroundColor: "#16241c",
          color: "#a49160",
          fontFamily: "Besley",
          border: "3px solid #a49160",
          // inner keyline, fascia-style
          boxShadow: "inset 0 0 0 14px #16241c, inset 0 0 0 15px rgba(164,145,96,0.45)",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#cfc6b0",
            fontStyle: "italic",
          }}
        >
          Master tailor · Trained in St. Petersburg
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            marginTop: 30,
            lineHeight: 1.02,
            textTransform: "uppercase",
            letterSpacing: 4,
            textShadow: "5px 5px 0 #0e1712",
            textAlign: "center",
          }}
        >
          The Russian Tailor
        </div>
        <div
          style={{
            marginTop: 34,
            display: "flex",
            alignItems: "center",
            gap: 22,
          }}
        >
          <div style={{ width: 70, height: 1, backgroundColor: "#a49160" }} />
          <div
            style={{
              fontSize: 30,
              fontStyle: "italic",
              color: "#e7e2d2",
            }}
          >
            Custom Tailoring &amp; Expert Alterations
          </div>
          <div style={{ width: 70, height: 1, backgroundColor: "#a49160" }} />
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#cfc6b0",
          }}
        >
          No. 203 · 612 View Street · Victoria BC
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Besley", data: extrabold, weight: 800, style: "normal" },
        { name: "Besley", data: italic, weight: 500, style: "italic" },
      ],
    }
  );
}
