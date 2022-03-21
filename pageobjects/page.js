class Page {
  constructor() {
    this.url = "/";
  }

  async open() {
    await browser.url(this.url);
  }
}

module.exports = Page;
