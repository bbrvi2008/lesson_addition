import React, { Component } from 'react';

import Example from './containers/Example/index';
import Axis from './containers/Axis/index';

class Leason extends Component {
  render() {
    return (
      <div className="lesson">
        <Example />
        <Axis />
      </div>
    );
  }
}

export default Leason;