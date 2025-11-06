'use client';

import React, { JSX, ReactNode, useRef } from 'react';

import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';

import clsx from 'clsx';

type CarouselProps = {
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

export default function Carousel({
  children,
  className,
  'aria-label': ariaLabel = 'Carousel',
}: CarouselProps): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right'): void => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    direction: 'left' | 'right',
  ): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scroll(direction);
    }
  };

  return (
    <div
      className={clsx('flex items-center gap-3', className)}
      role="region"
      aria-label={ariaLabel}
    >
      <button
        type="button"
        onClick={() => scroll('left')}
        onKeyDown={(e) => handleKeyDown(e, 'left')}
        aria-label="Scroll left"
        className="hidden cursor-pointer transition-colors hover:text-black sm:block"
      >
        <ArrowLeft aria-hidden="true" />
      </button>

      <div className="flex w-full max-w-[450px] items-end">
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory items-end gap-2 overflow-x-auto scroll-smooth"
          role="list"
        >
          {children}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scroll('right')}
        onKeyDown={(e) => handleKeyDown(e, 'right')}
        aria-label="Scroll right"
        className="hidden cursor-pointer transition-colors hover:text-black sm:block"
      >
        <ArrowRight aria-hidden="true" />
      </button>
    </div>
  );
}
