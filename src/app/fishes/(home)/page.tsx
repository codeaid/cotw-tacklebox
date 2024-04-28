'use client';

import { type ChangeEvent, useCallback, useState } from 'react';
import { Input, ReserveFishGrid } from 'components';
import { reserves } from 'config/reserves';
import styles from './page.module.css';

const FishesPage = () => {
  // Initialise the search query to the current value of the "q" query parameter
  const [query, setQuery] = useState('');

  /**
   * Update internally stored query value on each input change
   */
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value.trim()),
    [],
  );

  return (
    <>
      <div className={styles.FishesPageSearchInput}>
        <Input defaultValue={query} name="q" placeholder="Search..." onChange={handleInputChange} />
      </div>

      {reserves.map(reserve => (
        <ReserveFishGrid key={reserve.id} query={query} reserve={reserve} />
      ))}
    </>
  );
};

export default FishesPage;
