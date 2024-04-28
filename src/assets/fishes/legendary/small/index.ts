// noinspection DuplicatedCode

import type { FishIdLegendary } from 'types/fishes';
import alejandroMagno from './alejandro_magno.png';
import bigLarry from './big_larry.png';
import elMatador from './el_matador.png';
import goldstein from './goldstein.png';
import kallePaulTheDominator from './kalle_paul_the_dominator.png';
import laMonstrenca from './la_monstrenca.png';
import sidewinder from './sidewinder.png';
import speilfinne from './speilfinne.png';
import storeHenrik from './store_henrik.png';

const map: Record<FishIdLegendary, string> = {
  'alejandro-magno': alejandroMagno.src,
  'big-larry': bigLarry.src,
  'el-matador': elMatador.src,
  'goldstein': goldstein.src,
  'kalle-paul-the-dominator': kallePaulTheDominator.src,
  'la-monstrenca': laMonstrenca.src,
  'sidewinder': sidewinder.src,
  'speilfinne': speilfinne.src,
  'store-henrik': storeHenrik.src,
};

export default map;
