import { sortFishes } from 'lib/sort';
import fishesGeneric from './generic';
import fishesLegendary from './legendary';

export const fishes = [...fishesGeneric, ...fishesLegendary].sort(sortFishes);
