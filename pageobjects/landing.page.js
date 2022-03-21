const Page = require("./page");
const { Image, Button } = require("../elements/index");

const loginPage = require("./login.page");

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
    await this.logInButton.click();
    await loginPage.emailField.waitForDisplayed();
  }
}

module.exports = new LandingPage();
