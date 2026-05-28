import { ModalButtonTriggerProps } from '../modal/modal-button-trigger';
export type DrawerButtonTriggerProps = ModalButtonTriggerProps;
/**
 * Renders a Button component that is used to open the drawer.
 * This implementation uses the one we did for `ModalButtonTrigger`.
 */
export declare const DrawerButtonTrigger: import('react').ForwardRefExoticComponent<Omit<ModalButtonTriggerProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
