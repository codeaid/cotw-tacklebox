import { fishes } from 'config/fishes';
import type { ReserveId } from 'types/reserves';

/**
 * Get the number of legendary fish available in the specified reserve
 *
 * @param reserveId Target reserve identifier
 */
export const getLegendaryFishCount = (reserveId: ReserveId) =>
  fishes.filter(fish => fish.reserves.includes(reserveId)).filter(fish => fish.legendary).length;

/**
 * Get the number of fish species available in the specified reserve
 *
 * @param reserveId Target reserve identifier
 */
export const getReserveFishCount = (reserveId: ReserveId) =>
  fishes.filter(fish => !fish.legendary).filter(fish => fish.reserves.includes(reserveId)).length;
