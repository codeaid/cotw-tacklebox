import {
  FishInfoBaits,
  FishInfoDetails,
  FishInfoHeader,
  FishInfoHooks,
  FishInfoWeight,
  InfoSection,
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

      <InfoSection title="Details">
        <FishInfoDetails baitData={baitData} fish={fish} fishData={fishData} />
      </InfoSection>

      {!fish.legendary ? (
        <InfoSection title="Weight">
          <FishInfoWeight data={fishData} />
        </InfoSection>
      ) : null}

      <InfoSection title="Hook Sizes">
        <FishInfoHooks data={hookData} />
      </InfoSection>

      <InfoSection title="Tackle Preference">
        <FishInfoBaits data={baitData} />
      </InfoSection>
    </>
  );
};
