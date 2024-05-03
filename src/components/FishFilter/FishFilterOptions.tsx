import clsx from 'clsx';
import { useCallback } from 'react';
import type { FishFilterOptionsProps } from './types';
import styles from './FishFilter.module.css';

export const FishFilterOptions = <TOption extends string>(
  props: FishFilterOptionsProps<TOption>,
) => {
  const { label, options = [], selection, onChange, onRender } = props;

  /**
   * Handle options being selected or deselected
   *
   * @param option Option value being toggled
   */
  const handleChange = useCallback(
    (option: TOption) => {
      // Include or exclude the option value depending on the state
      const value = selection.includes(option)
        ? selection.filter(v => v !== option)
        : selection.concat(option);

      onChange(value);
    },
    [onChange, selection],
  );

  return (
    <>
      <div className={styles.FishFilterOptionHeading}>{label}</div>
      <div className={styles.FishFilterOptions}>
        {options.map(option => (
          <div
            className={clsx(styles.FishFilterOption, {
              [styles.FishFilterOptionSelected]: selection.includes(option),
            })}
            key={option}
            onClick={() => handleChange(option)}
          >
            {onRender(option)}
          </div>
        ))}
      </div>
    </>
  );
};
