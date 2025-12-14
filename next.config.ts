import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Recommended for Vercel + Next.js 14+
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Ensures images work correctly on Vercel
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
