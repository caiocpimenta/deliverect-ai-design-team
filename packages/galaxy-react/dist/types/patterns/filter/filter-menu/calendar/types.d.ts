import { FilterCommonProps } from '../types';
export type FilterCalendarBaseProps = FilterCommonProps & {
    /**
     * Optional label to override the default computed tag label that's based on the current selection.
     */
    tagLabel?: string;
};
/**
 * Defines the strategy that dictates how selections in the calendar take effect.
 * - On "instant" mode selection changes take effect as soon as the selection itself happens.
 * - On "deferred" mode selection changes take effect only when an "apply" button is explicitly clicked.
 */
export type CalendarApplyMode = "instant" | "deferred";
/**
 * Holds the fields used to represent a calendar preset.
 * The dates within any preset are represented as a non-optional range of dates.
 * In case we want to represent a single day, then we just need to make a preset
 * where `from` Date equals `to` date.
 */
export type CalendarPreset = {
    label: string;
    from: Date;
    to: Date;
};
/**
 * A `CalendarPreset` augmented with a `CalendarSelectionId`.
 */
export type CalendarPresetWithId = CalendarPreset & {
    id: CalendarSelectionId;
};
/**
 * Format for the internal representation that uniquely identifies what's selected in the Calendar.
 * Will be a string of type `from,to`.
 */
export type CalendarSelectionId = `${string},${string}`;
