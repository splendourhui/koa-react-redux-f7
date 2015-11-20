
"use strict";

import React from 'react';

class Navbar extends React.Component {
  render()  {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="center">{this.props.name}</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
