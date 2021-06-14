import getRandomMatrix from './GetRandomMatrix.js';
import TableHeader from './TableHeader';


const Table = ({ columns, rows, cells }) => {
  const arr = getRandomMatrix(columns, rows, cells);
  console.log(arr);

   // const rowNumber = rows => {
  //   let cell = [];
  //   for (let i = 0; i < rows.length; i++) {
  //     cell.push(i+1)
  //   }
  //   return cell;
  // };
  // const num = rowNumber(rows);

   
  // const sumNumber = rows => {
  //  return rows.forEach(row => 
  //     row.reduce((a, b) => a + b)
  //   );    
  // } 
  // const sum = sumNumber(rows)


  return (
    <>
      <hr />
      <div className="/">
        <table className="/">
          <TableHeader columns={columns} />

          <tbody>
            {arr &&
              arr.map((row, i) => (
                <tr key={i}>
                  <td>*</td>

                  {/* <td>{num}</td> */}
                  {row.map((col, j) => (
                    <td key={j}>{col} ; </td>
                  ))}

                                   
                  {/* <td>{sum}</td> */}
                  <td>*</td>

                  <button type="submit"> x </button>
                </tr>
              ))}
          </tbody>
        </table>
        <button type="submit">add row</button>
      </div>
    </>
  );
};



export default Table;

// }
//export default connect(mapStateToProps)(Table);



     /* <tbody>
            <tr>
              <td>номер строки</td>
              <td>значение ячейки</td>
              <td>сумма строки</td>
            </tr>
          </tbody> */
   

   