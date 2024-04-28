import type { FishInfoDetailsItemProps } from './types';
import styles from './FishInfoDetailsItem.module.css';

export const FishInfoDetailsItem = (props: FishInfoDetailsItemProps) => {
  const { caption, children } = props;

  return (
    <dl className={styles.FishInfoDetailsItem}>
      <dt className={styles.FishInfoDetailsItemCaption}>{caption}</dt>
      <dd className={styles.FishInfoDetailsItemChildren}>{children}</dd>
    </dl>
  );
};
