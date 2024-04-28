import clsx from 'clsx';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Grid.module.css';

export const Grid = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(styles.Grid, className)} {...rest}>
      {children}
    </div>
  );
};
