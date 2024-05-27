'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFishFins, FaRegMap } from 'react-icons/fa6';
import styles from './NavigationRail.module.css';

export const NavigationRail = () => {
  const pathname = usePathname();

  return (
    <div className={styles.NavigationRail}>
      <ul className={styles.NavigationRailMenu}>
        <li
          className={clsx(styles.NavigationRailMenuItem, {
            [styles.NavigationRailMenuItemActive]: pathname === '/fishes',
          })}
        >
          <Link className={styles.NavigationRailMenuItemLink} href="/fishes">
            <FaFishFins className={styles.NavigationRailMenuItemIcon} />
            <div className={styles.NavigationRailMenuItemLabel}>Fishes</div>
          </Link>
        </li>
        <li
          className={clsx(styles.NavigationRailMenuItem, {
            [styles.NavigationRailMenuItemActive]: pathname === '/reserves',
          })}
        >
          <Link className={styles.NavigationRailMenuItemLink} href="/reserves">
            <FaRegMap className={styles.NavigationRailMenuItemIcon} />
            <div className={styles.NavigationRailMenuItemLabel}>Reserves</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
