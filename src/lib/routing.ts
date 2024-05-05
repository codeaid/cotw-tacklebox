import type { Fish, FishEntity } from 'types/fishes';

/**
 * Generate a fish details page URL
 *
 * @param fish Fish object
 */
export const createFishPageUrl = (fish: Fish | FishEntity) => `/fishes/${fish.id}`;
