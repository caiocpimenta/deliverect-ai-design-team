import { ReactElement } from 'react';
import { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu';
export type FilterMenuTagProps = {
    label: string;
    Icon?: ReactElement<SVGElement>;
    onDismiss?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & DropdownMenuTriggerProps;
export declare const FilterMenuTag: import('react').ForwardRefExoticComponent<{
    label: string;
    Icon?: ReactElement<SVGElement>;
    onDismiss?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & DropdownMenuTriggerProps & import('react').RefAttributes<HTMLSpanElement>>;
