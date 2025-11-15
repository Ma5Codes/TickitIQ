import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  experimental: {
    appDir: true, // ✅ Enable App Router experimental features
  },
  output: "standalone", // ✅ Helps with dynamic pages / client-only hooks
};

export default nextConfig;
