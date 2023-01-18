const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const path = require('path')

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  features: {
    previewMdx2: true
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src')
    }
    config.plugins = [...config.plugins, new VanillaExtractPlugin()]
    return config
  }
}
