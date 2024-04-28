import type { Reserve, ReserveId } from 'types/reserves';

// prettier-ignore
export const reserves: Reserve[] = [
  {
    id: 'us',
    name: 'Golden Ridge Reserve',
    description: 'Golden Ridge Reserve is a beautiful national park with many different areas to explore. From the wide, blue lake basins of Emerald Lake Plateau to the rust-colored hills of Ruby River Range, not to mention the gorgeous flower-covered fields of Silver Strand Meadows, there is something for everyone here.'
  },
  {
    id: 'no',
    name: 'Trollsporet Nature Reserve',
    description: 'Trollsporet Nature Reserve is a prepossessing powder-dusted paradise, the pre-eminent destination for travelers who wish to fish freely under a canopy of breathtaking Aurora Borealis. The reserve is found under the supervision of the Warden, Astrid, a storyteller with penchant for the petrifying.'
  },
  {
    id: 'es',
    name: 'Aguas Claras Municipio',
    description: 'Cradled in the palm of a gargantuan gorge lies Aguas Claras, Málaga; an angler\'s paradise, sequestered away by a rock climber\'s one. A town of fish, food and unique history, all of which its inhabitants will share with you in spades. There\'s no end to the architectural and natural wonders to discover, and no end to the conversation; people have a lot to say here, and once they start they might take a while to stop. Make the trip and find out why the Aguas Claras welcome is so famous.'
  },
  {
    id: 'sa',
    name: 'Izilo Zasendulo',
    description: 'In the heart of Mpumalanga province lies Izilo Zasendulo, a wild and truly wonderful dinosaur park. Through the pure passion of most of its staff, the park has pivoted to offer and incredibly competitive fishing experience, and that now comprises the top layer of a history that runs deep.'
  },
];

export const reserveMap = reserves.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.id]: curr,
  }),
  {} as Record<ReserveId, Reserve>,
);
