'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Separator } from 'components';
import type { HeaderProps } from './types';
import styles from './Header.module.css';

export const Header = (props: HeaderProps) => {
  const { links } = props;

  const pathname = usePathname();

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderHighlight}></div>

      <ul className={styles.HeaderLinkList}>
        {links.map((link, index) => (
          <li className={styles.HeaderLinkItem} key={index}>
            <Link
              className={clsx(styles.HeaderLink, {
                [styles.HeaderLinkActive]: link.match
                  ? new RegExp(link.match).test(pathname)
                  : pathname === link.href,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Separator highlight="center" />
    </div>
  );
};
