'use client';

import { useState } from 'react';
import PlayersDropdown from '@/components/atoms/players-dropdown';
import styles from './entry.module.css';
import Button from '@/components/atoms/button';

const Page = () => {
  const [playerCount, setPlayerCount] = useState("");
  const [hasRemainder, setHasRemainder] = useState(false);

  const ballNumbers = Array.from({ length: 15 }, (_, i) => i + 1);
  const playerOptions = ballNumbers.slice(1);

  return (
    <main className={styles.main}>
      <div>
        <PlayersDropdown
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
          setHasRemainder={setHasRemainder}
          playerOptions={playerOptions}
        />
        {hasRemainder && (
          <div>
          <p className={styles.warning}>There will be leftover numbers after distribution.</p>
          <p>Would you like to distribute these numbers to players, or discard them from the game?</p>
          </div>
        )}
        <Button
          playerCount={playerCount}
        />
      </div>
    </main>
  );
};

export default Page;