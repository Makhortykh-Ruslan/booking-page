'use client';

import {
  addWeeks,
  eachDayOfInterval,
  format,
  isFirstDayOfMonth,
} from 'date-fns';
import { JSX, useMemo, useRef, useState } from 'react';

import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';

type DateCarouselProps = {
  onSelect?: (date: Date) => void;
};

export default function DateCarousel({
  onSelect,
}: DateCarouselProps): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const days = useMemo(() => {
    const today = new Date();
    const endDate = addWeeks(today, 6);
    return eachDayOfInterval({ start: today, end: endDate });
  }, []);

  const scroll = (dir: 'left' | 'right'): void => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleSelect = (day: Date): void => {
    setSelectedDate(day);
    onSelect?.(day);
  };

  return (
    <div className="flex items-end gap-[12px]">
      <ArrowLeft
        onClick={() => scroll('left')}
        className="mb-[25px] cursor-pointer transition-colors hover:text-black [@media(max-width:568px)]:hidden"
      />

      <div className="flex w-full max-w-[450px] items-end">
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory items-end gap-[8px] overflow-x-auto scroll-smooth"
        >
          {days.map((day) => {
            const isSelected =
              selectedDate &&
              format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');

            const showMonthLabel = isFirstDayOfMonth(day);
            const monthLabel = new Intl.DateTimeFormat('en-US', {
              month: 'short',
            }).format(day);

            return (
              <div
                key={day.toISOString()}
                className="flex flex-col items-center"
              >
                {showMonthLabel && (
                  <span className="text mb-[4px] text-[14px] text-[var(--color-grey-light)]">
                    {monthLabel}
                  </span>
                )}
                <button
                  onClick={() => handleSelect(day)}
                  className={`flex size-[64px] snap-start flex-col items-center justify-center rounded-xl border transition ${
                    isSelected
                      ? 'border-transparent bg-[var(--color-selected)] text-[var(--color-red)]'
                      : 'text-[var(--color-black)]'
                  }`}
                >
                  <span
                    className={`text text-[14px] ${
                      isSelected
                        ? 'text-[var(--color-red)]'
                        : 'text-[var(--color-black)]'
                    }`}
                  >
                    {format(day, 'EEE')}
                  </span>
                  <span className="text text-[16px]">{format(day, 'd')}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <ArrowRight
        onClick={() => scroll('right')}
        className="mb-[25px] cursor-pointer transition-colors hover:text-black [@media(max-width:568px)]:hidden"
      />
    </div>
  );
}
