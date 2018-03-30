import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Number from '../Number/index';

import './style.css';

class Arrow extends Component {
  getArrowProps = (startIndex, endIndex) => {
    const consts = {
      cellLength: 37,
      defaultLeftShift: 35,
      defaultBottomShift: 67
    };

    const len = endIndex - startIndex;

    const w = len * consts.cellLength + 2 * (len - 1);
    const l = consts.defaultLeftShift + startIndex * 39;

    return {
      width: w,
      bottom: 67,
      left: l,
    }
  }

  render() {
    const { startIndex, trueValue, mode } = this.props;
    const arrowProps = this.getArrowProps(startIndex, trueValue);

    return (
      <div className="arrow" style={arrowProps}>
          <div className="arrow_input">
            <Number trueValue={trueValue} mode={mode}  />
          </div>          
          <div className="arrow_image">
            стрелка
          </div>
      </div>
    );
  }
}

Arrow.propTypes = {
  startIndex: PropTypes.number.isRequired,
  trueValue: PropTypes.number.isRequired,
  value: PropTypes.number,
  mode: PropTypes.string
};

export default Arrow;