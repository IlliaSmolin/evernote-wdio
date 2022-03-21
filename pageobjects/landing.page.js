const Page = require("./page");
const { Image, Button } = require("../elements/index");
const allureHelper = require("../helpers/allure.helper");

class LandingPage extends Page {
  constructor() {
    super();
  }

  get logo() {
    return new Image(".global-logo");
  }
  get logInButton() {
    return new Button(`//a[text()="Log In"]`);
  }

  async open() {
    await super.open();
    await this.logo.waitForDisplayed();
  }
  async clickLogInButton() {
    allureHelper.addStep(`Click "Log In" button`);
    await this.logInButton.click();
  }
}

module.exports = new LandingPage();
