import { ReactElement } from 'react';
import { FilterConfigMap, FilterKey } from './types';
export type FilterMenuElementsProps<T extends FilterConfigMap> = {
    configMap: T;
    appliedFilterKeys: FilterKey[];
};
export declare const FilterMenuElements: <T extends FilterConfigMap>({ configMap, appliedFilterKeys, }: FilterMenuElementsProps<T>) => ReactElement;
