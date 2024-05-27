import type {
  Bait,
  BaitFilterType,
  BaitFilterValue,
  BaitId,
  Lure,
  LureChanceMap,
  LureFilterValue,
  LureId,
} from 'types/baits';
import type { BaitData } from 'types/data';
import type { FishEntity, FishId, FishIdGeneric, FishIdLegendary } from 'types/fishes';
import { fishIdsGeneric, fishIdsLegendary } from 'types/fishes';
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
 * Filter a list of baits and output them together with their associated values
 *
 * @param baits List of baits to filter
 * @param filter Bait filter type
 * @param data Source bait data
 */
export const getFilteredBaitValues = (baits: Bait[], filter: BaitFilterType, data: BaitData) =>
  baits
    .map<BaitFilterValue>(bait => ({ bait, chance: data.bait ? data.bait[bait.id] : undefined }))
    .filter(item => {
      if (filter === 'all') {
        return true;
      }

      switch (filter) {
        case '1':
          return item.chance === 1;
        case '2':
          return item.chance === 2;
        case '3':
          return item.chance === 3;
        case 'available':
        default:
          return !!item.chance;
      }
    });

/**
 * Filter a list of lures and output them together with their associated values
 *
 * @param lures List of lures to filter
 * @param filter Bait filter type
 * @param data Source bait data
 */
export const getFilteredLureValues = (lures: Lure[], filter: BaitFilterType, data: BaitData) =>
  lures
    .map<LureFilterValue>(lure => ({
      lure,
      value: data[lure.id] ?? ({} as Partial<LureChanceMap>),
    }))
    .filter(item => {
      if (filter === 'all') {
        return true;
      }

      const values = Object.values(item.value ?? {});
      switch (filter) {
        case '1':
          return values.includes(1);
        case '2':
          return values.includes(2);
        case '3':
          return values.includes(3);
        case 'available':
        default:
          return values.length > 0;
      }
    });

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
