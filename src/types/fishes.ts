import type { BaitData, FishData, HookData } from 'types/data';
import type { ReserveId } from 'types/reserves';

export const fishIdsGeneric = [
  'african-mottled-eel',
  'african-sharptooth-catfish',
  'african-tigerfish',
  'alpine-bullhead',
  'andalusian-barbel',
  'arctic-char',
  'asp',
  'atlantic-salmon',
  'black-crappie',
  'blue-kurper',
  'bluegill',
  'bream',
  'brook-trout',
  'brown-trout-es',
  'brown-trout-no',
  'bullhead-catfish',
  'burbot',
  'canary-kurper',
  'channel-catfish',
  'chub',
  'comizo-barbel',
  'common-carp-es',
  'common-carp-sa',
  'common-dace',
  'crucian-carp',
  'cutthroat-trout',
  'european-bullhead',
  'european-eel',
  'european-perch',
  'freshwater-drum',
  'golden-trout',
  'grass-carp',
  'grayling',
  'green-sunfish',
  'ide',
  'kokanee-salmon',
  'lake-trout',
  'largemouth-bass-es',
  'largemouth-bass-us',
  'largemouth-yellowfish',
  'mirror-carp-es',
  'mirror-carp-sa',
  'moggel',
  'mountain-whitefish',
  'northern-pike-es',
  'northern-pike-no',
  'northern-pike-us',
  'ohrid-trout',
  'pumpkinseed',
  'purple-labeo',
  'rainbow-trout',
  'redbreast-kurper',
  'rednose-labeo',
  'roach-es',
  'roach-no',
  'rock-bass',
  'rudd',
  'ruffe',
  'sauger',
  'shovelnose-sturgeon',
  'smallmouth-bass-sa',
  'smallmouth-bass-us',
  'smallmouth-yellowfish',
  'spotted-bass',
  'tench',
  'thicklip-mullet',
  'thinlip-mullet',
  'tiger-muskie',
  'walleye',
  'wels-catfish',
  'white-crappie',
  'yellow-perch',
  'zander-es',
  'zander-no',
] as const;

export const fishIdsLegendary = [
  'alejandro-magno',
  'big-larry',
  'el-matador',
  'goldstein',
  'grootslang',
  'kalle-paul-the-dominator',
  'karoo-mermaid',
  'la-monstrenca',
  'mamlambo',
  'sidewinder',
  'speilfinne',
  'store-henrik',
] as const;

export type FishIdGeneric = (typeof fishIdsGeneric)[number];
export type FishIdLegendary = (typeof fishIdsLegendary)[number];

export type FishId = FishIdGeneric | FishIdLegendary;

type FishGeneric = {
  legendary?: false;
};

type FishLegendary = {
  legendary: true;
};

export type Fish<
  TFishKey extends FishIdGeneric | FishIdLegendary = FishIdGeneric | FishIdLegendary,
  TFishParent = TFishKey extends FishIdGeneric ? FishGeneric : FishLegendary,
> = TFishParent & {
  id: TFishKey;
  name: string;
  description: string;
  image: {
    large: string;
    small: string;
  };
  reserves: ReserveId[];
};

export type FishEntity<TFishKey extends FishId = FishId> = Omit<Fish<TFishKey>, 'reserves'> &
  FishData & {
    baitData: BaitData;
    hookData: HookData;
    reserve: ReserveId;
  };
