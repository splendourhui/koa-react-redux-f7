
"use strict";

import React from 'react';

import Globals from '../../Utils/Globals';

class Spinner extends React.Component {
  componentDidMount() {
  }

  componentDidUpdate() {
    let app = Globals.getApp();
    let { loading } = this.props;

    // 显示和隐藏等待框
    if (loading.loading) {
      app.showPreloader(loading.msg);
    } else {
      app.hidePreloader();
    }
  }

  render()  {
    return (
      <div className="spinner">
      </div>
    );
  }
}

export default Spinner;
