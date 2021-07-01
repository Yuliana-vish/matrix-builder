import types from './types';

export const getSettings = settings => ({
  type: types.GET_SETTINGS,
  payload: settings,
});
export const getRandomNumbers = arr => ({
  type: types.GET_RANDOM_NUMBERS,
  payload: arr,
});
export const createMatrix = matrixRows => ({
  type: types.CREATE_MATRIX,
  payload: matrixRows,
});
export const incrementCell = item => ({
  type: types.INCREMENT_CELL,
  payload: item,
});
export const deleteRow = index => ({
  type: types.DELETE_ROW,
  payload: index,
});
export const addRow = row => ({
  type: types.ADD_ROW,
  payload: row,
});
// export const rowSum = row => ({
//   type: types.ROW_SUM,
//   payload: row,
// });

// eslint-disable-next-line
export default {
  addRow,
  deleteRow,
  getSettings,
  incrementCell,
  createMatrix,
  getRandomNumbers,
};
