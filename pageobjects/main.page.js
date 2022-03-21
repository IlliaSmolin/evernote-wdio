const Page = require("./page");
const { Button, Text, IFrame, Input } = require("../elements/index");
const timeouts = require("../configs/timeouts.json");

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

  noteCard(index) {
    return new Text(`(//article[contains(@id, "qa-NOTES_SIDEBAR_NOTE")])[${index}]`);
  }
  noteCardBodyText(index) {
    return new Text(`(//div[contains(@id, "qa-NOTES_SIDEBAR_NOTE_SNIPPET")])[${index}]`);
  }

  async waitForLoaderToDisappear() {
    await this.spinner.waitForDisplayed();
    await this.userDetails.waitForDisplayed();
  }
  async waitForNoteSaved(text) {
    await browser.waitUntil(
      async () => await this.noteCardBodyText(1).getText() === text,
      {
        timeout: timeouts.noteSave,
        timeoutMsg: `Note hasn't been saved`,
      }
    );
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
  async openNoteByIndex(index) {
    await this.noteCard(index).click();
  }
  async openFirstNote() {
    await this.openNoteByIndex(1);
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
  async verifyNoteTitleEquals(text) {
    expect(await this.noteTitle.getValue()).toEqual(text);
  }
}

module.exports = new MainPage();
