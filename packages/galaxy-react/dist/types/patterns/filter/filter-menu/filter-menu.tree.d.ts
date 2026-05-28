import { ReactElement } from 'react';
import { FilterConfigMap, FilterKey } from './types';
export type FilterMenuTreeProps<T extends FilterConfigMap> = {
    label: string;
    isLoading: boolean;
    isLoadingLabel: string;
    configMap: T;
    onMenuItemClick: (key: FilterKey) => void;
};
export declare const FilterMenuTree: <T extends FilterConfigMap>({ label, isLoading, isLoadingLabel, configMap, onMenuItemClick, }: FilterMenuTreeProps<T>) => ReactElement;
