const Page = require("./page");
const loginPage = require("./login.page");

class LandingPage extends Page {
  constructor() {
    super();
  }

  get logo() {
    return $(".global-logo");
  }
  get logInButton() {
    return $(`//a[text()="Log In"]`);
  }

  async open() {
    await super.open();
    await this.logo.waitForDisplayed();
  }
  async clickLogInButton() {
    await this.logInButton.waitForDisplayed();
    await this.logInButton.click();
    await loginPage.emailField.waitForDisplayed();
  }
}

module.exports = new LandingPage();
