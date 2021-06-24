import { useState } from 'react';

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

export default TableItem;
