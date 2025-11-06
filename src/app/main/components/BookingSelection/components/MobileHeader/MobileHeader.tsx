'use client';

import { JSX } from 'react';

import Avatar from '@/app/core/components/Avatar/Avatar';
import ClockIcon from '@/assets/icons/clock.svg';

type MobileHeaderProps = {
  title?: string;
  subtitle?: string;
  duration?: string;
  avatarSrc?: string;
  avatarName?: string;
};

export default function MobileHeader({
  title = 'Cool session',
  subtitle = 'Additional type',
  duration = '30 min',
  avatarSrc = '/images/avatar.png',
  avatarName = 'Lia Con',
}: MobileHeaderProps): JSX.Element {
  return (
    <div className="z-[-1] mx-0 mb-[-20px] mt-auto flex w-full items-center justify-between overflow-hidden sm:hidden">
      <div className="ml-5">
        <h1 className="title whitespace-nowrap text-[var(--color-white)]">
          {title}
        </h1>
        <p className="text mt-1 whitespace-nowrap text-[var(--color-white)]">
          {subtitle}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-[80px] bg-white/15 px-3 py-1 backdrop-blur-[6px]">
          <ClockIcon aria-hidden="true" />
          <p className="text text-[var(--color-white)]">{duration}</p>
        </div>
      </div>

      <Avatar src={avatarSrc} name={avatarName} mode="mobile" />
    </div>
  );
}
