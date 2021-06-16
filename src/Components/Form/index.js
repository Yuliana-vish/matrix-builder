import { Component } from 'react';
import GetSettings from './GetSettings';

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

export default Form;

