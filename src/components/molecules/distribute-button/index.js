import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/atoms/button';
import distributeNumbers from '@/utils/distribute-numbers';

const DistributeButton = ({ playerCount, useRemainder }) => {
  const handleDistribute = () => {
    const distributions = distributeNumbers(playerCount, useRemainder);
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
  useRemainder: PropTypes.bool.isRequired
};

export default DistributeButton;