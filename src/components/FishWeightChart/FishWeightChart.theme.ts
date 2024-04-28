import type { Theme } from '@nivo/core';
import { sourceSansPro } from 'fonts';

export const theme: Theme = {
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
      stroke: 'var(--color-border-muted)',
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
