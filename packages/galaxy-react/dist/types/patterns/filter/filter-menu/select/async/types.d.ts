import { ReactNode } from 'react';
import { FilterCommonProps } from '../../types';
import { FilterSelectValueProps } from '../types';
export type FilterSelectBaseProps = FilterCommonProps & {
    tagLabel: string;
};
export type FilterSelectAsyncContentBaseProps = FilterSelectValueProps & {
    isFetchingOptions: boolean;
    isFetchingOptionsError: boolean;
    Error: ReactNode;
    onOpenFilter?: () => void;
};
