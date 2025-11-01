'use client';

import {
  addMinutes,
  addWeeks,
  eachDayOfInterval,
  format,
  isBefore,
  isFirstDayOfMonth,
  set,
} from 'date-fns';
import { JSX, useMemo, useState } from 'react';

import Avatar from '@/app/core/components/Avatar/Avatar';
import Button from '@/app/core/components/Button/Button';
import Card from '@/app/core/components/Card/Card';
import Carousel from '@/app/core/components/Carousel/Carousel';

import MobileHeader from './components/MobileHeader/MobileHeader';

export default function BookingSelection(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const days = useMemo(() => {
    const today = new Date();
    const endDate = addWeeks(today, 6);
    return eachDayOfInterval({ start: today, end: endDate });
  }, []);

  const slots = useMemo(() => {
    if (!selectedDate) return [];
    const startOfDay = set(selectedDate, {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    const times: Date[] = [];
    for (let i = 0; i < 24 * 4; i++) {
      times.push(addMinutes(startOfDay, i * 15));
    }
    return times;
  }, [selectedDate]);

  const handleConfirm = (): void => {
    if (selectedDate && selectedTime) {
      const timestamp = selectedTime.getTime();
      console.log('timestamp:', timestamp);
    }
  };

  return (
    <section className="flex min-h-screen flex-col items-center [@media(min-width:568px)]:justify-center">
      <MobileHeader />

      <Card>
        <header className="flex items-center gap-[20px] [@media(min-width:568px)]:pb-0 [@media(min-width:568px)]:pl-[72px] [@media(min-width:568px)]:pr-[47px] [@media(min-width:568px)]:pt-[40px]">
          <Avatar
            className="[@media(max-width:568px)]:hidden"
            src="/images/avatar.png"
            name="Lia Con"
            mode="desktop"
          />
          <div>
            <p className="title-card text-[28px]">Book a Session</p>
            <p className="text text-[16px] text-[var(--color-grey-light)]">
              Choose a date and time that is convenient for you to e-meet your
              stylist
            </p>
          </div>
        </header>

        <main className="mt-[32px] [@media(min-width:568px)]:px-[24px]">
          <Carousel>
            {days.map((day) => {
              const isSelected =
                selectedDate &&
                format(day, 'yyyy-MM-dd') ===
                  format(selectedDate, 'yyyy-MM-dd');

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
                    onClick={() => setSelectedDate(day)}
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
          </Carousel>

          {selectedDate && (
            <div className="mt-[24px]">
              <Carousel>
                {slots.map((time) => {
                  const now = new Date();
                  const isPast =
                    isBefore(time, now) &&
                    format(selectedDate, 'yyyy-MM-dd') ===
                      format(now, 'yyyy-MM-dd');

                  const isSelected =
                    selectedTime &&
                    format(time, 'HH:mm') === format(selectedTime, 'HH:mm');

                  if (isPast) return null;

                  return (
                    <button
                      key={time.toISOString()}
                      onClick={() => setSelectedTime(time)}
                      className={`min-w-[100px] rounded-full border px-[16px] py-[12px] text-[14px] transition ${
                        isSelected
                          ? 'border-transparent bg-[var(--color-selected)] text-[var(--color-red)]'
                          : 'border-gray-200 text-[var(--color-black)] hover:bg-gray-100'
                      }`}
                    >
                      {format(time, 'h:mm a')}
                    </button>
                  );
                })}
              </Carousel>
            </div>
          )}
        </main>

        <footer className="mb-[40px] mt-[146px] flex h-[60px] justify-center [@media(max-width:568px)]:mb-[12px] [@media(max-width:568px)]:mt-[89px]">
          <Button
            disabled={!selectedDate || !selectedTime}
            label="Confirm"
            onClick={handleConfirm}
          />
        </footer>
      </Card>
    </section>
  );
}
