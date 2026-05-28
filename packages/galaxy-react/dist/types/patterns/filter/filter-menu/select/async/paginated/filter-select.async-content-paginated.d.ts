import { ReactElement } from 'react';
import { FilterSelectAsyncContentBaseProps } from '../types';
export type FilterSelectAsyncContentPaginatedOwnProps = {
    searchTerm?: string;
    onSearchTermChange?: (searchTerm: string) => void;
    onReachScrollEnd: () => void;
};
export type FilterSelectAsyncContentPaginatedProps = FilterSelectAsyncContentBaseProps & FilterSelectAsyncContentPaginatedOwnProps;
export declare const FilterSelectAsyncContentPaginated: ({ options, optionsEmptyLabel, value, isFetchingOptions, isFetchingOptionsError, Error, multiple, applyLabel, searchable, searchTerm: serverSearchTerm, searchPlaceholder, onSearchTermChange: onServerSearchTermChange, onValueApplyChange, onReachScrollEnd, onOpenFilter, }: FilterSelectAsyncContentPaginatedProps) => ReactElement;
