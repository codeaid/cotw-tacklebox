import clsx from 'clsx';
import { FishInfoBaitsRating } from './FishInfoBaitsRating';
import type { FishInfoBaitsBaitValueProps } from './types';
import styles from './FishInfoBaits.module.css';

export const FishInfoBaitsValue = (props: FishInfoBaitsBaitValueProps) => {
  const { chance } = props;

  if (typeof chance !== 'number') {
    return (
      <div
        className={clsx(styles.FishInfoBaitsValue, {
          [styles.FishInfoBaitsValueEmpty]: !chance,
        })}
      >
        ~
      </div>
    );
  }

  return (
    <div className={styles.FishInfoBaitsValue}>
      <FishInfoBaitsRating size={0.5} value={chance} />
    </div>
  );
};
