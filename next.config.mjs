/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.pinterest.co.uk",
      },
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
    ],
  },
};

export default nextConfig;
