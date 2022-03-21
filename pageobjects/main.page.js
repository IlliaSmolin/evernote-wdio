const Page = require("./page");
const { Button, Text } = require("../elements/index");

class MainPage extends Page {
  constructor() {
    super();
  }

  get userDetails() {
    return new Button("#qa-NAV_USER");
  }
  get spinner() {
    return new Text(`//span[text()="Getting started…"]`);
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
