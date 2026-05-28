import { ReactElement } from 'react';
import { FilterSelectAsyncContainerProps } from '../filter-select.async-container';
import { FilterSelectAsyncContentPaginatedProps } from './filter-select.async-content-paginated';
export type FilterSelectAsyncPaginatedProps = FilterSelectAsyncContainerProps & FilterSelectAsyncContentPaginatedProps;
export declare const FilterSelectAsyncPaginated: {
    ({ id, icon, tagLabel, onValueClear, ...paginatedContentProps }: FilterSelectAsyncPaginatedProps): ReactElement;
    displayName: string;
};
