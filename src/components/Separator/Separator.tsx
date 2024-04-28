import clsx from 'clsx';
import type { SeparatorProps } from './types';
import styles from './Separator.module.css';

export const Separator = (props: SeparatorProps) => {
  const { highlight, className, spacing } = props;

  return (
    <hr
      className={clsx(
        styles.Separator,
        {
          [styles.SeparatorHighlightCenter]: highlight === 'center',
          [styles.SeparatorHighlightLeft]: highlight === 'left',
          [styles.SeparatorHighlightRight]: highlight === 'right',
          [styles.SeparatorSpacingBoth]: spacing == 'both',
          [styles.SeparatorSpacingHorizontal]: spacing == 'horizontal',
          [styles.SeparatorSpacingVertical]: spacing == 'vertical',
        },
        className,
      )}
    />
  );
};
