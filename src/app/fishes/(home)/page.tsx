'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { type ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Input, ReserveFishGrid } from 'components';
import { reserves } from 'config/reserves';
import styles from './page.module.css';

const FishesPage = () => {
  const params = useSearchParams();
  const router = useRouter();

  // Initialise the search query to the current value of the "q" query parameter
  const [query, setQuery] = useState(() => params.get('q') ?? undefined);

  /**
   * Update internally stored query value on each input change
   */
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value.trim()),
    [],
  );

  // Update URL with the new value whenever the search query changes
  useEffect(() => {
    if (!query) {
      router.replace('/fishes');
    } else {
      router.replace(`/fishes?q=${query}`);
    }
  }, [query, router]);

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
