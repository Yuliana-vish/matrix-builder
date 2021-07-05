import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../redux/matrix/actions';
import SettingsInput from './SettingsInput';

class Form extends Component {
  static propTypes = {
    setSettings: PropTypes.func.isRequired,
  };

  handleClick = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: +value });

    //console.log(typeof value);
  };

  submitForm = event => {
    event.preventDefault();
    const settings = {
      columns: this.state.columns,
      rows: this.state.rows,
      cells: this.state.cells,
    };
    this.props.setSettings(settings);
    console.log(settings);

    //this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ columns: '', rows: '', cells: '' });
  };

  render() {
    return (
      <>
        <form className="/" onSubmit={this.submitForm}>
          <h1 className="title">Matrix builder</h1>
          <SettingsInput addInputData={this.handleClick} {...this.state} />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  setSettings: actions.setSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
