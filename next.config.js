/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "d3e6waad2tujsa.cloudfront.net"],
  },
};

module.exports = nextConfig;
