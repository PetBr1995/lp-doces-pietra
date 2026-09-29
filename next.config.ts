import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // quando entrarem fotos dos doces, o next/image já entrega nos formatos mais leves
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/cursors/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
