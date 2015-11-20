import 'whatwg-fetch';
import omit from 'lodash/object/omit';
import isFunction from 'lodash/lang/isFunction';
import { normalize } from 'normalizr';
import { MESSAGE_TYPE_SUCCESS, MESSAGE_TYPE_ERROR } from '../actions/common';

export const CALL_API = Symbol('Call API');

function callApi(endpoint, schema, data, method, suc, err) {
  console.log(omit(data, isFunction));
  $.ajax({
    type: method,
    url: `/apis/${endpoint}`,
    data: {
      data: omit(data, isFunction)
    },
    success: (result) => {
      suc(Object.assign({}, normalize(result || {}, schema)));
    },
    error: (e) => {
      err(e.responseText);
    }
  });
}

export default store => {
  return next => {
    return action => {
      const callAPI = action[CALL_API];
      if (typeof callAPI === 'undefined') {
        return next(action);
      }

      let {schema, types, endpoint, data, method,
        sucMsg, sucHold, errorMsg, errorHold, sucCallback, errCallback} = callAPI;

      if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
      }

      if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
      }
      if (!schema) {
        throw new Error('Specify one of the exported Schemas.');
      }
      if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
      }
      if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
      }

      function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API]
        return finalAction;
      }

      const [requestType, successType, failureType] = types;
      next(actionWith({
        type: requestType
      }));

      return callApi(endpoint, schema, data, method, response => {
        next(actionWith({
          response,
          type: successType,
          msgType: MESSAGE_TYPE_SUCCESS,
          msg: sucMsg || 'Operation success',
          hold: sucHold || 2000
        }));
        if (sucCallback) {
          sucCallback();
        }
      }, error => {
        next(actionWith({
          type: failureType,
          msgType: MESSAGE_TYPE_ERROR,
          msg: errorMsg || 'Operation failed. Please retry.',
          hold: errorHold || 2000
        }));
        if (errCallback) {
          errCallback(error);
        }
      }
      );
    }
  }
}
