import {
  FishInfoBaits,
  FishInfoDetails,
  FishInfoHeader,
  FishInfoHooks,
  FishInfoSection,
  FishInfoWeight,
} from 'components';
import {
  baitData as sourceBaitData,
  fishData as sourceFishData,
  hookData as sourceHookData,
} from 'config/data';
import type { FishInfoProps } from './types';

export const FishInfo = (props: FishInfoProps) => {
  const { fish } = props;

  const baitData = sourceBaitData[fish.id];
  const fishData = sourceFishData[fish.id];
  const hookData = sourceHookData[fish.id];

  return (
    <>
      <FishInfoHeader fish={fish} />

      <FishInfoSection title="Details">
        <FishInfoDetails baitData={baitData} fishData={fishData} fish={fish} />
      </FishInfoSection>

      {!fish.legendary ? (
        <FishInfoSection title="Weight">
          <FishInfoWeight data={fishData} />
        </FishInfoSection>
      ) : null}

      <FishInfoSection title="Hook Sizes">
        <FishInfoHooks data={hookData} />
      </FishInfoSection>

      <FishInfoSection title="Tackle Preference">
        <FishInfoBaits data={baitData} />
      </FishInfoSection>
    </>
  );
};
