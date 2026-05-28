import { ReactElement } from 'react';
export type FilterKey = string;
export type FilterConfig = SingleFilterConfig | NestedFilterConfig;
export type FilterConfigMap = Record<FilterKey, FilterConfig>;
export type BaseFilterConfig = {
    label: string;
    icon?: ReactElement<SVGElement>;
};
export type SingleFilterConfig = BaseFilterConfig & {
    filter: ReactElement;
};
export type NestedFilterConfig = BaseFilterConfig & {
    filterConfigs: FilterConfigMap;
};
export type FilterCommonProps = {
    id: string;
    icon?: ReactElement<SVGElement>;
    onValueClear?: () => void;
};
