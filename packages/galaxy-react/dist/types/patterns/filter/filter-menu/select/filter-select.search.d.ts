import { ReactElement } from 'react';
import { InputFieldProps } from '../../../../primitives/input/input-field';
export type FilterSelectSearchProps = Omit<InputFieldProps, "onChange"> & {
    onChange: (searchTerm: string) => void;
};
export declare const FilterSelectSearch: ({ onChange, ...props }: FilterSelectSearchProps) => ReactElement;
