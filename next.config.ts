import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Add image loader for static export
  images: {
    unoptimized: true,
  },
  // Disable server components for static export
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
