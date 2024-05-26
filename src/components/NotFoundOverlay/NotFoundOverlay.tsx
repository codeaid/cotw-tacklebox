import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import image from './NotFoundOverlay.image.png';
import styles from './NotFoundOverlay.module.css';

export const NotFoundOverlay = (props: PropsWithChildren) => (
  <div className={styles.NotFoundOverlay}>
    <Image
      alt="Not Found"
      className={styles.NotFoundOverlayImage}
      draggable={false}
      height={400}
      src={image}
      width={400}
    />
    <h3 className={styles.NotFoundOverlayText}>{props.children}</h3>
  </div>
);
