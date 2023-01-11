const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    /* Note: Setup Alias */
    '^@/(.+)': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/src/**/*.spec.ts', '**/src/**/*.spec.tsx']
}

module.exports = createJestConfig(customJestConfig)
