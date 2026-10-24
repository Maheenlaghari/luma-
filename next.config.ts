import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    formats: ["image/avif", "image/webp"]
  },
  experimental: {
    agentFeedback: true
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css"
      }
    }
  }
};

export default nextConfig;
