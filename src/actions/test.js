import { CALL_API } from '../middlewares/request';
import Schemas from '../store/schemas';
import * as commonActions from './common';

export const TEST_SUCCESS = 'MY_MEAL_LIST_SUCCESS';

export function apiTest() {
  return (dispatch, getState) => {
    return dispatch({
      [CALL_API]: {
        types: [commonActions.SHOW_LOADING, TEST_SUCCESS, commonActions.SHOW_ERROR_MSG],
        endpoint: `test/`,
        schema: Schemas.TEST_ARRAY,
        method: 'GET'
      }
    })
  }
}
