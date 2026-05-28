import { CommandItemProps } from '../../command/command-item';
export type SelectItemProps = CommandItemProps;
export declare const SelectItem: import('react').ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<import('react').HTMLAttributes<HTMLDivElement>, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    forceMount?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string;
} & import('react').RefAttributes<HTMLDivElement>>;
