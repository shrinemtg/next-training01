/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // secMinify: true     →本番環境で実行してファイルを圧縮やコードの最適化を行う
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
