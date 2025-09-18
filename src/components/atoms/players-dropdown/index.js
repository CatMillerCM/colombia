import PropTypes from 'prop-types';
import React from 'react';
import checkIfRemainder from '@/utils/check-if-remainder';
import styles from './players-dropdown.module.css';

const PlayersDropdown = ({ playerCount, setPlayerCount, setHasRemainder, playerOptions }) => {
  const handleOnChange = (e) => {
    setPlayerCount(Number(e.target.value));
    const hasRemainder = checkIfRemainder(Number(e.target.value), 15);
    setHasRemainder(hasRemainder);
  };

  return (
    <select
      className={styles.input}
      value={playerCount}
      onChange={handleOnChange}
    >
      <option value="" disabled>Select number of players</option>
      {playerOptions.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
};

PlayersDropdown.propTypes = {
  playerCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setPlayerCount: PropTypes.func.isRequired,
  setHasRemainder: PropTypes.func.isRequired,
  playerOptions: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default PlayersDropdown;