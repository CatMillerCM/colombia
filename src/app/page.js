'use client';

import { useState } from 'react';
import styles from './entry.module.css';

const Page = () => {
  const [playerCount, setPlayerCount] = useState(null);

  const ballNumbers = Array.from({ length: 14 }, (_, i) => i + 2);

  return (
    <main className={styles.main}>
      <div>
        <select
          className={styles.input}
          value={playerCount}
          onChange={e => setPlayerCount(e.target.value)}
        >
          <option value="" disabled>Select number of players</option>
          {ballNumbers.map((number) => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
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