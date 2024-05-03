import type { FishId } from 'types/fishes';

/**
 * Generate a fish details page URL
 *
 * @param fishId Fish identifier
 */
export const createFishPageUrl = (fishId: FishId) => `/fishes/${fishId}`;
