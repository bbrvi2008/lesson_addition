import * as actionTypes from '../actions/actionTypes';

import ExampleCreator from '../../utils/ExampleCreator';

const example = ExampleCreator.generate();
const initialState = {
  numberA: {
    trueValue: example.numberA,
    value: null,
    error: false,
    success: false
  },
  numberB: {
    trueValue: example.numberB,
    value: null,
    error: false,
    success: false
  },
  result: {
    trueValue: example.result,
    value: null,
    error: false,
    success: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NUMBER_A:
      return {
        ...state,
        numberA: {
          ...state.numberA,
          value: action.value
        }
      }
    case actionTypes.CHANGE_NUMBER_B:
      return {
        ...state,
        numberB: {
          ...state.numberB,
          value: action.value
        }
      }
    case actionTypes.CHANGE_RESULT:
      return {
        ...state,
        result: {
          ...state.result,
          value: action.value
        }
      }
    default:
      return state;
  }
};