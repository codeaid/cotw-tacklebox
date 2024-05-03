import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Grid, GridItem } from 'components';
import type { FishGridProps } from './types';
import styles from './FishGrid.module.css';

export const FishGrid = (props: FishGridProps) => {
  const { entities } = props;

  return (
    <Grid>
      {entities.map(entity => (
        <Link href={`/fishes/${entity.id}`} key={entity.id}>
          <GridItem className={styles.FishGridItem}>
            <Image
              alt={entity.name}
              className={styles.FishGridItemImage}
              height={150}
              priority={true}
              src={entity.image.small}
              unoptimized={true}
              width={150}
            />
            <div
              className={clsx(styles.FishGridItemLabel, {
                [styles.FishGridItemLabelLegendary]: entity.legendary,
              })}
              title={entity.name}
            >
              {entity.name}
            </div>
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};
