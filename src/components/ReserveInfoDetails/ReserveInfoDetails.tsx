import Image from 'next/image';
import { useMemo } from 'react';
import { getLegendaryFishCount, getReserveFishCount } from 'lib/reserves';
import type { ReserveInfoDetailsProps } from './types';
import fishIconImg from 'assets/icons/fish.png';
import legendaryIconImg from 'assets/icons/fish_legendary.png';
import waypointIconImg from 'assets/icons/waypoint.png';
import styles from './ReserveInfoDetails.module.css';

export const ReserveInfoDetails = (props: ReserveInfoDetailsProps) => {
  const { reserve } = props;

  // Count number of each fish type
  const legendaryCount = useMemo(() => getLegendaryFishCount(reserve.id), [reserve.id]);
  const speciesCount = useMemo(() => getReserveFishCount(reserve.id), [reserve.id]);

  return (
    <div className={styles.ReserveInfoDetails}>
      <div className={styles.ReserveInfoDetailsItem}>
        <div className={styles.ReserveInfoDetailsItemIcon}>
          <Image alt="Species" height={38} src={waypointIconImg.src} width={38} />
        </div>
        <div className={styles.ReserveInfoDetailsItemLabel}>Location</div>
        <div className={styles.ReserveInfoDetailsItemValue}>{reserve.location}</div>
      </div>

      <div className={styles.ReserveInfoDetailsItem}>
        <div className={styles.ReserveInfoDetailsItemIcon}>
          <Image alt="Species" height={38} src={fishIconImg.src} width={38} />
        </div>
        <div className={styles.ReserveInfoDetailsItemLabel}>Fish Species</div>
        <div className={styles.ReserveInfoDetailsItemValue}>{speciesCount}</div>
      </div>

      <div className={styles.ReserveInfoDetailsItem}>
        <div className={styles.ReserveInfoDetailsItemIcon}>
          <Image alt="Species" height={38} src={legendaryIconImg.src} width={38} />
        </div>
        <div className={styles.ReserveInfoDetailsItemLabel}>Legendary Fish</div>
        <div className={styles.ReserveInfoDetailsItemValue}>{legendaryCount}</div>
      </div>
    </div>
  );
};
