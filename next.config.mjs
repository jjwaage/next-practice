/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    basePath: "/second-site", // Change this to match your GitHub repository name
    assetPrefix: "/second-site/"
  };
  
  export default nextConfig;