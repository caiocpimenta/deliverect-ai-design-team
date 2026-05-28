import { FilterKey, NestedFilterConfig, SingleFilterConfig } from './types';
export declare const resolveFilterKey: (key: FilterKey, subKey?: FilterKey) => FilterKey;
export declare const isSingleFilterConfig: (item: unknown) => item is SingleFilterConfig;
export declare const isNestedFilterConfig: (item: unknown) => item is NestedFilterConfig;
