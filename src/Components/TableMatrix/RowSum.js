import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const RowSum = ({ row }) => {
  const [sum, setRowSum] = useState();
  useEffect(() => {
    if (row) {
      const sum = sumRowNumbers(row);
      setRowSum(sum);
    }
  }, [row]);

  const sumRowNumbers = row => {   
      return row.reduce((acc, el) => acc + Number(el.Amount), 0);  
  };
   return (
    <div className="/">{sum}</div>
   )
}

RowSum.propTypes = {
  Amount: PropTypes.number,
};

RowSum.defaultProps = {
  Amount: 0,
};

export default RowSum;
