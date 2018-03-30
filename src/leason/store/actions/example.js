import * as actiosTypes from './actionTypes';

export const exampleActions = {
  changeNumberA: (number) => ({
    type: actiosTypes.CHANGE_NUMBER_A,
    number
  }),
  changeNumberB: (number) => ({
    type: actiosTypes.CHANGE_NUMBER_B,
    number
  }),
  changeNumberResult: (number) => ({
    type: actiosTypes.CHANGE_RESULT,
    number
  })
};