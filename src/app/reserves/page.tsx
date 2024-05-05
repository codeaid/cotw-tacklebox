import Image from 'next/image';
import Link from 'next/link';
import { reserves } from 'config/reserves';
import { createReservePageUrl } from 'lib/routing';
import styles from './page.module.css';

const ReservesPage = () => (
  <div className={styles.ReservesPage}>
    {reserves.map(reserve => (
      <Link
        className={styles.ReservesPageLink}
        href={createReservePageUrl(reserve)}
        key={reserve.id}
      >
        <Image
          alt={reserve.name}
          className={styles.ReservesPageLogo}
          draggable={false}
          height={512}
          src={reserve.image.color}
          width={384}
        />
      </Link>
    ))}
  </div>
);

export default ReservesPage;
