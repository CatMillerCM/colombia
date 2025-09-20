import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '@/components/atoms/button';

const RevealCard = ({ distributions, setStep, step, playerCount }) => {
  const [numbers, setNumbers] = useState([]);

  const handleReveal = () => {
    setNumbers(distributions.playerPots[step - 1]);
  };

  const handleNextPlayer = () => {
    setNumbers([]);
    setStep(step + 1);
  }

  return (
    <div>
      <h2>Pass the device to Player {step}</h2>
      <Button
        onClick={handleReveal}
        label={`Reveal player ${step}'s numbers`}
        disabled={numbers.length > 0}
      />
      {numbers.length > 0 && (
        <div>
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
      {numbers.length > 0 && step === playerCount && (
        <div>
          <p>All numbers distributed! Enjoy the game!</p>
          <Button
            onClick={() => setStep('entry')}
            label="Restart"
          />
        </div>
      )
      }
      {numbers.length > 0 && step < playerCount &&
        <Button
          onClick={handleNextPlayer}
          label={`Next Player`}
        />
      }
    </div>
  );
};

RevealCard.propTypes = {
  distributions: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  playerCount: PropTypes.number.isRequired
};

export default RevealCard;