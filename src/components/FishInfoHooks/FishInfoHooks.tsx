import clsx from 'clsx';
import { hookSizes } from 'types/hooks';
import type { FishInfoHooksProps } from './types';
import styles from './FishInfoHooks.module.css';

export const FishInfoHooks = (props: FishInfoHooksProps) => {
  const { compact = false, data } = props;

  return (
    <div
      className={clsx(styles.FishInfoHooks, {
        [styles.FishInfoHooksCompact]: compact,
      })}
    >
      {hookSizes.map(size => {
        const value = typeof data !== 'undefined' && size in data ? data[size] : null;

        return (
          <div
            className={clsx(styles.FishInfoHooksCell, {
              [styles.FishInfoHooksCellBronze]: value === 'b',
              [styles.FishInfoHooksCellSilver]: value === 's',
              [styles.FishInfoHooksCellGold]: value === 'g',
              [styles.FishInfoHooksCellDiamond]: value === 'd',
              [styles.FishInfoHooksCellLegendary]: value === 'l',
            })}
            key={size}
          >
            {size}
          </div>
        );
      })}
    </div>
  );
};
