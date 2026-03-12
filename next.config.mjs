/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  images: {
    remotePatterns: [new URL("https://rickandmortyapi.com/api/character/**")],
  },
};

export default nextConfig;
