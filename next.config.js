/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["nextjsdev.com", "avatars.githubusercontent.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
