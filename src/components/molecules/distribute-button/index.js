import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/atoms/button';
import distributeNumbers from '@/utils/distribute-numbers';

const DistributeButton = ({ playerCount, useRemainder, setDistributions }) => {
  const handleDistribute = () => {
    const distributions = distributeNumbers(playerCount, useRemainder);
    setDistributions(distributions);
  };

  return (
    <Button
      onClick={handleDistribute}
      label="Distribute ball numbers"
      disabled={!playerCount}
    />
  );
};

DistributeButton.propTypes = {
  playerCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  useRemainder: PropTypes.bool.isRequired,
  setDistributions: PropTypes.func.isRequired
};

export default DistributeButton;