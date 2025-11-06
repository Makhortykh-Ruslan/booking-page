'use client';

import { JSX } from 'react';

import Carousel from '@/app/core/components/Carousel/Carousel';
import {
  formatDayOfMonth,
  formatDayOfWeek,
  formatMonthLabel,
  isFirstDayOfMonth,
  isSameDate,
} from '@/utils/date';

type DatePickerProps = {
  days: Date[];
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
};

export default function DatePicker({
  days,
  selectedDate,
  onDateSelect,
}: DatePickerProps): JSX.Element {
  // Don't render until dates are loaded to avoid hydration mismatch
  if (days.length === 0) {
    return (
      <Carousel>
        <div className="flex items-center justify-center p-4">
          <span className="text text-sm text-[var(--color-grey-light)]">
            Loading dates...
          </span>
        </div>
      </Carousel>
    );
  }

  return (
    <Carousel>
      {days.map((day) => {
        const isSelected = selectedDate ? isSameDate(day, selectedDate) : false;
        const showMonthLabel = isFirstDayOfMonth(day);
        const monthLabel = formatMonthLabel(day);

        return (
          <div key={day.toISOString()} className="flex flex-col items-center">
            {showMonthLabel && (
              <span className="text mb-1 text-sm text-[var(--color-grey-light)]">
                {monthLabel}
              </span>
            )}
            <button
              type="button"
              onClick={() => onDateSelect(day)}
              aria-label={`Select date ${day.toLocaleDateString()}`}
              aria-pressed={isSelected}
              className={`flex size-16 snap-start flex-col items-center justify-center rounded-xl border transition ${
                isSelected
                  ? 'border-transparent bg-[var(--color-selected)] text-[var(--color-red)]'
                  : 'border-gray-200 text-[var(--color-black)] hover:border-gray-300'
              }`}
            >
              <span
                className={`text text-sm ${
                  isSelected
                    ? 'text-[var(--color-red)]'
                    : 'text-[var(--color-black)]'
                }`}
              >
                {formatDayOfWeek(day)}
              </span>
              <span className="text text-base">{formatDayOfMonth(day)}</span>
            </button>
          </div>
        );
      })}
    </Carousel>
  );
}

