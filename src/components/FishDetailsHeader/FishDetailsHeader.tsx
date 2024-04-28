import Image from 'next/image';
import type { FishDetailsHeaderProps } from './types';
import styles from './FishDetailsHeader.module.css';

export const FishDetailsHeader = (props: FishDetailsHeaderProps) => {
  const { fish } = props;

  return (
    <>
      <h1 className={styles.FishDetailsHeaderTitle}>{fish.name}</h1>

      <div className={styles.FishDetailsHeader}>
        <p className={styles.FishDetailsHeaderDescription}>{fish.description}</p>

        <Image
          alt={fish.name}
          className={styles.FishDetailsHeaderImage}
          height={540}
          src={fish.image.large}
          width={960}
        />
      </div>
    </>
  );
};
