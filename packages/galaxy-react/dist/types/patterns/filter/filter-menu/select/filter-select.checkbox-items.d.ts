import { ReactElement } from 'react';
import { SelectOption } from '../../../../index.ts';
export type FilterSelectCheckboxItemsProps = {
    options: SelectOption[];
    optionsEmptyLabel: string;
    value: string[];
    onChange: (value: string[]) => void;
};
export declare const FilterSelectCheckboxItems: ({ options, optionsEmptyLabel, value, onChange, }: FilterSelectCheckboxItemsProps) => ReactElement;
