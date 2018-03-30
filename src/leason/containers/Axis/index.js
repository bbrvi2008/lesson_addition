import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Arrow from '../../components/Arrow/index';

import { exampleActions } from '../../store/actions/example';

import { sprite } from '../../images/sprite.js';
import './style.css';

class Axis extends Component {
  onChangeNumberA = (value) => {
    const { numberA, onChangeNumberA, onChangeNumber } = this.props;
    onChangeNumber(value, numberA, onChangeNumberA);
  }

  onChangeNumberB = (value) => {
    const { numberB, onChangeNumberB, onChangeNumber } = this.props;
    onChangeNumber(value, numberB, onChangeNumberB);
  }

  render() {
    const { numberA, numberB, ViewStateManager } = this.props;
    const viewState = ViewStateManager.getViewState(numberA, numberB);
    
    return (
      <div className="axis">
        {
          viewState.numberA.visible && 
          <Arrow 
            startIndex={0}
            endIndex={numberA.trueValue}
            number={numberA} 
            mode={viewState.numberA.mode}
            onChangeNumber={this.onChangeNumberA}
          />
        }
        {
          viewState.numberB.visible && 
          <Arrow 
            startIndex={numberA.trueValue} 
            endIndex={numberA.trueValue + numberB.trueValue} 
            number={numberB}
            mode={viewState.numberB.mode} 
            onChangeNumber={this.onChangeNumberB}          
          />
        }
        
        <div className="axis_image">
            <img src={sprite} alt="Ось" />
        </div>
      </div>
    );
  }
}

Axis.propTypes = {
  onChangeNumber: PropTypes.func.isRequired,  
  onChangeNumberA: PropTypes.func.isRequired,
  onChangeNumberB: PropTypes.func.isRequired,
  numberA: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    status: PropTypes.string
  }).isRequired,
  numberB: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    status: PropTypes.string
  }).isRequired,
  ViewStateManager: PropTypes.object
}

const mapStateToProps = (state) => {
  const { example } = state;

  return {
    numberA: example.numberA,
    numberB: example.numberB
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeNumberA: (number) => {
      dispatch(exampleActions.changeNumberA(number));
    },
    onChangeNumberB: (number) => {
      dispatch(exampleActions.changeNumberB(number));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Axis);