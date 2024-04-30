import { baitData, fishData, hookData } from 'config/data';
import { fishes } from 'config/fishes';
import type { FishEntity } from 'types/fishes';

// Fish entities combining all information into one object
export const fishEntities = fishes
  .map(fish =>
    // Split fishes that belong to multiple reserves into as many separate entities
    fish.reserves.map<FishEntity>(reserve => ({
      ...fish,
      ...fishData[fish.id],
      baitData: baitData[fish.id],
      hookData: hookData[fish.id],
      reserves: [reserve],
    })),
  )
  .flat();
