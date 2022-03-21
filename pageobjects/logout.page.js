const Page = require("./page");
const { Text } = require("../elements/index");
const allureHelper = require("../helpers/allure.helper");

class LogoutPage extends Page {
  constructor() {
    super();
  }

  get logOutText() {
    return new Text(".logout-content");
  }

  async verifyLogoutPageDisplayed() {
    allureHelper.addStep(`Verify text about successfull logout appears`);
    await this.logOutText.waitForDisplayed();
    expect(await this.logOutText.isDisplayed()).toBe(true);
  }
}

module.exports = new LogoutPage();
