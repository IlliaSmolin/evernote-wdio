class Element {
  constructor(selector) {
    this.wdioElement = $(selector);
    this.isInitialized = false;
  }

  async initializeElement() {
    if (!this.isInitialized) {
      this.isInitialized = true;
      await this.waitForDisplayed();
    }
  }

  async isDisplayed() {
    return await this.wdioElement.isDisplayed();
  }

  async waitForDisplayed() {
    this.isInitialized = true;
    await this.wdioElement.waitForDisplayed();
  }

  async click() {
    await this.initializeElement();
    await this.wdioElement.click();
  }
}

module.exports = Element;
