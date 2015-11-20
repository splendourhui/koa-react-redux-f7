import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxReactRouter } from 'redux-router';
import createLogger from 'redux-logger';
import createHistory from 'history/lib/createBrowserHistory';

import routes from '../routes';
import request from '../middlewares/request';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk, request),
  reduxReactRouter({
    routes,
    createHistory
  }),
  applyMiddleware(createLogger())
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
;
