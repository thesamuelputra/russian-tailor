import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "The Russian Tailor — Custom Tailoring & Expert Alterations, Victoria BC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [semibold, italic] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/fraunces-semibold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/fraunces-italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#f5f2ea",
          color: "#2e2620",
          fontFamily: "Fraunces",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a3332a",
          }}
        >
          Victoria, British Columbia
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 600,
            marginTop: 28,
            lineHeight: 1.05,
          }}
        >
          The Russian Tailor
        </div>
        <div
          style={{
            fontSize: 40,
            fontStyle: "italic",
            fontWeight: 400,
            marginTop: 24,
            color: "#5c5148",
          }}
        >
          Custom Tailoring · Expert Alterations
        </div>
        <div style={{ marginTop: 56, display: "flex", gap: 18 }}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              style={{ width: 60, height: 6, backgroundColor: "#a3332a" }}
            />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: semibold, weight: 600, style: "normal" },
        { name: "Fraunces", data: italic, weight: 400, style: "italic" },
      ],
    }
  );
}
