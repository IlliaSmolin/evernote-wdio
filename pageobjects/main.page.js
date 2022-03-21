const Page = require("./page");

class MainPage extends Page {
  constructor() {
    super();
  }

  get userDetails() {
    return $("#qa-NAV_USER");
  }
  get spinner() {
    return $(`//span[text()="Getting started…"]`);
  }

  async waitForLoaderToDisappear() {
    await this.spinner.waitForDisplayed();
    await this.userDetails.waitForDisplayed();
  }

  async verifyUserIsLoggedIn() {
    expect(await this.userDetails.isDisplayed()).toEqual(true);
  }
}

module.exports = new MainPage();
