import { DateRange } from 'react-day-picker';
/**
 * Util function to get the default month for the calendar based on the selected date(s).
 * @param selected the selected date(s) which can be a single date, an array of dates, or a date range.
 * @returns a Date object representing the default month to display in the calendar.
 */
export declare const getDefaultMonth: (selected: Date | Date[] | DateRange | undefined) => Date;
