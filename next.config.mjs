const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? `/${repository}` : '',
  assetPrefix: isGithubActions ? `/${repository}/` : '',
};

export default nextConfig;
