import * as ModalUI from "@radix-ui/react-dialog";
export type ModalTriggerProps = ModalUI.DialogTriggerProps;
/**
 * Renders a component that is used to open the modal.
 * This implementation uses `Dialog.Trigger` from `@radix-ui/react-dialog`.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#trigger
 */
export declare const ModalTrigger: import('react').ForwardRefExoticComponent<ModalUI.DialogTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
