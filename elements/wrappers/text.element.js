const Element = require("./element");

class Text extends Element {
  constructor(selector) {
    super(selector);
  }

  async getText() {
    super.initializeElement();
    return await this.wdioElement.getText();
  }
}

module.exports = Text;
