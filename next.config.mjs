/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Enable importing SVG images as components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

export default nextConfig;
