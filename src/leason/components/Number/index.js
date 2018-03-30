import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as numberModes from '../../constants/numberModes';

import './style.css';

class Number extends Component {
  render() {
    const { trueValue, mode } = this.props;
    
    return (
      <span className="number">
        {
          mode === numberModes.IS_HIDE && '?'
          ||
          mode === numberModes.IS_EDIT && <input type="number" />
          ||
          trueValue
        }
      </span>
    );
  }
}

Number.propTypes = {
  trueValue: PropTypes.number.isRequired,
  value: PropTypes.number,
  mode: PropTypes.string
}

export default Number;