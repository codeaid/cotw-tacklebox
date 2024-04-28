export type HabitatId =
  | 'deep-lake'
  | 'deep-pond'
  | 'lake-shore'
  | 'low-stream'
  | 'middle-river'
  | 'middle-stream'
  | 'river-mouth'
  | 'shallow-lake'
  | 'shallow-pond'
  | 'upriver'
  | 'upstream'
  | 'wetland-pond'
  | 'wetland-river';

export interface Habitat {
  id: HabitatId;
  name: string;
}
