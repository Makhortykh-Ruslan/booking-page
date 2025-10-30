import '../assets/styles/globals.css';

import type { Metadata } from 'next';
import Image from 'next/image';
import React, { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Booking Page',
  description: 'Session booking test task',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-app-gradient'>
        {/*<div className='absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none select-none'>*/}
        {/*  <Image*/}
        {/*    src='/images/ellipse-one.svg'*/}
        {/*    alt=''*/}
        {/*    fill*/}
        {/*    className='object-contain opacity-70'*/}
        {/*    priority*/}
        {/*  />*/}
        {/*</div>*/}

        {/*<div className='absolute bottom-0 left-0 w-[700px] h-[700px] pointer-events-none select-none'>*/}
        {/*  <Image*/}
        {/*    src='/images/ellipse-two.svg'*/}
        {/*    alt=''*/}
        {/*    fill*/}
        {/*    className='object-contain opacity-70'*/}
        {/*    priority*/}
        {/*  />*/}
        {/*</div>*/}

        {children}
      </body>
    </html>
  );
}
