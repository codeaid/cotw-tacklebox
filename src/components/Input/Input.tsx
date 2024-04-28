'use client';

import clsx from 'clsx';
import { type InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.css';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props;

  // Flag specifying whether the current input is focused or not
  const [focused, setFocused] = useState(false);

  /**
   * Handle input losing focus
   */
  const handleBlur = () => setFocused(false);

  /**
   * Handle input gaining focus
   */
  const handleFocus = () => setFocused(true);

  return (
    <div
      className={clsx(styles.InputWrapper, {
        [styles.InputWrapperFocused]: focused,
      })}
    >
      <input
        {...rest}
        className={clsx(styles.Input, className)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};
