import { TextProps } from '../../../foundations';
export type ToastDescriptionProps = Omit<TextProps<"p">, "overflow">;
/**
 * @internal
 * This component is intended for internal use within the galaxy-react package only.
 * It should not be imported directly by consumers.
 */
export declare const ToastDescription: import('react').ForwardRefExoticComponent<Omit<ToastDescriptionProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
