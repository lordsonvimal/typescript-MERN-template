import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}"
  ],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/fixtures/",
    "/packs"
  ],
  coverageReporters: [
    "html",
    "json",
    "text",
  ],
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: "jsdom", // Default "node"
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

export default config;
