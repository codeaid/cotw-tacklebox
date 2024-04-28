import type { FishDetailsSectionProps } from './types';
import styles from './FishDetailsSection.module.css';

export const FishDetailsSection = (props: FishDetailsSectionProps) => {
  const { children, title } = props;

  return (
    <section className={styles.FishDetailsSection}>
      <h3 className={styles.FishDetailsSectionHeading}>{title}</h3>
      {children}
    </section>
  );
};
