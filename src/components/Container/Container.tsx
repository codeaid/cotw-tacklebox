import clsx from 'clsx';
import type { ContainerProps } from './types';
import styles from './Container.module.css';

export const Container = (props: ContainerProps) => {
  const { children, className } = props;

  return <div className={clsx(styles.Container, className)}>{children}</div>;
};
