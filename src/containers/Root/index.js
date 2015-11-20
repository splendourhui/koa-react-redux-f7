import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter />
        </div>
      </Provider>
      );
  }
}
