import { FishGrid, Separator } from 'components';
import { fishes } from 'config/fishes';
import type { ReserveFishGridProps } from './types';
import styles from './ReserveFishGrid.module.css';

export const ReserveFishGrid = (props: ReserveFishGridProps) => {
  const { reserve } = props;

  const reserveFishes = fishes.filter(fish => fish.reserves.includes(reserve.id));

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
