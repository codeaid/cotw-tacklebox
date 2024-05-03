import { reserves } from 'config/reserves';
import type { Fish, FishEntity } from 'types/fishes';

/**
 * Sort a list of entries by their name
 *
 * @param a Left parameter
 * @param b Right parameter
 */
export const sortByName = (a: { name: string }, b: { name: string }) =>
  a.name.localeCompare(b.name);

/**
 * Sort a list of fishes ensuring legendary fish are at the end of the list and all remaining fish
 * are ordered by their name in ascending order
 *
 * @param a Left parameter
 * @param b Right parameter
 */
export const sortFishes = (
  a: Pick<Fish, 'legendary' | 'name'>,
  b: Pick<Fish, 'legendary' | 'name'>,
) =>
  a.legendary !== b.legendary
    ? Number(a.legendary) - Number(b.legendary)
    : a.name.localeCompare(b.name);

/**
 * Sort a list of fish entities to be displayed in search results
 *
 * @param a Left parameter
 * @param b Right parameter
 */
export const sortSearchResults = (a: FishEntity, b: FishEntity) => {
  const result = sortByName(a, b);
  if (result !== 0) {
    return result;
  }

  const reserveOrderMap = reserves.map(reserve => reserve.id);

  return reserveOrderMap.indexOf(a.reserve) - reserveOrderMap.indexOf(b.reserve);
};
