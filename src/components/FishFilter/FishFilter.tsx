'use client';

import { useEffect, useState } from 'react';
import { pageElementId } from 'config/dom';
import { fishEntities } from 'config/entities';
import { useResponsiveBreakpoints } from 'hooks';
import {
  filterByBait,
  filterByHabitat,
  filterByHook,
  filterByLure,
  filterByQuery,
  filterByReserve,
  filterByTrait,
} from 'lib/filter';
import { sortFishes } from 'lib/sort';
import type { BaitId, LureId } from 'types/baits';
import type { HabitatId } from 'types/habitats';
import type { HookSize } from 'types/hooks';
import type { ReserveId } from 'types/reserves';
import type { TraitId } from 'types/traits';
import { FishFilterButton } from './FishFilterButton';
import { FishFilterPanel } from './FishFilterPanel';
import type { FishFilterProps } from './types';

export const FishFilter = (props: FishFilterProps) => {
  const { onChange } = props;

  // Detect when the application is running in mobile views
  const { isCompactView } = useResponsiveBreakpoints();

  // Flag indicating whether the filter panel is currently visible or not
  const [filterVisible, setFilterVisible] = useState(false);

  // Currently selected filter values
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBaits, setSelectedBaits] = useState<BaitId[]>([]);
  const [selectedHabitats, setSelectedHabitats] = useState<HabitatId[]>([]);
  const [selectedHooks, setSelectedHooks] = useState<HookSize[]>([]);
  const [selectedLures, setSelectedLures] = useState<LureId[]>([]);
  const [selectedReserves, setSelectedReserves] = useState<ReserveId[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<TraitId[]>([]);

  // Determine if any of the filters are currently modified
  const filtersApplied = [
    searchQuery,
    selectedBaits,
    selectedHabitats,
    selectedHooks,
    selectedLures,
    selectedReserves,
    selectedTraits,
  ].some(value => value.length > 0);

  /**
   * Handle clicking on the close button
   */
  const handleFilterClose = () => setFilterVisible(false);

  /**
   * Handle clicking on the open button
   */
  const handleFilterOpen = () => setFilterVisible(true);

  // Filter the master list using the currently selected values and notify consumers about changes
  useEffect(() => {
    const filteredFish = fishEntities
      .filter(value => filterByQuery(searchQuery, value))
      .filter(value => filterByReserve(selectedReserves, value))
      .filter(value => filterByHabitat(selectedHabitats, value))
      .filter(value => filterByTrait(selectedTraits, value))
      .filter(value => filterByBait(selectedBaits, value))
      .filter(value => filterByLure(selectedLures, value))
      .filter(value => filterByHook(selectedHooks, value))
      .sort(sortFishes);

    onChange(filteredFish);
  }, [
    onChange,
    searchQuery,
    selectedBaits,
    selectedHabitats,
    selectedHooks,
    selectedLures,
    selectedReserves,
    selectedTraits,
  ]);

  // Render the filter button at the bottom of the screen if filter panel is not visible
  if (!filterVisible) {
    return <FishFilterButton active={filtersApplied} onClick={handleFilterOpen} />;
  }

  // Retrieve the page element to mount the filter panel to
  const pageElement = isCompactView ? document.body : document.getElementById(pageElementId);
  if (!pageElement) {
    return null;
  }

  return (
    <FishFilterPanel
      filtersApplied={filtersApplied}
      parentNode={pageElement}
      searchQuery={searchQuery}
      selectedBaits={selectedBaits}
      selectedHabitats={selectedHabitats}
      selectedHooks={selectedHooks}
      selectedLures={selectedLures}
      selectedReserves={selectedReserves}
      selectedTraits={selectedTraits}
      onBaitsChange={setSelectedBaits}
      onClose={handleFilterClose}
      onHabitatsChange={setSelectedHabitats}
      onHooksChange={setSelectedHooks}
      onLuresChange={setSelectedLures}
      onQueryChange={setSearchQuery}
      onReservesChange={setSelectedReserves}
      onTraitsChange={setSelectedTraits}
    />
  );
};

export default FishFilter;
