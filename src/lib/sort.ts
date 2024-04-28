import type { Bait, Lure } from 'types/baits';

/**
 * Sort a list of baits by their name
 *
 * @param a Left parameter
 * @param b Right parameter
 */
export const sortBaits = (a: Bait | Lure, b: Bait | Lure) => a.name.localeCompare(b.name);
