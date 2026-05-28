import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuContentProps = {
    className?: string;
} & DropdownMenuUI.DropdownMenuContentProps;
/**
 * This component is based on the `DropdownMenuContent` and `DropdownMenuPortal` component from `@radix-ui/react-dropdown-menu`.
 * It renders a portal and a content that contains the content of the dropdown menu.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#portal
 */
export declare const DropdownMenuContent: import('react').ForwardRefExoticComponent<{
    className?: string;
} & DropdownMenuUI.DropdownMenuContentProps & import('react').RefAttributes<HTMLDivElement>>;
