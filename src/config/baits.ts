import { sortByName } from 'lib/sort';
import type {
  Bait,
  BaitId,
  BaitIdBottom,
  BaitIdGround,
  BaitIdLive,
  BaitIdNatural,
  BaitKind,
  BaitKindId,
  Lure,
  LureId,
  LureMethod,
} from 'types/baits';

export const baitsBottom = (
  [
    { id: 'artificial-corn-yellow', name: 'Artificial Corn - Yellow' },
    { id: 'boilies-natural', name: 'Boilies - Natural' },
    { id: 'corn', name: 'Corn' },
    { id: 'dog-biscuits', name: 'Dog Biscuits' },
    { id: 'imitation-dog-biscuits', name: 'Imitation Dog Biscuits' },
    { id: 'pellets-regular', name: 'Pellets - Regular' },
    { id: 'wafters-white', name: 'Wafters - White' },
  ] as Bait<BaitIdBottom>[]
).sort(sortByName);

export const baitsGround = (
  [
    { id: 'advantage', name: 'Advantage' },
    { id: 'high-impact', name: 'High Impact' },
    { id: 'lake-mix', name: 'Lake Mix' },
    { id: 'match-blend', name: 'Match Blend' },
    { id: 'pro-performance', name: 'Pro Performance' },
  ] as Bait<BaitIdGround>[]
).sort(sortByName);

export const baitsLive = (
  [
    { id: 'bloodworm', name: 'Bloodworm' },
    { id: 'leech', name: 'Leech' },
    { id: 'minnow', name: 'Minnow' },
    { id: 'redworm', name: 'Redworm' },
  ] as Bait<BaitIdLive>[]
).sort(sortByName);

export const baitsNatural = (
  [
    { id: 'barley', name: 'Pearl Barley' },
    { id: 'bread', name: 'Bread' },
    { id: 'cheese', name: 'Cheese' },
    { id: 'dough', name: 'Dough' },
    { id: 'eggs', name: 'Eggs' },
    { id: 'hotdog', name: 'Hotdog' },
    { id: 'liver', name: 'Liver' },
    { id: 'marshmallow', name: 'Marshmallow' },
  ] as Bait<BaitIdNatural>[]
).sort(sortByName);

export const baitKinds: BaitKind[] = [
  { id: 'natural', name: 'Natural' },
  { id: 'live', name: 'Live' },
  { id: 'bottom', name: 'Bottom' },
  { id: 'ground', name: 'Ground' },
];

export const lures = (
  [
    { id: 'crankbait', name: 'Crankbait' },
    { id: 'frog', name: 'Frog' },
    { id: 'grub', name: 'Grub' },
    { id: 'jerkbait', name: 'Jerkbait' },
    { id: 'popper', name: 'Popper' },
    { id: 'shad', name: 'Shad' },
    { id: 'spinner', name: 'Spinner' },
    { id: 'spinnerbait', name: 'Spinnerbait' },
    { id: 'spoon', name: 'Spoon' },
    { id: 'swimbait', name: 'Swimbait' },
    { id: 'tube', name: 'Tube' },
    { id: 'worm', name: 'Worm' },
  ] as Lure[]
).sort(sortByName);

export const lureMethods: LureMethod[] = [
  { id: 'c', name: 'Constant' },
  { id: 't', name: 'Twitching' },
  { id: 'j', name: 'Jigging' },
  { id: 's', name: 'Stop & Go' },
];

export const baitMap = [...baitsBottom, ...baitsGround, ...baitsLive, ...baitsNatural].reduce(
  (acc, curr) => ({
    ...acc,
    [curr.id]: curr,
  }),
  {} as Record<BaitId, Bait>,
);

export const baitKindMap = baitKinds.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.id]: curr,
  }),
  {} as Record<BaitKindId, BaitKind>,
);

export const lureMap = lures.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.id]: curr,
  }),
  {} as Record<LureId, Lure>,
);
