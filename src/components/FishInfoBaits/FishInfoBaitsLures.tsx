import clsx from 'clsx';
import { lureMethods } from 'config/baits';
import { FishInfoBaitsLuresRow } from './FishInfoBaitsLuresRow';
import type { FishInfoBaitsLuresProps } from './types';
import styles from './FishInfoBaits.module.css';

export const FishInfoBaitsLures = (props: FishInfoBaitsLuresProps) => {
  const { values } = props;

  return (
    <>
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

      {values.map(value => (
        <FishInfoBaitsLuresRow key={value.lure.id} value={value} />
      ))}
    </>
  );
};
