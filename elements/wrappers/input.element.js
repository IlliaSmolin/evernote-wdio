const Element = require("./element");

class Input extends Element {
  constructor(selector) {
    super(selector);
  }

  async setValue(value) {
    await super.initializeElement();
    await this.wdioElement.setValue(value);
  }

  async getValue() {
    await super.initializeElement();
    return await this.wdioElement.getValue();
  }
}

module.exports = Input;
