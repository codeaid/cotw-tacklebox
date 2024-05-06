import clsx from 'clsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { StepperProps } from './types';
import styles from './Stepper.module.css';

export const Stepper = <TValue extends string | number>(props: StepperProps<TValue>) => {
  const { className, labels, selected, values, onChange } = props;

  const handleChangeLeft = () => {
    const currentIndex = values.indexOf(selected);
    const previousIndex = currentIndex - 1 < 0 ? values.length - 1 : currentIndex - 1;

    onChange(values[previousIndex]);
  };

  const handleChangeRight = () => {
    const currentIndex = values.indexOf(selected);
    const previousIndex = currentIndex + 1 >= values.length ? 0 : currentIndex + 1;

    onChange(values[previousIndex]);
  };

  return (
    <div className={clsx(styles.Stepper, className)}>
      <div className={styles.StepperControls}>
        <div className={styles.StepperButton} onClick={handleChangeLeft}>
          <FaChevronLeft />
        </div>
        <div className={styles.StepperButtonValue}>{labels[selected]}</div>
        <div className={styles.StepperButton} onClick={handleChangeRight}>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};
