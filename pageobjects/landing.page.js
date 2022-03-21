const loginPage = require("./login.page");

class LandingPage {
  get logo() {
    return $(".global-logo");
  }
  get logInButton() {
    return $(`//a[text()="Log In"]`);
  }

  async open() {
    await browser.url("/");
    await this.logo.waitForDisplayed();
  }
  async clickLogInButton() {
    await this.logInButton.waitForDisplayed();
    await this.logInButton.click();
    await loginPage.emailField.waitForDisplayed();
  }
}

module.exports = new LandingPage();
