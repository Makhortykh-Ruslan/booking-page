'use client';

import { JSX, useEffect, useState } from 'react';

import Carousel from '@/app/core/components/Carousel/Carousel';
import { formatTime12H, isSameTime, isTimeInPast } from '@/utils/date';

type TimePickerProps = {
  slots: Date[];
  selectedDate: Date;
  selectedTime: Date | null;
  onTimeSelect: (time: Date) => void;
};

export default function TimePicker({
  slots,
  selectedDate,
  selectedTime,
  onTimeSelect,
}: TimePickerProps): JSX.Element {
  // Ensure we only check for past times on client to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Carousel>
      {slots.map((time) => {
        // Only check if time is past after component is mounted on client
        const isPast = isMounted && isTimeInPast(time, selectedDate);
        const isSelected = selectedTime ? isSameTime(time, selectedTime) : false;

        if (isPast) return null;

        return (
          <button
            key={time.toISOString()}
            type="button"
            onClick={() => onTimeSelect(time)}
            aria-label={`Select time ${formatTime12H(time)}`}
            aria-pressed={isSelected}
            className={`min-w-[100px] rounded-full border px-4 py-3 text-sm transition ${
              isSelected
                ? 'border-transparent bg-[var(--color-selected)] text-[var(--color-red)]'
                : 'border-gray-200 text-[var(--color-black)] hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {formatTime12H(time)}
          </button>
        );
      })}
    </Carousel>
  );
}

