import Form from './Components/Form';
import TableMatrix from './Components/TableMatrix';
import { connect } from 'react-redux';
import './App.css';
import { useState, useEffect } from 'react';

const App = ({ settings }) => {
  const [matrix, setMatrix] = useState(false);

  useEffect(() => {
    setMatrix(true);
  }, [settings]);

  return (
    <>
      <section className="/">
        <Form />
      </section>
      <section className="/">{matrix && <TableMatrix />}</section>
    </>
  );
};

const mapStateToProps = state => ({
  settings: state.matrix.settings,
});

export default connect(mapStateToProps)(App);
