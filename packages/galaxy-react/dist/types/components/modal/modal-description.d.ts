import { TextProps } from '../../foundations';
export type ModalDescriptionProps = Omit<TextProps<"p">, "as">;
/**
 * Renders an optional accessible description to be announced when the dialog is opened.
 * This implementation uses `Dialog.Description` from `@radix-ui/react-dialog`.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#description
 */
export declare const ModalDescription: import('react').ForwardRefExoticComponent<Omit<ModalDescriptionProps, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
