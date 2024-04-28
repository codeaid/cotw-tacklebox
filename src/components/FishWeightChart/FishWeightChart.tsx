'use client';

import type { BoxPlotTooltipProps } from '@nivo/boxplot';
import { BoxPlot } from '@nivo/boxplot';
import type { FunctionComponent } from 'react';
import { useMemo } from 'react';
import useResizeObserver from 'use-resize-observer';
import { createSvgDefs, createSvgFills } from './FishWeightChart.defs';
import {
  createChartData,
  formatWeightLabel,
  getMaximumValue,
  getMinimumValue,
} from './FishWeightChart.helpers';
import { theme } from './FishWeightChart.theme';
import { FishWeightChartTooltip } from './FishWeightChartTooltip';
import type { FishWeightChartProps } from './types';
import styles from './FishWeightChart.module.css';

export const FishWeightChart = (props: FishWeightChartProps) => {
  const { data, ranks = ['j', 'b', 's', 'g', 'd'] } = props;

  // Determine dimensions of the wrapper element
  const { height = 0, ref, width = 0 } = useResizeObserver();

  const { chartData, maxValue, minValue, svgDefs, svgFills } = useMemo(() => {
    // Reverse the list of ranks to ensure that the first in the list are rendered at the top
    const chartRanks = [...ranks].reverse();

    // Build chart data entries from the source fish data
    const chartData = createChartData(data, chartRanks);

    // Determine minimum and maximum X axis values
    const minValue = getMinimumValue(data);
    const maxValue = getMaximumValue(data);

    // Generate SVG definitions and element fills
    const svgDefs = createSvgDefs(chartRanks);
    const svgFills = createSvgFills(chartRanks);

    return { chartData, maxValue, minValue, svgDefs, svgFills };
  }, [data, ranks]);

  const tickValues = useMemo(
    () => (width < 250 ? 2 : width < 450 ? 3 : width < 750 ? 6 : width < 900 ? 9 : undefined),
    [width],
  );

  return (
    <div className={styles.FishWeightChart} ref={ref}>
      <BoxPlot
        animate={false}
        axisBottom={{
          format: formatWeightLabel,
          tickPadding: 8,
          tickSize: 0,
          tickValues,
        }}
        axisLeft={{
          tickPadding: 8,
          tickSize: 5,
        }}
        borderRadius={4}
        colorBy="group"
        data={chartData}
        defs={svgDefs}
        enableGridX={true}
        enableGridY={false}
        fill={svgFills}
        gridXValues={tickValues}
        height={height}
        isInteractive={true}
        layout="horizontal"
        margin={{
          bottom: 30,
          left: 80,
          right: 20,
          top: 20,
        }}
        maxValue={maxValue}
        medianWidth={0}
        minValue={minValue}
        padding={0.2}
        quantiles={[0, 0, 0.5, 1, 1]}
        theme={{
          ...theme,
          translation: {},
        }}
        tooltip={FishWeightChartTooltip as FunctionComponent<BoxPlotTooltipProps>}
        valueScale={{
          type: 'linear',
          min: minValue,
          max: maxValue,
          clamp: true,
        }}
        whiskerWidth={0}
        width={width}
      />
    </div>
  );
};
