module.exports = {
  preset: 'react-native',
  cacheDirectory: './cache',
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
};
