const Page = require("./page");
const { Input, Button, Text } = require("../elements/index");
const allureHelper = require("../helpers/allure.helper");

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
    allureHelper.addStep(`Fill "Email" field with value: ${email}`);
    await this.emailField.setValue(email);
  }
  async fillPassword(password) {
    allureHelper.addStep(`Fill "Password" field with value: ${password}`);
    await this.passwordField.setValue(password);
  }
  async clickSignInButton() {
    allureHelper.addStep(`Click "Continue/Sign In" button`);
    await this.loginButton.click();
  }

  async verifyIncorrectPasswordValidatorIsDisplayed() {
    allureHelper.addStep(`Verify "Incorrect Password" validator appears`);
    await this.incorrectPasswordValidator.waitForDisplayed();
    expect(await this.incorrectPasswordValidator.isDisplayed()).toBe(true);
  }
}

module.exports = new LoginPage();
