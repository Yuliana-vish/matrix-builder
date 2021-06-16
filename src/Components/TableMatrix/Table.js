import getRandomMatrix from './GetRandomMatrix.js';
import TableHeader from './TableHeader';
import { useEffect, useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

// const randomGenerator = (item, i) => ({
//   Amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
//   ID: i,
// });

const Table = ({ columns, rows, cells }) => {
  /// получаем матрицу
  // const [arr, setArr] = useState();
  // useEffect(() => {
  //   const arr = Array(columns * rows)
  //     .fill(0)
  //     .map(randomGenerator);
  //   setArr(arr);
  //   console.log(arr);
  // }, [columns, rows]);

  //получаем матрицу 
    const [arr, setArr] = useState();
    useEffect(() => {
      const arr = getRandomMatrix(columns, rows);
      setArr(arr);
    }, [columns, rows])

  //сумма по строке
  const [sum, setRowSum] = useState();
  useEffect(() => {
    if (arr) {
      const sum = sumRowNumbers(arr);
      setRowSum(sum);
    }
  }, [arr]);

  const sumRowNumbers = rows => {
    return rows.map(row => {
      return row.reduce((acc, el) => acc + el, 0);
    });
  };

  
  ///среднее по колонке

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
             {arr &&
               sum &&
               arr.map((row, i) => (
                 <tr key={i}>
                   <td>*</td>
                   {row.map((col, j) => (
                     <td key={j}>
                       <div>{col}</div>
                     </td>
                   ))}
                   <td>
                     <div>{sum[i]}</div>
                   </td>
                   <td>
                     <button type="submit"> x </button>
                   </td>
                 </tr>
               ))}
             <tr>
               <td>Avg</td> 
                {/* <td><div>{calc}</div></td>  */}
             </tr>
           </tbody>
         </table>
         <button type="submit">add row</button>
       </div >
       </>
);};



export default Table;