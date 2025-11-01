import '../assets/styles/globals.css';

import type { Metadata } from 'next';
import React, { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Booking Page',
  description: 'Session booking test task',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-app-gradient [@media(max-width:568px)]:bg-mobile-app-gradient">
        {children}
      </body>
    </html>
  );
}
