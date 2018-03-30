import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Number from '../Number/index';

import { arrow } from '../../images/arrow.js';
import './style.css';

class Arrow extends Component {
  getArrowContainerProps = (startIndex, endIndex) => {
    const consts = {
      cellLength: 37,
      defaultLeftShift: 35,
      defaultBottomShift: 67
    };

    const len = endIndex - startIndex;

    const w = len * consts.cellLength + 2 * (len - 1);
    const l = consts.defaultLeftShift + startIndex * 39;

    return {
      width: w + 2,
      bottom: 62,
      left: l,
    }
  }

  render() {
    const { startIndex, endIndex, number, mode, onChangeNumber } = this.props;
    const arrowContainerProps = this.getArrowContainerProps(startIndex, endIndex);
    const arrowProps = {
      width: arrowContainerProps.width
    };

    return (
      <div className="arrow" style={arrowContainerProps}>
          <div className="arrow_input">
            <Number number={number} mode={mode} onChangeNumber={onChangeNumber}  />
          </div>          
          <div className="arrow_image">
            <img src={arrow} alt="arrow" style={arrowProps} />
          </div>
      </div>
    );
  }
}

Arrow.propTypes = {
  startIndex: PropTypes.number.isRequired,
  endIndex: PropTypes.number.isRequired,  
  number: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    status: PropTypes.string
  }),
  mode: PropTypes.string,
  onChangeNumber: PropTypes.func.isRequired
};

export default Arrow;