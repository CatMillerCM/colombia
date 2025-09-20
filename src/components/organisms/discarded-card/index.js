import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/atoms/button';

const DiscardedCard = ({ distributions, setStep }) => {
  return (
    <div>
      <h2>Please discard the following numbers from the game:</h2>
      <ul>
        {distributions.discarded.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <Button
        onClick={() => setStep(1)}
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