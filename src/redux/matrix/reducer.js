import types from './types';

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

export const matrix = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_SETTINGS:
      //console.log(payload);
      return { ...state.settings, settings: { ...payload } };

    case types.CREATE_MATRIX:
      return { ...state, matrix: { ...payload } };

    case types.INCREMENT_CELL:
      return { ...state.arr, payload };

    case types.ADD_ROW:
      return { ...state, payload };

    case types.DELETE_ROW:
      return state.filter(row => row.id !== payload);

    default:
      return state;
  }
};

export default matrix;
