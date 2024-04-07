const nextConfig = {
  images: {
    // domains: [
    //   "images.pexels.com",
    //   "img.freepik.com",
    //   "avatars.githubusercontent.com",
    //   "lh3.googleusercontent.com",
    //   "hot-uk-finds.vercel.app",
    //   "uksaverz.com",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "uksaverz.com",
      },
      {
        protocol: "https",
        hostname: "hot-uk-finds.vercel.app",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },

      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
