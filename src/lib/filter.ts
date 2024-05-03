import type { FishEntity } from 'types/fishes';

/**
 * Determine if the fish name matches the specified search query
 *
 * @param searchQuery Fish name search query
 * @param fish Target fish entity to check
 */
export const filterByQuery = (searchQuery: string, fish: FishEntity) =>
  searchQuery.length ? fish.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
