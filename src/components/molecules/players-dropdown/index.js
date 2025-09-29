import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from '@/components/atoms/dropdown';
import checkIfRemainder from '@/utils/check-if-remainder';
import styles from './players-dropdown.module.css';

const PlayersDropdown = ({ playerCount, setPlayerCount, setHasRemainder }) => {
  const playerOptions = Array.from({ length: 14 }, (_, i) => i + 2);

  const handleChange = (e) => {
    setPlayerCount(Number(e.target.value));
    const hasRemainder = checkIfRemainder(Number(e.target.value), 15);
    setHasRemainder(hasRemainder);
  };

  return (
    <Dropdown
      value={playerCount}
      onChange={handleChange}
      label="Select number of players"
      options={playerOptions}
    />
  );
};

PlayersDropdown.propTypes = {
  playerCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setPlayerCount: PropTypes.func.isRequired,
  setHasRemainder: PropTypes.func.isRequired
};

export default PlayersDropdown;
