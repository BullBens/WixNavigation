
const { jestPreset: tsJest } = require('ts-jest');

module.exports = {
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  ...tsJest,
  preset: "react-native",
  transform: {
    ...tsJest.transform,
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
    }
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
};