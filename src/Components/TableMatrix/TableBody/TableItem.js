import { connect } from 'react-redux';
import actions from '../../../redux/matrix/actions';

const TableItem = ({ item, incrementCell }) => {
  const onClickItem = () => {
    if (item.Amount < 999) {
      incrementCell(item);
    }
  };
  return (
    <div className="amount" onClick={onClickItem}>
      {item.Amount}
    </div>
  );
};

const mapDispatchToProps = {
  incrementCell: actions.incrementCell,
};

export default connect(null, mapDispatchToProps)(TableItem);
