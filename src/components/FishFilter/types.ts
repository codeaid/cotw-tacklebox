import type { ReactNode } from 'react';
import type { FishEntity } from 'types/fishes';

export interface FishFilterOptionsProps<TOption extends string> {
  label: string;
  options: readonly TOption[];
  selection: TOption[];
  onChange: (value: TOption[]) => void;
  onRender: (value: TOption) => ReactNode;
}

export interface FishFilterProps {
  onChange: (entities: FishEntity[]) => void;
}
