/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      'github.com',
    ]
  }
};

module.exports = nextConfig;
