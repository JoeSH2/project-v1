import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  rootDir: '../../',
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>src'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponents.tsx'),
    '\\.(jpg|jpeg|png)$': path.resolve(__dirname, 'jestEmptyComponents.tsx'),
    '^@/(.*)$': '<rootDir>src/$1',
  },
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/config/jest/setupTest.ts'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/html-report',
        filename: 'report.html',
        openReport: true,
      },
    ],
  ],
  testResultsProcessor: './node_modules/jest-html-reporter',
};

export default config;
