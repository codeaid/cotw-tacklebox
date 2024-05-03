import Image from 'next/image';
import type { FishInfoHeaderProps } from './types';
import styles from './FishInfoHeader.module.css';

export const FishInfoHeader = (props: FishInfoHeaderProps) => {
  const { fish } = props;

  return (
    <>
      <h1 className={styles.FishInfoHeaderTitle}>{fish.name}</h1>

      <div className={styles.FishInfoHeader}>
        <p className={styles.FishInfoHeaderDescription}>{fish.description}</p>

        <Image
          alt={fish.name}
          className={styles.FishInfoHeaderImage}
          height={540}
          priority={true}
          src={fish.image.large}
          width={960}
        />
      </div>
    </>
  );
};
