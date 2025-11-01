import React, { JSX, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps): JSX.Element {
  return (
    <div
      className={`w-full max-w-[568px] bg-white shadow-sm [@media(max-width:568px)]:rounded-b-none [@media(max-width:568px)]:rounded-t-[24px] [@media(max-width:568px)]:px-[20px] [@media(max-width:568px)]:pb-0 [@media(max-width:568px)]:pt-[32px] [@media(min-width:568px)]:rounded-[24px] [@media(min-width:568px)]:p-0 ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
