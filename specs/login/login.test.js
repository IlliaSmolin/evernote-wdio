const landingPage = require("../../pageobjects/landing.page");
const loginPage = require("../../pageobjects/login.page");
const mainPage = require("../../pageobjects/main.page");
const { email, password } = require("../../configs/credentials.json");

describe("Login Tests", function () {
  beforeEach(async function () {
    await landingPage.open();
    await landingPage.clickLogInButton();
  });
  it("Unsuccessfull login using e-mail", async function () {
    await loginPage.fillEmail(email);
    await loginPage.clickSignInButton();
    await loginPage.fillPassword(password + "1");
    await loginPage.clickSignInButton();
    await loginPage.verifyIncorrectPasswordValidatorIsDisplayed();
  });
  it("Successfull login using e-mail", async function () {
    await loginPage.fillEmail(email);
    await loginPage.clickSignInButton();
    await loginPage.fillPassword(password);
    await loginPage.clickSignInButton();
    await mainPage.waitForLoaderToDisappear();
    await mainPage.verifyUserIsLoggedIn();
  });
});
