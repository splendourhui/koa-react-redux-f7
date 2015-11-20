"use strict";

const jade = require('jade');
const path = require('path');

exports.index = function *() {
  this.body = jade.renderFile('views/index.jade');
};

exports.loadPage = function *() {
  let name = this.params.name;
  let title = this.query.title || 'Awsome Project';
  let id = this.query.id;

  this.body = jade.renderFile(`views/page.jade`, {
    title,
    id,
    pageName: name
  });
};
