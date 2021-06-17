import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { sumRowAvg, calcAvgNumbers } from '../../../core/function';

const ColumnAvg = ({ columns, rows, matrixRows }) => {
  const [avg, setAvg] = useState();
  useEffect(() => {
    if (matrixRows) {
      const calc = calcAvgNumbers(columns, rows, matrixRows);
      setAvg(calc);
      console.log(calc);
    }
  }, [columns, rows, matrixRows]);

  return (
    <tr>
      <td>Avg</td>
      {avg &&
        avg.map((el, index) => (
          <td key={index}>
            <div className="/">{el}</div>
          </td>
        ))}
      {avg && <td>{sumRowAvg(avg)}</td>}
    </tr>
  );
};

ColumnAvg.propTypes = {
  avg: PropTypes.number.isRequired,
};

export default ColumnAvg;
