'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlayersDropdown from '@/components/atoms/players-dropdown';
import RemainderWarning from '@/components/molecules/remainder-warning';
import DistributeButton from '@/components/molecules/distribute-button';
import styles from './entry-card.module.css';

const EntryCard = ({
  playerCount,
  setPlayerCount,
  setDistributions,
  setStep
}) => {
  const [hasRemainder, setHasRemainder] = useState(false);
  const [useRemainder, setUseRemainder] = useState(true);

  return (
    <div className={styles.entry}>
      <PlayersDropdown
        playerCount={playerCount}
        setPlayerCount={setPlayerCount}
        setHasRemainder={setHasRemainder}
      />
      {hasRemainder && (
        <RemainderWarning
          setUseRemainder={setUseRemainder}
        />
      )}
      <DistributeButton
        playerCount={playerCount}
        useRemainder={useRemainder}
        setDistributions={setDistributions}
        setStep={setStep}
      />
    </div>
  );
};

EntryCard.propTypes = {
  playerCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setPlayerCount: PropTypes.func.isRequired,
  setDistributions: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired
};

export default EntryCard;