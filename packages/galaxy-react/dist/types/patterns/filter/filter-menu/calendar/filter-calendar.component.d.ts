import { DateRange } from 'react-day-picker';
import { CalendarProps } from '../../../../index.ts';
import { CalendarApplyMode } from './types';
export type FilterCalendarComponentOwnProps = Omit<CalendarProps, "onSelect">;
export type FilterCalendarComponentProps = FilterCalendarComponentOwnProps & {
    applyLabel?: string;
    applyMode: CalendarApplyMode;
    onValueApplyChange: (value: Date | Date[] | DateRange | undefined) => void;
};
export declare const FilterCalendarComponent: {
    ({ applyLabel, applyMode, components, footer, selected: instantSelected, className, onValueApplyChange, ...calendarProps }: FilterCalendarComponentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
