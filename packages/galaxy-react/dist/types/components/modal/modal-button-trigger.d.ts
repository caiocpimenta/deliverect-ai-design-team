import { ButtonProps } from '../../primitives';
import * as ModalUI from "@radix-ui/react-dialog";
export type ModalButtonTriggerProps = Omit<ModalUI.DialogTriggerProps, "asChild"> & ButtonProps<"button">;
/**
 * Renders a Button component that is used to open the modal.
 * This implementation uses `Dialog.Trigger` from `@radix-ui/react-dialog`.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#trigger
 */
export declare const ModalButtonTrigger: import('react').ForwardRefExoticComponent<Omit<ModalButtonTriggerProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
