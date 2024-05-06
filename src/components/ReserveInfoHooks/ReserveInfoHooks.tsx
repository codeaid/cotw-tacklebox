'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FishInfoHooks, Option, Stepper } from 'components';
import { createFishPageUrl } from 'lib/routing';
import { sortByName, sortByWeight } from 'lib/sort';
import type { ReserveInfoHooksProps, ReserveInfoHooksSortType } from './types';
import styles from './ReserveInfoHooks.module.css';

export const ReserveInfoHooks = (props: ReserveInfoHooksProps) => {
  const { genericEntities, legendaryEntities } = props;

  // List of available sort types
  const sortTypes: ReserveInfoHooksSortType[] = ['name', 'weight'];

  // Currently selected sort type
  const [sortType, setSortType] = useState<ReserveInfoHooksSortType>('name');

  const sortFn = sortType === 'name' ? sortByName : sortByWeight;

  // Sorted generic and legendary fish
  const genericFish = useMemo(() => genericEntities.sort(sortFn), [genericEntities, sortFn]);
  const legendaryFish = useMemo(() => legendaryEntities.sort(sortFn), [legendaryEntities, sortFn]);

  return (
    <>
      <Option label="Sort Order">
        <Stepper<ReserveInfoHooksSortType>
          labels={{
            name: 'Name',
            weight: 'Max Weight',
          }}
          selected={sortType}
          values={sortTypes}
          onChange={setSortType}
        />
      </Option>

      <div className={styles.ReserveInfoHooks}>
        {genericFish.map(fish => (
          <div className={styles.ReserveInfoHooksRow} key={fish.id}>
            <div className={styles.ReserveInfoHooksRowHeader}>
              <Link className={styles.ReserveInfoHooksRowHeaderLink} href={createFishPageUrl(fish)}>
                {fish.name}
              </Link>
            </div>
            <div className={styles.ReserveInfoHooksRowValue}>
              <FishInfoHooks data={fish.hookData} compact={true} />
            </div>
          </div>
        ))}

        {legendaryFish.map(fish => (
          <div className={styles.ReserveInfoHooksRow} key={fish.id}>
            <div className={styles.ReserveInfoHooksRowHeader}>
              <Link
                className={clsx(
                  styles.ReserveInfoHooksRowHeaderLink,
                  styles.ReserveInfoHooksRowHeaderLinkLegendary,
                )}
                href={createFishPageUrl(fish)}
              >
                {fish.name}
              </Link>
            </div>
            <div className={styles.ReserveInfoHooksRowValue}>
              <FishInfoHooks data={fish.hookData} compact={true} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
