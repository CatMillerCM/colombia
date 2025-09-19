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
  const [step, setStep] = useState(1);

  return (
    <main className={styles.main}>
      <div>
        {distributions && Object.keys(distributions).length > 0 ? (
          <RevealCard
            distributions={distributions}
            setStep={setStep}
            step={step}
          />
        ) : (
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
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;