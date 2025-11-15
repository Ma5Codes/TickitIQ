import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* existing config options */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "affable-alligator-569.convex.cloud",
        pathname: "/api/storage/**",
      },
      {
        protocol: "https",
        hostname: "friendly-bass-132.convex.cloud",
        pathname: "/api/storage/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors during production builds
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore TypeScript errors during production builds
  },
};

export default nextConfig;
