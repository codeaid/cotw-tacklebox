import { Container, Separator } from 'components';
import styles from './Footer.module.css';

export const Footer = () => (
  <div className={styles.Footer}>
    <Separator highlight="center" />

    <Container>
      <div className={styles.FooterContent}>
        <div className={styles.FooterDisclaimer}>
          <p>
            This website is not affiliated, maintained, authorized, endorsed by, or in any way
            officially connected with Avalanche Studios Group, or any of its subsidiaries or its
            affiliates. The official Call of the Wild: The Angler&#8482; website can be found at{' '}
            <a className="link" href="https://cotwtheangler.com" target="_blank">
              https://cotwtheangler.com
            </a>
            .
          </p>
          <p>
            Call of the Wild: The Angler&#8482; is a registered trademark of{' '}
            <a className="link" href="https://avalanchestudios.com" target="_blank">
              Avalanche Studios Group
            </a>
            .
          </p>
        </div>
      </div>
    </Container>
  </div>
);
