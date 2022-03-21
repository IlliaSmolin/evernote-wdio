const Page = require("./page");
const { Button, Text, IFrame, Input } = require("../elements/index");
const timeouts = require("../configs/timeouts.json");
const allureHelper = require("../helpers/allure.helper");

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
  get noteActions() {
    return new Button("#qa-NOTE_ACTIONS");
  }
  get actionDelete() {
    return new Button("#qa-ACTION_DELETE");
  }
  get createYourFirstNoteText() {
    return new Text(`//h2[text()="Create your first note"]`);
  }

  noteCard(index) {
    return new Text(`(//article[contains(@id, "qa-NOTES_SIDEBAR_NOTE")])[${index}]`);
  }
  noteCardBodyText(index) {
    return new Text(`(//div[contains(@id, "qa-NOTES_SIDEBAR_NOTE_SNIPPET")])[${index}]`);
  }

  async waitForLoaderToDisappear() {
    allureHelper.addStep(`Wait for loader to disappear`);
    await this.spinner.waitForDisplayed();
    await this.userDetails.waitForDisplayed();
  }
  async waitForNoteSaved(text) {
    allureHelper.addStep(`Wait for note to be saved`);
    await browser.waitUntil(
      async () => await this.noteCardBodyText(1).getText() === text,
      {
        timeout: timeouts.noteSave,
        timeoutMsg: `Note hasn't been saved`,
      }
    );
  }
  async waitForCreateFirstNoteText() {
    allureHelper.addStep(`Wait for the "Create your first note" text to be displayed`);
    await this.createYourFirstNoteText.waitForDisplayed();
  }
  async clickNewNoteButton() {
    allureHelper.addStep(`Click "New Note" button`);
    await this.newNoteButton.click();
  }
  async clickUserDetails() {
    allureHelper.addStep(`Click "User Details" button`);
    await this.userDetails.click();
  }
  async clickLogoutButton() {
    allureHelper.addStep(`Click "Logout" button`);
    await this.logoutButton.click();
  }
  async clickDeleteNote() {
    allureHelper.addStep(`Click "Move To Trash" button`);
    await this.actionDelete.click();
  }
  async openNoteByIndex(index) {
    allureHelper.addStep(`Open Note with index: ${index}`);
    await this.noteCard(index).click();
  }
  async openFirstNote() {
    await this.openNoteByIndex(1);
  }
  async openNoteActions() {
    allureHelper.addStep(`Click "Note Actions" button`);
    await this.noteActions.click();
  }
  async fillNoteTitle(text) {
    allureHelper.addStep(`Fill "Note Title" text field with value: ${text}`);
    await this.noteTitle.setValue(text);
  }
  async fillNoteBody(text) {
    allureHelper.addStep(`Fill "Note Body" text field with value: ${text}`);
    await this.noteBody.setValue(text);
  }
  async focusNoteFrame() {
    allureHelper.addStep(`Change focus to the "Note" iframe`);
    await this.noteFrame.waitForDisplayed();
    await browser.switchToFrame(0);
  }
  async focusParentFrame() {
    allureHelper.addStep(`Change focus to the main page`);
    await browser.switchToParentFrame();
  }

  async verifyUserIsLoggedIn() {
    allureHelper.addStep(`Verify "User Details" element appears`);
    expect(await this.userDetails.isDisplayed()).toEqual(true);
  }
  async verifyNoteTitleEquals(text) {
    allureHelper.addStep(`Verify "Note Title" text value to equal: ${text}`);
    expect(await this.noteTitle.getValue()).toEqual(text);
  }
}

module.exports = new MainPage();
