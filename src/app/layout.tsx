import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { type PropsWithChildren } from 'react';
import { Header, Layout, NavigationRail } from 'components';
import { googleAnalyticsId, metadataBase } from 'config/app';
import { pageElementId } from 'config/dom';
import { sourceSansPro } from 'fonts';
import styles from './layout.module.css';
import 'normalize.css';
import './global.css';

export const metadata: Metadata = {
  title: 'TackleBox',
  description:
    'Dive into the depths of fishing with this comprehensive web app, your ultimate guide to fish species and their habitats. Explore the information for your perfect catch!',
  metadataBase,
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  themeColor: {
    color: '#0A1123',
  },
  userScalable: false,
  viewportFit: 'cover',
  width: 'device-width',
};

const RootLayout = (props: PropsWithChildren) => (
  <html className={sourceSansPro.className} lang="en">
    <body className={styles.Body}>
      <GoogleAnalytics gaId={googleAnalyticsId} />
      <Header />

      <div className={styles.Page} id={pageElementId}>
        <NavigationRail />
        <Layout>{props.children}</Layout>
      </div>
    </body>
  </html>
);

export default RootLayout;
