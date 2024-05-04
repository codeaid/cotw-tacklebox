import { Container, Footer } from 'components';
import { pageContentElementId } from 'config/dom';
import type { LayoutProps } from './types';
import styles from './Layout.module.css';

export const Layout = (props: LayoutProps) => (
  <main className={styles.Layout} id={pageContentElementId}>
    <Container className={styles.LayoutChildren}>{props.children}</Container>
    <Footer />
  </main>
);
