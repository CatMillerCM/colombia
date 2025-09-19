import PropTypes from 'prop-types';
import React from 'react';
import Toggle from '../../atoms/toggle';
import styles from './remainder-warning.module.css';

const RemainderWarning = ({ setUseRemainder }) => {
  return (
    <div>
      <p>There will be leftover numbers after equal distribution.</p>
      <p>Would you like to distribute these numbers to players, or discard them from the game?</p>
      <Toggle
        onChange={setUseRemainder}
        leftLabel="Distribute"
        rightLabel="Discard"
      />
    </div>
  );
};

RemainderWarning.propTypes = {
  setUseRemainder: PropTypes.func.isRequired
};

export default RemainderWarning;