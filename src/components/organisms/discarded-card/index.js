import React from 'react';
import PropTypes from 'prop-types';
import Numbers from '@/components/atoms/numbers';
import ContinueToDistributionsButton from '@/components/molecules/continue-to-distributions-button';
import styles from './discarded-card.module.css';

const DiscardedCard = ({ distributions, setStep }) => {
  const handleClick = () => {
    setStep(1);
  };

  return (
    <div>
      <h2>Please discard the following numbers from the game:</h2>
      <Numbers numbers={distributions.discarded} />
      <ContinueToDistributionsButton setStep={setStep} />
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
