import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Add base path for GitHub Pages
  basePath: '/portfolio_website',
  // Add asset prefix for GitHub Pages
  assetPrefix: '/portfolio_website',
  // Add image loader for static export
  images: {
    unoptimized: true,
  },
  // Experimental features removed since they're not recognized
  experimental: {
  },
};

export default nextConfig;
