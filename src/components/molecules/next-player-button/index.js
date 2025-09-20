import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/atoms/button';

const NextPlayerButton = ({ setNumbers, setStep }) => {
  const handleClick = () => {
    setNumbers([]);
    setStep(step + 1);
  };

  return (
    <Button
      onClick={handleClick}
      label="Next Player"
    />
  );
};

NextPlayerButton.PropTypes = {
  setNumbers: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired
};

export default NextPlayerButton;