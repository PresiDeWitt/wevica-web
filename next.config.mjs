// Security headers (CSP with nonces) are handled in middleware.ts
// next.config.mjs only contains Next.js configuration

const nextConfig = {
  reactStrictMode: true,
  // Use process.cwd() instead of hardcoded absolute path
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
