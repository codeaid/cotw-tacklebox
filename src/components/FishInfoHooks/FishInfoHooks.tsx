import clsx from 'clsx';
import { hookData } from 'config/data';
import { hookSizes } from 'types/hooks';
import type { FishInfoHooksProps } from './types';
import styles from './FishInfoHooks.module.css';

export const FishInfoHooks = (props: FishInfoHooksProps) => {
  const { fishId } = props;

  // Retrieve hook size data associated with the specified fish
  const data = hookData[fishId];

  return (
    <div className={styles.FishInfoHooks}>
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
