/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack: (config) => {
    // Оптимизация для development режима
    if (process.env.NODE_ENV === 'development') {
      config.optimization = {
        ...config.optimization,
        minimize: false,
        splitChunks: false,
        runtimeChunk: false
      };
    }
    return config;
  }
};

module.exports = nextConfig;
