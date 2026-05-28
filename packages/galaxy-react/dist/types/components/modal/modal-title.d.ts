import { HeadingProps } from '../../foundations';
export type ModalTitleProps = Omit<HeadingProps<"h3">, "as">;
/**
 * Renders an accessible title to be announced when the dialog is opened.
 * This implementation uses `Dialog.Title` from `@radix-ui/react-dialog`.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#title
 */
export declare const ModalTitle: import('react').ForwardRefExoticComponent<Omit<ModalTitleProps, "ref"> & import('react').RefAttributes<HTMLHeadingElement>>;
