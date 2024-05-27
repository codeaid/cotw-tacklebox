'use client';

import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { Option, Stepper } from 'components';
import { baitKindMap, baitsBottom, baitsLive, baitsNatural, lures } from 'config/baits';
import { getFilteredBaitValues, getFilteredLureValues } from 'lib/filter';
import type { BaitFilterType, BaitFilterValue } from 'types/baits';
import { FishInfoBaitsBaits } from './FishInfoBaitsBaits';
import { FishInfoBaitsLures } from './FishInfoBaitsLures';
import { FishInfoBaitsRating } from './FishInfoBaitsRating';
import type { FishInfoBaitsProps } from './types';
import styles from './FishInfoBaits.module.css';

export const FishInfoBaits = (props: FishInfoBaitsProps) => {
  const { data } = props;

  // All available bait and lure filter types
  const filterTypes: BaitFilterType[] = ['all', 'available', '1', '2', '3'];

  // Currently selected bait and lure filter types
  const [filter, setFilter] = useState<BaitFilterType>('available');

  // Bait values filtered to only include matching ones
  const baitValues = useMemo<[BaitFilterValue[], string, string, string][]>(
    () => [
      [
        getFilteredBaitValues(baitsNatural, filter, data),
        baitKindMap.natural.name,
        styles.FishInfoBaitsKindWrapperNatural,
        styles.FishInfoBaitsKindHeaderNatural,
      ],
      [
        getFilteredBaitValues(baitsLive, filter, data),
        baitKindMap.live.name,
        styles.FishInfoBaitsKindWrapperLive,
        styles.FishInfoBaitsKindHeaderLive,
      ],
      [
        getFilteredBaitValues(baitsBottom, filter, data),
        baitKindMap.bottom.name,
        styles.FishInfoBaitsKindWrapperBottom,
        styles.FishInfoBaitsKindHeaderBottom,
      ],
    ],
    [data, filter],
  );

  // Lure values filtered to only include matching ones
  const lureValues = useMemo(() => getFilteredLureValues(lures, filter, data), [data, filter]);

  /**
   * Render all available bait category elements
   */
  const renderedBaits = useMemo(() => {
    // Check if any of the bait type categories have baits included after filtering
    const hasValues = baitValues.filter(([value]) => value.length > 0).length > 0;

    if (!hasValues) {
      return (
        <div className={clsx(styles.FishInfoBaitsValueEmpty, styles.FishInfoBaitsEmpty)}>
          No baits available
        </div>
      );
    }

    return (
      <div className={styles.FishInfoBaitsCategoryWrapperBaits}>
        {baitValues.map(([values, category, wrapperClassName, headerClassName]) => (
          <FishInfoBaitsBaits
            caption={category}
            headerClassName={headerClassName}
            values={values}
            wrapperClassName={wrapperClassName}
          />
        ))}
      </div>
    );
  }, [baitValues]);

  /**
   * Render all available lure rows
   */
  const renderedLures = useMemo(() => {
    if (!lureValues.length) {
      return (
        <div className={clsx(styles.FishInfoBaitsValueEmpty, styles.FishInfoBaitsEmpty)}>
          No lures available
        </div>
      );
    }

    return <FishInfoBaitsLures values={lureValues} />;
  }, [lureValues]);

  return (
    <>
      <Option label="Filter">
        <Stepper<BaitFilterType>
          labels={{
            'all': 'All',
            'available': 'Available',
            '1': <FishInfoBaitsRating size={0.5} value={1} />,
            '2': <FishInfoBaitsRating size={0.5} value={2} />,
            '3': <FishInfoBaitsRating size={0.5} value={3} />,
          }}
          selected={filter}
          values={filterTypes}
          onChange={setFilter}
        />
      </Option>

      <div className={styles.FishInfoBaits}>
        <section>
          <div
            className={clsx(
              styles.FishInfoBaitsCategoryHeader,
              styles.FishInfoBaitsCategoryHeaderBaits,
            )}
          >
            Baits
          </div>

          {renderedBaits}
        </section>

        <section>
          <div
            className={clsx(
              styles.FishInfoBaitsCategoryHeader,
              styles.FishInfoBaitsCategoryHeaderLures,
            )}
          >
            Lures
          </div>

          {renderedLures}
        </section>
      </div>
    </>
  );
};
