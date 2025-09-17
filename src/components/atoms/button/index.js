import PropTypes from 'prop-types';
import React from 'react';
import styles from './button.module.css';

const Button = ({ playerCount }) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={{}}
      disabled={!playerCount}
    >
      Distribute ball numbers
    </button>
  )
};

Button.propTypes = {
  playerCount: PropTypes.number.isRequired
};

export default Button;