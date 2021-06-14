import types from './types';

const getSettings = ({ columns, rows, cells }) => {
  return {
    type: types.GET_SETTINGS,
   //   payload: {
  //     columns,
  //     rows,
  //     cells,
  //   }
  }
};
const createMatrix = () => {
  return {
    type: types.CREATE_MATRIX,
  }
}
  
const addRows = () => {
  return {
    type: types.ADD_ROWS
  }
}
const deleteRows = (rows) => {
  return {
    type: types.DELETE_ROWS,
    rows,
  }
}


// eslint-disable-next-line
export default {
  addRows,
  deleteRows,
  getSettings,
  createMatrix,
};




