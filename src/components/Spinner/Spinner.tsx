import Image from 'next/image';
import loadingSpinnerImg from 'assets/misc/loading_spinner.png';
import styles from './Spinner.module.css';

export const Spinner = () => (
  <Image
    alt="Loading"
    className={styles.Spinner}
    height={50}
    src={loadingSpinnerImg.src}
    width={50}
  />
);
