import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuSeparatorProps = {
    className?: string;
} & DropdownMenuUI.DropdownMenuSeparatorProps;
/**
 * This component is based on the `DropdownMenuSeparator` component from `@radix-ui/react-dropdown-menu`.
 * It renders a separator between dropdown menu items.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator
 */
export declare const DropdownMenuSeparator: import('react').ForwardRefExoticComponent<{
    className?: string;
} & DropdownMenuUI.DropdownMenuSeparatorProps & import('react').RefAttributes<HTMLDivElement>>;
