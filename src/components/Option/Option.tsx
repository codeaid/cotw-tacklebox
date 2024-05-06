import type { OptionProps } from './types';
import styles from './Option.module.css';

export const Option = (props: OptionProps) => {
  const { children, label } = props;

  return (
    <div className={styles.Option}>
      <div className={styles.OptionLabel}>{label}</div>
      {children}
    </div>
  );
};
