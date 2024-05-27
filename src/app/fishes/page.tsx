'use client';

import { useCallback, useMemo, useState } from 'react';
import { FishFilter, ReserveFishGrid } from 'components';
import { Spinner } from 'components';
import { reserves } from 'config/reserves';
import type { FishEntity } from 'types/fishes';
import styles from './page.module.css';

const FishesPage = () => {
  // List of currently displayed entities (will be populated after the filter mounts)
  const [fishEntities, setFishEntities] = useState<FishEntity[]>([]);

  // Flag indicating whether filtered entities have been populated by the fish filter
  const [loaded, setLoaded] = useState(false);

  /**
   * Handle changing any of the filter options
   *
   * @param entities List of fish entities that should be displayed
   */
  const handleFilterChange = useCallback((entities: FishEntity[]) => {
    setFishEntities(entities);
    setLoaded(true);
  }, []);

  // Render results depending on the state of filters
  const results = useMemo(() => {
    if (!loaded) {
      return (
        <div className={styles.FishesPageNoResults}>
          <Spinner />
          <span className={styles.FishesPageNoResultsMessage}>Loading fish data</span>
        </div>
      );
    }

    if (!fishEntities.length) {
      return <div className={styles.FishesPageNoResults}>No results found</div>;
    }

    return reserves.map(reserve => (
      <ReserveFishGrid entities={fishEntities} key={reserve.id} reserve={reserve} />
    ));
  }, [fishEntities, loaded]);

  return (
    <>
      <title>Fish - TackleBox</title>
      {results}
      <FishFilter onChange={handleFilterChange} />
    </>
  );
};

export default FishesPage;
