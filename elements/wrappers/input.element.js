const Element = require("./element");

class Input extends Element {
  constructor(selector) {
    super(selector);
  }

  async setValue(value) {
    await super.initializeElement();
    await this.wdioElement.setValue(value);
  }
}

module.exports = Input;
