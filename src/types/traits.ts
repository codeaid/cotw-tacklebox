export type TraitId =
  | 'aggressive'
  | 'ambusher'
  | 'bottom-lurker'
  | 'daredevil'
  | 'deep-speech'
  | 'eagle-eyed'
  | 'easily-spooked'
  | 'hard-fighter'
  | 'jumper'
  | 'keen-senses'
  | 'last-stand'
  | 'night-owl'
  | 'patient-scavenger'
  | 'rising-sun'
  | 'social-distancing'
  | 'sun-lover'
  | 'superiority-complex';

export interface Trait {
  id: TraitId;
  name: string;
  description: string;
  image: string;
}
