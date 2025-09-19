'use client';

import { useState } from 'react';
import Button from '@/components/atoms/button';
import PlayersDropdown from '@/components/atoms/players-dropdown';
import RemainderWarning from '@/components/molecules/remainder-warning';
import styles from './entry.module.css';

const Page = () => {
  const [playerCount, setPlayerCount] = useState("");
  const [hasRemainder, setHasRemainder] = useState(false);
  const [useRemainder, setUseRemainder] = useState(true);

  return (
    <main className={styles.main}>
      <div>
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
        <Button
          playerCount={playerCount}
          useRemainder={useRemainder}
        />
      </div>
    </main>
  );
};

export default Page;