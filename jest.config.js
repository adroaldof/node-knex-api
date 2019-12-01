module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  testEnvironment: 'node',
  transform: { '^.+\\.ts$': 'ts-jest' },
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80, statements: 80 },
  },
};
