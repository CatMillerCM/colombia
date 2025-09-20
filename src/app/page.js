'use client';

import { useState } from 'react';
import EntryCard from '@/components/organisms/entry-card';
import DiscardedCard from '@/components/organisms/discarded-card';
import RevealCard from '@/components/organisms/reveal-card';
import styles from './page.module.css';

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
          <EntryCard
            playerCount={playerCount}
            setPlayerCount={setPlayerCount}
            hasRemainder={hasRemainder}
            setHasRemainder={setHasRemainder}
            useRemainder={useRemainder}
            setUseRemainder={setUseRemainder}
            setDistributions={setDistributions}
            setStep={setStep}
          />
        )}
        {step === 'discarded' && (
          <DiscardedCard
            distributions={distributions}
            setStep={setStep}
          />
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