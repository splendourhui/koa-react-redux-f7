
"use strict";

import React from 'react';

import Globals from '../../Utils/Globals';
import { MESSAGE_TYPE_SUCCESS, MESSAGE_TYPE_ERROR } from '../../actions/common';

class Notification extends React.Component {
  componentDidMount() {
  }

  componentDidUpdate() {
    let app = Globals.getApp();
    let { message } = this.props;

    // 显示和隐藏通知框
    if (message.msg) {
      if (message.msgType == MESSAGE_TYPE_SUCCESS) {
        app.addNotification({
          message: message.msg,
          button: {
            text: '确定',
            color: 'lightgreen'
          },
          hold: message.hold
        });
      } else if (message.msgType == MESSAGE_TYPE_ERROR) {
        app.addNotification({
          message: message.msg,
          button: {
            text: '确定',
            color: 'red'
          },
          hold: message.hold
        });
      }
    }
  }

  render()  {
    return (
      <div className="notification">
      </div>
    );
  }
}

export default Notification;
