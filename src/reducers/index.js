import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import * as ActionTypes from '../actions/common';
import * as testActions from '../actions/test';

import testReducer from './test';

function loadingReducer(state = {
  loading: false, msg: ''
}, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING:
      return {
        loading: true,
        msg: action.msg
      };
      break;
    case ActionTypes.HIDE_LOADING:
    case ActionTypes.SHOW_SUCCESS_MSG:
    case ActionTypes.SHOW_ERROR_MSG:
    case testActions.TEST_SUCCESS:
      return {
        loading: false,
        msg: ''
      };
      break;
    default:
      return state;
  }
}

function notificationReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.SHOW_SUCCESS_MSG:
      return {
        msgType: ActionTypes.MESSAGE_TYPE_SUCCESS,
        msg: action.msg,
        hold: action.hold
      };
      break;
    case ActionTypes.SHOW_ERROR_MSG:
      return {
        msgType: ActionTypes.MESSAGE_TYPE_ERROR,
        msg: action.msg,
        hold: action.hold
      };
      break;
    default:
      // Message must be set to empty object.
      return {};
  }
}

const rootReducer = combineReducers({
  loadingReducer,
  notificationReducer,
  testReducer,
  router
});

export default rootReducer;
