const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");
const cucumber = require('cypress-cucumber-preprocessor').default

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress\\config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
      const file = config.env.configFile || "";

      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://webdriveruniversity.com/",
    // cypress do not support chromeWebSecurity: false, on firefox browser
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    experimentalStudio: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    // viewportWidth: 1080,
    // viewportHeight: 1920,
    reporter: "cypress-multi-reporters",
    retries: {
      runMode: 0,
      openMode: 1,
    },
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    env: {
      first_name: "Hanna",
      webdriveruni_homepage: "https://webdriveruniversity.com/",
    },
  },
});
