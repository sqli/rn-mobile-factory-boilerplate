/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', '/src'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@enums/(.*)': '<rootDir>/src/enums/$1',
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@redux/(.*)': '<rootDir>/src/redux/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@middlewares/(.*)': '<rootDir>/src/redux/middlewares/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@slices/(.*)': '<rootDir>/src/redux/slices/$1',
    '^@theme/(.*)': '<rootDir>/src/theme/$1',
    '^@services/(.*)': '<rootDir>/src/services/$1',
    '^@managers/(.*)': '<rootDir>/src/managers/$1',
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/mocks/fileMock.ts',
    '^@fortawesome/react-native-fontawesome$': '<rootDir>/src/mocks/fontAwesomeMock.ts',
  },

  // A preset that is used as a base for Jest's configuration
  preset: 'react-native',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.+(js|jsx|ts|tsx)',
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],

  // This option allows the use of a custom results processor
  testResultsProcessor: 'jest-sonar-reporter',

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

export default config;
