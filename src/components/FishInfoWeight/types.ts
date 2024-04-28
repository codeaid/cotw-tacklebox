import type { FishData } from 'types/data';
import type { RankId } from 'types/ranks';

export interface FishInfoWeightProps {
  data: FishData;
  ranks?: RankId[];
}
