import { ReactElement } from 'react';
import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuSubTriggerProps = Omit<DropdownMenuUI.DropdownMenuSubTriggerProps, "asChild"> & {
    status?: "critical" | "neutral";
    icon?: ReactElement<SVGElement>;
    className?: string;
};
/**
 * Sub trigger component that toggles the sub menu open.
 *
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subtrigger
 */
export declare const DropdownMenuSubTrigger: import('react').ForwardRefExoticComponent<Omit<DropdownMenuUI.DropdownMenuSubTriggerProps, "asChild"> & {
    status?: "critical" | "neutral";
    icon?: ReactElement<SVGElement>;
    className?: string;
} & import('react').RefAttributes<HTMLDivElement>>;
