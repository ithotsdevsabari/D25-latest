/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    basePath: '', // Your subdirectory path
    assetPrefix: '', // Ensure assets are served correctly
  }
  
  module.exports = nextConfig