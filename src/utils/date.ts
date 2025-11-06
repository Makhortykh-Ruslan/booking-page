import { format, isBefore, isFirstDayOfMonth, set } from 'date-fns';

import { DATE_FORMATS } from './constants';

export const formatDateKey = (date: Date): string => {
  return format(date, DATE_FORMATS.DATE_KEY);
};

export const formatTime12H = (date: Date): string => {
  return format(date, DATE_FORMATS.TIME_12H);
};

export const formatTime24H = (date: Date): string => {
  return format(date, DATE_FORMATS.TIME_24H);
};

export const formatDayOfWeek = (date: Date): string => {
  return format(date, DATE_FORMATS.DAY_OF_WEEK);
};

export const formatDayOfMonth = (date: Date): string => {
  return format(date, DATE_FORMATS.DAY_OF_MONTH);
};

export const formatMonthLabel = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: DATE_FORMATS.MONTH_SHORT,
  }).format(date);
};

export const isSameDate = (date1: Date, date2: Date): boolean => {
  return formatDateKey(date1) === formatDateKey(date2);
};

export const isSameTime = (time1: Date, time2: Date): boolean => {
  return formatTime24H(time1) === formatTime24H(time2);
};

export const isTimeInPast = (time: Date, selectedDate: Date): boolean => {
  const now = new Date();
  return (
    isBefore(time, now) && isSameDate(selectedDate, now)
  );
};

export const resetTimeToStartOfDay = (date: Date): Date => {
  return set(date, {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
};

export { isFirstDayOfMonth };

