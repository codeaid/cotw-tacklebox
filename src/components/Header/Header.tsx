import Image from 'next/image';
import Link from 'next/link';
import { SearchInput } from 'components';
import logoImg from 'assets/misc/logo.png';
import styles from './Header.module.css';

export const Header = () => (
  <div className={styles.Header}>
    <Link className={styles.HeaderLogo} href="/">
      <Image alt="TackleBox logo" height={40} src={logoImg.src} width={184} />
    </Link>

    <div className={styles.HeaderSearch}>
      <SearchInput />
    </div>
  </div>
);
