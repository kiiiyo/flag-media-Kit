/* eslint-disable @typescript-eslint/no-var-requires */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withVanillaExtract = createVanillaExtractPlugin()

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    compiler: {
      removeConsole: PHASE_DEVELOPMENT_SERVER
        ? false
        : {
            exclude: ['error']
          }
    },
    images: {
      // next export では画像の最適化が使えないので無効にする
      unoptimized: true
    },
    reactStrictMode: true,
    swcMinify: true
  }

  return withVanillaExtract(nextConfig)
}
