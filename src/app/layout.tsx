import type { Metadata, Viewport } from 'next';
import { type PropsWithChildren } from 'react';
import { Header, Layout, NavigationRail } from 'components';
import { sourceSansPro } from 'fonts';
import styles from './layout.module.css';
import 'normalize.css';
import './global.css';

export const metadata: Metadata = {
  title: 'Tackle Box',
  description: 'Tackle Box - Call Of The Wild: The Angler',
};

export const viewport: Viewport = {
  themeColor: {
    color: '#0A1123',
  },
};

const RootLayout = (props: PropsWithChildren) => (
  <html className={sourceSansPro.className} lang="en">
    <body className={styles.LayoutBody}>
      <Header />

      <div className={styles.LayoutBodyContent} id="body-content">
        <NavigationRail />
        <Layout>{props.children}</Layout>
      </div>
    </body>
  </html>
);

export default RootLayout;
