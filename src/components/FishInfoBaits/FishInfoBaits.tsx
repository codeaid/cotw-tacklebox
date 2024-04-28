import clsx from 'clsx';
import { useCallback } from 'react';
import {
  baitKindMap,
  baitsBottom,
  baitsLive,
  baitsNatural,
  lureMethods,
  lures,
} from 'config/baits';
import type { Bait, Lure, LureChanceMap } from 'types/baits';
import { FishInfoBaitsRating } from './FishInfoBaitsRating';
import type { FishInfoBaitsProps } from './types';
import styles from './FishInfoBaits.module.css';

export const FishInfoBaits = (props: FishInfoBaitsProps) => {
  const { data } = props;

  /**
   * Render an individual bait chance value
   */
  const renderValue = useCallback((value?: number) => {
    if (typeof value !== 'number') {
      return (
        <div
          className={clsx(styles.FishInfoBaitsValue, {
            [styles.FishInfoBaitsValueEmpty]: typeof value === 'undefined',
          })}
        >
          ~
        </div>
      );
    }

    return (
      <div className={styles.FishInfoBaitsValue}>
        <FishInfoBaitsRating size={0.5} value={value} />
      </div>
    );
  }, []);

  /**
   * Render a row in the baits table
   */
  const renderBaitRow = useCallback(
    (bait: Bait) => {
      const value = data.bait ? data.bait[bait.id] : undefined;

      return (
        <div className={styles.FishInfoBaitsRow} key={bait.id}>
          <div className={styles.FishInfoBaitsKey}>{bait.name}</div>
          <div className={styles.FishInfoBaitsValues}>{renderValue(value)}</div>
        </div>
      );
    },
    [data.bait, renderValue],
  );

  /**
   * Render a row in the lures table
   */
  const renderLureRow = useCallback(
    (lure: Lure) => {
      const values: Partial<LureChanceMap> = data[lure.id] ?? {};

      return (
        <div className={clsx(styles.FishInfoBaitsRow, styles.FishInfoBaitsRowLures)} key={lure.id}>
          <div className={styles.FishInfoBaitsKey}>{lure.name}</div>
          <div className={clsx(styles.FishInfoBaitsValues, styles.FishInfoBaitsValuesLures)}>
            {lureMethods.map(method => renderValue(values[method.id]))}
          </div>
        </div>
      );
    },
    [data, renderValue],
  );

  return (
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

        <div className={styles.FishInfoBaitsCategoryWrapperBaits}>
          {(
            [
              [
                baitKindMap.natural.name,
                styles.FishInfoBaitsKindWrapperNatural,
                styles.FishInfoBaitsKindHeaderNatural,
                baitsNatural,
              ],
              [
                baitKindMap.live.name,
                styles.FishInfoBaitsKindWrapperLive,
                styles.FishInfoBaitsKindHeaderLive,
                baitsLive,
              ],
              [
                baitKindMap.bottom.name,
                styles.FishInfoBaitsKindWrapperBottom,
                styles.FishInfoBaitsKindHeaderBottom,
                baitsBottom,
              ],
            ] as [string, string, string, Bait[]][]
          ).map(([caption, wrapperClassName, headerClassName, baits]) => (
            <div className={wrapperClassName} key={caption}>
              <div className={clsx(styles.FishInfoBaitsKindHeader, headerClassName)}>{caption}</div>
              {baits.map(renderBaitRow)}
            </div>
          ))}
        </div>
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

        <div>
          <div className={clsx(styles.FishInfoBaitsRow, styles.FishInfoBaitsRowLures)}>
            <div>&#8203;</div>
            <div className={clsx(styles.FishInfoBaitsValues, styles.FishInfoBaitsValuesLures)}>
              {lureMethods.map(method => (
                <div className={styles.FishInfoBaitsMethodHeader} key={method.id}>
                  {method.name}
                </div>
              ))}
            </div>
          </div>

          {lures.map(renderLureRow)}
        </div>
      </section>
    </div>
  );
};
