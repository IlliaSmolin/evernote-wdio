const Page = require("./page");
const { Text } = require("../elements/index");

class LogoutPage extends Page {
  constructor() {
    super();
  }

  get logOutText() {
    return new Text(".logout-content");
  }

  async verifyLogoutPageDisplayed() {
    await this.logOutText.waitForDisplayed();
    expect(await this.logOutText.isDisplayed()).toBe(true);
  }
}

module.exports = new LogoutPage();
