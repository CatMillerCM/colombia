'use client';

import { useState } from 'react';
import PlayersDropdown from '@/components/atoms/players-dropdown';
import DistributeButton from '@/components/molecules/distribute-button';
import RemainderWarning from '@/components/molecules/remainder-warning';
import styles from './entry.module.css';
import Button from '@/components/atoms/button';
import RevealCard from '@/components/organisms/reveal-card';

const Page = () => {
  const [playerCount, setPlayerCount] = useState("");
  const [hasRemainder, setHasRemainder] = useState(false);
  const [useRemainder, setUseRemainder] = useState(true);
  const [distributions, setDistributions] = useState({});
  const [step, setStep] = useState('entry');

  return (
    <main className={styles.main}>
      <div>
        {step === 'entry' && (
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
        )}
        {step === 'discarded' && (
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
        )}
        {typeof step === 'number' && (
          <RevealCard
            distributions={distributions}
            setStep={setStep}
            step={step}
            playerCount={playerCount}
          />
        )}
      </div>
    </main>
  );
};

export default Page;