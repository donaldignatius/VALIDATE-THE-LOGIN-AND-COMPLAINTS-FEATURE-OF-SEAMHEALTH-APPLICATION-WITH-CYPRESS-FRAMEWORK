const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    
      "pageLoadTimeout": 80000, 
    
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      // implement node event listeners here
    },
    "reporter" : "mochawesome",
    "reporterOptions" : {
      "charts" : true,
      "overwrite" : false,
      "Html" : false,
      "json" : true,
      "reportDir" : "cypress/reports"
    }
  },
});
