import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuCheckboxItemProps = {
    className?: string;
} & Omit<DropdownMenuUI.DropdownMenuCheckboxItemProps, "asChild">;
/**
 * This component is based on the `DropdownMenuCheckboxItem` from Radix UI.
 * It renders a checkbox inside a dropdown menu item.
 * It can be used to create a custom menu item by passing children to it.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#checkboxitem
 */
export declare const DropdownMenuCheckboxItem: import('react').ForwardRefExoticComponent<{
    className?: string;
} & Omit<DropdownMenuUI.DropdownMenuCheckboxItemProps, "asChild"> & import('react').RefAttributes<HTMLDivElement>>;
