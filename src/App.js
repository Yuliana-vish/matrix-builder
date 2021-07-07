import Form from './Components/Form';
import TableMatrix from './Components/TableMatrix';
import RandomWords from './Components/RandomWords';

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
      <section className="section-form">
        <Form />
      </section>
      <section className="section-table">{matrix && <TableMatrix />}</section>
      <section className="section-words">
        <RandomWords />
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  settings: state.matrix.settings,
});

export default connect(mapStateToProps)(App);
