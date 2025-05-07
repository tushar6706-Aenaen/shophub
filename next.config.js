/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you'll use
  },
  // Enable static optimization
  output: 'standalone',
}

module.exports = nextConfig 