import type { BaitId, LureId } from 'types/baits';
import {
  type FishEntity,
  type FishId,
  type FishIdGeneric,
  type FishIdLegendary,
  fishIdsGeneric,
  fishIdsLegendary,
} from 'types/fishes';
import type { HabitatId } from 'types/habitats';
import type { HookSize } from 'types/hooks';
import type { ReserveId } from 'types/reserves';
import type { TraitId } from 'types/traits';

/**
 * Determine if the fish name matches the specified search query
 *
 * @param searchQuery Fish name search query
 * @param fish Target fish entity to check
 */
export const filterByQuery = (searchQuery: string, fish: FishEntity) =>
  searchQuery.length ? fish.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;

/**
 * Determine if all fish habitats match the specified list
 *
 * @param habitatIds List of valid habitats
 * @param fish Target fish entity to check
 */
export const filterByHabitat = (habitatIds: HabitatId[], fish: FishEntity) =>
  habitatIds.length ? habitatIds.every(habitat => fish.habitats.includes(habitat)) : true;

/**
 * Determine if all fish bait preferences match the specified list
 *
 * @param baitIds List of valid baits
 * @param fish Target fish entity to check
 */
export const filterByBait = (baitIds: BaitId[], fish: FishEntity) => {
  if (!baitIds.length) {
    return true;
  }

  const fishBaits = Object.keys(fish.baitData.bait ?? {});
  return baitIds.every(bait => fishBaits.includes(bait));
};

/**
 * Determine if all fish lure preferences match the specified list
 *
 * @param lureIds List of valid lures
 * @param fish Target fish entity to check
 */
export const filterByLure = (lureIds: LureId[], fish: FishEntity) => {
  if (!lureIds.length) {
    return true;
  }

  const fishLures = Object.keys(fish.baitData).filter(v => v !== 'bait');
  return lureIds.every(bait => fishLures.includes(bait));
};

/**
 * Determine if all fishhook size preferences match the specified list
 *
 * @param hookSizes List of valid hook sizes
 * @param fish Target fish entity to check
 */
export const filterByHook = (hookSizes: HookSize[], fish: FishEntity) => {
  if (!hookSizes.length) {
    return true;
  }

  const fishHooks = Object.keys(fish.hookData);
  return hookSizes.every(hook => fishHooks.includes(hook));
};

/**
 * Determine if any of the fish reserves are included in the specified list of reserves
 *
 * @param reserveIds List of valid reserves
 * @param fish Target fish entity to check
 */
export const filterByReserve = (reserveIds: ReserveId[], fish: FishEntity) =>
  reserveIds.length ? reserveIds.includes(fish.reserve) : true;

/**
 * Determine if all fish traits match the specified list
 *
 * @param traitIds List of valid traits
 * @param fish Target fish entity to check
 */
export const filterByTrait = (traitIds: TraitId[], fish: FishEntity) =>
  traitIds.length ? traitIds.every(trait => fish.traits.includes(trait)) : true;

/**
 * Check if the specified fish entity represents a generic fish
 *
 * @param entity Target entity to check
 */
export const isGenericFishEntity = (entity: FishEntity): entity is FishEntity<FishIdGeneric> =>
  (fishIdsGeneric as unknown as FishId[]).includes(entity.id);

/**
 * Check if the specified fish entity represents a legendary fish
 *
 * @param entity Target entity to check
 */
export const isLegendaryFishEntity = (entity: FishEntity): entity is FishEntity<FishIdLegendary> =>
  (fishIdsLegendary as unknown as FishId[]).includes(entity.id);
