import { useState } from 'react';
import PropTypes from 'prop-types';
import { sumRowNumbers } from '../../../core/function';

const RowSumCell = ({ row }) => {
  const [sum] = useState(sumRowNumbers(row));
  console.log(sum);

  const showPercentage = ({ sum, Amount }) => {
    const percent = ((Amount * 100) / sum).toFixed();

    return (
      <td>
        <div>{percent}%</div>
      </td>
    );
  };

  return (
    <td
      key={sum}
      onMouseDown={() => showPercentage(true)}
      // onMouseEnter={() => showPercentage(true)}
      onMouseLeave={() => showPercentage(false)}
    >
      <div>{sum}</div>
    </td>
  );
};

RowSumCell.propTypes = {
  Amount: PropTypes.number,
};

RowSumCell.defaultProps = {
  Amount: 0,
};

export default RowSumCell;
