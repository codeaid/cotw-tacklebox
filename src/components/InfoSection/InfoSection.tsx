import type { InfoSectionProps } from './types';
import styles from './InfoSection.module.css';

export const InfoSection = (props: InfoSectionProps) => {
  const { children, title } = props;

  return (
    <section className={styles.InfoSection}>
      <h2 className={styles.InfoSectionHeading}>{title}</h2>
      {children}
    </section>
  );
};
