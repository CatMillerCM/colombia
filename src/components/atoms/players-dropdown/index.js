import PropTypes from 'prop-types';
import React from 'react';
import styles from './players-dropdown.module.css';

const PlayersDropdown = ({ playerCount, setPlayerCount, ballNumbers }) => {
  return (
    <select
      className={styles.input}
      value={playerCount}
      onChange={e => setPlayerCount(e.target.value)}
    >
      <option value="" disabled>Select number of players</option>
      {ballNumbers.map((number) => (
        <option key={number} value={number}>{number}</option>
      ))}
    </select>
  )
};

PlayersDropdown.propTypes = {
  playerCount: PropTypes.number.isRequired,
  setPlayerCount: PropTypes.func.isRequired,
  ballNumbers: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default PlayersDropdown;