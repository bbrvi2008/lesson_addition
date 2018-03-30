import React, { Component } from 'react';

import Example from './containers/Example/index';
import Axis from './containers/Axis/index';

import * as numberStatuses from './constants/numberStatuses';

import ViewStateManager from './common/ViewStateManager';

import './style.css'

class Leason extends Component {
  onChangeNumber = (value, number, onChangeNumber) => {
    let status = null;
    if(!isNaN(value)) {
      status = value === number.trueValue 
        ? numberStatuses.SUCCESS
        : numberStatuses.ERROR;
    }
    
    const newNumber = {
      ...number,
      value,
      status
    };

    onChangeNumber(newNumber);
  }

  render() {
    return (
      <div className="lesson">
        <Example onChangeNumber={this.onChangeNumber} ViewStateManager={ViewStateManager} />
        <Axis onChangeNumber={this.onChangeNumber} ViewStateManager={ViewStateManager} />
      </div>
    );
  }
}

export default Leason;