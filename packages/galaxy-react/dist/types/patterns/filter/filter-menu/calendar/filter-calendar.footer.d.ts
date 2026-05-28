import { ReactElement } from 'react';
import { FooterProps } from 'react-day-picker';
export type FilterCalendarFooterProps = {
    applyLabel: string;
    onValueApplyChange: () => void;
} & FooterProps;
export declare const FilterCalendarFooter: {
    ({ applyLabel, onValueApplyChange, className, ...props }: FilterCalendarFooterProps): ReactElement;
    displayName: string;
};
