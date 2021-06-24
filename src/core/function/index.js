export const randomGenerator = (item, i) => ({
  Amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
  ID: i,
});

export const sumRowNumbers = row => {
  return row.reduce((acc, el) => acc + Number(el.Amount), 0);
};

export const sumRowAvg = avg => {
  return avg.reduce((acc, el) => acc + Number(el), 0);
};

export const calcAvgNumbers = (columns, rows, matrixRows) => {
  let columnAvg = [];
  for (let i = 0; i < columns; i++) {
    let acc = 0;
    for (let j = 0; j < rows; j++) {
      acc += Number(matrixRows[j][i].Amount);
    }
    columnAvg = [...columnAvg, Math.round(acc / Number(rows))];
  }
  return columnAvg;
};

// export const showPercentage = ({ sum, value }) => {
//   const percent = ((value * 100) / sum).toFixed();
//   const style = {
//     backgroundSize: `100% ${percent}% `,
//   };
//   return (
//     <td>
//       <div style={style}>{percent}%</div>
//     </td>
//   );
// };

export const addRow = () => {};
