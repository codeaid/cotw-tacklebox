export const habitatIds = [
  'deep-lake',
  'deep-pond',
  'lake-shore',
  'low-stream',
  'middle-river',
  'middle-stream',
  'river-mouth',
  'shallow-lake',
  'shallow-pond',
  'upriver',
  'upstream',
  'wetland-pond',
  'wetland-river',
] as const;

export type HabitatId = (typeof habitatIds)[number];

export interface Habitat {
  id: HabitatId;
  name: string;
}
