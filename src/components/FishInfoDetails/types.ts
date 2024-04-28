import type { ReactNode } from 'react';
import type { FishData } from 'types/data';
import type { Fish } from 'types/fishes';

export interface FishInfoDetailsItemProps {
  caption: string;
  children?: ReactNode;
}

export interface FishInfoDetailsProps {
  children?: ReactNode;
  data: FishData;
  fish: Fish;
}
