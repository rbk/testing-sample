//Jest testing tutorial for Selenium JavaScript Testing
// This configuration properties are taken from the official Jest documentation which is available at https://jestjs.io/docs/en/configuration.html
//const {default} = require('jest-config');
module.exports = {
    setupFiles: [],
    transformIgnorePatterns: [
        "/node_modules/"
    ],
    testMatch: [
        "**/__tests__/**/*.js?(x)",
        "**/?(*.)+(spec|test).js?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/"
    ],
    watchman: true,
};