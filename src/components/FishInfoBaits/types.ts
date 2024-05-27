import type { BaitFilterValue, LureFilterValue } from 'types/baits';
import type { BaitData } from 'types/data';

export interface FishInfoBaitsBaitsProps {
  caption: string;
  headerClassName: string;
  values: BaitFilterValue[];
  wrapperClassName: string;
}

export interface FishInfoBaitsBaitsRowProps {
  value: BaitFilterValue;
}

export interface FishInfoBaitsRatingProps {
  size?: number;
  value: number;
}

export interface FishInfoBaitsBaitValueProps {
  chance?: number;
}

export interface FishInfoBaitsLuresProps {
  values: LureFilterValue[];
}

export interface FishInfoBaitsLuresRowProps {
  value: LureFilterValue;
}

export interface FishInfoBaitsProps {
  data: BaitData;
}
