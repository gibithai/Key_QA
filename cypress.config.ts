/* eslint-disable @typescript-eslint/space-before-function-paren */
import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'cypress/fixtures',
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  numTestsKeptInMemory: 50,
  waitForAnimations: true,
  watchForFileChanges: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
