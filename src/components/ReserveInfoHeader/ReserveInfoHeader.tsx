import Image from 'next/image';
import type { ReserveInfoHeaderProps } from './types';
import styles from './ReserveInfoHeader.module.css';

export const ReserveInfoHeader = (props: ReserveInfoHeaderProps) => {
  const { reserve } = props;

  return (
    <>
      <h1 className={styles.ReserveInfoHeaderTitle}>{reserve.name}</h1>

      <div className={styles.ReserveInfoHeader}>
        <Image
          alt={reserve.name}
          className={styles.ReserveInfoHeaderImage}
          height={256}
          priority
          src={reserve.image.color}
          width={192}
        />

        {reserve.description}
      </div>
    </>
  );
};
