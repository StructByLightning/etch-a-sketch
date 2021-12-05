module.exports = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: "@svgr/webpack",
      options: {
        svgo: false,
      },
    });
    return config;
  },
};
