module.exports = {
  preset: "ts-jest",
  testMatch: ["**/tests/**/*.spec.ts"],
  globals: {
    "ts-jest": {
      module: "es6",
      diagnostics: false
    }
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testURL: "http://localhost",
  watchPathIgnorePatterns: [
    "<rootDir>/tests/outputs"
  ]
};
