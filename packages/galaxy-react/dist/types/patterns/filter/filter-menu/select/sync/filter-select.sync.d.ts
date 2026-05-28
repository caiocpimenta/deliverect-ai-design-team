import { ReactElement } from 'react';
import { FilterSelectBaseProps } from '../async/types';
import { FilterSelectValueProps } from '../types';
export type FilterSelectProps = FilterSelectBaseProps & FilterSelectValueProps;
export declare const FilterSelect: {
    ({ id, icon, tagLabel, applyLabel, multiple, value, options, optionsEmptyLabel, searchable, searchPlaceholder, onValueApplyChange, onValueClear, }: FilterSelectProps): ReactElement;
    displayName: string;
};
