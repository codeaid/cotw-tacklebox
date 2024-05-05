import type { Fish, FishEntity } from 'types/fishes';
import type { Reserve } from 'types/reserves';

/**
 * Generate a fish details page URL
 *
 * @param fish Fish object
 */
export const createFishPageUrl = (fish: Fish | FishEntity) => `/fishes/${fish.id}`;

/**
 * Generate a reserve details page URL
 *
 * @param reserve Reserve object
 */
export const createReservePageUrl = (reserve: Reserve) => `/reserves/${reserve.slug}`;
