/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.vans.com','static.nike.com','cdn.shopify.com','assets.adidas.com','assets.reebok.com'],
  },
}

module.exports = nextConfig
