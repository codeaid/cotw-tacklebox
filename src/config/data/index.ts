import type { BaitDataMap, FishDataMap, HookDataMap } from 'types/data';
import baitJson from './baits.json';
import fishJson from './fish.json';
import hookJson from './hooks.json';

export const baitData = baitJson as BaitDataMap;
export const fishData = fishJson as FishDataMap;
export const hookData = hookJson as HookDataMap;
