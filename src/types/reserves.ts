export const reserveIds = ['us', 'no', 'es', 'sa'] as const;

export type ReserveId = (typeof reserveIds)[number];

export interface Reserve {
  id: ReserveId;
  name: string;
  shortName: string;
  description: string;
  slug: string;
  image: {
    bw: string;
    color: string;
  };
}
