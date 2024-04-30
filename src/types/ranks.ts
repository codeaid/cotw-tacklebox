export const rankIds = ['j', 'b', 's', 'g', 'd', 'l'] as const;

export type RankId = (typeof rankIds)[number];

export interface Rank {
  id: RankId;
  name: string;
}
