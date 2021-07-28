module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/js/*.js',
  ],
  moduleFileExtensions: ['js'],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
};