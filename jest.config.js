module.exports = {
  cacheDirectory: ".jest/cache",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: ["detox"],
  preset: "react-native",
  setupFiles: [
    "./node_modules/react-native/jest/setup.js"
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  testRegex: "(/__tests__/.*|\\.(unit|rntl|snapshot))\\.(ts|tsx|js)$",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@?react-native|@react-native-community)",
  ],
};
