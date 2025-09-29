import React from 'react';
import PropTypes from 'prop-types';

const Numbers = ({ numbers }) => (
  <ul>
    {numbers.map((number, index) => (
      <li key={index}>{number}</li>
    ))}
  </ul>
);

Numbers.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Numbers;
