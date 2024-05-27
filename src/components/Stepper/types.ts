import type { ReactNode } from 'react';

export interface StepperProps<TValue extends string | number> {
  className?: string;
  labels: Record<TValue, ReactNode>;
  selected: TValue;
  values: TValue[];
  onChange: (value: TValue) => void;
}
