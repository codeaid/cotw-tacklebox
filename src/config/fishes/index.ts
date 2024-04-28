import { sortFishes } from 'lib/sort';
import type { Fish } from 'types/fishes';
import fishesGeneric from './generic';
import fishesLegendary from './legendary';

export const fishes = [...fishesGeneric, ...fishesLegendary].sort(sortFishes) as Fish[];
