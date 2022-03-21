const allureHelper = require("../helpers/allure.helper");

class Page {
  constructor() {
    this.url = "/";
  }

  async open() {
    allureHelper.addStep(`Open page by url: ${browser.options.baseUrl}${this.url}`);
    await browser.url(this.url);
  }
}

module.exports = Page;
