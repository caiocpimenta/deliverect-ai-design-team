import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuRadioItemProps = {
    className?: string;
} & Omit<DropdownMenuUI.DropdownMenuRadioItemProps, "asChild">;
/**
 * This component is based on the `DropdownMenuRadioItem` component from `@radix-ui/react-dropdown-menu`.
 * It renders a radio menu item in the dropdown menu radio group.
 * It can be used to create a custom menu item by passing children to it.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radioitem
 */
export declare const DropdownMenuRadioItem: import('react').ForwardRefExoticComponent<{
    className?: string;
} & Omit<DropdownMenuUI.DropdownMenuRadioItemProps, "asChild"> & import('react').RefAttributes<HTMLDivElement>>;
export type DropdownMenuRadioGroupProps = DropdownMenuUI.DropdownMenuRadioGroupProps;
/**
 * This component is based on the `DropdownMenu` component from `@radix-ui/react-dropdown-menu`.
 * Is used to group together a set of DropdownMenuRadioItem.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radiogroup
 */
export declare const DropdownMenuRadioGroup: import('react').ForwardRefExoticComponent<DropdownMenuUI.DropdownMenuRadioGroupProps & import('react').RefAttributes<HTMLDivElement>>;
