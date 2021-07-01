import { useEffect, useState } from 'react';
import { sumRowAvg, calcAvgNumbers } from '../../../core/function';

const ColumnAvg = ({ columns, rows, matrixRows }) => {
  const [avg, setAvg] = useState();

  useEffect(() => {
    if (matrixRows) {
      const calc = calcAvgNumbers(columns, rows, matrixRows);
      setAvg(calc);
    }
  }, [columns, rows, matrixRows]);

  return (
    <tr>
      <td className="amount banner">Avg</td>
      {avg &&
        avg.map((el, index) => (
          <td className="table-item" key={index}>
            <div className="amount">{el}</div>
          </td>
        ))}
      {avg && <td className="table-item amount">{sumRowAvg(avg)}</td>}
    </tr>
  );
};

export default ColumnAvg;
