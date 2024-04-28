/**
 * Format a weight value based on the specified rules
 *
 * @param value Numeric value to format
 * @param decimals Number of decimal places to render
 * @param roundUp True to round values up to the nearest integer
 */
export const formatWeightValue = (value: number, decimals = 1, roundUp = false) =>
  Intl.NumberFormat(undefined, {
    maximumFractionDigits: decimals,
  }).format(roundUp ? Math.ceil(value) : value);
