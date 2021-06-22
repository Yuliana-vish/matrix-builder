import { useState } from 'react';
import PropTypes from 'prop-types';

const TableItem = ({ item }) => {
  const [newAmount, setNewAmount] = useState(item.Amount);

  const onClickItem = () => {
    if (newAmount < 999) {
      const calc = newAmount + 1;
      setNewAmount(calc);
    }
  };

  return <div onClick={() => onClickItem(newAmount)}>{newAmount}</div>;
};

TableItem.propTypes = {
  Amount: PropTypes.number,
};
TableItem.defaultProps = {
  Amount: 0,
};
export default TableItem;
