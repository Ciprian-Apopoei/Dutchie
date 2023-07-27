/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  i18n: {
    locales: ["en-US", "ro"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  // images: {
  //   loader: "custom",
  //   loaderFile: "./imageLoader.js",
  // },
};
