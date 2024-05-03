import type { FishEntity } from 'types/fishes';

export interface SearchInputOptionProps {
  active: boolean;
  entity: FishEntity;
  onClick: (entity: FishEntity) => void;
}
