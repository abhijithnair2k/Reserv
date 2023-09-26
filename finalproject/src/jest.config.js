module.exports = {
    // The root of your project directory.
    // Change this to match your project structure if needed.
    rootDir: './',
  
    // A list of file extensions your modules use.
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    "modulePaths": ["<rootDir>/src", "<rootDir>/src/lib"],

  
    // The test environment that will be used for testing.
    testEnvironment: 'jsdom',
    testEnvironment: 'node',
  
    // A list of paths to directories that Jest should use to search for files.
    // This typically includes the directory where your tests are located.
    testMatch: ['<rootDir>/src/**/*.test.js', '<rootDir>/src/**/*.test.jsx'],
  
    // Transform files with Babel to enable ES6+ features in your tests.
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  
    // Ignore files or directories that should not be included in the test run.
    // For example, you can ignore node_modules.
    // Make sure to customize this list according to your project structure.
    // Also, consider adding other common exclusions like build or dist directories.
    modulePathIgnorePatterns: ['<rootDir>/node_modules'],
  
    // Setup files that should be run before running tests.
    // You can use this for setting up test-specific configurations.
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.js', // Adjust the glob pattern to match your source files.
      ],
  
    // Collect code coverage information for your tests.
    // You can generate coverage reports using Jest's built-in features.
    // Optionally, you can configure coverageThresholds for minimum coverage requirements.
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
  
    // A list of reporters to use when running tests.
    // You can configure Jest to output test results in various formats.
    // For example, you can use 'jest-junit' for JUnit-style XML output.
    // reporters: ['default', 'jest-junit'],
  
    // Any other custom configuration options can be added here as needed.
  };
  
  