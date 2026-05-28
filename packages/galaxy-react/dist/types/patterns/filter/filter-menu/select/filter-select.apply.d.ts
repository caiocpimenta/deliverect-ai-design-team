import { ReactElement } from 'react';
export type FilterSelectApplyProps = {
    label: string;
    disabled?: boolean;
    onApply: () => void;
};
export declare const FilterSelectApply: ({ label, disabled, onApply, }: FilterSelectApplyProps) => ReactElement;
