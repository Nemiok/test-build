/* eslint-disable @typescript-eslint/no-var-requires, unicorn/prefer-module */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageReporters: ['html', 'text', 'cobertura'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/*',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/coverage/**',
    '!<rootDir>/pages/_app.tsx',
    '!<rootDir>/pages/index.tsx',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel', 'linaria/babel'] }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
