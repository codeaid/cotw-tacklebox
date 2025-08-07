import type { PartialTheme } from '@nivo/theming';
import { sourceSansPro } from 'fonts';

export const theme: PartialTheme = {
  axis: {
    ticks: {
      line: {
        stroke: 'var(--color-border)',
      },
      text: {
        fontSize: '0.8em',
      },
    },
  },
  grid: {
    line: {
      stroke: 'var(--color-border-dark)',
    },
  },
  text: {
    fill: 'var(--font-color)',
    fontFamily: sourceSansPro.style.fontFamily,
  },
  tooltip: {
    basic: {
      fontSize: '0.8em',
    },
  },
};
