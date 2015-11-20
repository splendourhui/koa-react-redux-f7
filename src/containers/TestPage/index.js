import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import Navbar from '../../components/Navbar';

import { showLoading, showSuccessMessage } from '../../actions/common';
import { apiTest } from '../../actions/test';
import Globals from '../../Utils/Globals';

class TestPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.apiTest();
  }

  render() {
    return (
      <div>
        <div className="content-block">
          <div className="content-block-title">Title</div>
          <div className="content-block-inner">
            Inner
          </div>
        </div>
        <p className="buttons-row">
          <a href="pages/new?title=new" className="button color-blue">New Page</a>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.router.location.query,
    test: state.testReducer
  }
}

export default connect(mapStateToProps, {
  showLoading,
  showSuccessMessage,
  apiTest,
})(TestPage);
