import { HTMLAttributes } from 'react';
import { FilterCommonProps } from '../types';
export type FilterCustomProps = FilterCommonProps & {
    /** The label to show in the menu tag. */
    tagLabel: string;
} & HTMLAttributes<HTMLSpanElement>;
/**
 * The `FilterCustom` component is a component that allows developers to
 * create their own filters for the `FilterMenu` component.
 *
 * It should be used in combination with the `useToggleCustomFilter` hook
 * to manage the open state of the filter.
 */
export declare const FilterCustom: import('react').ForwardRefExoticComponent<FilterCommonProps & {
    /** The label to show in the menu tag. */
    tagLabel: string;
} & HTMLAttributes<HTMLSpanElement> & import('react').RefAttributes<HTMLSpanElement>>;
