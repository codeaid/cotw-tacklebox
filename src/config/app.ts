// Detect base URL and path to use when loading assets
export const baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const metadataBase =
  process.env.NODE_ENV === 'development' ? undefined : new URL(baseURL + basePath);
