import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Number from '../../components/Number/index';

import { exampleActions } from '../../store/actions/example';

import './style.css';

class Example extends Component {
  onChangeNumberResult = (value) => {
    const { result, onChangeNumberResult, onChangeNumber } = this.props;
    onChangeNumber(value, result, onChangeNumberResult);
  }

  render() {
    const { numberA, numberB, result, ViewStateManager } = this.props;
    const viewState = ViewStateManager.getViewState(numberA, numberB, result);    

    return (
      <div className="example">
        <Number number={numberA} />
        <span className="sign">+</span>
        <Number number={numberB} />
        <span className="sign">=</span>
        <Number number={result} mode={viewState.result.mode} onChangeNumber={this.onChangeNumberResult} />
      </div>
    );
  }
}

Example.propTypes = {
  onChangeNumber: PropTypes.func.isRequired,    
  onChangeNumberResult: PropTypes.func.isRequired,
  numberA: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    status: PropTypes.string
  }),
  numberB: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    status: PropTypes.string
  }),
  result: PropTypes.shape({
    trueValue: PropTypes.number,
    value: PropTypes.number,
    status: PropTypes.string
  }),
  ViewStateManager: PropTypes.object  
}

const mapStateToProps = (state) => {
  const { example } = state;

  return {
    numberA: example.numberA,
    numberB: example.numberB,
    result: example.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeNumberResult: (number) => {
      dispatch(exampleActions.changeNumberResult(number));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);