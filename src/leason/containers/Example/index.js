import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Number from '../../components/Number/index';

import * as numberModes from '../../constants/numberModes';

import './style.css';

class Example extends Component {
  render() {
    const { numberA, numberB, result } = this.props;

    return (
      <div className="example">
        <Number trueValue={numberA.trueValue} />
        <span className="sign">+</span>
        <Number trueValue={numberB.trueValue} />
        <span className="sign">=</span>
        <Number trueValue={result.trueValue} mode={numberModes.IS_HIDE} />
      </div>
    );
  }
}

Example.propTypes = {
  numberA: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    success: PropTypes.bool,
    error: PropTypes.bool,
  }),
  numberB: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    success: PropTypes.bool,
    error: PropTypes.bool,
  }),
  result: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    success: PropTypes.bool,
    error: PropTypes.bool,
  })
}

const mapStateToProps = (state) => {
  const { example } = state;

  return {
    numberA: example.numberA,
    numberB: example.numberB,
    result: example.result
  }
}

export default connect(
  mapStateToProps
)(Example);