const allureReporter = require('@wdio/allure-reporter').default;

class AllureHelper {
  addStep(text) {
    allureReporter.addStep(text);
  }
}

module.exports = new AllureHelper();
