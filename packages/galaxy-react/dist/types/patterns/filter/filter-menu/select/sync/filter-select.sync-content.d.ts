import { FilterSelectValueProps } from '../types';
export type FilterSelectSyncContentProps = Omit<FilterSelectValueProps, "onValueClear"> & {
    applyLabel: string;
    searchable?: boolean;
    searchPlaceholder?: string;
};
export declare const FilterSelectSyncContent: ({ applyLabel, multiple, value, options, optionsEmptyLabel, searchable, searchPlaceholder, onValueApplyChange, }: FilterSelectSyncContentProps) => import("react/jsx-runtime").JSX.Element;
