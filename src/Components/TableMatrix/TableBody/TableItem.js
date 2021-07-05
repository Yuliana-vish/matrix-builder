import { connect } from 'react-redux';
import cx from 'classnames';
import actions from '../../../redux/matrix/actions';

const TableItem = ({
  item,
  incrementCell,
  cells,
  sortedMatrix,
  setNearestCells,
  resetNearestCells,
  nearest,
}) => {
  const onClickItem = () => {
    if (item.Amount < 999) {
      incrementCell(item);
    }
  };

  const handleMouseEnter = () => {
    setNearestCells(cells, sortedMatrix, item);
  };

  const handleMouseLeave = () => {
    resetNearestCells();
  };
  return (
    <div
      className={cx('amount', {
        'nearest-item': nearest && nearest.includes(item),
      })}
      onClick={onClickItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.Amount}
    </div>
  );
};

const mapStateToProps = state => ({
  nearest: state.matrix.nearest,
});

const mapDispatchToProps = {
  incrementCell: actions.incrementCell,
  setNearestCells: actions.setNearestCells,
  resetNearestCells: actions.resetNearestCells,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableItem);
