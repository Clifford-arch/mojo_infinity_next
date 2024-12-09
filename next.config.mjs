/** @type {import('next').NextConfig} */
const nextConfig = {
  // To run project in local remove the assetPrefix line
  // assetPrefix: '/mojo-wealth-ssr/',
  // compress: true,
  // images: {
  //   domains: ["sandboxwealth-st.mojoinfinity.com"], // Add the hostname here
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'src="sandboxwealth-st.mojoinfinity.com',
        port: "",
        pathname: "/images/mm-infinity-logo.svg",
      },
    ],
  },

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
