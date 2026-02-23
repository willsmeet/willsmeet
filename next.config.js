/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['willsmeet.vercel.app', 'willsmeet.com', 'images.unsplash.com', 'pixabay.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
