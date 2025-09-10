import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'cdn.pixabay.com',
      'images.freeimages.com',
      'www.publicdomainpictures.net'
    ],
  },
};

export default nextConfig;
