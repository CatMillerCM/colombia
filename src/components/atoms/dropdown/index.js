import PropTypes from 'prop-types';
import React from 'react';
import styles from './dropdown.module.css';

const Dropdown = ({
  value, onChange, label, options
}) => (
  <select
    className={styles.input}
    value={value}
    onChange={onChange}
  >
    <option value="" disabled>{label}</option>
    {options.map((option) => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
);

Dropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired
};

export default Dropdown;
