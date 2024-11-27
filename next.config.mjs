/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mojo-infinity",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
