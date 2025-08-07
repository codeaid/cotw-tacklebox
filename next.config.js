/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true
  },
  output: 'export',
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/',
      destination: '/fishes',
      permanent: true,
    }
  ],
  trailingSlash: false,
  webpack(config) {
    // Enable importing SVG images as components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = nextConfig;
