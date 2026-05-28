import { ReactElement } from 'react';
import { FilterSelectAsyncContainerProps } from '../filter-select.async-container';
import { FilterSelectAsyncContentProps } from './filter-select.async-content';
export type FilterSelectAsyncProps = FilterSelectAsyncContainerProps & FilterSelectAsyncContentProps;
export declare const FilterSelectAsync: {
    ({ id, icon, tagLabel, onValueClear, ...contentProps }: FilterSelectAsyncProps): ReactElement;
    displayName: string;
};
