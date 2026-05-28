import { ReactElement } from 'react';
import { PropsBase, PropsMulti, PropsMultiRequired, PropsRange, PropsRangeRequired, PropsSingle, PropsSingleRequired } from 'react-day-picker';
export type CalendarProps = PropsBase & (PropsSingle | PropsSingleRequired | PropsMulti | PropsMultiRequired | PropsRange | PropsRangeRequired);
export declare const Calendar: {
    ({ className, classNames, components, ...props }: CalendarProps): ReactElement;
    displayName: string;
};
