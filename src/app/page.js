'use client';

import { useState } from 'react';
import PlayersDropdown from '@/components/atoms/players-dropdown';
import styles from './entry.module.css';

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
        <button
          className={styles.button}
          type="button"
          onClick={{}}
          disabled={!playerCount}
        >
          Distribute ball numbers
        </button>
      </div>
    </main>
  );
};

export default Page;