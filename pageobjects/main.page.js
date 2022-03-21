const Page = require("./page");
const { Button, Text, IFrame, Input } = require("../elements/index");

class MainPage extends Page {
  constructor() {
    super();
  }

  get spinner() {
    return new Text(`//span[text()="Getting started…"]`);
  }
  get userDetails() {
    return new Button("#qa-NAV_USER");
  }
  get logoutButton() {
    return new Button(`//li//span[contains(text(), "Sign out")]`);
  }
  get newNoteButton() {
    return new Button("#qa-HOME_NOTE_WIDGET_CREATE_NOTE");
  }
  get noteFrame() {
    return new IFrame("#qa-COMMON_EDITOR_IFRAME");
  }
  get noteTitle() {
    return new Input(`textarea[placeholder="Title"]`);
  }
  get noteBody() {
    return new Input("#en-note");
  }
  get syncStatus() {
    return new Text(`div[data-tooltipmark="syncstatusindicator"]`);
  }

  async waitForLoaderToDisappear() {
    await this.spinner.waitForDisplayed();
    await this.userDetails.waitForDisplayed();
  }
  async waitSyncStatusSaved() {
    await browser.waitUntil(
      async () => await this.syncStatus.getText() === "All changes saved",
      {
        timeout: 15000,
        timeoutMsg: `Note hasn't been saved`,
      }
    );
    await browser.pause(5000);
  }
  async clickNewNoteButton() {
    await this.newNoteButton.click();
  }
  async clickUserDetails() {
    await this.userDetails.click();
  }
  async clickLogoutButton() {
    await this.logoutButton.click();
  }
  async fillNoteTitle(text) {
    await this.noteTitle.setValue(text);
  }
  async fillNoteBody(text) {
    await this.noteBody.setValue(text);
  }
  async focusNoteFrame() {
    await this.noteFrame.waitForDisplayed();
    await browser.switchToFrame(0);
  }
  async focusParentFrame() {
    await browser.switchToParentFrame();
  }

  async verifyUserIsLoggedIn() {
    expect(await this.userDetails.isDisplayed()).toEqual(true);
  }
}

module.exports = new MainPage();
