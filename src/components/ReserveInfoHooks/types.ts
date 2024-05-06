import type { FishEntity, FishIdGeneric, FishIdLegendary } from 'types/fishes';

export type ReserveInfoHooksSortType = 'name' | 'weight';

export interface ReserveInfoHooksProps {
  genericEntities: FishEntity<FishIdGeneric>[];
  legendaryEntities: FishEntity<FishIdLegendary>[];
}
