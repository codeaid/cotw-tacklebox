export const reserveIds = ['us', 'no', 'es', 'sa', 'jp'] as const;

export type ReserveId = (typeof reserveIds)[number];

export interface Reserve {
  id: ReserveId;
  name: string;
  shortName: string;
  description: string;
  location: string;
  slug: string;
  image: {
    bw: string;
    color: string;
  };
}
