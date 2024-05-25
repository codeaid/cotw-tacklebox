'use client';

import type { ChangeEvent } from 'react';
import { useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Separator } from 'components/Separator';
import { baitMap, baitsBottom, baitsLive, baitsNatural, lureMap, lures } from 'config/baits';
import habitats, { habitatMap } from 'config/habitats';
import { reserveMap } from 'config/reserves';
import traits, { traitMap } from 'config/traits';
import { sortByName } from 'lib/sort';
import type { BaitId, LureId } from 'types/baits';
import type { HabitatId } from 'types/habitats';
import { hookSizes } from 'types/hooks';
import type { HookSize } from 'types/hooks';
import { reserveIds } from 'types/reserves';
import type { ReserveId } from 'types/reserves';
import type { TraitId } from 'types/traits';
import { FishFilterOptions } from './FishFilterOptions';
import type { FishFilterPanelProps } from './types';
import styles from './FishFilterPanel.module.css';

export const FishFilterPanel = (props: FishFilterPanelProps) => {
  const {
    filtersApplied,
    parentNode,
    searchQuery,
    selectedBaits,
    selectedHabitats,
    selectedHooks,
    selectedLures,
    selectedReserves,
    selectedTraits,
    onBaitsChange,
    onHabitatsChange,
    onHooksChange,
    onLuresChange,
    onQueryChange,
    onReservesChange,
    onTraitsChange,
    onClose,
  } = props;

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

  /**
   * Update internally stored query value on each input change
   */
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => onQueryChange(event.target.value.trim()),
    [onQueryChange],
  );

  /**
   * Handle clearing currently selected filters
   */
  const handleFiltersReset = useCallback(() => {
    onQueryChange('');
    onBaitsChange([]);
    onHabitatsChange([]);
    onHooksChange([]);
    onLuresChange([]);
    onReservesChange([]);
    onTraitsChange([]);
  }, [
    onBaitsChange,
    onHabitatsChange,
    onHooksChange,
    onLuresChange,
    onQueryChange,
    onReservesChange,
    onTraitsChange,
  ]);

  return createPortal(
    <div className={styles.FishFilterPanel}>
      <div className={styles.FishFilterPanelContent}>
        <h4 className={styles.FishFilterPanelHeading}>
          Filter
          <IoCloseSharp className={styles.FishFilterPanelHeadingIcon} onClick={onClose} />
        </h4>
        <Separator highlight="center" />

        <div className={styles.FishFilterPanelOptionsWrapper}>
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
            onChange={onReservesChange}
            onRender={id => reserveMap[id].shortName}
          />

          <FishFilterOptions<BaitId>
            label="Baits"
            options={baitIds}
            selection={selectedBaits}
            onChange={onBaitsChange}
            onRender={id => baitMap[id].name}
          />

          <FishFilterOptions<LureId>
            label="Lures"
            options={lureIds}
            selection={selectedLures}
            onChange={onLuresChange}
            onRender={id => lureMap[id].name}
          />

          <FishFilterOptions<HookSize>
            label="Hooks"
            options={hookSizes}
            selection={selectedHooks}
            onChange={onHooksChange}
            onRender={id => id}
          />

          <FishFilterOptions<TraitId>
            label="Traits"
            options={traitIds}
            selection={selectedTraits}
            onChange={onTraitsChange}
            onRender={id => traitMap[id].name}
          />

          <FishFilterOptions<HabitatId>
            label="Habitats"
            options={habitatIds}
            selection={selectedHabitats}
            onChange={onHabitatsChange}
            onRender={id => habitatMap[id].name}
          />
        </div>
      </div>

      <div className={styles.FishFilterPanelActions}>
        <Button
          className={styles.FishFilterPanelAction}
          disabled={!filtersApplied}
          onClick={handleFiltersReset}
        >
          Reset
        </Button>
      </div>
    </div>,
    parentNode,
  );
};
