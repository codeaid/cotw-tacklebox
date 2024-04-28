import type { FishInfoSectionProps } from './types';
import styles from './FishInfoSection.module.css';

export const FishInfoSection = (props: FishInfoSectionProps) => {
  const { children, title } = props;

  return (
    <section className={styles.FishInfoSection}>
      <h2 className={styles.FishInfoSectionHeading}>{title}</h2>
      {children}
    </section>
  );
};
