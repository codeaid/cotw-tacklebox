export const traitIds = [
  'aggressive',
  'ambusher',
  'bottom-lurker',
  'daredevil',
  'deep-speech',
  'eagle-eyed',
  'easily-spooked',
  'hard-fighter',
  'jumper',
  'keen-senses',
  'last-stand',
  'night-owl',
  'patient-scavenger',
  'rising-sun',
  'social-distancing',
  'sun-lover',
  'superiority-complex',
] as const;

export type TraitId = (typeof traitIds)[number];

export interface Trait {
  id: TraitId;
  name: string;
  description: string;
  image: string;
}
