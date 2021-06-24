import { useState } from 'react';
import { sumRowNumbers } from '../../../core/function';

const RowSumCell = ({ row }) => {
  const [sum] = useState(sumRowNumbers(row));
  //console.log(sum);

  return (
    <td>
      <div>{sum}</div>
    </td>
  );
};

export default RowSumCell;
