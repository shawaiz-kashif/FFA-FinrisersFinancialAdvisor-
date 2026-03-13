/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Forces Next.js to build static HTML files
  images: {
    unoptimized: true,   // GitHub Pages doesn't support the image optimizer
  },
  // Replace 'FinrisersFinancialAdvisor' with your exact repository name
  basePath: '/FinrisersFinancialAdvisor', 
};

export default nextConfig;