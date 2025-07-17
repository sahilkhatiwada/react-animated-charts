module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  testMatch: [
    '<rootDir>/src/components/heatmap/heatmap.spec.tsx',
    '<rootDir>/src/components/pie-chart/pie-chart.spec.tsx',
    '<rootDir>/src/components/histogram/histogram.spec.tsx',
    '<rootDir>/src/components/candlestick-chart/candlestick-chart.spec.tsx',
    '<rootDir>/src/components/gauge-chart/gauge-chart.spec.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: 'coverage-react',
  collectCoverageFrom: [
    'src/components/heatmap/heatmap.tsx',
    'src/components/pie-chart/pie-chart.tsx',
    'src/components/histogram/histogram.tsx',
    'src/components/candlestick-chart/candlestick-chart.tsx',
    'src/components/gauge-chart/gauge-chart.tsx',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}; 