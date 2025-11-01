'use client';

import { JSX } from 'react';

import Avatar from '@/app/core/components/Avatar/Avatar';
import Button from '@/app/core/components/Button/Button';
import Card from '@/app/core/components/Card/Card';
import MobileHeader from '@/app/main/components/mobile-header/MobileHeader';

export default function Page(): JSX.Element {
  const submit = (): void => {
    alert('Clicked!');
  };
  return (
    <section className="flex min-h-screen flex-col items-center [@media(min-width:568px)]:justify-center">
      <MobileHeader />

      <Card>
        <header className="flex items-center gap-[20px] [@media(min-width:568px)]:pb-0 [@media(min-width:568px)]:pl-[72px] [@media(min-width:568px)]:pr-[47px] [@media(min-width:568px)]:pt-[40px]">
          <Avatar
            className="[@media(max-width:568px)]:hidden"
            src="/images/avatar.png"
            name="Lia Con"
            mode="desktop"
          />
          <div>
            <p className="title-card text-[28px]">Book a Session</p>
            <p className="text py-[8px] text-[16px] text-[var(--color-grey-light)]">
              Choose a date and time that is convenient for you to e-meet your
              stylist
            </p>
          </div>
        </header>

        <footer className="mb-[40px] flex h-[60px] justify-center [@media(max-width:568px)]:mb-[12px]">
          <Button label="Confirm" disabled />
        </footer>
      </Card>
    </section>
  );
}
