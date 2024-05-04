import clsx from 'clsx';
import { IoSearch } from 'react-icons/io5';
import type { FishFilterButtonProps } from './types';
import styles from './FishFilterButton.module.css';

export const FishFilterButton = (props: FishFilterButtonProps) => {
  const { active, onClick } = props;

  return (
    <button
      className={clsx(styles.FishFilterButton, {
        [styles.FishFilterButtonActive]: active,
      })}
      onClick={onClick}
    >
      <IoSearch className={styles.FishFilterButtonIcon} />
      <span className={styles.FishFilterButtonLabel}>Filter</span>
    </button>
  );
};
