import clsx from 'clsx';
import { useCallback, useEffect, useRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import { reserveMap } from 'config/reserves';
import type { SearchInputOptionProps } from './types';
import styles from './SearchInputOption.module.css';

export const SearchInputOption = (props: SearchInputOptionProps) => {
  const { active, entity, onClick } = props;

  // Reference to the result element
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Handle clicking on the current option
   */
  const handleClick = useCallback(() => onClick(entity), [entity, onClick]);

  // Scroll current item into view when it gets selected
  useEffect(() => {
    if (ref.current && active) {
      scrollIntoView(ref.current, {
        behavior: 'auto',
        block: 'nearest',
      });
    }
  }, [active]);

  return (
    <div
      className={clsx(styles.SearchInputOption, {
        [styles.SearchInputOptionActive]: active,
      })}
      key={entity.id}
      ref={ref}
      onClick={handleClick}
    >
      <div
        className={clsx(styles.SearchInputOptionLabel, {
          [styles.SearchInputOptionLabelLegendary]: entity.legendary,
        })}
      >
        {entity.name}
      </div>
      <span className={styles.SearchInputOptionReserve}>
        {reserveMap[entity.reserve].shortName}
      </span>
    </div>
  );
};
