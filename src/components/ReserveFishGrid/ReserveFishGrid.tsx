import { FishGrid, Separator } from 'components';
import { fishes } from 'config/fishes';
import type { ReserveFishGridProps } from './types';
import styles from './ReserveFishGrid.module.css';

export const ReserveFishGrid = (props: ReserveFishGridProps) => {
  const { query, reserve } = props;

  // Filter fish that inhabit the current reserve and optionally filter them by a search query
  const reserveFishes = fishes
    .filter(fish => fish.reserves.includes(reserve.id))
    .filter(fish => (query ? fish.name.toLowerCase().includes(query.toLowerCase()) : true));

  // Do not render the grid if there are no fish available
  if (!reserveFishes.length) {
    return null;
  }

  return (
    <div className={styles.ReserveFishGrid}>
      <div className={styles.ReserveFishGridHeader}>
        <h2 className={styles.ReserveFishGridTitle}>{reserve.name}</h2>
        <Separator highlight="center" />
      </div>

      <FishGrid fishes={reserveFishes} key={reserve.id} />
    </div>
  );
};
