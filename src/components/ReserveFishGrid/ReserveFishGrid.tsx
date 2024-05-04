import { FishGrid, Separator } from 'components';
import type { ReserveFishGridProps } from './types';
import styles from './ReserveFishGrid.module.css';

export const ReserveFishGrid = (props: ReserveFishGridProps) => {
  const { entities, reserve } = props;

  // Filter fish that inhabit the current reserve and optionally filter them by a search query
  const reserveFishes = entities.filter(fish => fish.reserve === reserve.id);

  // Do not render the grid if there are no fish available
  if (!reserveFishes.length) {
    return null;
  }

  return (
    <div className={styles.ReserveFishGrid}>
      <div className={styles.ReserveFishGridHeader}>
        <h1 className={styles.ReserveFishGridTitle}>
          {reserve.name}
          <span className={styles.ReserveFishGridTitleCount}>({reserveFishes.length})</span>
        </h1>
        <Separator highlight="center" />
      </div>

      <FishGrid entities={reserveFishes} key={reserve.id} />
    </div>
  );
};
