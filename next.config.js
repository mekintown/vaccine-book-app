/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: ["drive.google.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
