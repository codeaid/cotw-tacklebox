import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';
import { Container } from 'components';
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
    <body>
      <div className={styles.Layout}>
        <main className={styles.LayoutContent}>
          <Container>{props.children}</Container>
        </main>
      </div>
    </body>
  </html>
);

export default RootLayout;
