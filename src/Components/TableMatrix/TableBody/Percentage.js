import { sumRowNumbers } from '../../../core/function';
import { useState, useEffect } from 'react';

const Percentage = ({ item, row }) => {
  const [sum, setSum] = useState(sumRowNumbers(row));

  useEffect(() => {
    setSum(sumRowNumbers(row));
  }, [row]);

  const percent = ((item.Amount * 100) / sum).toFixed();

  return (
    <div className="percent">
      <div className="percent-text">{percent}%</div>
      <div className="column-percent" style={{ height: percent + '%' }}></div>
    </div>
  );
};
export default Percentage;
