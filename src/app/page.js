'use client';

import { useState } from 'react';
import styles from './entry.module.css';

const Page = () => {
  const [playerCount, setPlayerCount] = useState(null);

  return (
    <main className={styles.main}>
      <div>
        <select
          className={styles.input}
          value={playerCount}
          onChange={e => setPlayerCount(e.target.value)}
        >
          <option value="" disabled>Select number of players</option>
          {[...Array(15)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
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