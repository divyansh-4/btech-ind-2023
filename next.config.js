/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true, displayStaticImages: true },
};
module.exports = nextConfig;
