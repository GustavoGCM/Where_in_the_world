/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
