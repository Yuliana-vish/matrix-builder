import { connect } from 'react-redux';
//import actions from '../../../redux/matrix/actions';
//import { useSelector, useDispatch } from 'react-redux';

const RemoveButton = ({
  index,
  setMatrixRows,
  matrixRows,
  setCurrentRowsNum,
}) => {
  const removeRow = () => {
    //console.log(matrixRows, index);
    const deleteRow = matrixRows.filter((el, i) => index !== i);
    setCurrentRowsNum(prevState => prevState - 1); //обновляю state
    //console.log(deleteRow);
    setMatrixRows(deleteRow);
  };

  return (
    <td>
      <button type="submit" onClick={() => removeRow()}>
        x
      </button>
    </td>
  );
};

// const mapStateToProps = state => ({
//   settings: state.settings,
// });

// const mapDispatchToProps = {
//   deleteRow: actions.deleteRow,
// };

//export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);

export default RemoveButton;
