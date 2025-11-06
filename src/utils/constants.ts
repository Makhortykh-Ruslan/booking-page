export const BOOKING_CONFIG = {
  WEEKS_AHEAD: 6,
  TIME_SLOT_INTERVAL_MINUTES: 15,
  SLOTS_PER_DAY: 24 * 4, // 15-minute intervals
} as const;

export const BREAKPOINTS = {
  MOBILE: 568,
} as const;

export const DATE_FORMATS = {
  DAY_OF_WEEK: 'EEE',
  DAY_OF_MONTH: 'd',
  DATE_KEY: 'yyyy-MM-dd',
  TIME_12H: 'h:mm a',
  TIME_24H: 'HH:mm',
  MONTH_SHORT: 'short',
} as const;

