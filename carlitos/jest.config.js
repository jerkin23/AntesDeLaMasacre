module.exports = {
  testEnvironment: 'jsdom', // or other test environment if needed
  moduleNameMapper: {
    // ... other mappers (if any)
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Keep this line
};