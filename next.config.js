const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.optimization.splitChunks = false;

    return config;
  },
  reactStrictMode: true,
};

module.exports = withVanillaExtract(nextConfig);
