/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/Tim_stroy',
  assetPrefix: '/Tim_stroy/',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
}

module.exports = nextConfig
