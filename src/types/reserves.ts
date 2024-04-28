export type ReserveId = 'es' | 'no' | 'sa' | 'us';

export interface Reserve {
  id: ReserveId;
  name: string;
  description: string;
}
