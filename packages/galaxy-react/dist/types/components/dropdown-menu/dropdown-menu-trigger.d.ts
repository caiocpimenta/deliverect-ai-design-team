import { ButtonProps } from '../../primitives';
import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type DropdownMenuButtonTriggerProps = Omit<DropdownMenuUI.DropdownMenuTriggerProps, "asChild"> & ButtonProps<"button">;
/**
 * This component is based on the `DropdownMenuTrigger` component from `@radix-ui/react-dropdown-menu`.
 * It renders a button that triggers the dropdown menu.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#trigger
 **/
export declare const DropdownMenuButtonTrigger: import('react').ForwardRefExoticComponent<Omit<DropdownMenuButtonTriggerProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
export type DropdownMenuTriggerProps = DropdownMenuUI.DropdownMenuTriggerProps;
/**
 * This component is based on the `DropdownMenuTrigger` component from `@radix-ui/react-dropdown-menu`.
 * It renders a trigger that can be used to open the dropdown menu.
 * It can be used to create a custom trigger for the dropdown menu by using the `asChild` prop.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu#trigger
 */
export declare const DropdownMenuTrigger: import('react').ForwardRefExoticComponent<DropdownMenuUI.DropdownMenuTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
