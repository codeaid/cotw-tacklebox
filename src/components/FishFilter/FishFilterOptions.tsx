import clsx from 'clsx';
import { useCallback } from 'react';
import type { FishFilterOptionsProps } from './types';
import styles from 'components/FishFilter/FishFilterPanel.module.css';

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
      <div className={styles.FishFilterPanelOptionHeading}>{label}</div>
      <div className={styles.FishFilterPanelOptions}>
        {options.map(option => (
          <div
            className={clsx(styles.FishFilterPanelOption, {
              [styles.FishFilterPanelOptionSelected]: selection.includes(option),
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
