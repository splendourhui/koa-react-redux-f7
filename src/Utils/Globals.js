
"use strict";

class Global {
  constructor() {
    this['app'] = null;
    this['mainView'] = null;
  }

  getApp() {
    return this['app'];
  }
  setApp(obj) {
    this['app'] = obj;
  }

  getMainView() {
    return this['mainView'];
  }
  setMainView(obj) {
    this['mainView'] = obj;
  }
}

let globals = new Global();

module.exports = globals;
