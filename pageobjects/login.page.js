const Page = require("./page");
const mainPage = require("./main.page");
const { Input, Button, Text } = require("../elements/index");

class LoginPage extends Page {
  constructor() {
    super();
    this.url = "/Login.action";
  }

  get emailField() {
    return new Input("#username");
  }
  get passwordField() {
    return new Input("#password");
  }
  get loginButton() {
    return new Button("#loginButton");
  }
  get incorrectPasswordValidator() {
    return new Text(`//div[contains(text(), "Incorrect password")]`);
  }

  async fillEmail(email) {
    await this.emailField.setValue(email);
  }
  async fillPassword(password) {
    await this.passwordField.setValue(password);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
  async clickContinueButton() {
    await this.clickLoginButton();
    await this.passwordField.waitForDisplayed();
  }
  async clickSignInButton() {
    await this.clickLoginButton();
    await mainPage.waitForLoaderToDisappear();
  }

  async verifyIncorrectPasswordValidatorIsDisplayed() {
    await this.incorrectPasswordValidator.waitForDisplayed();
    expect(await this.incorrectPasswordValidator.isDisplayed()).toBe(true);
  }
}

module.exports = new LoginPage();
