const nextConfig = {
    images: {
      domains: [
        "images.pexels.com",
        "img.freepik.com",
        "avatars.githubusercontent.com",
        "lh3.googleusercontent.com",
        "hot-uk-finds.vercel.app/",
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
  };
  
  export default nextConfig;
  
  
  