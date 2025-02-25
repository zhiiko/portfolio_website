import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Add image loader for static export
  images: {
    unoptimized: true,
  },
  // Experimental features removed since they're not recognized
  experimental: {
  },
};

export default nextConfig;
