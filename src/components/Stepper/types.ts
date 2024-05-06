export interface StepperProps<TValue extends string | number> {
  className?: string;
  labels: Record<TValue, string>;
  selected: TValue;
  values: TValue[];
  onChange: (value: TValue) => void;
}
