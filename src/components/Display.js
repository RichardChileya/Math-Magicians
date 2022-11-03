import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (
  <div id="screen">
    <span>
      { value }
    </span>
  </div>
);
Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
