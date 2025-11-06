'use client';

import clsx from 'clsx';
import { JSX } from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'aria-label'?: string;
};

export default function Button({
  label,
  onClick,
  disabled = false,
  type = 'button',
  className,
  'aria-label': ariaLabel,
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel || label}
      className={clsx(
        'text w-full min-w-[350px] max-w-[370px] rounded-[100px] px-4 py-2 text-white transition-all duration-200',
        disabled
          ? 'cursor-not-allowed bg-[var(--color-disabled)]'
          : 'bg-[var(--color-black)] hover:bg-[var(--color-black)]/80 active:scale-[0.98]',
        className,
      )}
    >
      {label}
    </button>
  );
}
