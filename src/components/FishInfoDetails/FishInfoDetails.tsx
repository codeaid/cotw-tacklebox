import { TraitIconList, WeightLabel } from 'components';
import { baitData } from 'config/data';
import { habitatMap } from 'config/habitats';
import { reserveMap } from 'config/reserves';
import { getBaitPreferences } from 'lib/baits';
import { FishInfoDetailsItem } from './FishInfoDetailsItem';
import type { FishInfoDetailsProps } from './types';
import styles from './FishInfoDetails.module.css';

export const FishInfoDetails = (props: FishInfoDetailsProps) => {
  const { data, fish } = props;

  const baits = baitData[fish.id];
  const habitats = data.habitats.map(id => habitatMap[id]);
  const reserves = fish.reserves.map(id => reserveMap[id]);

  return (
    <div className={styles.FishInfoDetails}>
      <div className={styles.FishInfoDetailsGroup}>
        <FishInfoDetailsItem caption="Reserves">
          {reserves.map(reserve => reserve.name).join(', ')}
        </FishInfoDetailsItem>

        <FishInfoDetailsItem caption="Habitats">
          {habitats.length > 0 ? habitats.map(habitat => habitat.name).join(', ') : 'Unknown'}
        </FishInfoDetailsItem>

        <FishInfoDetailsItem caption="Weight">
          {!fish.legendary ? (
            <>
              <WeightLabel kg={data.kgMin} /> - <WeightLabel kg={data.kgMaxDiamond} />
            </>
          ) : (
            <WeightLabel kg={data.kgMin} />
          )}
        </FishInfoDetailsItem>
      </div>

      <div className={styles.FishInfoDetailsGroup}>
        <FishInfoDetailsItem caption="Bait and Lure Preference">
          {getBaitPreferences(baits).join(', ')}
        </FishInfoDetailsItem>

        <FishInfoDetailsItem caption="Traits">
          {data.traits.length > 0 ? <TraitIconList size={50} traitIds={data.traits} /> : 'None'}
        </FishInfoDetailsItem>
      </div>
    </div>
  );
};
