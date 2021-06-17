import { useState } from 'react';
import PropTypes from 'prop-types';
import { sumRowNumbers } from '../../../core/function';

const RowSum = ({ row }) => {
  const [sum] = useState(sumRowNumbers(row));

  return <div className="/">{sum}</div>;
};

RowSum.propTypes = {
  Amount: PropTypes.number,
};

RowSum.defaultProps = {
  Amount: 0,
};

export default RowSum;
