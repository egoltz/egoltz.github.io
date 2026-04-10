/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/[REPO_NAME]', // TODO: Set to actual GitHub repo name before deploying
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
