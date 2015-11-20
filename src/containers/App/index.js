import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import Navbar from '../../components/Navbar';
import Spinner from '../../components/Spinner';
import Notification from '../../components/Notification';

import { hideSuccessMessage, hideErrorMessage } from '../../actions/common';
import Globals from '../../Utils/Globals';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let app = new Framework7({
      imagesLazyLoadThreshold: 50,
      animateNavBackIcon: false,
      material: true,
      materialPageLoadDelay: true? 50 : 0,
      materialRipple: true
    });

    let mainView = app.addView('.view-main', {
      dynamicNavbar: false
    });

    Globals.setApp(app);
    Globals.setMainView(mainView);
  }

  render() {
    return (
      <div className='views'>
        <div className='view view-main' data-page='index'>
          <div className="pages navbar-fixed">
            <div className='page' data-page='index'>
              <Navbar name={`Awsome Project`}/>
              <div className='page-content'>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
        <Spinner loading={this.props.loading} />
        <Notification message={this.props.message} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.router.location.query,
    loading: state.loadingReducer,
    message: state.notificationReducer
  }
}

export default connect(mapStateToProps, {
  hideSuccessMessage,
  hideErrorMessage,
  pushState
})(App);
