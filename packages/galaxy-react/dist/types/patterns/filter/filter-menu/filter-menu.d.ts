import { ReactElement } from 'react';
import { FilterConfigMap, FilterKey } from './types';
export type FilterMenuProps = {
    label: string;
    isLoading?: boolean;
    isLoadingLabel?: string;
    filterConfigMap: FilterConfigMap;
    initialFilterKeys?: FilterKey[];
    className?: string;
};
export declare const FilterMenu: {
    ({ label, isLoading, isLoadingLabel, filterConfigMap, initialFilterKeys, className, }: FilterMenuProps): ReactElement;
    displayName: string;
};
