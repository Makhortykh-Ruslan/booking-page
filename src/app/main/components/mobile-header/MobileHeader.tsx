'use client';

import { JSX } from 'react';

import Avatar from '@/app/core/components/Avatar/Avatar';
import ClockIcon from '@/assets/icons/clock.svg';

export default function MobileHeader(): JSX.Element {
  return (
    <div className="z-[-1] mx-0 mb-[-20px] mt-auto flex w-full items-center justify-between overflow-hidden [@media(min-width:568px)]:hidden">
      <div className="ml-[20px]">
        <h1 className="title whitespace-nowrap">Cool session</h1>
        <p className="text mt-[5px] whitespace-nowrap">Additional type</p>

        <div className="mt-[24px] inline-flex items-center gap-[8px] rounded-[80px] bg-white/15 px-[12px] py-[4px] backdrop-blur-[6px]">
          <ClockIcon />
          <p className="text">30 min</p>
        </div>
      </div>

      <Avatar src="/images/avatar.png" name="Lia Con" mode="mobile" />
    </div>
  );
}
