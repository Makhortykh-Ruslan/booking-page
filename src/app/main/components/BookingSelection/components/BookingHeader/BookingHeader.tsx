'use client';

import { JSX } from 'react';

import Avatar from '@/app/core/components/Avatar/Avatar';

type BookingHeaderProps = {
  title?: string;
  description?: string;
  avatarSrc?: string;
  avatarName?: string;
};

export default function BookingHeader({
  title = 'Book a Session',
  description = 'Choose a date and time that is convenient for you to e-meet your stylist',
  avatarSrc = '/images/avatar.png',
  avatarName = 'Lia Con',
}: BookingHeaderProps): JSX.Element {
  return (
    <header className="flex items-center gap-5 sm:pb-0 sm:pl-[72px] sm:pr-[47px] sm:pt-10">
      <Avatar
        className="hidden sm:block"
        src={avatarSrc}
        name={avatarName}
        mode="desktop"
      />
      <div>
        <p className="title-card text-[28px]">{title}</p>
        <p className="text text-base text-[var(--color-grey-light)]">
          {description}
        </p>
      </div>
    </header>
  );
}

