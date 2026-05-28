import { ReactElement } from 'react';
import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuItemProps = {
    status?: "critical" | "neutral";
    icon?: ReactElement<SVGElement>;
    className?: string;
} & Omit<DropdownMenuUI.DropdownMenuItemProps, "asChild">;
/**
 * This component is based on the `DropdownMenuItem` component from `@radix-ui/react-dropdown-menu`.
 * It renders a menu item in the dropdown menu.
 * It can be used to create a custom menu item by passing children to it.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item
 */
export declare const DropdownMenuItem: import('react').ForwardRefExoticComponent<{
    status?: "critical" | "neutral";
    icon?: ReactElement<SVGElement>;
    className?: string;
} & Omit<DropdownMenuUI.DropdownMenuItemProps, "asChild"> & import('react').RefAttributes<HTMLDivElement>>;
