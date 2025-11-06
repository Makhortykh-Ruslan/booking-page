import { addMinutes, addWeeks, eachDayOfInterval } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';

import { BOOKING_CONFIG } from '@/utils/constants';
import { resetTimeToStartOfDay } from '@/utils/date';

export const useBookingDates = () => {
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    // Generate dates only on client to avoid hydration mismatch
    const today = new Date();
    const endDate = addWeeks(today, BOOKING_CONFIG.WEEKS_AHEAD);
    setDays(eachDayOfInterval({ start: today, end: endDate }));
  }, []);

  return days;
};

export const useTimeSlots = (selectedDate: Date | null) => {
  const slots = useMemo(() => {
    if (!selectedDate) return [];

    const startOfDay = resetTimeToStartOfDay(selectedDate);
    const times: Date[] = [];

    for (let i = 0; i < BOOKING_CONFIG.SLOTS_PER_DAY; i++) {
      times.push(
        addMinutes(startOfDay, i * BOOKING_CONFIG.TIME_SLOT_INTERVAL_MINUTES),
      );
    }

    return times;
  }, [selectedDate]);

  return slots;
};

