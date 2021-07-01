import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { randomGenerator } from '../../../core/function';
import ColumnAvg from './ColumnAvg';
import RowSumCell from './RowSumCell';
import Percentage from './Percentage';
import TableItem from './TableItem';
import RemoveButton from './RemoveButton';
import actions from '../../../redux/matrix/actions';

const TableBody = ({
  columns,
  rows,
  cells,
  getRandomNumbers,
  arr,
  createMatrix,
  matrixRows,
}) => {
  const [showPercent, setShowPercent] = useState(-1);

  useEffect(() => {
    if (columns && rows) {
      const arr = new Array(columns * rows).fill(0).map((el, i) => {
        return randomGenerator(el, i);
      });
      getRandomNumbers(arr);
      console.log(arr);
    }
  }, []);

  useEffect(() => {
    if (arr) {
      let matrixRows = [];
      let start = 0;
      for (let i = 0; i < rows; i++) {
        matrixRows = [...matrixRows, arr.slice(start, columns * (i + 1))];
        start = columns * (i + 1);
      }
      createMatrix(matrixRows);
      console.log(matrixRows);
    }
  }, [arr]);

  return (
    <tbody>
      {matrixRows &&
        matrixRows.map((row, i) => (
          <tr key={i}>
            <td className="amount banner">{i + 1}</td>
            {row.map(item => (
              <td className="table-item" key={item.ID}>
                {showPercent === i ? (
                  <Percentage item={item} row={row} />
                ) : (
                  <TableItem item={item} />
                )}
              </td>
            ))}

            <RowSumCell
              row={row}
              handleMouseEnter={() => setShowPercent(i)}
              handleMouseLeave={() => setShowPercent(-1)}
            />
            <RemoveButton index={i} matrixRows={matrixRows} rows={rows} />
          </tr>
        ))}
      <ColumnAvg matrixRows={matrixRows} columns={columns} rows={rows} />
    </tbody>
  );
};

const mapStateToProps = state => ({
  columns: state.matrix.settings.columns,
  rows: state.matrix.settings.rows,
  cells: state.matrix.settings.cells,
  arr: state.matrix.arr,
  matrixRows: state.matrix.matrixRows,
});

const mapDispatchToProps = {
  getRandomNumbers: actions.getRandomNumbers,
  createMatrix: actions.createMatrix,
};
export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
