export const baitIdsBottom = [
  'artificial-corn-yellow',
  'boilies-natural',
  'corn',
  'dog-biscuits',
  'imitation-dog-biscuits',
  'pellets-regular',
  'wafters-white',
] as const;

export const baitIdsLive = ['bloodworm', 'leech', 'minnow', 'redworm'] as const;

export const baitIdsNatural = [
  'barley',
  'bread',
  'cheese',
  'dough',
  'eggs',
  'hotdog',
  'lake-mix',
  'liver',
  'marshmallow',
] as const;

export const baitTypes = ['bait'] as const;

export const lureIds = [
  'crankbait',
  'frog',
  'grub',
  'jerkbait',
  'popper',
  'shad',
  'spinner',
  'spinnerbait',
  'spoon',
  'swimbait',
  'tube',
  'worm',
] as const;

export type BaitChanceMap = Record<BaitId, number>;
export type LureChanceMap = Record<LureMethodId, number>;

export type BaitIdBottom = (typeof baitIdsBottom)[number];
export type BaitIdLive = (typeof baitIdsLive)[number];
export type BaitIdNatural = (typeof baitIdsNatural)[number];
export type BaitId = BaitIdBottom | BaitIdLive | BaitIdNatural;

export type BaitKindId = 'bottom' | 'live' | 'natural';
export type BaitType = (typeof baitTypes)[number];

export type LureMethodId = 'c' | 'j' | 's' | 't';

export type LureId = (typeof lureIds)[number];

export interface Bait<TId extends BaitId = BaitId> {
  id: TId;
  name: string;
}

export interface BaitKind {
  id: BaitKindId;
  name: string;
}

export interface Lure {
  id: LureId;
  name: string;
}

export interface LureMethod {
  id: LureMethodId;
  name: string;
}

export type BaitFilterType = 'all' | 'available' | '1' | '2' | '3';

export interface BaitFilterValue {
  bait: Bait;
  chance?: number;
}

export interface LureFilterValue {
  lure: Lure;
  value: Partial<LureChanceMap>;
}
