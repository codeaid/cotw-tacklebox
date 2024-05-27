import clsx from 'clsx';
import type { FishInfoBaitsRatingProps } from './types';
import styles from './FishInfoBaitsRating.module.css';

export const FishInfoBaitsRating = (props: FishInfoBaitsRatingProps) => {
  const { size = 1, value } = props;

  return (
    <div className={styles.FishInfoBaitsRating} style={{ fontSize: `${size}em` }}>
      {Array.from(Array(value).keys()).map(index => (
        <div
          className={clsx(styles.FishInfoBaitsRatingItem, {
            [styles.FishInfoBaitsRatingBronze]: value === 1,
            [styles.FishInfoBaitsRatingSilver]: value === 2,
            [styles.FishInfoBaitsRatingGold]: value === 3,
          })}
          key={index}
        >
          &nbsp;
        </div>
      ))}
    </div>
  );
};
