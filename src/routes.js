import React from 'react';
import { Route, Redirect, DefaultRoute, IndexRoute } from 'react-router';
import App from './containers/App';
import TestPage from './containers/TestPage';

let NoMatch;
export default (
  <Route path="/" component={App}>
    <IndexRoute component={TestPage} />
    <Route path="*" component={NoMatch} />
  </Route>
)
