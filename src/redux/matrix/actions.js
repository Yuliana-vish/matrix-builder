import types from './types';
import {
  createMatrix,
  findNearestCells,
  matrixSort,
} from '../../core/function';

export const setSettings = settings => {
  const matrix = createMatrix(settings);
  const sortedMatrix = matrixSort(matrix);
  return {
    type: types.SET_SETTINGS,
    payload: { settings, matrix, sortedMatrix },
  };
};

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

export const setNearestCells = (cells, sortedMatrix, item) => {
  const nearest = findNearestCells(cells, sortedMatrix, item);
  return {
    type: types.SET_NEAREST_CELLS,
    payload: { sortedMatrix, nearest },
  };
};

export const resetNearestCells = () => ({
  type: types.RESET_NEAREST_CELLS,
});

// eslint-disable-next-line
export default {
  addRow,
  deleteRow,
  setSettings,
  incrementCell,
  createMatrix,
  setNearestCells,
  resetNearestCells,
};
