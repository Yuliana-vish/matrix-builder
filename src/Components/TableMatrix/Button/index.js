//import { addRow } from '../../../core/function';
import { connect } from 'react-redux';
import actions from '../../../redux/matrix/actions';

const Button = ({ addRow, matrixRows }) => {
  const handleAddRow = () => {
    addRow(matrixRows);
    console.log(addRow);
  };

  return (
    <div className="btn-matrix">
      <button
        className="button btn-addrow"
        type="button"
        onClick={() => handleAddRow()}
      >
        add row
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  rows: state.matrix.settings.rows,
  matrixRows: state.matrix.matrixRows,
});

const mapDispatchToProps = {
  addRow: actions.addRow,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);

//export default Button;
