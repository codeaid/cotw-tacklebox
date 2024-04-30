import type { TraitId } from 'types/traits';
import aggressive from './aggressive.png';
import ambusher from './ambusher.png';
import bottomLurker from './bottom_lurker.png';
import daredevil from './daredevil.png';
import deepSpeech from './deep_speech.png';
import eagleEyed from './eagle_eyed.png';
import easilySpooked from './easily_spooked.png';
import hardFighter from './hard_fighter.png';
import jumper from './jumper.png';
import keenSenses from './keen_senses.png';
import lastStand from './last_stand.png';
import nightOwl from './night_owl.png';
import patientScavenger from './patient_scavenger.png';
import risingSun from './rising_sun.png';
import socialDistancing from './social_distancing.png';
import sunLover from './sun_lover.png';
import superiorityComplex from './superiority_complex.png';

const map: Record<TraitId, string> = {
  'aggressive': aggressive.src,
  'ambusher': ambusher.src,
  'bottom-lurker': bottomLurker.src,
  'daredevil': daredevil.src,
  'deep-speech': deepSpeech.src,
  'eagle-eyed': eagleEyed.src,
  'easily-spooked': easilySpooked.src,
  'hard-fighter': hardFighter.src,
  'jumper': jumper.src,
  'keen-senses': keenSenses.src,
  'last-stand': lastStand.src,
  'night-owl': nightOwl.src,
  'patient-scavenger': patientScavenger.src,
  'rising-sun': risingSun.src,
  'social-distancing': socialDistancing.src,
  'sun-lover': sunLover.src,
  'superiority-complex': superiorityComplex.src,
};

export default map;
