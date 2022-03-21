const landingPage = require("../../pageobjects/landing.page");
const loginPage = require("../../pageobjects/login.page");
const logoutPage = require("../../pageobjects/logout.page");
const mainPage = require("../../pageobjects/main.page");
const { email, password } = require("../../configs/credentials.json");

const noteDetails = {
  title: `Test Title ${Date.now()}`,
  body: `Test Body ${Date.now()}`,
}

describe("Notes Tests", function () {
  beforeEach(async function () {
    await landingPage.open();
    await landingPage.clickLogInButton();
    await loginPage.fillEmail(email);
    await loginPage.clickSignInButton();
    await loginPage.fillPassword(password);
    await loginPage.clickSignInButton();
    await mainPage.waitForLoaderToDisappear();
  });
  it("Login and write a note followed by a logout", async function () {
    await mainPage.clickNewNoteButton();
    await mainPage.focusNoteFrame();
    await mainPage.fillNoteTitle(noteDetails.title);
    await mainPage.fillNoteBody(noteDetails.body);
    await mainPage.focusParentFrame();
    await mainPage.waitSyncStatusSaved();
    await mainPage.clickUserDetails();
    await mainPage.clickLogoutButton();
    await logoutPage.verifyLogoutPageDisplayed();
  });
  it.skip("Login again and make sure you open the note created previously", async function () {
    
  });
});
