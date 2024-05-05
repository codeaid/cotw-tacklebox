import type { ReserveId } from 'types/reserves';
import logoES from './logo_es.png';
import logoES_BW from './logo_es_bw.png';
import logoNO from './logo_no.png';
import logoNO_BW from './logo_no_bw.png';
import logoSA from './logo_sa.png';
import logoSA_BW from './logo_sa_bw.png';
import logoUS from './logo_us.png';
import logoUS_BW from './logo_us_bw.png';

const map: Record<ReserveId, { bw: string; color: string }> = {
  es: { bw: logoES_BW.src, color: logoES.src },
  no: { bw: logoNO_BW.src, color: logoNO.src },
  sa: { bw: logoSA_BW.src, color: logoSA.src },
  us: { bw: logoUS_BW.src, color: logoUS.src },
};

export default map;
