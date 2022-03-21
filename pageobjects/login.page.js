const mainPage = require("./main.page");

class LoginPage {
  get emailField() {
    return $("#username");
  }
  get passwordField() {
    return $("#password");
  }
  get loginButton() {
    return $("#loginButton");
  }
  get incorrectPasswordValidator() {
    return $(`//div[contains(text(), "Incorrect password")]`);
  }

  async fillEmail(email) {
    await this.emailField.waitForDisplayed();
    await this.emailField.setValue(email);
  }
  async fillPassword(password) {
    await this.passwordField.waitForDisplayed();
    await this.passwordField.setValue(password);
  }
  async clickLoginButton() {
    await this.loginButton.waitForDisplayed();
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
