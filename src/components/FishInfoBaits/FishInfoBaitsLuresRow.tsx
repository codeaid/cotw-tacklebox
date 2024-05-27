import clsx from 'clsx';
import { lureMethods } from 'config/baits';
import { FishInfoBaitsValue } from './FishInfoBaitsValue';
import type { FishInfoBaitsLuresRowProps } from './types';
import styles from './FishInfoBaits.module.css';

export const FishInfoBaitsLuresRow = (props: FishInfoBaitsLuresRowProps) => {
  const { value } = props;

  return (
    <div className={clsx(styles.FishInfoBaitsRow, styles.FishInfoBaitsRowLures)}>
      <div className={styles.FishInfoBaitsKey}>{value.lure.name}</div>
      <div className={clsx(styles.FishInfoBaitsValues, styles.FishInfoBaitsValuesLures)}>
        {lureMethods.map(method => (
          <FishInfoBaitsValue chance={value.value[method.id]} key={method.id} />
        ))}
      </div>
    </div>
  );
};
