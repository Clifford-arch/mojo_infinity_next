/** @type {import('next').NextConfig} */
const nextConfig = {
  // To run project in local remove the assetPrefix line
  // assetPrefix: '/mojo-wealth-ssr/',
  // compress: true,
  experimental: {
    modern: true,
    esmExternals: true,
  },
  compress: true,
  optimizeFonts: true,
  swcMinify: true,
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
