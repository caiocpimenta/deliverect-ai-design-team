import { SelectOption } from '../../../../index.ts';
type FilterSelectBaseValueProps = {
    options: SelectOption[];
    optionsEmptyLabel: string;
    applyLabel: string;
    searchable?: boolean;
    searchPlaceholder?: string;
};
type FilterSelectSingleValueProps = FilterSelectBaseValueProps & {
    multiple?: false;
    value: string;
    onValueApplyChange: (value: string) => void;
};
type FilterSelectMultiValueProps = FilterSelectBaseValueProps & {
    multiple: true;
    value: string[];
    onValueApplyChange: (value: string[]) => void;
};
export type FilterSelectValueProps = FilterSelectSingleValueProps | FilterSelectMultiValueProps;
export {};
