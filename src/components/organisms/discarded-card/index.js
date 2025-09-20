import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/atoms/button';
import Numbers from '@/components/atoms/numbers';
import styles from './discarded-card.module.css';

const DiscardedCard = ({ distributions, setStep }) => {
  const handleClick = () => {
    setStep(1);
  };

  return (
    <div>
      <h2>Please discard the following numbers from the game:</h2>
      <Numbers
        numbers={distributions.discarded}
      />
      <Button
        onClick={handleClick}
        label="Continue to player distributions"
      />
    </div>
  );
};

DiscardedCard.PropTypes = {
  distributions: PropTypes.shape({
    discarded: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  setStep: PropTypes.func.isRequired
};

export default DiscardedCard;
