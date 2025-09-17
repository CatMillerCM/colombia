'use client';

import { useState } from 'react';
import PlayersDropdown from '@/components/atoms/players-dropdown';
import styles from './entry.module.css';
import Button from '@/components/atoms/button';

const Page = () => {
  const [playerCount, setPlayerCount] = useState(null);

  const ballNumbers = Array.from({ length: 14 }, (_, i) => i + 2);

  return (
    <main className={styles.main}>
      <div>
        <PlayersDropdown
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
          ballNumbers={ballNumbers}
        />
        <Button
          playerCount={playerCount}
        />
      </div>
    </main>
  );
};

export default Page;