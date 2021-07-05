import { connect } from 'react-redux';
import actions from '../../../redux/matrix/actions';

const RemoveButton = ({ index, deleteRow }) => {
  const removeRow = () => {
    deleteRow(index);
    console.log(removeRow);
  };

  return (
    <td className="banner">
      <button
        className="remove-button"
        type="submit"
        onClick={() => removeRow()}
      >
        x
      </button>
    </td>
  );
};

const mapDispatchToProps = {
  deleteRow: actions.deleteRow,
};

export default connect(null, mapDispatchToProps)(RemoveButton);
