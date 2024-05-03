import type { FishEntity } from 'types/fishes';
import type { Reserve } from 'types/reserves';

export interface ReserveFishGridProps {
  entities: FishEntity[];
  reserve: Reserve;
}
