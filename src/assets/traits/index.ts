import type { TraitId } from 'types/traits';
import aggressive from './aggressive.png';
import bottomLurker from './bottom_lurker.png';
import easilySpooked from './easily_spooked.png';
import hardFighter from './hard_fighter.png';
import jumper from './jumper.png';
import keenSenses from './keen_senses.png';
import lastStand from './last_stand.png';
import nightOwl from './night_owl.png';
import sunLover from './sun_lover.png';

const map: Record<TraitId, string> = {
  'aggressive': aggressive.src,
  'bottom-lurker': bottomLurker.src,
  'easily-spooked': easilySpooked.src,
  'hard-fighter': hardFighter.src,
  'jumper': jumper.src,
  'keen-senses': keenSenses.src,
  'last-stand': lastStand.src,
  'night-owl': nightOwl.src,
  'sun-lover': sunLover.src,
};

export default map;
