const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = configuredBasePath && configuredBasePath !== "/"
  ? `/${configuredBasePath}`.replace(/\/{2,}/g, "/").replace(/\/$/, "")
  : "";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages,
  images: { unoptimized: isGitHubPages },
};

export default nextConfig;
