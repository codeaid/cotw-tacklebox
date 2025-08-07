import type { BaitData, FishData, HookData } from 'types/data';
import type { ReserveId } from 'types/reserves';

export const fishIdsGeneric = [
  'african-mottled-eel',
  'african-sharptooth-catfish',
  'african-tigerfish',
  'alpine-bullhead',
  'amur-catfish',
  'andalusian-barbel',
  'arctic-char',
  'asp',
  'atlantic-salmon',
  'ayu-sweetfish',
  'black-crappie',
  'blue-kurper',
  'bluegill',
  'bream',
  'brook-trout',
  'brook-trout-jp',
  'brown-trout-es',
  'brown-trout-no',
  'bullhead-catfish',
  'burbot',
  'canary-kurper',
  'channel-catfish',
  'cherry-salmon',
  'chub',
  'chum-salmon',
  'comizo-barbel',
  'common-carp-es',
  'common-carp-sa',
  'common-dace',
  'crucian-carp',
  'cutthroat-trout',
  'dolly-varden-trout',
  'european-bullhead',
  'european-eel',
  'european-perch',
  'feral-koi',
  'freshwater-drum',
  'golden-trout',
  'grass-carp',
  'grayling',
  'green-sunfish',
  'ide',
  'japanese-dace',
  'japanese-eel',
  'japanese-freshwater-crab',
  'japanese-smelt',
  'kokanee-salmon',
  'lake-trout',
  'largemouth-bass-es',
  'largemouth-bass-us',
  'largemouth-yellowfish',
  'magoi',
  'mirror-carp-es',
  'mirror-carp-sa',
  'moggel',
  'mountain-whitefish',
  'mozambique-tilapia',
  'northern-pike-es',
  'northern-pike-no',
  'northern-pike-us',
  'northern-snakehead',
  'ohrid-trout',
  'pond-loach',
  'pumpkinseed',
  'purple-labeo',
  'rainbow-trout',
  'rainbow-trout-jp',
  'redbreast-kurper',
  'rednose-labeo',
  'river-carpsucker',
  'roach-es',
  'roach-no',
  'rock-bass',
  'rudd',
  'ruffe',
  'sakhalin-taimen',
  'sauger',
  'shovelnose-sturgeon',
  'signal-crayfish',
  'smallmouth-bass-sa',
  'smallmouth-bass-us',
  'smallmouth-yellowfish',
  'sockeye-salmon',
  'spotted-bass',
  'tench',
  'thicklip-mullet',
  'thinlip-mullet',
  'tiger-muskie',
  'walleye',
  'wels-catfish',
  'white-crappie',
  'white-spotted-char',
  'yellow-perch',
  'zander-es',
  'zander-no',
] as const;

export const fishIdsLegendary = [
  'alejandro-magno',
  'amemasu',
  'big-larry',
  'el-matador',
  'goldstein',
  'goto-the-immortal',
  'grootslang',
  'kalle-paul-the-dominator',
  'karoo-mermaid',
  'koi-no-takinobori',
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
