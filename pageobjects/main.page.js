class MainPage {
  get userDetails() {
    return $("#qa-NAV_USER");
  }
  get spinner() {
    return $(`//span[text()="Getting started…"]`);
  }

  async waitForLoaderToDisappear() {
    await this.spinner.waitForDisplayed();
    await this.userDetails.waitForDisplayed();
  }

  async verifyUserIsLoggedIn() {
    expect(await this.userDetails.isDisplayed()).toEqual(true);
  }
}

module.exports = new MainPage();
