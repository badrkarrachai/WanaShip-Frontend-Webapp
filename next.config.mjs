/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagizer.imageshack.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
