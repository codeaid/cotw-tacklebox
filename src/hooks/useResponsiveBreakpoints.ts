import useResizeObserver from 'use-resize-observer';

/*
 * Window sizes used in media queries
 * (from https://m3.material.io/foundations/layout/applying-layout/window-size-classes)
 *
 * - Compact: width < 576
 *   - Phone in portrait
 *
 * - Medium: 576 ≤ width < 768
 *   - Tablet in portrait
 *   - Foldable in portrait (unfolded)
 *
 * - Expanded: 768 ≤ width < 992
 *   - Phone in landscape
 *   - Tablet in landscape
 *   - Foldable in landscape (unfolded)
 *   - Desktop
 *
 * - Large: 992 ≤ width < 1200
 *   - Desktop
 *
 * - Extra large: 1200 ≤ width
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
      isMediumViewLT: false,
      isExpandedView: false,
      isExpandedViewLT: false,
      isLargeView: false,
      isLargeViewLT: false,
      isExtraLargeView: false,
      isExtraLargeViewLT: false,
    };
  }

  const isCompactView = width < 576;
  const isMediumView = width >= 576 && width < 768;
  const isExpandedView = width >= 768 && width < 992;
  const isLargeView = width >= 992 && width < 1200;
  const isExtraLargeView = width >= 1200;

  return {
    isCompactView,
    isMediumView,
    isMediumViewLT: isMediumView || isCompactView,
    isExpandedView,
    isExpandedViewLT: isExpandedView || isMediumView || isCompactView,
    isLargeView,
    isLargeViewLT: isLargeView || isExpandedView || isMediumView || isCompactView,
    isExtraLargeView,
    isExtraLargeViewLT:
      isExpandedView || isLargeView || isExpandedView || isMediumView || isCompactView,
  };
};
