import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor
      }}
    >
    </div>
  );
};

ColorDisplay.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export default ColorDisplay;
