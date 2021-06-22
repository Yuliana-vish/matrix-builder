//import { combineReducers } from 'redux';
import types from '../matrix/types';

const initialState = {
  settings: {
    columns: '',
    rows: '',
    cells: '',
  },
  arr: {
    Amount: '',
    ID: '',
  },
  matrix: [],
};

export const settings = (state = initialState.settings, { type, payload }) => {
  switch (type) {
    case types.GET_SETTINGS:
      return [...state, payload];

    default:
      return state;
  }
};

export const matrix = (state = initialState.settings, { type, payload }) => {
  switch (type) {
    case types.CREATE_MATRIX:
      return [...state, payload];

    case types.ADD_ROWS:
      return [...state, payload];

    case types.DELETE_ROWS:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

// export default combineReducers({
//   settings,
//   matrix,
// });
