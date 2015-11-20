import { combineReducers } from 'redux';
import moment from 'moment';

import * as commonActions from '../actions/common';
import * as testActions from '../actions/test';

function fetchedData(state = {}, action) {
  if (action.type === testActions.TEST_SUCCESS) {
    return Object.assign({}, state, action.response);
  } else {
    return state;
  }
}

const testReducer = combineReducers({
  fetchedData,
});

export default testReducer;
