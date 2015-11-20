'use strict';

const crypto = require('crypto');

exports.md5Encrypt = (string) => {
  if (string === null) return null;
  if (typeof (string) != 'string') return null;
  var md5sum = crypto.createHash('md5');
  md5sum.update(string, 'utf8');
  string = md5sum.digest('hex');
  return string;
};
