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
      {hookSizes.map(size => (
        <div
          className={clsx(styles.FishInfoHooksCell, {
            [styles.FishInfoHooksCellBronze]: data[size] === 'b',
            [styles.FishInfoHooksCellSilver]: data[size] === 's',
            [styles.FishInfoHooksCellGold]: data[size] === 'g',
            [styles.FishInfoHooksCellDiamond]: data[size] === 'd',
            [styles.FishInfoHooksCellLegendary]: data[size] === 'l',
          })}
          key={size}
        >
          {size}
        </div>
      ))}
    </div>
  );
};
