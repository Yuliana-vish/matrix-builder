import PropTypes from 'prop-types';
//import { useEffect, useState } from 'react';

const ColumnAvg = ({avg}) => {

  return (
    <div className="/">{avg}</div>
  );
}

  ColumnAvg.propTypes = {
    amount: PropTypes.number.isRequired,
  };


export default ColumnAvg;