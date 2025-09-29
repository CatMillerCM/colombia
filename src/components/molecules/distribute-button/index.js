import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/atoms/button';
import distributeNumbers from '@/utils/distribute-numbers';

const DistributeButton = ({
  playerCount, useRemainder, setDistributions, setStep
}) => {
  const handleClick = () => {
    const distributions = distributeNumbers(playerCount, useRemainder);
    setDistributions(distributions);
    setStep(distributions.discarded.length > 0 ? 'discarded' : 1);
  };

  return (
    <Button
      onClick={handleClick}
      label="Distribute ball numbers"
      disabled={!playerCount}
    />
  );
};

DistributeButton.propTypes = {
  playerCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  useRemainder: PropTypes.bool.isRequired,
  setDistributions: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired
};

export default DistributeButton;
