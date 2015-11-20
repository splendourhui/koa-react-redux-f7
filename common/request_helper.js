"use strict";

const request = require('superagent');
const _ = require('lodash');
const serverURL = 'YOUR serverURL HERE';

exports.send = function*(method, path, query, data, ctx, postDeal, key) {
  let result = yield sendRequest(method, path, query, data, ctx);
  if (postDeal) {
    postDeal.data = result;
  } else {
    if (key) {
      ctx.body = result[key];
    } else {
      ctx.body = result;
    }
  }
};

function sendRequest(method, path, query, data, ctx) {
  return new Promise((resolve, reject) => {
    let timeBefore = (new Date()).getTime();
    let q = request[method](`http://${serverURL}${path}`)
      .query(_.extend({
        username: ctx.cookies.get('rest_admin_username'),
        token: ctx.cookies.get('rest_admin_token')
      }, query || {}));

    if (data) {
      q.type('form').send(data);
    }

    q.end((err, result) => {
      let timeAfter = (new Date()).getTime();
      if (err) {
        console.trace(err);
        reject(err.response);
      } else {
        if (result.body) {
          resolve(result.body.data);
        } else {
          reject(result.text)
        }
      }
    });
  });
}
