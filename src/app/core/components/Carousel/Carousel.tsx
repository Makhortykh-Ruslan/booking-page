'use client';

import { JSX, ReactNode, useRef } from 'react';

import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';

type CarouselProps = {
  children: ReactNode;
  className?: string;
};

export default function Carousel({
  children,
  className = '',
}: CarouselProps): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right'): void => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`flex items-center gap-[12px] ${className}`}>
      <ArrowLeft
        onClick={() => scroll('left')}
        className="cursor-pointer transition-colors hover:text-black [@media(max-width:568px)]:hidden"
      />

      <div className="flex w-full max-w-[450px] items-end">
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory items-end gap-[8px] overflow-x-auto scroll-smooth"
        >
          {children}
        </div>
      </div>

      <ArrowRight
        onClick={() => scroll('right')}
        className="cursor-pointer transition-colors hover:text-black [@media(max-width:568px)]:hidden"
      />
    </div>
  );
}
