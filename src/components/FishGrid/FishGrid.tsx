import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Grid, GridItem } from 'components';
import type { FishGridProps } from './types';
import styles from './FishGrid.module.css';

export const FishGrid = (props: FishGridProps) => {
  const { fishes } = props;

  return (
    <Grid>
      {fishes.map(fish => (
        <Link href={`/fishes/${fish.id}`} key={fish.id}>
          <GridItem className={styles.FishGridItem}>
            <Image
              alt={fish.name}
              className={styles.FishGridItemImage}
              height={150}
              src={fish.image.small}
              width={150}
            />
            <div
              className={clsx(styles.FishGridItemLabel, {
                [styles.FishGridItemLabelLegendary]: fish.legendary,
              })}
              title={fish.name}
            >
              {fish.name}
            </div>
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};
