import type { ComputedBoxPlotSummary } from '@nivo/boxplot';
import { WeightLabel } from 'components';
import styles from './FishWeightChartTooltip.module.css';

export const FishWeightChartTooltip = (props: ComputedBoxPlotSummary) => {
  const {
    data: {
      extrema: [min, max],
    },
    group,
  } = props;

  return (
    <div className={styles.FishWeightChartTooltip}>
      <div className={styles.FishWeightChartTooltipCaption}>{group}</div>
      <WeightLabel kg={min} /> - <WeightLabel kg={max} />
    </div>
  );
};
