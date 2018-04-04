import * as actionTypes from '../actions/actionTypes';

import ExampleCreator from '../../common/ExampleCreator';

const example = ExampleCreator.generate();
const initialState = {
  numberA: {
    trueValue: example.numberA,
    value: null,
    status: null
  },
  numberB: {
    trueValue: example.numberB,
    value: null,
    status: null
  },
  result: {
    trueValue: example.result,
    value: null,
    status: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NUMBER_A:
      return {
        ...state,
        numberA: action.number
      }
    case actionTypes.CHANGE_NUMBER_B:
      return {
        ...state,
        numberB: action.number
      }
    case actionTypes.CHANGE_RESULT:
      return {
        ...state,
        result: action.number
      }
    default:
      return state;
  }
};