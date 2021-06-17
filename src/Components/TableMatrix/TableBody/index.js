import ColumnAvg from './ColumnAvg';
import RowSum from './RowSum';
import { useEffect, useState } from 'react';
import { randomGenerator } from '../../../core/function';

const TableBody = ({ columns, rows, cells }) => {
  const [arr, setArr] = useState();
  const [matrixRows, setMatrixRows] = useState();

  useEffect(() => {
    const arr = new Array(columns * rows).fill(0).map((el, i) => {
      return randomGenerator(el, i);
    });
    setArr(arr);
    console.log(arr);

    let matrix = [];
    let start = 0;
    for (let i = 0; i < rows; i++) {
      matrix = [...matrix, arr.slice(start, columns * (i + 1))];
      start = columns * (i + 1);
    }
    setMatrixRows(matrix);
    console.log(matrix);
  }, [columns, rows]);

  return (
    <tbody>
      {matrixRows &&
        matrixRows.map((row, i) => (
          <tr key={i}>
            <td>*</td>
            {row.map(item => (
              <td key={item.ID}>{item.Amount}</td>
            ))}
            <td>
              <RowSum row={row} />
            </td>
            <td>
              <button type="submit"> x </button>
            </td>
          </tr>
        ))}
      <ColumnAvg matrixRows={matrixRows} columns={columns} rows={rows} />
    </tbody>
  );
};
export default TableBody;
