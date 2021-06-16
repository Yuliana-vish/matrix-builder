import React from 'react';
import PropTypes from 'prop-types';



const ColumnAvп = ({ amount }) => (
  <div className="/">{amount}</div>
);

ColumnAverage.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default ColumnAvп;
