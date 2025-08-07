export const traitIds = [
  'aggressive',
  'ambusher',
  'bottom-lurker',
  'daredevil',
  'deep-speech',
  'dragons-gate',
  'eagle-eyed',
  'easily-spooked',
  'evil-eye',
  'hard-fighter',
  'jumper',
  'keen-senses',
  'last-stand',
  'night-owl',
  'otashitonkurus-rock',
  'patient-scavenger',
  'rising-sun',
  'run-for-your-money',
  'siren-song',
  'social-distancing',
  'sun-lover',
  'superiority-complex',
  'the-deepest-reaches',
] as const;

export type TraitId = (typeof traitIds)[number];

export interface Trait {
  id: TraitId;
  name: string;
  description: string;
  image: string;
}
