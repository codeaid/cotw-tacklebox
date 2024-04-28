import type { BaitChanceMap, BaitType, LureChanceMap, LureId } from 'types/baits';
import type { FishId } from 'types/fishes';
import type { HabitatId } from 'types/habitats';
import type { HookSize } from 'types/hooks';
import type { RankId } from './ranks';
import type { TraitId } from './traits';

export type BaitData = {
  [key in BaitType]?: BaitChanceMap;
} & {
  [key in LureId]?: LureChanceMap;
};

export type BaitDataMap = Record<FishId, BaitData>;

export interface FishData {
  kgMin: number;
  kgMaxJuvenile: number;
  kgMaxBronze: number;
  kgMaxSilver: number;
  kgMaxGold: number;
  kgMaxDiamond: number;
  habitats: HabitatId[];
  traits: TraitId[];
}

export type FishDataMap = Record<FishId, FishData>;

export type HookData = Record<HookSize, RankId>;

export type HookDataMap = Record<FishId, HookData>;
