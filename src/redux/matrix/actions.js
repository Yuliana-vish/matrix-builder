import types from './types';

export const getSettings = settings => ({
  type: types.GET_SETTINGS,
  payload: settings,
});

export const createMatrix = arr => ({
  type: types.CREATE_MATRIX,
  arr,
});
export const incrementCell = (ID, Amount) => ({
  type: types.INCREMENT_CELL,
  ID,
  Amount: Amount + 1,
});
export const addRow = () => ({
  type: types.ADD_ROW,
});
export const deleteRow = rows => ({
  type: types.DELETE_ROW,
  row: rows - 1,
});

// eslint-disable-next-line
export default {
  addRow,
  deleteRow,
  getSettings,
  createMatrix,
  incrementCell,
};
