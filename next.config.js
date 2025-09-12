/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "framerusercontent.com",
      "dz1x1c630cl14.cloudfront.net",
      "dam.freshworks.com",
      "flagcdn.com",
      "picsum.photos",
    ],
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      // Assuming domain is deepkore.com, adjust if different
      {
        source: "/((?!api/).*)",
        has: [{ type: "host", value: "www.deepkore.com" }],
        destination: "https://deepkore.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
