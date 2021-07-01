import types from './types';
import { randomGenerator } from '../../core/function';

const initialState = {
  settings: {
    columns: '',
    rows: '',
    cells: '',
  },
  arr: [
    {
      Amount: '',
      ID: '',
    },
  ],
  matrixRows: [],
};

export const matrix = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_SETTINGS:
      return { ...state.settings, settings: { ...payload } };

    case types.GET_RANDOM_NUMBERS:
      return { ...state, arr: [...payload] };

    case types.CREATE_MATRIX:
      return { ...state, matrixRows: [...payload] };

    case types.INCREMENT_CELL:
      return {
        ...state,
        arr: state.arr.map(el =>
          el.ID === payload.ID
            ? { Amount: el.Amount + 1, ID: el.ID }
            : { Amount: el.Amount, ID: el.ID },
        ),
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
    
    // case types.ROW_SUM:
    //   const sumRowNumbers = row => {
    //   return row.reduce((acc, el) => acc + Number(el.Amount), 0);
    //   };
    //   return {

    //   }
      
      
    default:
      return state;
  }
};

export default matrix;
