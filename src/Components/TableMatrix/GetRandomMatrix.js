//import { connect } from 'react-redux';

const getRandomMatrix = ( columns, rows ) => {
    const matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
      matrix[i] = new Array(columns);
      for (let j = 0; j < columns; j++) {
        matrix[i][j] = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      }
  }  
  return matrix;
  //console.log(matrix);
  };

// const mapStateToProps = (state) => ({  
//   columns: state.settings.columns,
//   cells: state.settings.cells,
//   rows: state.settings.rows,
// });

export default getRandomMatrix;

//export default connect(mapStateToProps, null)(getRandomMatrix);

