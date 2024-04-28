import type { ComputedBoxPlotSummary } from '@nivo/boxplot';
import { WeightLabel } from 'components';
import styles from './FishInfoWeightTooltip.module.css';

export const FishInfoWeightTooltip = (props: ComputedBoxPlotSummary) => {
  const {
    data: {
      extrema: [min, max],
    },
    group,
  } = props;

  return (
    <div className={styles.FishInfoWeightTooltip}>
      <div className={styles.FishInfoWeightTooltipCaption}>{group}</div>
      <WeightLabel kg={min} /> - <WeightLabel kg={max} />
    </div>
  );
};
