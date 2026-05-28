import { CalendarProps } from '../../../../index.ts';
import { CalendarSelectionId } from './types';
/**
 * Returns a default value based on the `mode` passed.
 * @param mode the calendar mode used.
 * @returns a `Date` or `Date[]` or `{from: Date, to: Date}`, depending on the `mode`.
 */
export declare const getDefaultSelection: (mode: CalendarProps["mode"], timeZone?: CalendarProps["timeZone"]) => NonNullable<CalendarProps["selected"]>;
/**
 * Creates a formatted label that represents the time period thats selected.
 * Also considers the local/timezone in consideration.
 * @param mode the calendar mode used.
 * @param selected the selection that's passed in a controlled way.
 * @param locale (optional) the target locale.
 * @param timeZone (optional) the target timezone.
 * @returns a formatted label.
 */
export declare const getSelectedLabel: (mode: CalendarProps["mode"], selected: CalendarProps["selected"], locale?: CalendarProps["locale"], timeZone?: CalendarProps["timeZone"]) => string;
/**
 * Returns a date (only, as opposed to date-time) string that's aware of any locale/time zone passed.
 * @param date the target date.
 * @param locale (optional) the target locale
 * @param timeZone (optional) the target timezone
 * @returns a `toLocaleDateString` that respects the target locale and time zone.
 */
export declare const getDateString: (date: Date | undefined, locale?: CalendarProps["locale"], timeZone?: CalendarProps["timeZone"]) => string | undefined;
/**
 * Generates a `CalendarSelectionId` based on a set of from/to dates, and optionally a locale and time zone.
 * @param from the target "from" date.
 * @param to the target "to" date.
 * @param locale (optional) the target locale
 * @param timeZone (optional) the target timezone
 * @returns
 */
export declare const generateCalendarSelectionId: (from: Date, to: Date, locale?: CalendarProps["locale"], timeZone?: CalendarProps["timeZone"]) => CalendarSelectionId;
