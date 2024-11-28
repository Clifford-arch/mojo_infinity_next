/** @type {import('next').NextConfig} */
const nextConfig = {
  // To run project in local remove the assetPrefix line
  // assetPrefix: '/mojo-wealth-ssr/',
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
