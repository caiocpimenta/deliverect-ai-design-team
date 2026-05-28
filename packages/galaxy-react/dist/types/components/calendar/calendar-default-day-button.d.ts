import { ReactElement } from 'react';
import { DayButtonProps, Mode } from 'react-day-picker';
export declare const CalendarDefaultDayButton: {
    <M extends Mode>({ day, modifiers, className, children, ...props }: Omit<DayButtonProps, "ref">): ReactElement;
    displayName: string;
};
