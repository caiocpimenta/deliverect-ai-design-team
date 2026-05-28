import { ButtonProps } from '../../../primitives';
export type ToastCloseProps = Omit<ButtonProps<"button">, "onClick">;
/**
 * @internal
 * This component is intended for internal use within the galaxy-react package only.
 * It should not be imported directly by consumers.
 */
export declare const ToastClose: import('react').ForwardRefExoticComponent<Omit<ToastCloseProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
