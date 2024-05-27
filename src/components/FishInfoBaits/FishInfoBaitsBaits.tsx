import clsx from 'clsx';
import { FishInfoBaitsBaitsRow } from './FishInfoBaitsBaitsRow';
import type { FishInfoBaitsBaitsProps } from './types';
import styles from './FishInfoBaits.module.css';

export const FishInfoBaitsBaits = (props: FishInfoBaitsBaitsProps) => {
  const { caption, headerClassName, values, wrapperClassName } = props;

  if (!values.length) {
    return null;
  }

  return (
    <div className={wrapperClassName} key={caption}>
      <div className={clsx(styles.FishInfoBaitsKindHeader, headerClassName)}>{caption}</div>

      {values.map(value => (
        <FishInfoBaitsBaitsRow key={value.bait.id} value={value} />
      ))}
    </div>
  );
};
