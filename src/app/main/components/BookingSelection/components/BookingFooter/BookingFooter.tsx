'use client';

import { JSX } from 'react';

import Button from '@/app/core/components/Button/Button';

type BookingFooterProps = {
  isDisabled: boolean;
  onConfirm: () => void;
  label?: string;
};

export default function BookingFooter({
  isDisabled,
  onConfirm,
  label = 'Confirm',
}: BookingFooterProps): JSX.Element {
  return (
    <footer className="mb-10 mt-[146px] flex h-[60px] justify-center sm:mb-3 sm:mt-[89px]">
      <Button disabled={isDisabled} label={label} onClick={onConfirm} />
    </footer>
  );
}

