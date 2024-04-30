import clsx from 'clsx';
import Image from 'next/image';
import { traitMap } from 'config/traits';
import type { TraitIconProps } from './types';
import styles from './TraitIcon.module.css';

export const TraitIcon = (props: TraitIconProps) => {
  const { className, size = 50, traitId } = props;

  // Ensure trait exists before continuing
  const trait = traitMap[traitId];
  if (!trait) {
    return null;
  }

  return (
    <div className={clsx(styles.TraitIcon, className)}>
      <Image
        alt={trait.name}
        className={styles.TraitIconImage}
        height={size}
        src={trait.image}
        width={size}
      />

      <div className={styles.TraitIconLabel}>
        <div className={styles.TraitIconName}>{trait.name}</div>
        <div className={styles.TraitIconDescription}>{trait.description}</div>
      </div>
    </div>
  );
};
