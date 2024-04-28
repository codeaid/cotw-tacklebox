import type { BoxPlotDatum, ComputedBoxPlotSummary } from '@nivo/boxplot';
import type { SvgDefsAndFill } from '@nivo/core';
import { linearGradientDef } from '@nivo/core';
import { rankMap } from 'config/ranks';
import type { RankId } from 'types/ranks';

// Map of fish ranks and their start/end colors used in gradients
const colorMap: Record<RankId, [string, string]> = {
  j: ['var(--color-rank-juvenile-dark)', 'var(--color-rank-juvenile)'],
  b: ['var(--color-rank-bronze-dark)', 'var(--color-rank-bronze)'],
  s: ['var(--color-rank-silver-dark)', 'var(--color-rank-silver)'],
  g: ['var(--color-rank-gold-dark)', 'var(--color-rank-gold)'],
  d: ['var(--color-rank-diamond-dark)', 'var(--color-rank-diamond)'],
  l: ['var(--color-rank-legendary-dark)', 'var(--color-rank-legendary)'],
};

/**
 * Generate a definition name for the specified rank
 *
 * @param rankId Target rank identifier
 */
const createDefName = (rankId: RankId) => `bg${rankMap[rankId].name}`;

/**
 * Generate a list of SVG definitions for the specified list of ranks
 *
 * @param ranks Source ranks
 */
export const createSvgDefs = (ranks: RankId[]): SvgDefsAndFill<BoxPlotDatum>['defs'] =>
  ranks.map(rankId =>
    linearGradientDef(
      createDefName(rankId),
      [
        { offset: 0, color: colorMap[rankId][0] },
        { offset: 100, color: colorMap[rankId][1] },
      ],
      { gradientTransform: 'rotate(90 0.5 0.5)' },
    ),
  );

/**
 * Generate a list of SVG fills for the specified list of ranks
 *
 * @param ranks Source ranks
 */
export const createSvgFills = (ranks: RankId[]): SvgDefsAndFill<ComputedBoxPlotSummary>['fill'] =>
  ranks.map(rankId => ({
    id: createDefName(rankId),
    match: data => data.group === rankMap[rankId].name,
  }));
