import { ReactElement } from 'react';
import { FilterCalendarComponentOwnProps } from './filter-calendar.component';
import { CalendarApplyMode, CalendarPreset, FilterCalendarBaseProps } from './types';
type CalendarComponentPropsForCustomOption = Omit<FilterCalendarComponentOwnProps, "mode" | "required" | "selected" | "defaultMonth">;
export type FilterCalendarWithPresetsProps = FilterCalendarBaseProps & CalendarComponentPropsForCustomOption & {
    customOptionLabel: string;
    presets: CalendarPreset[];
    calendarRootClassName?: string;
    applyLabel?: string;
    applyMode?: CalendarApplyMode;
    selected?: {
        from: Date;
        to: Date;
    };
    isSameDate?: (lhs: Date, rhs: Date) => boolean;
    onValueApplyChange: (from: Date, to: Date) => void;
};
export declare const FilterCalendarWithPresets: {
    ({ id, icon, tagLabel, applyLabel, applyMode, className, calendarRootClassName, presets, selected, customOptionLabel, locale, timeZone, onValueClear, onValueApplyChange, ...calendarProps }: FilterCalendarWithPresetsProps): ReactElement;
    displayName: string;
};
export {};
