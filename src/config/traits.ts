import assetsTraits from 'assets/traits';
import type { Trait, TraitId } from 'types/traits';

// prettier-ignore
const data: Omit<Trait, 'image'>[] = [
  {
    id: 'aggressive',
    name: 'Aggressive',
    description: 'Goes directly for a strike without nibbling',
  },
  {
    id: 'ambusher',
    name: 'Ambusher',
    description: 'Bites only lures which have recently splashed in the water',
  },
  {
    id: 'bottom-lurker',
    name: 'Bottom Lurker',
    description: 'Prefers swimming closer to the bottom',
  },
  {
    id: 'daredevil',
    name: 'Daredevil',
    description: 'Loves hanging around waterfalls and high-speed streams',
  },
  {
    id: 'deep-speech',
    name: 'Deep Speech',
    description: 'At night, La Monstrenca rises to the surface to swim around and emits a deep, gurgling noise',
  },
  {
    id: 'dragons-gate',
    name: 'Dragon\'s Gate',
    description: 'Legend has it that the Dragon\'s Gate is located at the top of a waterfall, cascading from the heavens themselves. Many Koi possess the strength to swim upstream against the powerful river current, but only the truly worthy will jump high enough to become a True Dragon.',
  },
  {
    id: 'eagle-eyed',
    name: 'Eagle Eyed',
    description: 'Alejandro Magno will not become interested in or bite any lures or bait, until a lure has been twitched in the water',
  },
  {
    id: 'easily-spooked',
    name: 'Easily Spooked',
    description: 'Gets easily scared by human presence',
  },
  {
    id: 'evil-eye',
    name: 'Evil Eye',
    description: 'Every so often the Grootslang will spook all other nearby fish',
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
    id: 'otashitonkurus-rock',
    name: 'Otashitonkuru\'s Rock',
    description: 'Tangled in the rage of a a lost eye, Amemasu wrenched rocks into islands. Near scale, claw and feather, this bearer of the Earth lurks for vengeance.',
  },
  {
    id: 'patient-scavenger',
    name: 'Patient Scavenger',
    description: 'Bites only baits left soaking in water for a while',
  },
  {
    id: 'rising-sun',
    name: 'Rising Sun',
    description: 'Will rise to the surface during daytime, but hides as soon as it spots tackle',
  },
  {
    id: 'run-for-your-money',
    name: 'Run For Your Money',
    description: 'Mamlambo always maintains a healthy separation from you, until engaged in a fight',
  },
  {
    id: 'siren-song',
    name: 'Siren Song',
    description: 'The Karoo Mermaid emits a lugubrious song that temps even the most seasoned angler',
  },
  {
    id: 'social-distancing',
    name: 'Social Distancing',
    description: 'Will keep to a safe distance unless engaged in a fight',
  },
  {
    id: 'sun-lover',
    name: 'Sun Lover',
    description: 'More active after the sun rises',
  },
  {
    id: 'superiority-complex',
    name: 'Superiority Complex',
    description: 'Will bite eagerly and willingly, knowing it will emerge victorious',
  },
  {
    id: 'the-deepest-reaches',
    name: 'The Deepest Reaches',
    description: 'Free of his cage, the Deathless One awaits in deep darkness. In the lake, all warriors are cold warriors.',
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
