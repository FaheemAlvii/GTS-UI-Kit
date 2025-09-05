/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: basePath,
  assetPrefix: basePath,
  // Ensure proper asset loading
  experimental: {
    esmExternals: false
  }
};

module.exports = nextConfig;
