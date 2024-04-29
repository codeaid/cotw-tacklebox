import type { Fish } from 'types/fishes';

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
export const sortFishes = (a: Fish, b: Fish) =>
  a.legendary !== b.legendary
    ? Number(a.legendary) - Number(b.legendary)
    : a.name.localeCompare(b.name);
