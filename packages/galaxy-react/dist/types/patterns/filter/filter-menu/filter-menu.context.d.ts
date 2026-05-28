import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import { FilterKey } from './types';
export type FilterMenuProviderContextProps = {
    openFilterKey?: FilterKey;
    clearFilterKey: (key: FilterKey) => void;
    setOpenFilterKey: (key?: FilterKey) => void;
};
export type FilterMenuProviderProps = {
    children: ReactNode;
    openFilterKey?: FilterKey;
    setOpenFilterKey: (key?: FilterKey) => void;
    setAppliedFilterKeys: Dispatch<SetStateAction<FilterKey[]>>;
};
export declare const FilterMenuProvider: ({ children, openFilterKey, setOpenFilterKey, setAppliedFilterKeys, }: FilterMenuProviderProps) => ReactElement;
export declare const useClearFilter: (key: FilterKey, onClear?: () => void) => () => void;
export type FilterState = [isOpen: boolean, toggleIsOpen: (isOpen: boolean) => void];
export declare const useToggleOpenFilter: (key: string) => FilterState;
