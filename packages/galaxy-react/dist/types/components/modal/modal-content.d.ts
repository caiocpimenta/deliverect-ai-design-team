import * as ModalUI from "@radix-ui/react-dialog";
export type ModalContentProps = ModalUI.DialogContentProps & {
    overlayClassName?: string;
};
/**
 * Container for the actual content to be shown on the modal (header, body, footer),
 * and also abstraction over the `portal` (that "teleports" the modal to the body) and
 * over the `overlay`, which darkens/styles the inert part of the screen.
 * This implementation uses `Dialog.Portal`, `Dialog.Overlay` and `Dialog.Content` from `@radix-ui/react-dialog`.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#portal
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#overlay
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#content
 */
export declare const ModalContent: import('react').ForwardRefExoticComponent<ModalUI.DialogContentProps & {
    overlayClassName?: string;
} & import('react').RefAttributes<HTMLDivElement>>;
