import { FishInfoBaitsValue } from './FishInfoBaitsValue';
import type { FishInfoBaitsBaitsRowProps } from './types';
import styles from './FishInfoBaits.module.css';

export const FishInfoBaitsBaitsRow = (props: FishInfoBaitsBaitsRowProps) => {
  const { value } = props;

  return (
    <div className={styles.FishInfoBaitsRow} key={value.bait.id}>
      <div className={styles.FishInfoBaitsKey}>{value.bait.name}</div>
      <div className={styles.FishInfoBaitsValues}>
        <FishInfoBaitsValue chance={value.chance} />
      </div>
    </div>
  );
};
