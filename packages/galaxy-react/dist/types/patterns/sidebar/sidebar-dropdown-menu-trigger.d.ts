import { ButtonProps } from '../../primitives/button';
import * as DropdownMenuUI from "@radix-ui/react-dropdown-menu";
export type SidebarDropdownMenuTriggerProps = Omit<DropdownMenuUI.DropdownMenuTriggerProps, "asChild"> & ButtonProps<"button">;
/**
 * This component is based on the `DropdownMenu.Trigger` component from `@deliverect/galaxy-react`.
 * It renders a trigger component with predefined styles according to Figma design.
 * @see https://www.figma.com/file/oqgkUy4dYW4B3BMBHrAwsK/Galaxy-Design-System?node-id=10817%3A8866&mode=dev
 */
export declare const SidebarDropdownMenuTrigger: import('react').ForwardRefExoticComponent<Omit<SidebarDropdownMenuTriggerProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
