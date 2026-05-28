import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuSingleSelectItemProps = {
    className?: string;
} & Omit<DropdownMenuUI.DropdownMenuRadioItemProps, "asChild">;
/**
 * This component is based on the `DropdownMenuRadioItem` component from `@radix-ui/react-dropdown-menu`.
 * It renders a radio menu item in the dropdown menu radio group.
 * It can be used to create a custom menu item by passing children to it.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radioitem
 */
export declare const DropdownMenuSingleSelectItem: import('react').ForwardRefExoticComponent<{
    className?: string;
} & Omit<DropdownMenuUI.DropdownMenuRadioItemProps, "asChild"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuSingleSelectPrimitive: import('react').ForwardRefExoticComponent<DropdownMenuUI.DropdownMenuRadioItemProps & import('react').RefAttributes<HTMLDivElement>>;
