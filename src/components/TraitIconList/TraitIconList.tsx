import { TraitIcon } from 'components';
import type { TraitIconListProps } from './types';
import styles from './TraitIconList.module.css';

export const TraitIconList = (props: TraitIconListProps) => {
  const { size, traitIds } = props;

  return (
    <div className={styles.TraitIconList}>
      {traitIds.map(id => (
        <TraitIcon className={styles.TraitIconListIcon} key={id} size={size} traitId={id} />
      ))}
    </div>
  );
};
