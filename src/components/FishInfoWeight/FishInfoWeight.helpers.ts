import type { BoxPlotDatum } from '@nivo/boxplot';
import { rankMap } from 'config/ranks';
import type { FishData } from 'types/data';
import type { RankId } from 'types/ranks';

/**
 * Create a map of minimum and maximum weights for each rank
 *
 * @param data Source fish data
 */
const createWeightMap = (data: FishData): Record<RankId, [number, number]> => ({
  j: [data.kgMin, data.kgMaxJuvenile],
  b: [data.kgMaxJuvenile, data.kgMaxBronze],
  s: [data.kgMaxBronze, data.kgMaxSilver],
  g: [data.kgMaxSilver, data.kgMaxGold],
  d: [data.kgMaxGold, data.kgMaxDiamond],
  l: [data.kgMin, data.kgMin],
});

/**
 * Create source data for the chart component
 *
 * @param data Target fish data
 * @param ranks List of ranks to generate chart entries for
 */
export const createChartData = (data: FishData, ranks: RankId[]) => {
  // Create the base weight map
  const weightMap = createWeightMap(data);

  // Map of fish ranks and their minimum and maximum weight values
  return ranks
    .map<[RankId, number, number]>(rankId => [rankId, ...weightMap[rankId]])
    .reduce<BoxPlotDatum[]>(
      (acc, [rankId, min, max]) => [
        ...acc,
        {
          group: rankMap[rankId].name,
          value: min,
        },
        { group: rankMap[rankId].name, value: max },
      ],
      [],
    );
};

/**
 * Format weight value to display on the X axis
 *
 * @param value Target value to format
 */
export const formatWeightLabel = (value: number) => `${value.toFixed(2)}kg`;

/**
 * Calculate the minimum value of the chart's X axis (weight)
 *
 * @param data Source fish data
 */
export const getMinimumValue = (data: FishData) => Math.max(0, data.kgMin - data.kgMin * 1.05);

/**
 * Calculate the maximum value of the chart's X axis (weight)
 *
 * @param data Source fish data
 */
export const getMaximumValue = (data: FishData) => data.kgMaxDiamond * 1.05;
