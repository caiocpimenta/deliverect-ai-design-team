import { ButtonProps } from '../../../primitives';
import * as ToastUI from "@radix-ui/react-toast";
export type ToastActionProps = Pick<ToastUI.ToastActionProps, "altText"> & ButtonProps<"button">;
/**
 * @internal
 * This component is intended for internal use within the galaxy-react package only.
 * It should not be imported directly by consumers.
 */
export declare const ToastAction: import('react').ForwardRefExoticComponent<Omit<ToastActionProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
