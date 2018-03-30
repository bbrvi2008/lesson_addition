import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NumberView from './NumberView';
import NumberEdit from './NumberEdit';

import * as numberModes from '../../constants/numberModes';

import './style.css';

class Number extends Component {
  render() {
    const { number, mode, onChangeNumber } = this.props;

    
    
    return (
      <span>
        {
          mode === numberModes.IS_HIDE && <span className="number">?</span>
          ||
          mode === numberModes.IS_EDIT && <NumberEdit number={number} onChangeNumber={onChangeNumber} />
          ||
          <NumberView number={number} />
        }
      </span>
    );
  }
}

Number.propTypes = {
  number: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    status: PropTypes.string
  }),
  mode: PropTypes.string,
  onChangeNumber: PropTypes.func
}

export default Number;