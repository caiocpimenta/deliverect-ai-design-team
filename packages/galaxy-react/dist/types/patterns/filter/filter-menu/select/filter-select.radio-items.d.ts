import { ReactElement } from 'react';
import { SelectOption } from '../../../../index.ts';
export type FilterSelectMenuRadioItemsProps = {
    options: SelectOption[];
    optionsEmptyLabel: string;
    value: string;
    onChange: (value: string) => void;
};
export declare const FilterSelectMenuRadioItems: ({ options, optionsEmptyLabel, value, onChange, }: FilterSelectMenuRadioItemsProps) => ReactElement;
