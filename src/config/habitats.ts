import type { Habitat, HabitatId } from 'types/habitats';

const habitats: Habitat[] = [
  {
    id: 'deep-lake',
    name: 'Deep Lake',
  },
  {
    id: 'deep-pond',
    name: 'Deep Pond',
  },
  {
    id: 'lake-shore',
    name: 'Lake Shore',
  },
  {
    id: 'low-stream',
    name: 'Low Stream',
  },
  {
    id: 'middle-river',
    name: 'Middle River',
  },
  {
    id: 'middle-stream',
    name: 'Middle Stream',
  },
  {
    id: 'river-mouth',
    name: 'River Mouth',
  },
  {
    id: 'shallow-lake',
    name: 'Shallow Lake',
  },
  {
    id: 'shallow-pond',
    name: 'Shallow Pond',
  },
  {
    id: 'upriver',
    name: 'Upriver',
  },
  {
    id: 'upstream',
    name: 'Upstream',
  },
  {
    id: 'wetland-pond',
    name: 'Wetland Pond',
  },
  {
    id: 'wetland-river',
    name: 'Wetland River',
  },
];

export const habitatMap = habitats.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.id]: curr,
  }),
  {} as Record<HabitatId, Habitat>,
);

export default habitats;
