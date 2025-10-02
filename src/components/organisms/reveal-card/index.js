import PropTypes from 'prop-types';
import { useState } from 'react';
import NextPlayerButton from '@/components/molecules/next-player-button';
import RestartButton from '@/components/molecules/restart-button';
import Numbers from '@/components/atoms/numbers';
import RevealButton from '@/components/molecules/reveal-button';
import styles from './reveal-card.module.css';

const RevealCard = ({
  distributions, setStep, step, playerCount
}) => {
  const [numbers, setNumbers] = useState([]);

  return (
    <div>
      <h2 className={styles.title}>
        Pass the device to
        {' '}
        <span className={styles.playerNumber}>
          Player
          {' '}
          {step}
        </span>
      </h2>
      <RevealButton
        numbers={numbers}
        setNumbers={setNumbers}
        distributions={distributions}
        step={step}
      />
      {numbers.length > 0 && (
        <>
          <Numbers numbers={numbers} />
          {step === playerCount ? (
            <>
              <p>All numbers distributed! Enjoy the game!</p>
              <RestartButton setStep={setStep} />
            </>
          ) : (
            <NextPlayerButton setNumbers={setNumbers} setStep={setStep} step={step} />
          )}
        </>
      )}
    </div>
  );
};

RevealCard.propTypes = {
  distributions: PropTypes.shape({
    playerPots: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired,
    discarded: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  playerCount: PropTypes.number.isRequired
};

export default RevealCard;
