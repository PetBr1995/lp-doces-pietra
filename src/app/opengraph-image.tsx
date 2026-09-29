import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem de compartilhamento (WhatsApp, Instagram, Facebook, Google), gerada no build
export default async function OpengraphImage() {
  const icon = await readFile(join(process.cwd(), "src/app/icon.svg"), "base64");

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
          color: "#fff",
          background:
            "radial-gradient(ellipse 60% 55% at 50% 40%, rgba(160,60,200,0.6), transparent 70%), linear-gradient(180deg, #3a0f55 0%, #2a0b3d 55%, #1e0630 100%)",
        }}
      >
        <img src={`data:image/svg+xml;base64,${icon}`} width={160} height={160} alt="" />
        <div style={{ marginTop: 36, fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
        <div style={{ marginTop: 12, fontSize: 36, color: "rgba(255,255,255,0.8)" }}>
          Doces artesanais para festas e encomendas
        </div>
        <div
          style={{
            marginTop: 40,
            padding: "14px 36px",
            borderRadius: 999,
            background: "#d63a8e",
            fontSize: 30,
          }}
        >
          Faça sua encomenda
        </div>
      </div>
    ),
    size,
  );
}
