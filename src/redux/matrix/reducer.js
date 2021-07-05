import types from './types';
import { randomGenerator } from '../../core/function';

const initialState = {
  settings: {
    columns: '',
    rows: '',
    cells: '',
  },

  matrixRows: [],
  sortedMatrix: [],
  nearest: [],
};

export const matrix = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SETTINGS:
      // console.log(payload.sortedMatrix);
      return {
        ...state.settings,
        settings: payload.settings,
        matrixRows: payload.matrix,
        sortedMatrix: payload.sortedMatrix,
      };

    case types.GET_RANDOM_NUMBERS:
      return { ...state, arr: [...payload] };

    case types.CREATE_MATRIX:
      return { ...state, matrixRows: [...payload] };

    case types.INCREMENT_CELL:
      const newmatrixRows = state.matrixRows.map(row => {
        return row.map(item => {
          if (item.ID === payload.ID) {
            item.Amount += 1;
            return item;
          }
          return item;
        });
      });
      // console.log(newmatrixRows);
      return {
        ...state,
        matrixRows: newmatrixRows,
      };

    case types.DELETE_ROW:
      return {
        ...state,
        matrixRows: state.matrixRows.filter((el, index) => index !== payload),
        settings: { ...state.settings, rows: state.settings.rows - 1 },
      };

    case types.ADD_ROW:
      const arrRow = new Array(state.settings.columns * 1)
        .fill(0)
        .map((el, i) => {
          return randomGenerator(el, i);
        });
      return {
        ...state,
        settings: { ...state.settings, rows: state.settings.rows + 1 },
        matrixRows: [...state.matrixRows, arrRow],
      };

    case types.SET_NEAREST_CELLS:
      return {
        ...state,
        nearest: [...payload.nearest],
      };

    case types.RESET_NEAREST_CELLS:
      return { ...state, nearest: initialState.nearest };

    default:
      return state;
  }
};

export default matrix;
