import { SelectItemProps } from '../shared/select-item';
export type MultiSelectItemProps = SelectItemProps;
export declare const MultiSelectItem: import('react').ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<import('react').HTMLAttributes<HTMLDivElement>, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    forceMount?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string;
} & import('react').RefAttributes<HTMLDivElement>>;
