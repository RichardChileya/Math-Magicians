import PropTypes from 'prop-types';
import React from 'react';

const Rows = ({ row, buttonClicks }) => {
  // const handleClicks = (e) => {
  //   buttonClicks(e.target.innerText);
  // }
  const buttons = [];
  for (let i = 0; i < row.length; i += 1) {
    buttons.push(<button type="button" key={row[i]} value={row[i]} onClick={buttonClicks}>{row[i]}</button>);
  }
  return buttons;
};

Rows.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonClicks: PropTypes.func.isRequired,

};

export default Rows;
