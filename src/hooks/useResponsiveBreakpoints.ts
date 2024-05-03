import useResizeObserver from 'use-resize-observer';

/*
 * Window sizes used in media queries
 * (from https://m3.material.io/foundations/layout/applying-layout/window-size-classes)
 *
 * - Compact: width < 600
 *   - Phone in portrait
 *
 * - Medium: 600 ≤ width < 840
 *   - Tablet in portrait
 *   - Foldable in portrait (unfolded)
 *
 * - Expanded: 840 ≤ width < 1200
 *   - Phone in landscape
 *   - Tablet in landscape
 *   - Foldable in landscape (unfolded)
 *   - Desktop
 *
 * - Large: 1200 ≤ width < 1600
 *   - Desktop
 *
 * - Extra large: 1600 ≤ width
 *   - Desktop
 *   - Ultra-wide
 */
export const useResponsiveBreakpoints = () => {
  const { width } = useResizeObserver({
    ref: typeof window !== 'undefined' && typeof document !== 'undefined' ? document.body : null,
  });

  if (!width) {
    return {
      isCompactView: false,
      isMediumView: false,
      isExpandedView: false,
      isLargeView: false,
      isExtraLargeView: false,
    };
  }

  return {
    isCompactView: width < 600,
    isMediumView: width >= 600 && width < 840,
    isExpandedView: width >= 840 && width < 1200,
    isLargeView: width >= 1200 && width < 1600,
    isExtraLargeView: width >= 1600,
  };
};
