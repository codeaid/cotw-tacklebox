/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  webpack(config, { dev }) {
    // Enable importing SVG images as components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = nextConfig;
