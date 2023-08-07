import React, { useMemo } from 'react';

const getSizeClasses = (size) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (buttonType: string) => {
  switch (buttonType) {
    case 'Primary':
      return 'text-white bg-slate-900 border-slate-900 dark:bg-pink-700 dark:border-pink-700'
    case 'Secondary':
      return 'text-slate-900 bg-yellow-400 border-2 border-b-4 border-slate-900 dark:text-white dark:border-white'
    case 'Tertiary':
      return 'text-white bg-blue-700 border-2 border-blue-700 dark:text-white dark:border-white'
    default:
      return 'text-white bg-slate-900 border-slate-900 dark:bg-pink-700 dark:border-pink-700';
  }
}

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-2xl border-2 font-bold leading-none inline-block';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type = 'primary', size = 'medium', label, ...props }) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(type);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [type, size]);

  return (
    <button type="button" className={`${BASE_BUTTON_CLASSES} ${computedClasses}`} {...props}>
      {label}
    </button>
  );
};