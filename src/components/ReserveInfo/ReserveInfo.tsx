import { useMemo } from 'react';
import { InfoSection, ReserveInfoDetails, ReserveInfoHeader, ReserveInfoHooks } from 'components';
import { fishEntities } from 'config/entities';
import { isGenericFishEntity, isLegendaryFishEntity } from 'lib/filter';
import type { ReserveInfoProps } from './types';

export const ReserveInfo = (props: ReserveInfoProps) => {
  const { reserve } = props;

  // Generate the list of generic fish
  const genericEntities = useMemo(
    () => fishEntities.filter(entity => entity.reserve === reserve.id).filter(isGenericFishEntity),
    [reserve.id],
  );

  // Generate the list of legendary fish
  const legendaryEntities = useMemo(
    () =>
      fishEntities.filter(entity => entity.reserve === reserve.id).filter(isLegendaryFishEntity),
    [reserve.id],
  );

  return (
    <>
      <ReserveInfoHeader reserve={reserve} />

      <InfoSection title="Details">
        <ReserveInfoDetails
          genericFishCount={genericEntities.length}
          legendaryFishCount={legendaryEntities.length}
          reserve={reserve}
        />
      </InfoSection>

      <InfoSection title="Hook Charts">
        <ReserveInfoHooks genericEntities={genericEntities} legendaryEntities={legendaryEntities} />
      </InfoSection>
    </>
  );
};
