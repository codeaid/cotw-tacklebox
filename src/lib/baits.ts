import { baitMap, lureMap } from 'config/baits';
import type { BaitId, LureChanceMap, LureId } from 'types/baits';
import type { BaitData } from 'types/data';

/**
 * Generate a list of baits ordered by their chance and by their name
 *
 * @param data Bait data object to generate the list from
 */
export const getBaitPreferences = (data: BaitData) => {
  const { bait: baitData = {}, ...lureData } = data;

  // Map all bait entries to their names and chance values
  const baits = (Object.entries(baitData) as [BaitId, number][]).map<[string, number]>(
    ([baitId, chance]) => [baitMap[baitId].name, chance],
  );

  // Map all lure entries to their names and the highest chance out of all available methods
  const lures = (Object.entries(lureData) as [LureId, LureChanceMap][]).map(
    ([lureId, chanceMap]) =>
      [lureMap[lureId].name, Math.max(...Object.values(chanceMap))] as [string, number],
  );

  // Merge baits and lures together and order them by chance descending followed by name ascending
  return baits
    .concat(lures)
    .sort(([nameA, chanceA], [nameB, chanceB]) =>
      chanceA !== chanceB ? chanceB - chanceA : nameA.localeCompare(nameB),
    )
    .map(([name]) => name);
};
