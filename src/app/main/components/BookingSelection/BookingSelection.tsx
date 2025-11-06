'use client';

import { JSX, useState } from 'react';

import Card from '@/app/core/components/Card/Card';
import { useBookingDates, useTimeSlots } from '@/hooks/useBookingDates';

import BookingFooter from './components/BookingFooter/BookingFooter';
import BookingHeader from './components/BookingHeader/BookingHeader';
import DatePicker from './components/DatePicker/DatePicker';
import MobileHeader from './components/MobileHeader/MobileHeader';
import TimePicker from './components/TimePicker/TimePicker';

export default function BookingSelection(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const days = useBookingDates();
  const slots = useTimeSlots(selectedDate);

  const handleConfirm = (): void => {
    if (selectedDate && selectedTime) {
      const timestamp = selectedTime.getTime();
      // TODO: Replace with actual booking API call
      // eslint-disable-next-line no-console
      console.log('Booking timestamp:', timestamp);
    }
  };

  const handleDateSelect = (date: Date): void => {
    setSelectedDate(date);
    // Reset time when date changes
    setSelectedTime(null);
  };

  return (
    <section className="flex min-h-screen flex-col items-center sm:justify-center">
      <MobileHeader />

      <Card>
        <BookingHeader />

        <main className="mt-8 sm:px-6">
          <DatePicker
            days={days}
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />

          {selectedDate && (
            <div className="mt-6">
              <TimePicker
                slots={slots}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onTimeSelect={setSelectedTime}
              />
            </div>
          )}
        </main>

        <BookingFooter
          isDisabled={!selectedDate || !selectedTime}
          onConfirm={handleConfirm}
        />
      </Card>
    </section>
  );
}
