import assetsLarge from 'assets/fishes/legendary/large';
import assetsSmall from 'assets/fishes/legendary/small';
import type { Fish, FishIdLegendary } from 'types/fishes';

// prettier-ignore
const fishes: Omit<Fish<FishIdLegendary>, 'image' | 'legendary'>[] = [
  {
    id: 'big-larry',
    name: 'Big Larry',
    description: 'Big Larry started the same size as any other Catfish (3.9-5.2 ft, 119-158 cm), but soon her suckling skin tasted more than just hotdogs and corn. She tasted friends, relatives. Babies. She tasted more and more until none born of water could sate her. She bit hooks clean off lines, snatched planks from boat floors, polished fingers off bone and wrenched nails from toes. She bit and licked and crammed and sluiced until anything missing ended maw-side. A labeled sandwich in the communal fridge, the last pack of chipotle cheese chips in the gift shop; even memories of where Clayton put his shoes or a hastily made appointment to go to karaoke were said to have been swallowed by Larry. She ate on and on until her trail of tipples brought her to you. Can you serve just desserts or are you her main course?',
    reserves: ['us'],
  },
  {
    id: 'goldstein',
    name: 'Goldstein',
    description: "Before Goldstein was Goldstein, he was one half of a school of two. They say that those who spawn together, stay together; but in this case they couldn't swim together forever. Some fisherman say it started with a glint in his eye they could see from the shore. Others claim they saw Goldstein applying a little seasoning to his partner between strokes. Either way, he was soon found sailing solo, with a little extra weight to show for his heartbreak. What followed was a plethora of potential partners of all shapes and sizes, but the first cut was the deepest, and their first fight would spell to be their last. A good mate is hard to find, but a decent meal is easy, and before long Goldstein had developed a real taste for love. None would prove to be as nutritious as his first, but as they say, there's plenty more fish in the freshwater. Goldstein has no intention of giving up, no matter how big he gets.",
    reserves: ['us'],
  },
  {
    id: 'sidewinder',
    name: 'Sidewinder',
    description: "Sidewinder drummed up rumors as a sound rather than a fish. A boom followed by ripples, knocking then stillness. Keen fishermen would say they saw a blur, looked down with their bait clean gone, and now those days are too. Sidewinder was the pinnacle of speed and with that he found success, but with success comes cold hard calories. Now Sidewinder is a behemoth-sized whopper, with an uncharacteristic breakneck speed to boot, even if he can't quite reach the sound barrier he used to shatter to pieces.",
    reserves: ['us'],
  },

  {
    id: 'kalle-paul-the-dominator',
    name: 'Kalle Paul the Dominator',
    description: "KP Solheim used to be kept as a pet by a small girl called Cindy, however was released into the wild after the family moved to Belgium. Adjusting to life on the outside was tough, and after a fierce mating contest, KP swam too close to the surface, trapping his head in the rotor blades of a motorboat. Some say that the near death experience gave him great power, and that asphyxiation caused his head to swell to many times its original size. The only thing we know for sure, is that he wasn't the same fish he was before. He was different. Much, much larger. Better. A Dominator. He obliterated the ocean, cruising from school to school with mouth agape, ravaging entire colonies in a single bite. A monster, true and true, no longer the lovable floaty squiggle his Cindy used to know. Pikes aren't just for Christmas, and monsters aren't for the weak. Will you be strong enough to dominate the dominator?",
    reserves: ['no'],
  },
  {
    id: 'speilfinne',
    name: 'Speilfinne',
    description: "This legendary Atlantic Salmon first came into notoriety after she reflected harsh sunlight into the eye of a cruise liner captain, blinding them and mooring their ship. It's unclear if this extreme act gave Speilfinne a taste for mayhem, but since then, it has dazzled a streak of victims a country mile long, rendering them unable to catch anything or indeed function at all for several days. She has at many times been mistaken for scrap on the riverbed, only to have vanished as soon as hauling equipment materialized. Speilfinne has never tasted hook, nor been locked down long enough to be caught. Can you do the job?",
    reserves: ['no'],
  },
  {
    id: 'store-henrik',
    name: 'Store Henrik',
    description: "Store Henrik is a particularly large and fearsome burbot who's never been known to back away from a fight, whether that's with another fish, a boat or someone's house, and has never tasted defeat even once. It has been said he fought a waterfall for 20 days and 20 nights and won, causing it to dry up for good. Others say he fights sleep, restlessly roaming the rivers of the reserve, and has never even winked. Others still says he fights the concept of time itself, although I wouldn't listen to them, they lost their house, boat and rod to Henrik, they aren't in a great place. Anyway, he's huge and will happily run away with your arm if you let him. Can you keep him down for the count?",
    reserves: ['no'],
  },

  {
    id: 'el-matador',
    name: 'El Matador',
    description: "El Matador is an indomitable beast. A mirror carp so gigantic, desperate anglers are dragged screaming into his gravitational pull, raking at his event horizon with scrabbling fingers. Chasing the dragon round his circuitous orbit is the dedication of a lifetime, consigning no less than one man to an early grave. It's said he can snap a line with the wave of a fin, or a rod by as much as blinking.",
    reserves: ['es'],
  },
  {
    id: 'alejandro-magno',
    name: 'Alejandro Magno',
    description: "Alejandro is an enormous brown trout who was found trapped down a well in southern Andalusia, surviving only by eating his own parents and every single one of his brothers and sisters. He was rescued and placed in a nearby lake, but he didn't fit in well with the other fish. He had learned how to survive, and that was through comrade consumption.",
    reserves: ['es'],
  },
  {
    id: 'la-monstrenca',
    name: 'La Monstrenca',
    description: "La Mostrenca is a tale that is told to Andalusian children to scare them to an early, silent sleep; for if they are not good, La Mostrenca will come. A terrible tale made manifest by way of gaping maw, a hunched, pocked, gurgling denouement ripping the tide wide open in search of fresh ears to burrow into. She hides not in cupboards or under beds, but in angler's nets, wide eyed and slavering in sleepless death, waiting to devour them whole.",
    reserves: ['es'],
  },
];

export default fishes.map<Required<Fish<FishIdLegendary>>>(fish => ({
  ...fish,
  image: {
    large: assetsLarge[fish.id],
    small: assetsSmall[fish.id],
  },
  legendary: true,
}));
