import { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { randomGenerator } from '../../../core/function';
import ColumnAvg from './ColumnAvg';
import RowSumCell from './RowSumCell';
import TableItem from './TableItem';
import RemoveButton from './RemoveButton';
//import actions from '../../../redux/matrix/actions';

const TableBody = ({ columns, rows, cells }) => {
  const [arr, setArr] = useState();
  const [matrixRows, setMatrixRows] = useState();
  const [currentRowsNum, setCurrentRowsNum] = useState(rows); // обновляю значение rows после удаления и добавления строк

  // const matrixRows = useMemo(() => {
  //   if (columns && currentRowsNum) {
  //     const arr = new Array(columns * currentRowsNum).fill(0).map((el, i) => {
  //       return randomGenerator(el, i);
  //     });
  //     setArr(arr);
  //     console.log(arr);

  //     let matrix = [];
  //     let start = 0;
  //     for (let i = 0; i < currentRowsNum; i++) {
  //       matrix = [...matrix, arr.slice(start, columns * (i + 1))];
  //       start = columns * (i + 1);
  //     }
  //     return matrix;
  //     console.log(matrix);
  //   }
  // }, [columns, currentRowsNum]);

  useEffect(() => {
    if (columns && currentRowsNum) {
      const arr = new Array(columns * currentRowsNum).fill(0).map((el, i) => {
        return randomGenerator(el, i);
      });
      setArr(arr);
      console.log(arr);

      let matrix = [];
      let start = 0;
      for (let i = 0; i < currentRowsNum; i++) {
        matrix = [...matrix, arr.slice(start, columns * (i + 1))];
        start = columns * (i + 1);
      }
      setMatrixRows(matrix);
      console.log(matrix);
    }
  }, [columns, currentRowsNum]);

  return (
    <tbody>
      {matrixRows &&
        matrixRows.map((row, i) => (
          <tr key={i}>
            <td>*</td>
            {row.map(item => (
              <td key={item.ID}>
                <TableItem item={item} />
              </td>
            ))}
            <RowSumCell row={row} />
            <RemoveButton
              index={i}
              setMatrixRows={setMatrixRows}
              matrixRows={matrixRows}
              setCurrentRowsNum={setCurrentRowsNum}
            />
          </tr>
        ))}
      <ColumnAvg
        matrixRows={matrixRows}
        columns={columns}
        rows={currentRowsNum}
      />
    </tbody>
  );
};

const mapStateToProps = state => ({
  columns: state.matrix.settings.columns,
  rows: state.matrix.settings.rows,
  cells: state.matrix.settings.cells,
});

export default connect(mapStateToProps)(TableBody);
//export default TableBody;
