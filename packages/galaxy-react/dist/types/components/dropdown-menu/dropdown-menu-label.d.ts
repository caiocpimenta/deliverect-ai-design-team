import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuLabelProps = {
    className?: string;
} & DropdownMenuUI.DropdownMenuLabelProps;
/**
 * This component is based on the `DropdownMenuLabel` component from `@radix-ui/react-dropdown-menu`.
 * It renders a label in the dropdown menu, which can be used as a heading to a section of the dropdown menu.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator
 */
export declare const DropdownMenuLabel: import('react').ForwardRefExoticComponent<{
    className?: string;
} & DropdownMenuUI.DropdownMenuLabelProps & import('react').RefAttributes<HTMLDivElement>>;
