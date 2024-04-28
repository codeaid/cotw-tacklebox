import type { PropsWithChildren } from 'react';
import styles from './Container.module.css';

export const Container = (props: PropsWithChildren) => (
  <div className={styles.Container}>{props.children}</div>
);
