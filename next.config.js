/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "framer-motion"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
