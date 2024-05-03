import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import { sourceSansPro } from 'fonts';
import styles from './Button.module.css';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...rest } = props;

  return (
    <button className={clsx(sourceSansPro.className, styles.Button, className)} {...rest}>
      <div className={styles.ButtonContent}></div>
      {children}
    </button>
  );
};
