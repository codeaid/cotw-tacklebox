import type { ReactNode } from 'react';
import type { BaitId, LureId } from 'types/baits';
import type { FishEntity } from 'types/fishes';
import type { HabitatId } from 'types/habitats';
import type { HookSize } from 'types/hooks';
import type { ReserveId } from 'types/reserves';
import type { TraitId } from 'types/traits';

export interface FishFilterButtonProps {
  active: boolean;
  onClick: () => void;
}

export interface FishFilterOptionsProps<TOption extends string> {
  label: string;
  options: readonly TOption[];
  selection: TOption[];
  onChange: (value: TOption[]) => void;
  onRender: (value: TOption) => ReactNode;
}

export interface FishFilterPanelProps {
  filtersApplied: boolean;
  parentNode: HTMLElement;
  searchQuery: string;
  selectedBaits: BaitId[];
  selectedHabitats: HabitatId[];
  selectedHooks: HookSize[];
  selectedLures: LureId[];
  selectedReserves: ReserveId[];
  selectedTraits: TraitId[];
  onBaitsChange: (value: BaitId[]) => void;
  onHabitatsChange: (value: HabitatId[]) => void;
  onHooksChange: (value: HookSize[]) => void;
  onLuresChange: (value: LureId[]) => void;
  onQueryChange: (value: string) => void;
  onReservesChange: (value: ReserveId[]) => void;
  onTraitsChange: (value: TraitId[]) => void;
  onClose: () => void;
}

export interface FishFilterProps {
  onChange: (entities: FishEntity[]) => void;
}
