const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      module.exports = defineConfig({
        e2e: {
          setupNodeEvents(on, config) {
            {"reporter"; "mochawesome",
            "reportDir"; "cypress/report/mochawesome-report",
            "overwrite"; true,
            "html"; true,
            "jsom"; false,
            "timestamp"; "mmddyyyy_HHMMss" }}
        }
      })
    },
  },
});
