import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Vercelの画像最適化の上限超過(402)で画像が配信されなくなるため、最適化せず直接配信する
    unoptimized: true,
  },
};

export default nextConfig;
