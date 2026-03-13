/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This creates an 'out' folder with static HTML/CSS/JS
  images: {
    unoptimized: true,   // Required because GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;