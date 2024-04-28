import type { Rank, RankId } from 'types/ranks';

export const ranks: Rank[] = [
  { id: 'j', name: 'Juvenile' },
  { id: 'b', name: 'Bronze' },
  { id: 's', name: 'Silver' },
  { id: 'g', name: 'Gold' },
  { id: 'd', name: 'Diamond' },
  { id: 'l', name: 'Legendary' },
];

export const rankMap = ranks.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.id]: curr,
  }),
  {} as Record<RankId, Rank>,
);
