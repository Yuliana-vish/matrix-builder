import { Component } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import GetSettings from './GetSettings';
//import actions from '../../redux/matrix/actions';

class Form extends Component {
  state = {
    columns: '',
    rows: '',
    cells: '',
  };

  handleClick = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ columns: '', rows: '', cells: '' });
  };

  render() {
    return (
      <>
        <form className="/" onSubmit={this.submitForm}>
          <h2>Matrix builder</h2>
          <GetSettings addInputData={this.handleClick} {...this.state} />
        </form>
      </>
    );
  }
}


// const mapDispatchToProps = dispatch => ({
//   onSubmit: (columns, rows, cells) => dispatch(actions.getSettings(columns, rows, cells)),
// });

Form.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  cells: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
//export default connect(null, mapDispatchToProps)(Form);
