import localFont from 'next/font/local';

export const sourceSansPro = localFont({
  preload: true,
  src: [
    {
      path: './source-sans-pro/source-sans-pro-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './source-sans-pro/source-sans-pro-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './source-sans-pro/source-sans-pro-semibold.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
});
