import { JSX, ReactNode } from 'react';

import clsx from 'clsx';

type CardProps = {
  children: ReactNode;
  className?: string;

  
};

export default function Card({
  children,
  className,
}: CardProps): JSX.Element {
  return (
    <div
      className={clsx(
        'w-full max-w-[568px] bg-white shadow-sm',
        'sm:rounded-[24px] sm:p-0',
        'rounded-b-none rounded-t-[24px] px-5 pb-0 pt-8',
        className,
      )}
    >
      {children}
    </div>
  );
}
