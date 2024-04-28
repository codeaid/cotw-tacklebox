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
    <Image
      alt={trait.name}
      className={clsx(styles.TraitIcon, className)}
      height={size}
      src={trait.image}
      title={`${trait.name}: ${trait.description}`}
      width={size}
    />
  );
};
