import assetsTraits from 'assets/traits';
import type { Trait, TraitId } from 'types/traits';

const data: Omit<Trait, 'image'>[] = [
  {
    id: 'aggressive',
    name: 'Aggressive',
    description: 'Goes directly for a strike without nibbling',
  },
  {
    id: 'bottom-lurker',
    name: 'Bottom Lurker',
    description: 'Prefers swimming closer to the bottom',
  },
  {
    id: 'easily-spooked',
    name: 'Easily Spooked',
    description: 'Gets easily scared by human presence',
  },
  {
    id: 'hard-fighter',
    name: 'Hard Fighter',
    description: 'Tries its best to get off the hook',
  },
  {
    id: 'jumper',
    name: 'Jumper',
    description: 'Likes jumping out of the water',
  },
  {
    id: 'keen-senses',
    name: 'Keen Senses',
    description: 'Can sense food from a great distance and will respond well to lures',
  },
  {
    id: 'last-stand',
    name: 'Last Stand',
    description: 'When close to getting caught it fights with renewed vigor',
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    description: 'More active at night',
  },
  {
    id: 'sun-lover',
    name: 'Sun Lover',
    description: 'More active after the sun rises',
  },
];

const traits = data.map<Required<Trait>>(trait => ({
  ...trait,
  image: assetsTraits[trait.id],
}));

export const traitMap = traits.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.id]: curr,
  }),
  {} as Record<TraitId, Trait>,
);

export default traits;
