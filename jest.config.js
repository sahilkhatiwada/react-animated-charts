module.exports = {
  preset: '@stencil/core/testing',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/**/*.d.ts'
  ],
  coverageReporters: ['lcov', 'text-summary'],
}; 