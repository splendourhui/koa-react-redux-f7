"use strict";

const request = require('superagent');
const co = require('co');
const moment = require('moment');
const _ = require('lodash');

const configs = require('../../../config');
const reqt = require('../../../common/request_helper');
const constants = require('../../../common/constants');

exports.test = function *() {
  const ctx = this;

  ctx.body = {
    value: 'test'
  };
};
