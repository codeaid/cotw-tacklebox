import type { ReactNode } from 'react';
import type { BaitData, FishData } from 'types/data';
import type { Fish } from 'types/fishes';

export interface FishInfoDetailsItemProps {
  caption: string;
  children?: ReactNode;
}

export interface FishInfoDetailsProps {
  children?: ReactNode;
  baitData: BaitData;
  fishData: FishData;
  fish: Fish;
}
