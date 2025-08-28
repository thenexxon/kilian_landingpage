import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vumbnail.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
