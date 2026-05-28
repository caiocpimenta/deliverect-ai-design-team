import { ReactElement } from 'react';
import { FilterConfig, FilterKey } from './types';
export type FilterMenuTreeItemProps = {
    config: FilterConfig;
    onClick: (key: FilterKey | undefined) => void;
};
export declare const FilterMenuTreeItem: ({ config, onClick, }: FilterMenuTreeItemProps) => ReactElement;
