/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    optimizeCss: false
  },
  images: {
      domains: ['res.cloudinary.com']
  }
  
}

module.exports = nextConfig
