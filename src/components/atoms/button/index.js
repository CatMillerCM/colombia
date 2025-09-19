import PropTypes from 'prop-types';
import React from 'react';
import styles from './button.module.css';
import distributeNumbers from '@/utils/distribute-numbers';

const Button = ({ playerCount, useRemainder }) => {
  const handleClick = () => {
    const distributions = distributeNumbers(playerCount, useRemainder);
    console.log(distributions, "<<<dissss")
  };

  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleClick}
      disabled={!playerCount}
    >
      Distribute ball numbers
    </button>
  )
};

Button.propTypes = {
  playerCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  useRemainder: PropTypes.bool.isRequired
};

export default Button;