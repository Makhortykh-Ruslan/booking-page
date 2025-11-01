'use client';

import clsx from 'clsx';
import React, { JSX } from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function Button({
  label,
  onClick,
  disabled = false,
  type = 'button',
  className,
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'text w-full min-w-[350px] max-w-[370px] rounded-[100px] px-4 py-2 text-white transition-all duration-200',
        disabled
          ? 'cursor-not-allowed bg-[var(--color-disabled)]'
          : 'hover:bg-[var(--color-black)]/80 bg-[var(--color-black)] active:scale-[0.98]',
        className,
      )}
    >
      {label}
    </button>
  );
}
