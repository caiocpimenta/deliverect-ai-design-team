import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuSubContentProps = DropdownMenuUI.DropdownMenuSubContentProps & {
    className?: string;
};
/**
 * The subcontent component for the sub menu, this takes care
 * of the portal and subcontent.
 *
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subcontent
 */
export declare const DropdownMenuSubContent: import('react').ForwardRefExoticComponent<DropdownMenuUI.DropdownMenuSubContentProps & {
    className?: string;
} & import('react').RefAttributes<HTMLDivElement>>;
