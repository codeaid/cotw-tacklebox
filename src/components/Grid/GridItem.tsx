import clsx from 'clsx';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './GridItem.module.css';

export const GridItem = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) => {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(styles.GridItem, className)} {...rest}>
      {children}
    </div>
  );
};
