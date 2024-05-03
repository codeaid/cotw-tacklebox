'use client';

import clsx from 'clsx';
import { type ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import { Button, Input } from 'components';
import { Separator } from 'components/Separator';
import { baitMap, baitsBottom, baitsLive, baitsNatural, lureMap, lures } from 'config/baits';
import { fishEntities } from 'config/entities';
import habitats, { habitatMap } from 'config/habitats';
import { reserveMap } from 'config/reserves';
import traits, { traitMap } from 'config/traits';
import {
  filterByBait,
  filterByHabitat,
  filterByHook,
  filterByLure,
  filterByQuery,
  filterByReserve,
  filterByTrait,
} from 'lib/filter';
import { sortByName, sortFishes } from 'lib/sort';
import { type BaitId, type LureId } from 'types/baits';
import type { HabitatId } from 'types/habitats';
import type { HookSize } from 'types/hooks';
import { hookSizes } from 'types/hooks';
import type { ReserveId } from 'types/reserves';
import { reserveIds } from 'types/reserves';
import type { TraitId } from 'types/traits';
import { FishFilterOptions } from './FishFilterOptions';
import type { FishFilterProps } from './types';
import styles from './FishFilter.module.css';

export const FishFilter = (props: FishFilterProps) => {
  const { onChange } = props;

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

  // List of available habitats
  const habitatIds = useMemo(() => habitats.sort(sortByName).map(habitat => habitat.id), []);

  // List of available baits
  const baitIds = useMemo(
    () => [...baitsBottom, ...baitsLive, ...baitsNatural].sort(sortByName).map(bait => bait.id),
    [],
  );

  // List of available lures
  const lureIds = useMemo(() => lures.sort(sortByName).map(lure => lure.id), []);

  // List of available fish traits
  const traitIds = useMemo(() => traits.sort(sortByName).map(trait => trait.id), []);

  // Determine if any of the filters are currently modified
  const filterApplied = [
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
   * Handle clearing currently selected filters
   */
  const handleFiltersReset = () => {
    setSearchQuery('');
    setSelectedBaits([]);
    setSelectedHabitats([]);
    setSelectedHooks([]);
    setSelectedLures([]);
    setSelectedReserves([]);
    setSelectedTraits([]);
  };

  /**
   * Update internally stored query value on each input change
   */
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value.trim()),
    [],
  );

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
    return (
      <>
        <button className={styles.FishesPageFilterButton} onClick={() => setFilterVisible(true)}>
          <IoSearch
            className={clsx(styles.FishesPageFilterButtonIcon, {
              [styles.FishesPageFilterButtonIconActive]: filterApplied,
            })}
          />{' '}
          Filter
        </button>
      </>
    );
  }

  // Retrieve the body content element to mount the filter panel to
  const parent = document.getElementById('body-content');
  if (!parent) {
    return null;
  }

  return createPortal(
    <div className={styles.FishFilter}>
      <div className={styles.FishFilterContent}>
        <h4 className={styles.FishFilterHeading}>
          Filter
          <IoCloseSharp className={styles.FishFilterHeadingIcon} onClick={handleFilterClose} />
        </h4>
        <Separator highlight="center" />

        <div className={styles.FishFilterOptionsWrapper}>
          <Input
            defaultValue={searchQuery}
            name="q"
            placeholder="Enter fish name..."
            onChange={handleInputChange}
          />

          <FishFilterOptions<ReserveId>
            label="Reserves"
            options={reserveIds}
            selection={selectedReserves}
            onChange={setSelectedReserves}
            onRender={id => reserveMap[id].name}
          />

          <FishFilterOptions<BaitId>
            label="Baits"
            options={baitIds}
            selection={selectedBaits}
            onChange={setSelectedBaits}
            onRender={id => baitMap[id].name}
          />

          <FishFilterOptions<LureId>
            label="Lures"
            options={lureIds}
            selection={selectedLures}
            onChange={setSelectedLures}
            onRender={id => lureMap[id].name}
          />

          <FishFilterOptions<HookSize>
            label="Hooks"
            options={hookSizes}
            selection={selectedHooks}
            onChange={setSelectedHooks}
            onRender={id => id}
          />

          <FishFilterOptions<TraitId>
            label="Traits"
            options={traitIds}
            selection={selectedTraits}
            onChange={setSelectedTraits}
            onRender={id => traitMap[id].name}
          />

          <FishFilterOptions<HabitatId>
            label="Habitats"
            options={habitatIds}
            selection={selectedHabitats}
            onChange={setSelectedHabitats}
            onRender={id => habitatMap[id].name}
          />
        </div>
      </div>

      <div className={styles.FishFilterActions}>
        <Button
          className={styles.FishFilterAction}
          disabled={!filterApplied}
          onClick={handleFiltersReset}
        >
          Reset
        </Button>
      </div>
    </div>,
    parent,
  );
};

export default FishFilter;
