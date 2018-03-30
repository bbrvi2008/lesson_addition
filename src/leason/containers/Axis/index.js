import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Arrow from '../../components/Arrow/index';

import * as numberModes from '../../constants/numberModes';

import { sprite } from '../../images/sprite.js';
import './style.css';

class Axis extends Component {
  render() {
    const { numberA, numberB } = this.props;

    return (
      <div className="axis">
        <Arrow startIndex={0} trueValue={numberA} mode={numberModes.IS_EDIT} />
        <Arrow startIndex={numberA} trueValue={numberA + numberB} mode={numberModes.IS_HIDE} />
        
        <div className="axis_image">
            <img src={sprite} alt="Ось" />
        </div>
      </div>
    );
  }
}

Axis.propTypes = {
  numberA: PropTypes.number.isRequired,
  numberB: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  const { example } = state;

  return {
    numberA: example.numberA.trueValue,
    numberB: example.numberB.trueValue,
    result: example.result.trueValue
  }
}

export default connect(
  mapStateToProps
)(Axis);