const { jsWithTs: tsjPreset } = require("ts-jest/presets")
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    ...tsjPreset.transform
  },
  roots: ["<rootDir>/src/"],
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "@Models/(.*)$": "<rootDir>/src/models/$1",
    "@Components/(.*)$": "<rootDir>/src/components/$1",
    "@Constants/(.*)$": "<rootDir>/src/constants/$1",
    "@Contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "@Helper/(.*)$": "<rootDir>/src/helper/$1",
    "@Hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "@Pages/(.*)$": "<rootDir>/src/pages/$1",
    "@Layout/(.*)$": "<rootDir>/src/layout/$1",
    "@Routes/(.*)$": "<rootDir>/src/routes/$1"
  }
}
