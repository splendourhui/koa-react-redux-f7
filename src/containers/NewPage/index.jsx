import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import Globals from '../../Utils/Globals';

class NewPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="content-block">
          <div className="content-block-title">Title</div>
          <div className="content-block-inner">
            This is another Page.
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.router.location.query,
  }
}

export default connect(mapStateToProps, {
})(NewPage);
