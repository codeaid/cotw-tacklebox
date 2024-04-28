import clsx from 'clsx';
import { useMemo } from 'react';
import type { FishInfoBaitsRatingProps } from './types';
import styles from './FishInfoBaitsRating.module.css';

export const FishInfoBaitsRating = (props: FishInfoBaitsRatingProps) => {
  const { size = 1, value } = props;

  const ranking = useMemo<number>(() => {
    if (process.env.NODE_ENV === 'development') {
      // return value;
    }

    switch (value) {
      case 1:
        return 1;
      case 2:
      case 3:
        return 2;
      default:
        return 3;
    }
  }, [value]);

  return (
    <div className={styles.FishInfoBaitsRating} style={{ fontSize: `${size}em` }}>
      {Array.from(Array(ranking).keys()).map(index => (
        <div
          className={clsx(styles.FishInfoBaitsRatingItem, {
            [styles.FishInfoBaitsRatingBronze]: ranking === 1,
            [styles.FishInfoBaitsRatingSilver]: ranking === 2,
            [styles.FishInfoBaitsRatingGold]: ranking === 3,
            [styles.FishInfoBaitsRatingDiamond]: ranking === 4,
            [styles.FishInfoBaitsRatingLegendary]: ranking === 5,
          })}
          key={index}
        >
          &nbsp;
        </div>
      ))}
    </div>
  );
};
