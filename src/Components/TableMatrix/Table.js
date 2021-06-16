//import getRandomMatrix from './GetRandomMatrix.js';
import TableHeader from './TableHeader';
import { useEffect, useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import ColumnAvg from './ColumnAvg';
import RowSum from './RowSum';

const randomGenerator = (item, i) => ({
  Amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
  ID: i,
});

const Table = ({ columns, rows, cells }) => {
  //получаем массив чисел
  const [arr, setArr] = useState();
  const [matrixRows, setMatrixRows] = useState();
  const [avg, setAvg] = useState();
  
  useEffect(() => {
    const arr = Array(
      (columns * rows)).fill(0).map(randomGenerator);
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
  }, [columns, rows])

  // const [matrixRows, setMatrixRows] = useState();
  // useEffect(() => {
  //   let matrix = [];
  //   let start = 0;
  //   for (let i = 0; i < rows; i++) {
  //     matrix = [...matrix, arr.slice(start, columns * (i + 1))];
  //     start = columns * (i + 1);
  //   }
  //   setMatrixRows(matrix);
  //   console.log(matrix);
  // }, [columns, rows]);

/// сумма по ряду
  

  ///среднее по колонке

  useEffect(() => {
    if (matrixRows) {
      const calc = calcAvgNumbers(columns, rows, matrixRows);
      setAvg(calc);
      console.log(calc);
    }
  }, [matrixRows]);
  

  const calcAvgNumbers = (columns, rows, matrixRows) => {
    let columnAvg = [];
    for (let i = 0; i < columns; i++) {
      let acc = 0;
      for (let j = 0; j < rows; j++) {
        acc += Number(matrixRows[j][i].Amount);
      }
      columnAvg = [...columnAvg, Math.round(acc / Number(rows))];
    };
    return columnAvg;
  }
    ///добавить строку

    ///удалить строку

    ///ближайшее значение

    ///увеличить на единицу по клику

    return (
      <>
        <hr />
        <div className="/">
          <table className="/">
            <TableHeader columns={columns} />
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
              <tr>
                <td>Avg</td>
                {avg &&
                  avg.map((el, index) => (
                    <td>
                      <ColumnAvg key={index} avg={el} />{' '}
                    </td>
                  ))}
                <td>*</td>
              </tr>
            </tbody>
          </table>
          <button type="submit">add row</button>
        </div>
      </>
    );
  };



export default Table;
