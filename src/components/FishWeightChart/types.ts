import type { FishData } from 'types/data';
import type { RankId } from 'types/ranks';

export interface FishWeightChartProps {
  data: FishData;
  ranks?: RankId[];
}
