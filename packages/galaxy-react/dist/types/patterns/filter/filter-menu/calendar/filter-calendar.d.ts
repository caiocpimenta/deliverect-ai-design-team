import { ReactElement } from 'react';
import { DateRange } from 'react-day-picker';
import { FilterCalendarComponentOwnProps } from './filter-calendar.component';
import { CalendarApplyMode, FilterCalendarBaseProps } from './types';
type CalendarComponentPropsForCustomOption = Omit<FilterCalendarComponentOwnProps, "required">;
export type FilterCalendarProps = FilterCalendarBaseProps & CalendarComponentPropsForCustomOption & {
    calendarClassName?: string;
    applyLabel?: string;
    applyMode?: CalendarApplyMode;
    onValueApplyChange: (value: Date | Date[] | DateRange | undefined) => void;
};
export declare const FilterCalendar: {
    ({ id, icon, tagLabel, applyLabel, applyMode, className, calendarClassName, selected, locale, timeZone, mode, onValueClear, onValueApplyChange, ...calendarProps }: FilterCalendarProps): ReactElement;
    displayName: string;
};
export {};
