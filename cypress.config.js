const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor')

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    base_url: 'https://www.saucedemo.com/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      let options = browserify.defaultOptions

      options.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias: {
            '@tests': './tests',
            '@helpers': './tests/helpers'
          }
        },
      ])

      on('file:preprocessor', browserify(options))
    },
    specPattern: 'tests/specs/**/*.test.js'
  },
});
