import clsx from 'clsx';
import { hookData } from 'config/data';
import { hookSizes } from 'types/hooks';
import type { HookSizeGridProps } from './types';
import styles from './HookSizeGrid.module.css';

export const HookSizeGrid = (props: HookSizeGridProps) => {
  const { fishId } = props;

  // Retrieve hook size data associated with the specified fish
  const data = hookData[fishId];

  return (
    <div className={styles.HookSizeGrid}>
      {hookSizes.map(size => (
        <div
          className={clsx(styles.HookSizeGridCell, {
            [styles.HookSizeGridCellBronze]: data[size] === 'b',
            [styles.HookSizeGridCellSilver]: data[size] === 's',
            [styles.HookSizeGridCellGold]: data[size] === 'g',
            [styles.HookSizeGridCellDiamond]: data[size] === 'd',
            [styles.HookSizeGridCellLegendary]: data[size] === 'l',
          })}
          key={size}
        >
          {size}
        </div>
      ))}
    </div>
  );
};
