export type TraitId =
  | 'aggressive'
  | 'bottom-lurker'
  | 'easily-spooked'
  | 'hard-fighter'
  | 'jumper'
  | 'keen-senses'
  | 'last-stand'
  | 'night-owl'
  | 'sun-lover';

export interface Trait {
  id: TraitId;
  name: string;
  description: string;
  image: string;
}
