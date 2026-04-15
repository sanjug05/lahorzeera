const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const [owner = '', repo = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserOrOrgPagesRepo = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath = isGithubActions && repo && !isUserOrOrgPagesRepo ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
