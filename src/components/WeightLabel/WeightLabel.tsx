import { formatWeightValue } from 'lib/weight';
import type { WeightLabelProps } from './types';

export const WeightLabel = (props: WeightLabelProps) => {
  const { ceil = false, className, decimals = 2, enabled = false, kg } = props;

  // Render empty values as dashes
  if (typeof kg === 'undefined') {
    return '-';
  }

  return enabled ? (
    <span className={className}>{`${formatWeightValue(kg * 2.204623, decimals, ceil)} lbs`}</span>
  ) : (
    <span className={className}>{`${formatWeightValue(kg, decimals, ceil)} kg`}</span>
  );
};
